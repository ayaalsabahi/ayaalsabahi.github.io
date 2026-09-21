---
layout: page
title: SoKids
importance: 0
description: Research Prototyping for Developmental Psychology
img: assets/img/sokids-cover.png
tag: work
meta: Research prototype · Unity · Team of 6
---

SoKids is a research-driven, play-based touchscreen system where preschoolers ages 3 to 6 play games while the system quietly collects data for developmental-psychology research on how children categorize social groups.

**At a glance**
- Role: Prototyping Lead and lead programmer
- Team: Interdisciplinary team of 6 (game designers and researchers)
- Engine: Unity
- Context: A research instrument, built for children ages 3 to 6
- Link: [Official ETC project page](https://projects.etc.cmu.edu/sokids/)

<div class="row mt-3">
    <div class="col-sm-10 mx-auto">
        {% include figure.html path="assets/img/SKteam.png" class="img-fluid rounded z-depth-1" zoomable=true caption="The SoKids team" %}
    </div>
</div>

## <span style="color: #8B4513;">The problem</span>

The Center for Transformational Play brought our team a hard design question: how do you run a controlled psychology study on a three-year-old? Developmental psychology research needs controlled, comparable data. Every child should meet the same stimuli in a form that can be measured against every other child, or the results do not hold up. But three-to-six-year-olds do not sit still for an experiment. They need actual play, and play is messy.

That is the tension the project lives inside. If the game is boring, the child disengages and the data is worthless. If the play is unstructured, every session drifts somewhere different and the data is noise. My job was to build something that felt like a game to a five-year-old and read like an instrument to a researcher.

## <span style="color: #2E8B57;">What I built</span>

I architected the data collection system that sits underneath the play. It tracks over 10 behavioral and response data points per session, so that a researcher gets an analyzable session out of what, to the child, is just playing. The point was to capture the signal without ever asking the child to do anything that felt like a test.

On top of that system I designed and built two full prototype study structures, linear and Hub and Spoke, spanning 18 scenes. These were not two versions of the same screen. They were two different answers to how a study should be shaped around a small child.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/SK1.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/SK2.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/SK3.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>

## <span style="color: #4682B4;">Linear vs. Hub and Spoke</span>

The linear structure runs the child through a fixed sequence. Every child sees the same scenes in the same order, which gives you maximal comparability, the cleanest possible dataset.

The Hub and Spoke structure puts the child at a central hub and lets them choose where to go. That gives up some comparability, but it buys agency and ecological validity: the child behaves more like a child actually behaves, not like a subject on rails.

We did not settle this in a meeting. I built both, put them in front of the researchers and designers who would use them, and let the structures argue for themselves. That is the prototyper's answer to a research-design question. You do not debate which is better in the abstract; you make both real and watch what happens.

## <span style="color: #8A2BE2;">Designing for people who can't read yet</span>

Ages 3 to 6 impose hard constraints. The UI has to work for a child who cannot read, so it leans on icons, color, and voice instead of text. Touch targets have to be large and forgiving of imprecise hands. Sessions have to stay short enough to fit a young attention span. And there is always an adult in the loop, a researcher or caregiver, which is part of the interaction, not a distraction from it.

## <span style="color: #DC143C;">Outcome</span>

Findings from the prototypes were presented to faculty and PhD researchers at the Center for Transformational Play. In June 2026, the project was selected to present at **Serious Play 2026** at Duke University — one of the leading venues for games in learning and research.

<div class="row mt-3">
    <div class="col-sm-8 mx-auto">
        {% include figure.html path="assets/img/SKGroup.HEIC" class="img-fluid rounded z-depth-1" zoomable=true caption="Presenting SoKids at Serious Play 2026, Duke University" %}
    </div>
</div>

<!-- TODO(Aya): add any feedback from the researchers / client, and whether the tool is being used beyond the project -->

## <span style="color: #FF8C00;">What this taught me about prototyping</span>

- Building two competing versions is faster than arguing about one. Both structures existed before we would have finished debating either.
- Instrumenting a prototype turns playtests into data. The build measures itself, so a session is evidence instead of an anecdote.
- The youngest players are the most honest playtesters. A five-year-old will not pretend your game is fun to be polite.
