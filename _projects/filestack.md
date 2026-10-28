---
layout: page
title: FileStack
importance: 0
description: A Distributed File System, Built from First Principles
img: assets/img/filestack-diagram.svg
tag: work
category: Systems
meta: Distributed systems · Java · Individual project
---

FileStack is a distributed file system I built for Carnegie Mellon's Distributed Systems course: a Naming Server and a cluster of Storage Servers that let a client read and write files scattered across machines as if they all lived on one disk.

**At a glance**
- Role: Solo (individually graded coursework — no team)
- Stack: Java, Java RMI
- Context: 15-440 Distributed Systems, Carnegie Mellon
- Scope: File system core, synchronization, replication, plus MPI and MapReduce follow-on work

## <span style="color: #8B4513;">The problem</span>

A single machine can't hold an arbitrarily large dataset, so you spread it across a cluster — but the moment you do, every assumption a normal file system gets for free disappears. A client shouldn't have to know which physical machine a file lives on. Two clients should be able to read and write the same file without corrupting it or starving each other. And a file that suddenly gets hit with a thousand requests shouldn't bring down the one server unlucky enough to be hosting it.

That's three separate problems — location transparency, concurrency correctness, and load balancing — that all have to hold at once for the system to be usable.

## <span style="color: #2E8B57;">What I built</span>

The system has three entities: a Naming Server that holds metadata (which Storage Server has which file, the way DNS maps names to addresses), one or more Storage Servers that physically hold files, and clients that never talk to a server directly without going through Java RMI.

Under the hood, every server-side method is exposed through a **stub and skeleton** pair. The client calls a method on a local stub object; the stub marshals the method name and arguments, ships them across the network to the matching skeleton, and the skeleton unmarshals, executes, and ships the result back. From the client's point of view, calling a method on a file across the network looks identical to calling one locally — that's the location transparency.

## <span style="color: #4682B4;">Correctness under concurrency</span>

Multiple clients can read and write the same file at once, and that's exactly the situation that corrupts data if you don't serialize it correctly. I designed a FIFO-queued read/write lock protocol: readers request a shared lock and can hold it concurrently with other readers, writers request an exclusive lock and block everyone else, and requests are served in the order they arrive so no client — reader or writer — starves behind a stream of others.

Before granting a write lock on a nested path, the Naming Server also applies read locks up the directory tree, so a write deep inside a path can't race a rename or delete of one of its parent directories.

## <span style="color: #8A2BE2;">Scaling under load</span>

Not every file gets the same traffic. A "hot" file with heavy read volume becomes a bottleneck if it only lives on one server, so I built a dynamic replication scheme: the Naming Server tracks request counts per file and scales the number of replicas with that count (bucketed, so replica counts don't thrash on every single request), up to a configured cap. When a write lock is requested on a replicated file, the Naming Server invalidates every replica but the one being written to, then recopies the updated file out to the other servers once the client unlocks it — so replicas stay available for load-balancing without ever serving stale data.

## <span style="color: #DC143C;">Beyond the file system</span>

The same course extended into parallel and distributed computation on top of these ideas: I wrote parallel programs using MPI's message-passing model (master/slave decomposition across processes with no shared memory), and built a MapReduce pipeline applying K-Means clustering across a partitioned dataset — the same map/shuffle/reduce structure that underlies systems like Hadoop.

## <span style="color: #FF8C00;">What this taught me about systems</span>

- Location transparency is a promise, not a default — it only holds if every abstraction underneath it (stubs, skeletons, naming) is designed to keep the client ignorant of where things physically are.
- Concurrency bugs don't show up until load does. A locking protocol that looks correct with two clients can starve one under ten; FIFO ordering was the simplest guarantee I could make that held regardless of how many clients showed up.
- Replication is a tradeoff you make explicit, not a feature you add. More replicas buys availability and throughput at the cost of write complexity — the invalidate-then-recopy protocol exists entirely to keep that cost honest.
