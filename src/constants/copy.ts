/**
 * All user-facing and SEO-facing wording for this site.
 *
 * The KEY STRUCTURE is identical across every site in the network — same
 * groups, same keys, same order — so the apps stay interchangeable and a
 * component written for one works on all of them.
 *
 * The WORDS are deliberately unique to this site. That is not decoration: the
 * brands are separate domains serving the same catalogue, and if they shipped
 * the same titles, descriptions and headings, Google would treat them as
 * duplicate content and suppress all but one. Every string that reaches a
 * <title>, a meta description, an <h1>/<h2> or a JSON-LD field must therefore
 * read differently here than on the sibling sites.
 *
 * NetBetUS's angle: real-money casinos for US players, rated straight — on
 * payouts, bonus terms, licensing and support. Taken from the brief in
 * sites/netbetus.html.
 *
 * ── One line this file does not cross ───────────────────────────────────────
 * The mockup shows an "Avg. payout time" per casino and says withdrawals are
 * timed. Nothing records a timed withdrawal per operator, so no wording here
 * promises a figure of that kind; the only score shown is `casino.rating`,
 * which is real.
 */
export const COPY = {
  // SEO identity. These three reach the <title>, the meta description and the
  // keywords tag on EVERY page that does not set its own — which is most of
  // them — so they are the strings most likely to be read as duplicate content
  // if a sibling domain ships the same words.
  site: {
    titleTail: 'US Online Casinos, Rated Straight',
    description:
      'reviews US-facing online casinos on what matters once real money is in: payouts, fair bonus terms, licensing and support.',
    keywords: [
      'best us online casinos',
      'real money casinos usa',
      'us casino reviews',
      'us casino bonus terms',
      'licensed online casinos',
    ],
  },
  nav: {
    casinos: 'Casinos',
    // The page lists every visible bonus, flat and ungrouped, so the menu says
    // what is behind it. winpalack keeps "Special Offers": its page is the
    // grouped bonus-area view and is a different thing.
    specialOffers: 'Bonuses',
    categories: 'Categories',
    // First row inside the header and footer dropdowns: the parent's own page.
    allCasinos: 'All Casinos',
    allOffers: 'All Offers',
  },
  home: {
    bonus: 'Bonuses',
    seeMore: 'See more',
    seeAllBonuses: 'See All Bonuses',
    /**
     * The VISIBLE heading over the bonus-type row.
     *
     * The row used to carry no heading at all — the chips were taken to
     * speak for themselves. They do not: arriving mid-page at a band of
     * unlabelled buttons between the hero and the casino list, there is
     * nothing saying what the set IS, and nothing a screen reader can
     * announce for the landmark beyond a generic label nobody wrote for
     * this page.
     *
     * Worded differently on every domain, like every other <h2> here:
     * eleven sites serve one catalogue, and a shared heading is
     * duplicate content.
     */
    bonusTypesTitle: 'Browse By Bonus Type',
    heroEyebrow: 'Independent casino rankings',
    // Split in two so the JSX keeps its emphasised highlight while the words
    // change. The highlight is the brand's own phrase.
    heroHeadline: 'Real-money casinos,',
    heroHighlight: 'rated straight',
    heroSubtitle:
      'We check payouts, bonus terms, licensing and support at every casino we list — so you can pick one with confidence.',
    topCasinosTitle: 'Top Rated Casinos',
    topCasinosSubtitle: 'Ranked on payouts, bonus fairness and licensing. Filter by category.',
    featuredCasinos: 'Browse Rankings',
    specialOffers: 'See Bonus Offers',
    viewAll: 'View All',
    // Leads the home <title>; the year and brand are appended in page.tsx.
    homeTitle: 'Best US Online Casinos, Reviewed',
    faqTitle: 'Questions US Players Ask',
    metaDescription:
      'NetBetUS reviews US-facing online casinos for payout reliability, fair bonuses and licensing — rankings you can check against the terms.',
    // ── The "How we review" band ─────────────────────────────────────────
    // Three steps, numbered, because they ARE a sequence: each one happens
    // after the one before it. Numbering a set that is not ordered is
    // decoration; numbering this one is information.
    methodTitle: 'How we review',
    methodSubtitle: 'Every listed casino goes through the same three checks.',
    methodSteps: [
      {
        kicker: '01 — Deposit',
        title: 'Real money in',
        body:
          'An account opened the way a new player would open one, and the advertised bonus claimed exactly as the promo describes it.',
      },
      {
        kicker: '02 — Play',
        title: 'Terms under load',
        body:
          'Wagering, max-bet rules and game weighting checked against what the T&Cs actually say — not what the banner promises.',
      },
      {
        kicker: '03 — Withdraw',
        title: 'Test the cash-out',
        body:
          'Verification, payout methods and limits checked on a real withdrawal request. A casino that makes leaving hard drops in rank.',
      },
    ],
  },
  casinos: {
    pageTitle: 'Every Casino We Rank',
    pageDescription:
      'The full NetBetUS ranking: every US-facing casino we review, its current bonus, and where it places in its category.',
    // H2 over the offers block on a casino page. The literal 'Special Offers'
    // was hardcoded in the component on all six sites — an identical H2 on
    // every review page in the network.
    offersHeading: 'Bonuses At This Casino',
    // Tail of the summary-panel H2: `{casino.name} at a glance`.
    glanceHeadingTail: 'at a glance',
    reviewTitleTail: 'Casino Review',
    reviewSignature: 'Payouts, bonus terms and licensing checked before it was ranked.',
    reviewSummary: 'reviewed on payouts, bonus fairness, licensing and support.',
    visitCasino: 'Play Now',
    readReview: 'Read Review',
    rating: 'NetBet Score',
    noResults: 'No casinos match this filter yet. Try another category.',
  },
  /**
   * The page behind one bonus type (/bonuses/[slug]).
   *
   * `metaSuffix` is appended to the type's name when the admin wrote no
   * description, so the meta line is still specific to the page rather than
   * boilerplate shared by eight of them.
   */
  bonusCategory: {
    metaSuffix: 'every live offer of this kind at the casinos we rank, with the terms that come with it.',
    countOne: 'bonus',
    countMany: 'bonuses',
  },

  specialOffers: {
    pageTitle: 'Top Bonus Offers',
    pageDescription:
      'Every live bonus at the casinos we rank, with the wagering and minimum deposit stated wherever the operator states them.',
    // Appended to an offer's (shared) bonus text so the nine sites do not ship
    // an identical meta description for the same offer.
    offerMetaSuffix: 'Terms checked against the operator’s own T&Cs by NetBetUS.',
    claim: 'Claim Bonus',
    noResults: 'No bonus offers are live right now.',
  },
  categories: {
    pageTitle: 'Casino Categories',
    pageDescription:
      'One review standard behind every list — pick the kind of casino you came for.',
    // Meta-description tail for a single category page. Category records are
    // shared master data, so this is what keeps the nine sites distinct there.
    categoryMetaSuffix: 'ranked by NetBetUS on payouts, bonus fairness and licensing.',
    noResults: 'No casinos in this category yet.',
  },
  newsletter: {
    title: 'The NetBetUS weekly brief.',
    subtitle: 'New casino reviews, the best bonuses we found, and ranking changes — one short email.',
    placeholder: 'Email address',
    button: 'Subscribe',
    // Shown while the address is being checked. The subscribe request waits on
    // a live address-validation call, so the button has to say so rather than
    // just dimming for a second or two.
    checking: 'Checking…',
    // The spam line is NOT optional wording. This is a double opt-in list: an
    // unconfirmed subscriber never receives anything again, and the verify mail
    // is the single most likely message to be filtered — new sender, one link,
    // no history. Telling people where to look is the difference between a
    // signup and a dead row.
    success:
      'Nearly there — check your inbox and confirm your address to finish. '
      + 'If nothing arrives, it may be sitting in spam or junk.',
    // Shown when the API reports email_sent=false — the site is still
    // collecting addresses but its sending is switched off in the admin.
    // Promising an inbox (and a spam folder to search) for mail that will
    // never arrive is worse than not collecting the address at all.
    successNoEmail:
      'You’re on the list. We are not sending confirmation emails from this site at the moment.',
    error: 'That did not send. Please try again.',
  },
  footer: {
    // Short brand blurb in the footer's first column. The mockup gives that
    // column 1.6fr of a four-track grid — roughly 360px — so this runs to two
    // or three lines there by design, unlike the two-column siblings where the
    // same string had to stay on one.
    tagline:
      'Independent casino reviews and rankings. We may earn a commission from links on this site; it never affects scores.',
    // Registered postal address, shown under the copyright line, as supplied
    // by the operator — never invented. Keep it identical to the site's "Registered address"
    // setting in the admin, which feeds the legal pages and the Organization
    // JSON-LD, and to the postal address in this site's email templates.
    // The postcode's space is a NO-BREAK space (\u00a0): on a phone the line
    // would otherwise wrap between "LE3" and "2FG", splitting one postcode.
    postalAddress: '31 Briarwood Road, Leicester, LE3 2FG, United Kingdom',
    disclaimer:
      'Gambling is for adults 18+ and carries real financial risk. Set deposit limits, never chase losses, and only stake what you can afford to lose.',
  },
  errors: {
    notFound: 'Nothing here — this page does not exist.',
    apiError: 'Could not load this content. Please try again in a moment.',
  },
  reviews: {
    heading: 'Player Reviews',
    empty: 'No player reviews yet — be the first to share how this casino treated you.',
    formTitle: 'Write A Review',
    formIntro: 'Tell other players how deposits, bonuses and withdrawals went.',
    nameLabel: 'Your name',
    emailLabel: 'Email (optional, never published)',
    ratingLabel: 'Rating',
    titleLabel: 'Headline (optional)',
    bodyLabel: 'Your review',
    bodyPlaceholder: 'How did it go — the bonus, the games, getting paid?',
    submit: 'Post Review',
    // Two outcomes, because the site can run pre- or post-moderation
    // (Sites -> Publish reviews immediately). The API reports which one
    // applied; promising the wrong one is a promise the page then breaks.
    success: 'Thanks — your review is now live. Scroll up to see it.',
    successPending: 'Thanks — your review has been submitted and will appear once approved.',
    error: 'That did not send. Please check the form and try again.',
    ratingSummary: (avg: number, total: number) =>
      `${avg.toFixed(1)} out of 5 from ${total} ${total === 1 ? 'review' : 'reviews'}`,
  },
  // Labels on the phone-only hide / show toggle above each chip list.
  collapse: {
    casinoCategories: 'Casino categories',
    bonusTypes: 'Bonus types',
  },
} as const
