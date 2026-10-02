/**
 * Floating Holi powder particles animation
 */
(function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const COLORS = ['#FF3CAC', '#FF7000', '#FFD700', '#00E676', '#00E5FF', '#7B2FFF', '#FF4444'];
  let particles = [];

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  function spawn() {
    return {
      x: Math.random() * canvas.width,
      y: canvas.height + 10,
      r: Math.random() * 5 + 2,
      vx: (Math.random() - 0.5) * 0.8,
      vy: -(Math.random() * 1.2 + 0.4),
      alpha: Math.random() * 0.5 + 0.2,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
    };
  }

  for (let i = 0; i < 50; i++) {
    const p = spawn();
    p.y = Math.random() * canvas.height;
    particles.push(p);
  }

  function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (Math.random() < 0.3) particles.push(spawn());
    if (particles.length > 100) particles.splice(0, 1);

    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.alpha -= 0.002;
      if (p.y < -10 || p.alpha <= 0) {
        Object.assign(p, spawn());
        return;
      }
      ctx.save();
      ctx.globalAlpha = p.alpha;
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    });
    requestAnimationFrame(loop);
  }
  loop();
})();
