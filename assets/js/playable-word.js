// playable-word.js — "the word drops game icons"
// Hovering or clicking the <em class="playable"> in the hero headline spawns
// small geometric SVG particles that fall with a gravity feel and fade out.
// Vanilla JS, no dependencies. No-ops under reduced-motion or if the word is absent.
(function () {
  'use strict';

  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  var word = document.querySelector('em.playable');
  if (!word) return;

  var MAX_LIVE = 30;
  var HOVER_COOLDOWN = 500; // ms between mouseenter re-triggers
  var live = 0;
  var lastHover = 0;

  // Five geometric shapes echoing the site's game/hub-and-spoke motif.
  // Each returns inner SVG markup drawn in a 24x24 viewBox using currentColor.
  var SHAPES = [
    // d-pad plus (filled)
    '<path d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6z" fill="currentColor"/>',
    // triangle / play (filled)
    '<path d="M6 4l14 8-14 8z" fill="currentColor"/>',
    // square (filled)
    '<rect x="4" y="4" width="16" height="16" rx="2" fill="currentColor"/>',
    // circle ring (stroked, not filled)
    '<circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" stroke-width="3"/>',
    // four-point star (node motif, filled)
    '<path d="M12 1l3 8 8 3-8 3-3 8-3-8-8-3 8-3z" fill="currentColor"/>'
  ];

  // Fixed-position container so it never causes layout shift or scrollbars.
  var container = document.createElement('div');
  container.style.cssText =
    'position:fixed;left:0;top:0;width:0;height:0;overflow:visible;' +
    'pointer-events:none;z-index:1200;';
  document.body.appendChild(container);

  function rand(min, max) {
    return min + Math.random() * (max - min);
  }

  function spawnOne(rect) {
    if (live >= MAX_LIVE) return;
    live++;

    var size = rand(12, 18);
    var startX = rect.left + Math.random() * rect.width;
    var startY = rect.bottom - 2; // just below the baseline

    var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('width', size);
    svg.setAttribute('height', size);
    svg.setAttribute('aria-hidden', 'true');
    svg.innerHTML = SHAPES[(Math.random() * SHAPES.length) | 0];

    // Alternate two teal tones via class (currentColor pattern, works both themes).
    svg.className.baseVal = 'playable-particle ' +
      (live % 2 ? 'pp-teal' : 'pp-teal-deep');
    svg.style.position = 'fixed';
    svg.style.left = (startX - size / 2) + 'px';
    svg.style.top = startY + 'px';

    container.appendChild(svg);

    var driftX = rand(-36, 36);
    var fallY = rand(90, 150);
    var rot = rand(-140, 140);
    var duration = rand(700, 1200);

    var anim = svg.animate(
      [
        { transform: 'translate(0,0) rotate(0deg)', opacity: 1, offset: 0 },
        { opacity: 1, offset: 0.66 },
        {
          transform: 'translate(' + driftX + 'px,' + fallY + 'px) rotate(' + rot + 'deg)',
          opacity: 0,
          offset: 1
        }
      ],
      {
        duration: duration,
        easing: 'cubic-bezier(0.4, 0, 0.9, 0.6)', // ease-in = gravity feel
        fill: 'forwards'
      }
    );

    var cleanup = function () {
      if (svg.parentNode) svg.parentNode.removeChild(svg);
      live--;
    };
    anim.onfinish = cleanup;
    anim.oncancel = cleanup;
  }

  function burst(count) {
    var rect = word.getBoundingClientRect();
    for (var i = 0; i < count; i++) spawnOne(rect);
  }

  word.addEventListener('mouseenter', function () {
    var now = Date.now();
    if (now - lastHover < HOVER_COOLDOWN) return;
    lastHover = now;
    burst(5 + ((Math.random() * 3) | 0)); // 5-7
  });

  word.addEventListener('click', function () {
    burst(10 + ((Math.random() * 5) | 0)); // 10-14
  });
})();
