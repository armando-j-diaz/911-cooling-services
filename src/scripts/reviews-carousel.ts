export function initReviewsCarousel(): void {
  const root = document.getElementById('reviews-carousel');
  const track = document.getElementById('reviews-track');
  const progressBar = document.getElementById('reviews-progress-bar');

  if (!root || !track) return;

  const slides = track.querySelectorAll<HTMLElement>('.reviews-slide');
  const count = slides.length;
  if (count === 0) return;

  let index = 0;
  const intervalMs = 10_000;

  const getVisibleCount = (): number => {
    if (window.matchMedia('(min-width: 1024px)').matches) {
      return Math.min(4, count);
    }
    return 1;
  };

  const getMaxIndex = (): number => Math.max(0, count - getVisibleCount());

  const clampIndex = (): void => {
    const max = getMaxIndex();
    if (index > max) index = max;
    if (index < 0) index = 0;
  };

  const update = (): void => {
    clampIndex();

    const visible = getVisibleCount();
    const slideWidth = root.clientWidth / visible;
    track.style.transform = `translateX(-${index * slideWidth}px)`;

    const max = getMaxIndex();
    if (progressBar) {
      const steps = max + 1;
      progressBar.style.width = `${((index + 1) / steps) * 100}%`;
    }

    slides.forEach((slide, i) => {
      const card = slide.querySelector('article');
      if (!card) return;
      const isActive = i === index;
      card.classList.toggle('border-emergency/60', isActive);
      card.classList.toggle('border-white/10', !isActive);
    });
  };

  const goTo = (nextIndex: number): void => {
    const max = getMaxIndex();

    if (nextIndex > max) {
      index = 0;
    } else if (nextIndex < 0) {
      index = max;
    } else {
      index = nextIndex;
    }

    update();
  };

  const updateNavState = (): void => {
    const max = getMaxIndex();
    const shell = root.closest('.reviews-carousel-shell');
    const prevBtn = shell?.querySelector<HTMLButtonElement>('[data-reviews-prev]');
    const nextBtn = shell?.querySelector<HTMLButtonElement>('[data-reviews-next]');
    if (prevBtn) prevBtn.disabled = index <= 0;
    if (nextBtn) nextBtn.disabled = index >= max;
  };

  const updateAll = (): void => {
    update();
    updateNavState();
  };

  const goToAndNotify = (nextIndex: number): void => {
    goTo(nextIndex);
    updateNavState();
  };

  updateAll();

  let autoTimer = window.setInterval(() => goToAndNotify(index + 1), intervalMs);

  const resetAutoAdvance = (): void => {
    window.clearInterval(autoTimer);
    autoTimer = window.setInterval(() => goToAndNotify(index + 1), intervalMs);
  };

  const shell = root.closest('.reviews-carousel-shell');
  shell?.querySelector('[data-reviews-prev]')?.addEventListener('click', () => {
    if (index > 0) {
      goToAndNotify(index - 1);
      resetAutoAdvance();
    }
  });

  shell?.querySelector('[data-reviews-next]')?.addEventListener('click', () => {
    if (index < getMaxIndex()) {
      goToAndNotify(index + 1);
      resetAutoAdvance();
    }
  });

  window.addEventListener('resize', updateAll);

  let touchStartX = 0;
  root.addEventListener(
    'touchstart',
    (e) => {
      touchStartX = e.changedTouches[0]?.screenX ?? 0;
    },
    { passive: true }
  );

  root.addEventListener(
    'touchend',
    (e) => {
      const diff = touchStartX - (e.changedTouches[0]?.screenX ?? 0);
      if (Math.abs(diff) < 40) return;
      goToAndNotify(diff > 0 ? index + 1 : index - 1);
      resetAutoAdvance();
    },
    { passive: true }
  );
}

if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', initReviewsCarousel);
}
