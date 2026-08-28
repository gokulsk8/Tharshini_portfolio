/**
 * Email Helper Utilities
 * Provides reliable cross-browser email opening options, avoiding empty hanging mailto tabs.
 */

export const RECIPIENT_EMAIL = 'tharshinimoorth2006@gmail.com';

/**
 * Builds a direct web Gmail compose URL with recipient and optional subject & body.
 */
export function getGmailComposeUrl(
  email: string = RECIPIENT_EMAIL,
  subject: string = 'Inquiry for Tharshini SK',
  body?: string
): string {
  const params = new URLSearchParams();
  params.set('view', 'cm');
  params.set('fs', '1');
  params.set('to', email);
  if (subject) params.set('su', subject);
  if (body) params.set('body', body);
  return `https://mail.google.com/mail/?${params.toString()}`;
}

/**
 * Builds a standard mailto: URL for local desktop/mobile mail apps (Outlook, Apple Mail, etc.).
 */
export function getMailtoUrl(
  email: string = RECIPIENT_EMAIL,
  subject: string = 'Inquiry for Tharshini SK',
  body?: string
): string {
  const params = new URLSearchParams();
  if (subject) params.set('subject', subject);
  if (body) params.set('body', body);
  const query = params.toString();
  return `mailto:${email}${query ? `?${query}` : ''}`;
}

/**
 * Opens email directly. If preferred service is gmail, opens web compose in a new tab.
 * If default mail client is chosen, triggers window.location.href to avoid empty tabs.
 */
export function handleEmailClick(
  options: {
    email?: string;
    subject?: string;
    body?: string;
    preferredMethod?: 'gmail' | 'default';
  } = {}
): void {
  const {
    email = RECIPIENT_EMAIL,
    subject = 'Inquiry for Tharshini SK',
    body = '',
    preferredMethod = 'gmail',
  } = options;

  if (preferredMethod === 'gmail') {
    const gmailUrl = getGmailComposeUrl(email, subject, body);
    window.open(gmailUrl, '_blank', 'noopener,noreferrer');
  } else {
    // For standard mailto, do NOT use target="_blank" because browsers open an empty tab
    window.location.href = getMailtoUrl(email, subject, body);
  }
}
