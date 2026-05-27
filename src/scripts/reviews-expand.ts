function setupReviewExpand(btn: HTMLButtonElement): void {
  const card = btn.closest('article');
  const text = card?.querySelector<HTMLElement>('.review-text');
  if (!text) return;

  const syncButtonVisibility = (): void => {
    if (text.classList.contains('is-expanded')) {
      btn.hidden = false;
      return;
    }

    text.classList.add('is-clamped');
    text.classList.remove('is-expanded');

    // Measure whether content exceeds the 5-line clamp
    const needsExpand = text.scrollHeight > text.clientHeight + 2;
    btn.hidden = !needsExpand;
    if (!needsExpand) {
      btn.setAttribute('aria-expanded', 'false');
      btn.textContent = 'Read more';
    }
  };

  syncButtonVisibility();

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const expanded = !text.classList.contains('is-expanded');

    if (expanded) {
      text.classList.remove('is-clamped');
      text.classList.add('is-expanded');
      btn.textContent = 'Read less';
      btn.setAttribute('aria-expanded', 'true');
    } else {
      text.classList.add('is-clamped');
      text.classList.remove('is-expanded');
      btn.textContent = 'Read more';
      btn.setAttribute('aria-expanded', 'false');
      syncButtonVisibility();
    }
  });
}

function onResize(): void {
  document.querySelectorAll<HTMLButtonElement>('[data-review-expand]').forEach((btn) => {
    const text = btn.closest('article')?.querySelector<HTMLElement>('.review-text');
    if (!text || text.classList.contains('is-expanded')) return;
    text.classList.add('is-clamped');
    btn.hidden = !(text.scrollHeight > text.clientHeight + 2);
  });
}

export function initReviewExpand(): void {
  document.querySelectorAll<HTMLButtonElement>('[data-review-expand]').forEach(setupReviewExpand);
  window.addEventListener('resize', onResize);
}

if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', initReviewExpand);
}
