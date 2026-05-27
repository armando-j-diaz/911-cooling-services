export interface LeadPayload {
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  details: string;
  source: string;
  page_url: string;
  submitted_at: string;
}

export function validateLeadForm(data: LeadPayload): string | null {
  if (!data.first_name.trim()) return 'First name is required.';
  if (!data.last_name.trim()) return 'Last name is required.';
  if (!data.phone.trim()) return 'Phone number is required.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) return 'Please enter a valid email.';
  if (!data.details.trim()) return 'Please describe your unit or issue.';
  return null;
}

export async function submitLead(webhookUrl: string, payload: LeadPayload): Promise<void> {
  if (!webhookUrl) {
    throw new Error('Webhook URL is not configured.');
  }

  const response = await fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`Submission failed (${response.status})`);
  }
}

export function initLeadForm(): void {
  const form = document.getElementById('lead-form') as HTMLFormElement | null;
  if (!form) return;

  const config = (window as Window & { __911COOLING__?: { makeWebhookUrl: string; phoneTel: string } })
    .__911COOLING__;
  const webhookUrl = config?.makeWebhookUrl ?? '';
  const phoneTel = config?.phoneTel ?? '';

  const statusEl = document.getElementById('form-status');
  const successEl = document.getElementById('form-success');
  const errorEl = document.getElementById('form-error');
  const submitBtn = document.getElementById('form-submit') as HTMLButtonElement | null;

  const setStatus = (type: 'idle' | 'loading' | 'success' | 'error', message = '') => {
    if (statusEl) statusEl.textContent = message;
    if (successEl) successEl.classList.toggle('hidden', type !== 'success');
    if (errorEl) {
      errorEl.classList.toggle('hidden', type !== 'error');
      if (type === 'error' && message) {
        const callLink = errorEl.querySelector('[data-call-link]') as HTMLAnchorElement | null;
        if (callLink && phoneTel) callLink.href = `tel:${phoneTel}`;
        const msgSpan = errorEl.querySelector('[data-error-msg]');
        if (msgSpan) msgSpan.textContent = message;
      }
    }
    if (submitBtn) {
      submitBtn.disabled = type === 'loading';
      submitBtn.textContent = type === 'loading' ? 'Sending…' : 'Get My Free Quote';
    }
  };

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    setStatus('idle');

    const payload: LeadPayload = {
      first_name: (form.elements.namedItem('first_name') as HTMLInputElement).value,
      last_name: (form.elements.namedItem('last_name') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      details: (form.elements.namedItem('details') as HTMLTextAreaElement).value,
      source: 'website',
      page_url: window.location.href,
      submitted_at: new Date().toISOString(),
    };

    const validationError = validateLeadForm(payload);
    if (validationError) {
      setStatus('error', validationError);
      return;
    }

    setStatus('loading');

    try {
      await submitLead(webhookUrl, payload);
      form.reset();
      setStatus('success');
      form.classList.add('hidden');
    } catch {
      setStatus(
        'error',
        'Something went wrong sending your request. Please call us directly — we answer 24/7.'
      );
    }
  });
}

if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', initLeadForm);
}
