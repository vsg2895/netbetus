/**
 * Frequently asked questions for this site.
 *
 * Rendered VISIBLY on the home page and emitted as FAQPage structured data from
 * this same array. Google requires the two to match; markup-only FAQ is a
 * guidelines violation, which is why the page maps over this constant rather
 * than duplicating the text.
 *
 * The wording is unique to this site: these answers are indexable page content,
 * and they are exactly the kind of text an answer engine quotes. Here they
 * explain how a NetBetUS ranking is made, because that is what this brand is —
 * real-money casinos rated straight, on payouts, terms and licensing.
 *
 * Nothing below claims a figure this site cannot show. A statement about method
 * is fine; a specific payout time would be a measurement no reader could check
 * and no column here holds. Nor does any answer say which US states allow
 * online casinos — that changes by state and over time, and is the player's to
 * check.
 */
export const FAQ_ITEMS = [
  {
    question: 'How does NetBetUS rank casinos?',
    answer:
      'On the same checks for every casino: how reliably it pays out, whether its bonus terms match its promos, who licenses it, and how its support handles problems.',
  },
  {
    question: 'Can I play at these casinos from my state?',
    answer:
      'It depends on where you live — online casino rules differ from state to state and change over time. Check your local law and the casino’s own terms before you sign up.',
  },
  {
    question: 'What should I check in a bonus before claiming it?',
    answer:
      'The wagering requirement, which games count toward it, the max bet while the bonus is active, any cap on winnings and the expiry date. The T&Cs decide, not the banner.',
  },
  {
    question: 'Why does licensing matter?',
    answer:
      'A licence means a regulator sets rules the casino must follow and gives players somewhere to complain. An unlicensed site answers to no one if a withdrawal stalls.',
  },
  {
    question: 'Do casinos pay to rank higher?',
    answer:
      'No. We may earn a commission when you sign up through our links, but it never changes a score or a position on the list.',
  },
  {
    question: 'Why did a casino drop in the rankings?',
    answer:
      'Usually because something we check got worse — slower or harder withdrawals, tougher bonus terms, or support that stopped answering.',
  },
] as const
