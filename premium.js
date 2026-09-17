(() => {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) return;

  const hero = document.querySelector('.hero');
  const visual = document.querySelector('.hero-visual');
  const panel = document.querySelector('.hero-panel');

  if (hero && visual && panel) {
    hero.addEventListener('pointermove', (e) => {
      const r = hero.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      visual.style.transform = `translate3d(${x * 11}px, ${y * 7}px, 0)`;
      panel.style.transform = `translate3d(${x * -10}px, ${y * -7}px, 50px)`;
    });
    hero.addEventListener('pointerleave', () => {
      visual.style.transform = '';
      panel.style.transform = 'translateZ(50px)';
    });
  }

  document.querySelectorAll('.service,.path,.testimonial').forEach((card) => {
    card.addEventListener('pointermove', (e) => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      card.style.setProperty('--rx', `${y * -3.4}deg`);
      card.style.setProperty('--ry', `${x * 4.5}deg`);
    });
    card.addEventListener('pointerleave', () => {
      card.style.removeProperty('--rx');
      card.style.removeProperty('--ry');
    });
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.animate([
        { opacity: 0, transform: 'translateY(24px) scale(.985)' },
        { opacity: 1, transform: 'translateY(0) scale(1)' }
      ], { duration: 760, easing: 'cubic-bezier(.22,.61,.36,1)', fill: 'both' });
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.story-path,.detail .shell,.media-community,.testimonial-grid,.form-layout').forEach((el) => observer.observe(el));
})();
