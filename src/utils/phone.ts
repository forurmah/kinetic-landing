/**
 * Normalizes Persian (۰-۹) and Arabic (٠-٩) digits to standard ASCII English digits (0-9).
 */
export function normalizeDigits(input: string): string {
  const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  const arabicDigits = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];

  let normalized = input;
  for (let i = 0; i < 10; i++) {
    normalized = normalized
      .replace(new RegExp(persianDigits[i], 'g'), i.toString())
      .replace(new RegExp(arabicDigits[i], 'g'), i.toString());
  }
  return normalized;
}

/**
 * Validates Iranian mobile numbers.
 * Accepts:
 *  - Local format: 09XXXXXXXXX (11 digits)
 *  - International format: +989XXXXXXXXX, 00989XXXXXXXXX, 989XXXXXXXXX
 */
export function isValidIranianMobile(input: string): boolean {
  const normalized = normalizeDigits(input).replace(/[\s\-\(\)]/g, '');

  // Local format: 09 followed by 9 digits
  const localRegex = /^09\d{9}$/;
  // International format: +989 followed by 9 digits, 00989 followed by 9 digits, or 989 followed by 9 digits
  const internationalRegex = /^(\+98|0098|98)9\d{9}$/;

  return localRegex.test(normalized) || internationalRegex.test(normalized);
}

/**
 * Formats a valid Iranian mobile number into clean readable format: 0912 XXX XXXX
 */
export function formatIranianMobile(input: string): string {
  const normalized = normalizeDigits(input).replace(/[\s\-\(\)\+]/g, '');
  let digits = normalized;

  // If starts with 989 or 00989
  if (digits.startsWith('0098')) {
    digits = '0' + digits.slice(4);
  } else if (digits.startsWith('98')) {
    digits = '0' + digits.slice(2);
  }

  if (digits.length === 11 && digits.startsWith('09')) {
    return `${digits.slice(0, 4)} ${digits.slice(4, 7)} ${digits.slice(7)}`;
  }

  return input;
}

/**
 * Formats toman amounts with commas and standard English digits.
 * Example: formatToman(12500000) => "12,500,000 toman"
 */
export function formatToman(amount: number): string {
  return `${amount.toLocaleString('en-US')} toman`;
}
