---
layout: about
title: Home
permalink: /
subtitle:
news: false
# selected_papers: true # includes a list of papers marked as "selected={true}"
social: true  # includes social icons at the bottom of the page
nav_order: 1

---

<div class="hero" markdown="0">
  <svg class="signature-mark" viewBox="0 0 200 200" aria-hidden="true" focusable="false">
    <g class="sig-spokes" fill="none" stroke-width="2.5" stroke-linecap="round">
      <line class="spoke" pathLength="1" x1="100" y1="100" x2="178" y2="100"/>
      <line class="spoke" pathLength="1" x1="100" y1="100" x2="155.15" y2="44.85"/>
      <line class="spoke" pathLength="1" x1="100" y1="100" x2="100" y2="22"/>
      <line class="spoke" pathLength="1" x1="100" y1="100" x2="44.85" y2="44.85"/>
      <line class="spoke" pathLength="1" x1="100" y1="100" x2="22" y2="100"/>
      <line class="spoke" pathLength="1" x1="100" y1="100" x2="44.85" y2="155.15"/>
      <line class="spoke" pathLength="1" x1="100" y1="100" x2="100" y2="178"/>
      <line class="spoke" pathLength="1" x1="100" y1="100" x2="155.15" y2="155.15"/>
    </g>
    <g class="sig-nodes">
      <circle class="node node-hub" cx="100" cy="100" r="6"/>
      <circle class="node" cx="178" cy="100" r="4"/>
      <circle class="node" cx="155.15" cy="44.85" r="4"/>
      <circle class="node" cx="100" cy="22" r="4"/>
      <circle class="node" cx="44.85" cy="44.85" r="4"/>
      <circle class="node" cx="22" cy="100" r="4"/>
      <circle class="node" cx="44.85" cy="155.15" r="4"/>
      <circle class="node" cx="100" cy="178" r="4"/>
      <circle class="node" cx="155.15" cy="155.15" r="4"/>
    </g>
    </svg>
    <span class="meta-line hero-kicker"><span class="kicker-highlight">Systems &amp; Games Engineer</span> · Carnegie Mellon ETC · Available Summer 2027</span>
    <h1 class="hero-headline">I build systems that stay <em class="playable">correct</em> under load, not just code that runs once.</h1>
    <p class="hero-lede">Master's student at Carnegie Mellon's Entertainment Technology Center (B.S. Computer Science, CMU). I build the architecture underneath interactive experiences — renderers, data pipelines, distributed systems.</p>
    <p class="hero-links">
      <a href="/cv/" class="text-link">Resume</a> ·
      <a href="/projects/" class="text-link">Projects</a> ·
      <a href="mailto:theayaalsabahi@gmail.com" class="text-link">Contact</a>
    </p>
  </div>

<p class="meta-line section-label">Highlights</p>

<div class="container" markdown="0">
  <div class="row row-cols-2">
  {%- assign hl1 = site.projects | where: "title", "SoKids" -%}
  {%- assign hl2 = site.projects | where: "title", "Computer Graphics Systems" -%}
  {%- assign home_highlights = hl1 | concat: hl2 -%}
  {%- for project in home_highlights -%}
    {% include projects_horizontal.html %}
  {%- endfor -%}
  </div>
</div>

<p class="meta-line section-label">More work</p>

More prototypes and experiments live in [projects](/projects/){: .text-link}.
