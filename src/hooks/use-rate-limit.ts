/**
 * Client-side rate limiter backed by localStorage.
 * Each form key gets its own independent cooldown.
 */

const COOLDOWN_MS = 60_000; // 60 seconds between submissions

export function checkRateLimit(key: string): { allowed: boolean; remainingSeconds: number } {
  const stored = localStorage.getItem(`rate_limit_${key}`);
  if (!stored) return { allowed: true, remainingSeconds: 0 };

  const lastSubmit = Number(stored);
  const elapsed = Date.now() - lastSubmit;
  if (elapsed >= COOLDOWN_MS) return { allowed: true, remainingSeconds: 0 };

  return { allowed: false, remainingSeconds: Math.ceil((COOLDOWN_MS - elapsed) / 1000) };
}

export function recordSubmission(key: string): void {
  localStorage.setItem(`rate_limit_${key}`, String(Date.now()));
}
