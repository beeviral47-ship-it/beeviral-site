// Simple in-memory rate limiter — per IP, per key.
// Module-level state: effective for single-instance deployments.
// On serverless (Vercel), provides per-warm-instance protection which
// still stops naive bots that hit the same instance repeatedly.

const store = new Map<string, { count: number; resetAt: number }>()

function sweep() {
  const now = Date.now()
  for (const [key, entry] of store) {
    if (entry.resetAt <= now) store.delete(key)
  }
}

/**
 * Returns true if the request is within the allowed limit, false if it should
 * be rejected. Increments the counter on each allowed call.
 *
 * @param key      Unique identifier — typically `${endpoint}:${ip}`
 * @param limit    Max requests allowed in the window
 * @param windowMs Length of the window in milliseconds
 */
export function checkRateLimit(
  key: string,
  limit: number,
  windowMs: number,
): boolean {
  sweep()
  const now = Date.now()
  const entry = store.get(key)

  if (!entry || entry.resetAt <= now) {
    store.set(key, { count: 1, resetAt: now + windowMs })
    return true
  }

  if (entry.count >= limit) return false

  entry.count++
  return true
}
