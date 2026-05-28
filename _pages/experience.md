---
layout: default
title: Experience
permalink: /experience/
---

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;1,400&family=DM+Mono:wght@300;400&display=swap" rel="stylesheet" />

<style>
  .cv-wrap *, .cv-wrap *::before, .cv-wrap *::after { box-sizing: border-box; margin: 0; padding: 0; }

  .cv-wrap {
    --bg: #f9f7f4;
    --text: #1a1a1a;
    --muted: #888;
    --rule: #d8d4cd;
    --serif: 'EB Garamond', Georgia, serif;
    --mono: 'DM Mono', monospace;
    font-family: var(--serif);
    font-size: 18px;
    line-height: 1.6;
    color: var(--text);
    max-width: 760px;
    margin: 0 auto;
    padding-bottom: 100px;
  }

  .cv-contact {
    font-family: var(--mono);
    font-size: 12px;
    font-weight: 300;
    letter-spacing: 0.05em;
    color: var(--muted);
    margin-bottom: 72px;
  }

  .cv-contact a {
    color: var(--muted);
    text-decoration: none;
    transition: color 0.15s;
  }

  .cv-contact a:hover { color: var(--text); }
  .cv-contact .dot { margin: 0 14px; opacity: 0.4; }

  .cv-section { margin-bottom: 64px; }

  .cv-label {
    font-family: var(--mono);
    font-size: 10px;
    font-weight: 400;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--muted);
    margin-bottom: 28px;
  }

  .cv-entry { margin-bottom: 28px; padding-bottom: 28px; border-bottom: 1px solid var(--rule); }
  .cv-entry:last-child { border-bottom: none; margin-bottom: 0; padding-bottom: 0; }

  .cv-role {
    font-size: 19px;
    font-weight: 500;
    font-style: italic;
    line-height: 1.3;
    margin-bottom: 2px;
  }

  .cv-where {
    font-family: var(--mono);
    font-size: 12px;
    font-weight: 300;
    letter-spacing: 0.04em;
    color: var(--muted);
  }

  .cv-edu { margin-bottom: 24px; }
  .cv-edu:last-child { margin-bottom: 0; }

  .cv-degree {
    font-size: 19px;
    font-weight: 500;
    font-style: italic;
    line-height: 1.3;
    margin-bottom: 2px;
  }

  .cv-school {
    font-family: var(--mono);
    font-size: 12px;
    font-weight: 300;
    letter-spacing: 0.04em;
    color: var(--muted);
  }

  .cv-award {
    font-size: 17px;
    line-height: 1.5;
    margin-bottom: 12px;
    color: var(--text);
  }

  .cv-award:last-child { margin-bottom: 0; }

  .cv-skills {
    display: flex;
    flex-wrap: wrap;
    gap: 8px 16px;
    list-style: none;
    padding: 0;
  }

  .cv-skills li {
    font-family: var(--mono);
    font-size: 12px;
    font-weight: 300;
    letter-spacing: 0.04em;
    color: var(--muted);
  }

  .cv-skills li::before { content: "— "; opacity: 0.4; }

  .cv-footer {
    border-top: 1px solid var(--rule);
    padding: 28px 0;
    display: flex;
    gap: 20px;
  }

  .cv-footer a {
    font-family: var(--mono);
    font-size: 11px;
    font-weight: 300;
    letter-spacing: 0.06em;
    color: var(--muted);
    text-decoration: none;
    transition: color 0.15s;
  }

  .cv-footer a:hover { color: var(--text); }

  @media (max-width: 600px) {
    .cv-wrap { font-size: 16px; }
    .cv-contact { margin-bottom: 48px; }
  }
</style>

<div class="cv-wrap">

  <p class="cv-contact">
    <a href="tel:+1234567890">+1 (234) 567-890</a>
    <span class="dot">·</span>
    <a href="mailto:youremail@example.com">youremail@example.com</a>
  </p>

  <div class="cv-section">
    <p class="cv-label">Experience</p>

    <div class="cv-entry">
      <p class="cv-role">Programming Lead, SoKids</p>
      <p class="cv-where">Carnegie Mellon University — Doha, Qatar</p>
    </div>

    <div class="cv-entry">
      <p class="cv-role">Outreach Specialist Intern</p>
      <p class="cv-where">Tokyo Seitoku University — Tokyo, Japan</p>
    </div>

    <div class="cv-entry">
      <p class="cv-role">Teaching Assistant</p>
      <p class="cv-where">Carnegie Mellon University — Doha, Qatar</p>
    </div>

    <div class="cv-entry">
      <p class="cv-role">Software Developer Intern</p>
      <p class="cv-where">PhazeRo — Muscat, Oman</p>
    </div>
  </div>

  <div class="cv-section">
    <p class="cv-label">Education</p>

    <div class="cv-edu">
      <p class="cv-degree">Master's of Entertainment Technology</p>
      <p class="cv-school">Carnegie Mellon University — Pittsburgh, PA</p>
    </div>

    <div class="cv-edu">
      <p class="cv-degree">Bachelor of Science, Computer Science</p>
      <p class="cv-school">Carnegie Mellon University — Doha, Qatar &nbsp;·&nbsp; Minor in Game Design</p>
    </div>
  </div>

  <div class="cv-section">
    <p class="cv-label">Awards</p>

    <p class="cv-award">Qatari Amiri Diwan Full Ride Scholarship</p>
    <p class="cv-award">Advanced Placement Scholar with Honor</p>
    <p class="cv-award">Dean's List — Fall 2022, Spring 2024, Fall 2024</p>
  </div>

  <div class="cv-section">
    <p class="cv-label">Skills</p>
    <ul class="cv-skills">
      <li>C++</li>
      <li>C#</li>
      <li>Python</li>
      <li>Java</li>
      <li>NodeJS</li>
      <li>REST APIs</li>
      <li>Unity</li>
      <li>Maya</li>
      <li>ZBrush</li>
      <li>Substance Painter</li>
      <li>Machine Learning</li>
      <li>Computer Graphics</li>
      <li>VR / Meta Quest</li>
      <li>English & Arabic</li>
    </ul>
  </div>

  <div class="cv-footer">
    <a href="https://linkedin.com/in/yourprofile" target="_blank">LinkedIn</a>
    <a href="/assets/cv.pdf" target="_blank">Download CV</a>
  </div>

</div>