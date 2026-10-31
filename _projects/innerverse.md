---
layout: page
title: Innerverse
importance: 0
description: Engineering a 270° CAVE Experience, Solo
img: assets/img/innerverse-soundbath.jpg
tag: work
published: false
category: Research
meta: Unity · CAVE/Cavern · Team of 6 · Sole programmer
---

An immersive wellness experience built for the Cavern, Carnegie Mellon ETC's 270° curved-screen CAVE. I was the team's sole programmer on a 6-person team. Every system below is mine.

<div class="row mt-3">
    <div class="col-sm-10 mx-auto">
        {% include figure.html path="assets/img/innerverse-soundbath.jpg" class="img-fluid rounded z-depth-1" zoomable=true caption="The Cavern's 270° curved screen, the venue I built Innerverse for" %}
    </div>
</div>

**At a glance**
- Role: Programmer (sole programmer, 6-person team)
- Venue: The Cavern, a 270° curved-projection CAVE at Carnegie Mellon ETC
- Stack: Unity · custom Cavern toolkit · Orbbec motion tracking · Vive trackers · custom 3D-to-2D shader
- Context: ETC team project, Aug 2026 – Present
- Link: [Official ETC project page](https://projects.etc.cmu.edu/innerverse/)

## <span style="color: #8B4513;">Tech stack</span>

- **Motion tracking:** Orbbec cameras, reconfigured for multi-person tracking (previously single-person only). Evaluated a 3-camera fusion rig; data wouldn't merge cleanly, so I dropped it. Moved to **Vive trackers** on an industry SME's advice: proven tech over experimental once requirements were fixed.
- **Rendering:** Monoscopic, no stereo glasses. One less point of failure between the visitor and the install.
- **Asymmetrical two-view rendering:** the Cavern's projector drives two distinct views at once. I engineered per-player asymmetrical rendering so Player 1 and Player 2 see different information on the same screen, built with the Cavern's technical staff.
- **3D-to-2D shader pipeline:** converts 3D models into the team's hand-drawn doodle art style in real time.
- **Playtesting infra:** structured session methodology + AI-assisted pass over player feedback for faster pattern-finding.

<div class="row mt-3">
    <div class="col-sm-10 mx-auto">
        {% include figure.html path="assets/img/innerverse-team.png" class="img-fluid rounded z-depth-1" zoomable=true caption="The Innerverse team in the Cavern, in front of the doodle-style art the 3D-to-2D shader pipeline was built to produce" %}
    </div>
</div>

## <span style="color: #2E8B57;">Results</span>

9 playtests / 18 players (digital prototype) + 6 faculty playthroughs / 12 participants by the midterm checkpoint. Signal: players weren't reading the experience as collaborative, which directly motivated the asymmetrical-rendering rework above. Still in development.

## <span style="color: #FF8C00;">What this taught me about systems</span>

- Sole-programmer scope means ruthless triage. Not every idea (3-camera fusion, a fancier depth sensor) survives contact with the deadline.
- Collaboration is a property of information asymmetry, not an instruction. Identical information means two players acting like one.
- Venue constraints are requirements. A 270° curved CAVE changes what "renders correctly" means before any gameplay code exists.
