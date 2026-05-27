/**
 * Full-bleed hero background — one image at a time, slow crossfade.
 * Any element with [data-hero-morph] and data-images='["/path", ...]' JSON array.
 */
function initOneHero(root: HTMLElement): void {
  const imagesJson = root.dataset.images;
  if (!imagesJson) return;

  let images: string[];
  try {
    images = JSON.parse(imagesJson) as string[];
  } catch {
    return;
  }

  if (!images.length) return;

  const container = root.querySelector('[data-hero-slides]');
  if (!container) return;

  const slides: HTMLElement[] = [];

  images.forEach((src, index) => {
    const slide = document.createElement('div');
    slide.className = 'hero-slide';
    slide.style.backgroundImage = `url("${src}")`;
    slide.dataset.index = String(index);
    container.appendChild(slide);
    slides.push(slide);
  });

  if (slides.length === 0) return;

  let active = 0;
  slides[0]?.classList.add('is-active');

  if (slides.length === 1) return;

  window.setInterval(() => {
    slides[active]?.classList.remove('is-active');
    active = (active + 1) % slides.length;
    slides[active]?.classList.add('is-active');
  }, 6000);
}

export function initHeroMorph(): void {
  document.querySelectorAll<HTMLElement>('[data-hero-morph]').forEach(initOneHero);
}

if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', initHeroMorph);
}
