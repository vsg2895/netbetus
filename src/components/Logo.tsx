import Link from 'next/link'

/**
 * NetBetUS brand mark: a red tile carrying a white "N" with a star in its
 * corner, the wordmark with "US" in red, and a spaced-capital tagline beneath.
 * Taken from sites/netbetus.html.
 *
 * The tile is the mockup's own SVG, inline so it costs no request and stays
 * crisp at any size. The Link carries the accessible name; the mark is
 * aria-hidden so it is not announced before it.
 *
 * `onDark` is for the footer, which sits on a deeper navy than the page: the
 * wordmark's "US" takes the lighter red there and the tagline the footer's
 * own muted tone.
 */
export default function Logo({
  className = '',
  onDark = false,
}: {
  className?: string
  onDark?: boolean
}) {
  return (
    <Link
      href="/"
      aria-label="NetBetUS home"
      className={`inline-flex min-h-11 shrink-0 items-center gap-3 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 ${
        onDark ? 'focus-visible:ring-offset-night' : 'focus-visible:ring-offset-cream'
      } ${className}`.trim()}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 42 42"
        className="h-9 w-9 shrink-0 sm:h-[42px] sm:w-[42px]"
      >
        <rect width="42" height="42" rx="10" fill="#E23B4A" />
        <path
          d="M12 31V11l14 20V11"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="4.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M32 6.5l1.3 2.7 3 .4-2.2 2.1.5 3-2.6-1.4-2.6 1.4.5-3-2.2-2.1 3-.4z"
          fill="#FFFFFF"
        />
      </svg>

      <span className="grid gap-1 leading-none">
        <span className="font-display text-[20px] font-extrabold tracking-[-0.03em] text-ink sm:text-[22px]">
          NetBet<span className={onDark ? 'text-brand-dark' : 'text-brand'}>US</span>
        </span>
        <span
          className={`text-[9.5px] font-semibold uppercase tracking-[0.2em] sm:text-[10.5px] ${
            onDark ? 'text-night-muted' : 'text-muted'
          }`}
        >
          America&apos;s Casino Guide
        </span>
      </span>
    </Link>
  )
}
