---
layout: page
title: Computer Graphics Systems
importance: 0
description: A Renderer Built from Scratch in C++
img: assets/img/cg-pathtracer-cbox.png
tag: work
category: Systems
meta: C++ · 15-362/662 · Individual project
---

Four rendering and animation systems, built from scratch in C++ with no graphics framework underneath them, for Carnegie Mellon's Computer Graphics course (15-362/662): a CPU rasterization pipeline, a half-edge mesh editor, a Monte Carlo path tracer, and a skeletal animation/IK system. All renders below are real output from my own code — nothing here is a mockup.

**At a glance**
- Role: Solo
- Stack: C++, no external rendering framework
- Context: 15-362/662 Computer Graphics, Carnegie Mellon
- Scope: Rasterizer, MeshEdit, PathTracer, and Animation assignments

## <span style="color: #2E8B57;">Rasterizer</span>

The rasterizer projects every triangle in a scene onto the screen and fills in the pixels it covers. That requires **barycentric interpolation** to figure out how a triangle's per-vertex properties (depth, normal, color) blend across its interior, a **z-buffer** to resolve which triangle is actually closest to the camera at each pixel when several overlap, and Phong-style shading to compute per-pixel lighting from interpolated surface normals instead of flat per-triangle color.

<div class="row mt-3">
    <div class="col-sm-10 mx-auto">
        {% include figure.html path="assets/img/cg-rasterizer-bunnies.png" class="img-fluid rounded z-depth-1" zoomable=true caption="Stanford bunny rendered wireframe, flat-shaded, and textured by my rasterizer" %}
    </div>
</div>

## <span style="color: #4682B4;">MeshEdit</span>

Both renderers need geometry to draw, and geometry needs a data structure that makes "what's connected to what" a fast query instead of a search. I implemented a **half-edge mesh** — every edge of the mesh is split into two directed half-edges, each one aware of its neighboring face, vertex, and the half-edge across from it — which makes walking a mesh's topology (find every face around this vertex, find this triangle's neighbors) a handful of pointer hops instead of a linear scan. On top of that structure I implemented subdivision, smoothing, normal computation, and general geometric transformations.

## <span style="color: #8B4513;">PathTracer</span>

The path tracer solves the rendering equation by Monte Carlo integration: casting a ray per pixel, recursively sampling bounces off the scene, and averaging many random samples per pixel to estimate how much light actually arrives at the camera. The naive version of this — testing every ray against every object — gets unusably slow fast, so I built a **BVH (bounding volume hierarchy)** to prune most of the scene out of consideration for any given ray before doing exact intersection math. Getting a clean image out of a noisy Monte Carlo estimator without just brute-forcing more samples is its own problem — variance reduction — which is where a meaningful chunk of the real engineering in a path tracer lives.

<div class="row mt-3">
    <div class="col-sm-10 mx-auto">
        {% include figure.html path="assets/img/cg-pathtracer-cbox.png" class="img-fluid rounded z-depth-1" zoomable=true caption="A Cornell box rendered by my path tracer — global illumination, color bleeding, and soft shadows, all from Monte Carlo sampling" %}
    </div>
</div>

## <span style="color: #DC143C;">Animation</span>

Beyond the three core systems, I also built out the animation side of the pipeline: splines for keyframed motion, skeletal skinning, and inverse kinematics for posing a character from end-effector targets instead of hand-setting every joint angle. Below is a path-traced render of the skinning/IK system driving a character through a pose change.

<div class="row mt-3">
    <div class="col-sm-10 mx-auto">
        <video class="img-fluid rounded z-depth-1" controls loop muted playsinline style="width:100%;">
            <source src="/assets/video/cg-animation-skinning.mp4" type="video/mp4">
        </video>
    </div>
</div>

## <span style="color: #8A2BE2;">What this taught me about systems</span>

- Performance problems in graphics are almost always structural, not computational — the BVH doesn't make ray-triangle intersection faster, it makes you do far fewer of them.
- A good data structure is the real deliverable. The half-edge mesh took longer to get right than either renderer built on top of it, and both renderers got simpler once it existed.
- Correctness in a renderer is visual, not just logical — a subtly wrong interpolation or an off-by-one in the z-buffer doesn't throw an error, it just looks wrong, which makes rigorous testing (not just "does it look okay") matter more, not less.
