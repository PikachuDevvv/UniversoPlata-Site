(() => {
  const canvas = document.getElementById('plataSnow');
  if (!canvas) return;
  const ctx = canvas.getContext('2d', { alpha: true });
  if (!ctx) return;

  let width = 0, height = 0, flakes = [], frame = 0;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const random = (min, max) => Math.random() * (max - min) + min;

  function makeFlake(initial = false) {
    return {
      x: random(0, width),
      y: initial ? random(-height, height) : random(-35, -8),
      radius: random(1.1, 3.2),
      speed: random(.55, 1.65),
      drift: random(-.35, .35),
      phase: random(0, Math.PI * 2),
      opacity: random(.42, .9)
    };
  }

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const amount = Math.max(35, Math.min(125, Math.round(width / 11)));
    flakes = Array.from({ length: amount }, () => makeFlake(true));
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);
    for (const f of flakes) {
      f.phase += .012;
      f.x += f.drift + Math.sin(f.phase) * .32;
      f.y += f.speed;
      if (f.y > height + 8) Object.assign(f, makeFlake());
      if (f.x < -8) f.x = width + 8;
      if (f.x > width + 8) f.x = -8;
      ctx.beginPath();
      ctx.arc(f.x, f.y, f.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${f.opacity})`;
      ctx.shadowColor = 'rgba(255,255,255,.55)';
      ctx.shadowBlur = f.radius > 2.2 ? 5 : 2;
      ctx.fill();
    }
    ctx.shadowBlur = 0;
    if (!reduceMotion) frame = requestAnimationFrame(draw);
  }

  resize();
  window.addEventListener('resize', resize, { passive: true });
  if (reduceMotion) draw();
  else frame = requestAnimationFrame(draw);
})();
