/* inner.js — expand/collapse VPN review cards */
document.addEventListener('DOMContentLoaded', () => {

  /* ── Expandable VPN cards ──────────────────── */
  document.querySelectorAll('.expand-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.vpn-card');
      if (!card) return;
      card.classList.toggle('expanded');
      const label = btn.querySelector('.toggle-label');
      if (label) {
        label.textContent = card.classList.contains('expanded') ? 'Свернуть' : 'Подробнее';
      }
    });
  });

  /* ── FAQ ───────────────────────────────────── */
  document.querySelectorAll('.faq-item').forEach(item => {
    const q = item.querySelector('.faq-q');
    if (!q) return;
    q.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(o => o.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });

  /* ── Sticky banner ─────────────────────────── */
  const banner = document.getElementById('sticky-banner');
  if (banner) {
    setTimeout(() => banner.classList.add('visible'), 3500);
    const closeBtn = banner.querySelector('.sticky-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        banner.classList.remove('visible');
        setTimeout(() => banner.style.display = 'none', 400);
      });
    }
  }

  /* ── Smooth scroll ─────────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

});
