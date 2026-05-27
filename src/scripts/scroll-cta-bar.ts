function docTop(el: Element): number {
  return el.getBoundingClientRect().top + window.scrollY;
}

function initScrollCtaBars() {
  document.querySelectorAll<HTMLElement>('[data-scroll-cta]').forEach((bar) => {
    const latch = bar.dataset.latch === 'true';
    const trigger = bar.dataset.trigger;
    const bodyClass = bar.dataset.bodyClass ?? '';
    const showExtra = Number(bar.dataset.showExtra ?? '200');
    const hideOffset = Number(bar.dataset.hideOffset ?? '48');

    const hero =
      trigger === 'hero' ? document.querySelector<HTMLElement>('[data-scroll-cta-hero]') : null;
    const sentinel =
      trigger === 'sentinel'
        ? document.querySelector<HTMLElement>('[data-installations-sentinel]')
        : null;

    if (!hero && !sentinel) return;

    let visible = false;
    let latched = false;

    const apply = (show: boolean) => {
      visible = show;
      bar.classList.toggle('is-visible', show);
      bar.setAttribute('aria-hidden', show ? 'false' : 'true');
      if (bodyClass) {
        document.body.classList.toggle(bodyClass, show);
      }
    };

    const check = () => {
      if (latch && sentinel) {
        if (latched) return;
        const triggerY = docTop(sentinel) - window.innerHeight * 0.55;
        if (window.scrollY >= triggerY) {
          latched = true;
          apply(true);
        }
        return;
      }

      if (!hero) return;

      const heroEnd = docTop(hero) + hero.getBoundingClientRect().height;
      const showY = heroEnd + showExtra;
      const hideY = heroEnd - hideOffset;

      if (window.scrollY <= hideY) {
        if (visible) apply(false);
      } else if (window.scrollY >= showY) {
        if (!visible) apply(true);
      }
    };

    check();
    window.addEventListener('scroll', check, { passive: true });
    window.addEventListener('resize', check, { passive: true });
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initScrollCtaBars);
} else {
  initScrollCtaBars();
}
