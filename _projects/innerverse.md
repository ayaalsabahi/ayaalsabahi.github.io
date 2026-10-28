---
layout: page
title: Innerverse
importance: 0
description: Engineering a 270° CAVE Experience, Solo
img: assets/img/innerverse-soundbath.jpg
tag: work
category: Research
meta: Unity · CAVE/Cavern · Team of 6 · Sole programmer
---

Innerverse is an immersive wellness experience built for the Cavern, Carnegie Mellon ETC's 270°-curved-screen CAVE environment, designed to give overwhelmed students a few minutes of emotional reset through movement and play. I was the team's sole programmer, which meant every system standing between "design idea" and "thing that runs in the Cavern" was mine to build.

<div class="row mt-3">
    <div class="col-sm-10 mx-auto">
        {% include figure.html path="assets/img/innerverse-soundbath.jpg" class="img-fluid rounded z-depth-1" zoomable=true caption="The Cavern's 270° curved screen — the venue I built Innerverse for" %}
    </div>
</div>

**At a glance**
- Role: Programmer (sole programmer on a 6-person interdisciplinary team)
- Venue: The Cavern — a 270° curved-projection CAVE, Carnegie Mellon ETC
- Stack: Unity, a custom Cavern toolkit, Orbbec motion tracking, Vive trackers
- Context: ETC team project, Aug 2026 – Present
- Link: [Official ETC project page](https://projects.etc.cmu.edu/innerverse/)

## <span style="color: #8B4513;">The constraint</span>

The team had one programmer and one artist carrying the entire technical and visual build. Everything downstream of a design decision — body tracking, rendering, the Cavern's quirks as a venue — had to go through me, on a project timeline that didn't move. Early on I started reaching out to classmates who'd built for the Cavern the semester before, because the venue has real sharp edges a generic Unity project doesn't: a curved display is not a flat one, and "it works on my monitor" tells you almost nothing about whether it works on a 270° screen.

## <span style="color: #2E8B57;">Choosing how people are seen</span>

Reading people in the space meant motion tracking, and motion tracking in a CAVE is harder than it sounds. I got Orbbec cameras working for multiple simultaneous people, which they hadn't been configured for before, and tried fusing three cameras through a colleague's consulting — the data wouldn't merge cleanly, so that approach got shelved rather than forced. A visiting technical advisor from Schell Games pushed the team toward Vive trackers over markerless computer vision, on the principle of picking proven technology over experimental technology once the experience requirements were fixed, which reset how I approached the tracking layer.

I also made the call to render monoscopically — no 3D glasses. Stereoscopic hardware is one more point of failure and one more barrier between a stressed-out visitor and the installation; a visitor who has to be handed glasses and instructed how to wear them has already left the headspace the experience is trying to create.

## <span style="color: #4682B4;">Asymmetrical two-view rendering</span>

The Cavern's projector can drive two distinct views at once, which became the key to making the experience actually feel collaborative. Early two-player tests showed people playing *next to* each other, not *with* each other — same information, parallel but disconnected. With support from the Cavern's technical staff, I engineered asymmetrical rendering so Player 1 and Player 2 see different information on the same screen. Collaboration stopped being an instruction in the tutorial and became a property of the system: you need what the other person sees, so you talk to them.

## <span style="color: #8A2BE2;">Making it look hand-drawn</span>

The team's art direction landed on a hand-drawn doodle aesthetic over fully-3D or 3D-to-2D-converted alternatives, decided from direct community feedback at a public playtest. I built the 3D-to-2D shader pipeline that makes 3D models in the Cavern read as illustrated line art instead of rendered geometry — the visual language the rest of the team's narrative and art direction depends on.

## <span style="color: #DC143C;">Testing against real people</span>

I co-led the playtesting methodology alongside the iteration strategy: structured sessions, consistent intake, and an AI-assisted pass over player feedback to find patterns faster than reading transcripts by hand. By the midterm "Halves" checkpoint the team had run 9 playtests with 18 players on the digital prototype plus 6 faculty playthroughs with 12 participants — enough signal to catch a real problem: players weren't perceiving the experience as collaborative, which is what motivated the asymmetrical-rendering rework above. The project is still in development, with further playtesting and a public showing ahead.

<div class="row mt-3">
    <div class="col-sm-10 mx-auto">
        {% include figure.html path="assets/img/innerverse-team.png" class="img-fluid rounded z-depth-1" zoomable=true caption="The Innerverse team in the Cavern, in front of the doodle-style art the 3D-to-2D shader pipeline was built to produce" %}
    </div>
</div>

## <span style="color: #FF8C00;">What this taught me about systems</span>

- Being the only programmer forces ruthless triage — not every interesting technical idea (three-camera fusion, a depth sensor with better specs) is worth building if it doesn't survive contact with the deadline.
- A system is only as collaborative as its information asymmetry. Two players with identical information will behave like one player twice; the asymmetrical rendering wasn't a feature, it was the fix for a bug in how the experience was structured.
- Venue constraints are requirements, not inconvenience. A 270° curved CAVE changes what "renders correctly" means before a single line of gameplay code gets written.
