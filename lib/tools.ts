export interface Tool {
  slug: string;
  num: string;
  title: string;
  h1: string;
  shortDesc: string;
  metaTitle: string;
  metaDesc: string;
  whyText: string;
  faqs: { q: string; a: string }[];
  nextStep: string;
  relatedServiceSlug: string;
  component: string;
}

export const TOOLS: Tool[] = [
  {
    slug: 'gbp-audit-score',
    num: '01',
    title: 'GBP Audit Score',
    h1: 'Free Google Business Profile Audit Tool',
    shortDesc: 'Score your Google Business Profile across 15 key factors and see exactly what\'s missing.',
    metaTitle: 'Free Google Business Profile Audit Tool | GBP Score Checker',
    metaDesc: 'Free Google Business Profile audit tool for Farmingdale, NY businesses. Score your profile across 15 key factors and see what\'s holding you back. No signup required.',
    whyText: 'Google decides who shows up in the local 3-pack partly based on how complete and active a profile is. A business with a half-filled-out profile can lose that spot to a competitor down the street who simply took the time to fill in every field, post regularly, and add real photos. This GBP audit checklist shows you what\'s missing.',
    faqs: [
      { q: 'How is my GBP score calculated?', a: 'Your score is based on your answers to 15 questions covering the parts of your profile that influence local visibility, including categories, photos, hours, description completeness, and posting activity. Each answer adds or subtracts points to give you a clear overall score.' },
      { q: 'How accurate is this free Google Business Profile audit tool?', a: 'It\'s accurate for what it measures — the visible, checkable parts of your profile. It won\'t see internal Google ranking signals only Google has access to, but it will catch the common gaps that hurt real businesses every day.' },
      { q: 'Do I need to sign up to use it?', a: 'No. This tool is completely free with no signup, no email required, and no account to create. Answer the questions and get your score immediately.' },
      { q: 'What should I do with my results?', a: 'Start with whatever scored lowest — that\'s usually the fastest win. If your description or photos are missing, fill those in first, since they\'re quick fixes with real impact.' },
      { q: 'How is this different from paying for a full audit?', a: 'This tool checks what\'s visible and fixable in minutes. A paid audit goes deeper into technical ranking factors, competitor comparisons, and a full strategy.' },
    ],
    nextStep: 'Your GBP score checker tells you what\'s missing. Our GBP Optimization service is where we go in and fix it — categories, photos, posts, and everything else your profile needs to actually compete for the local 3-pack in Farmingdale.',
    relatedServiceSlug: 'gbp-optimization',
    component: 'GBPAuditTool',
  },
  {
    slug: 'local-seo-score',
    num: '02',
    title: 'Local SEO Score',
    h1: 'Free Local SEO Checker',
    shortDesc: 'A 10-question health check that tells you where your overall local SEO stands today.',
    metaTitle: 'Free Local SEO Checker | Local SEO Score Tool',
    metaDesc: 'Free local SEO checker for Farmingdale, NY businesses. Answer 10 questions and get your local SEO health score instantly. No signup required.',
    whyText: 'Local SEO isn\'t one thing — it\'s a handful of moving pieces that all need to work together. A business can have a great website and still lose to a competitor with stronger reviews and more consistent listings. Without a local SEO health check, most owners only find out something\'s wrong when a customer mentions they "couldn\'t find you."',
    faqs: [
      { q: 'How is my local SEO score calculated?', a: 'Your score reflects your answers across 10 areas that matter for local visibility — things like your Google Business Profile, website basics, review volume, and listing consistency.' },
      { q: 'Is this the same as a full technical SEO audit?', a: 'No. This is a local SEO health check focused specifically on local visibility factors, not a full technical crawl of your website.' },
      { q: 'Do I need to create an account to use this local SEO checker?', a: 'No signup is needed. It\'s free to use as many times as you want, with no email or account required.' },
      { q: 'My score is low — where do I start?', a: 'Focus on the lowest-scoring section first. For most Farmingdale businesses, that\'s either an incomplete Google Business Profile or inconsistent business listings.' },
      { q: 'Can I retake this local SEO checklist after making changes?', a: 'Yes. Come back anytime you\'ve made updates to see how your score has changed. There\'s no limit on how often you can check.' },
    ],
    nextStep: 'Once you know where you stand, our Local SEO service handles the work this checklist surfaces — from listings to on-site fixes — so your Farmingdale business shows up when it matters.',
    relatedServiceSlug: 'local-seo-optimization',
    component: 'LocalSeoScoreTool',
  },
  {
    slug: 'roi-calculator',
    num: '03',
    title: 'ROI Calculator',
    h1: 'Local SEO ROI Calculator',
    shortDesc: 'See what better local rankings could actually be worth in revenue.',
    metaTitle: 'Local SEO ROI Calculator | SEO Revenue Calculator',
    metaDesc: 'Free local SEO ROI calculator for Farmingdale, NY businesses. Enter your numbers and see what better local rankings could be worth in real revenue. No signup required.',
    whyText: '"Better SEO" is a vague promise until you see it in dollars. Business owners often underestimate how many potential customers are searching for what they offer nearby and simply never finding them. An SEO revenue calculator turns "you\'re missing out on customers" into a number you can actually weigh against what it would cost to fix it.',
    faqs: [
      { q: 'How does this ranking ROI calculator come up with its estimate?', a: 'It uses the numbers you enter — like average customer value and estimated local search volume — combined with typical click-through patterns for local search results to estimate potential additional revenue from improved visibility.' },
      { q: 'Is this number guaranteed?', a: 'No. It\'s an estimate based on the inputs you provide and general local search behavior, not a guarantee. Every business and market is different.' },
      { q: 'What information do I need to use this local SEO ROI calculator?', a: 'Just a rough sense of your average customer value and how often people search for businesses like yours nearby. You don\'t need exact figures — reasonable estimates work fine.' },
      { q: 'Do I need to sign up to see my results?', a: 'No. Your estimate appears immediately with no signup or contact information required.' },
      { q: 'How should I use this number?', a: 'Use it as a starting point for deciding whether investing in local SEO makes sense for your business, not as a fixed promise.' },
    ],
    nextStep: 'If the numbers make sense to you, our Local SEO service is built to go after exactly the kind of visibility this calculator estimates — turning the potential you just saw into actual rankings.',
    relatedServiceSlug: 'local-seo-optimization',
    component: 'RoiCalculatorTool',
  },
  {
    slug: 'review-request-generator',
    num: '04',
    title: 'Review Request Generator',
    h1: 'Google Review Request Message Generator',
    shortDesc: 'Create ready-to-send SMS, email, or WhatsApp messages that get customers to leave reviews.',
    metaTitle: 'Google Review Request Message Generator | Review Request Templates',
    metaDesc: 'Free Google review request message generator for Farmingdale, NY businesses. Create ready-to-send SMS, email, or WhatsApp review request messages in seconds. No signup required.',
    whyText: 'Asking customers for reviews is awkward if you\'re doing it from scratch every time. A good review request template generator removes the friction — the right words, sent at the right moment, turn a happy customer into a public review instead of a missed opportunity.',
    faqs: [
      { q: 'What platforms can I send these review requests through?', a: 'The generator creates messages formatted for SMS, email, and WhatsApp, so you can pick whichever channel your customers actually respond to.' },
      { q: 'Can I customize the generated review request template?', a: 'Yes. The message is a starting point — feel free to adjust the tone or add your business\'s own voice before sending it.' },
      { q: 'Do I need to sign up to use the review request template generator?', a: 'No signup is required. Generate as many messages as you need, completely free.' },
      { q: 'When is the best time to send a review request?', a: 'Right after a positive interaction — a completed job, a good visit, a satisfied customer walking out the door — is when people are most likely to actually leave a review.' },
      { q: 'Will this help my Google review numbers?', a: 'It can help by making it easier and faster to ask consistently, which is usually the biggest barrier. More consistent asking tends to lead to more reviews over time.' },
    ],
    nextStep: 'A steady flow of reviews is one piece of local SEO — pairing it with our GBP Optimization service ensures those reviews are working alongside a fully optimized profile.',
    relatedServiceSlug: 'gbp-optimization',
    component: 'ReviewRequestTool',
  },
  {
    slug: 'local-keyword-generator',
    num: '05',
    title: 'Local Keyword Generator',
    h1: 'Local Keyword Generator Tool',
    shortDesc: 'Get 30 local keyword ideas built around your business type and city.',
    metaTitle: 'Local Keyword Generator Tool | Free Local SEO Keyword Tool',
    metaDesc: 'Free local keyword generator tool for Farmingdale, NY businesses. Enter your business type and city to get 30 local keyword ideas. No signup required.',
    whyText: 'Using the wrong words on your website is one of the most common ways Farmingdale businesses miss out on local search traffic. If your customers search "emergency plumber Farmingdale" and your site only says "plumbing services," you\'re speaking a different language than the people looking for you. A local SEO keyword tool bridges that gap.',
    faqs: [
      { q: 'How does this local keyword generator tool come up with ideas?', a: 'It combines your business type and city to generate common local search patterns — service-plus-location combinations, question-based searches, and near-me variations people actually use.' },
      { q: 'Do I need any SEO experience to use this?', a: 'No. Just enter your business type and city, and the tool handles generating relevant local keyword ideas for you.' },
      { q: 'What should I do with the keyword list?', a: 'Use the strongest matches in your website copy, page titles, and Google Business Profile posts — naturally, not stuffed in. A few well-placed keywords beat a page crammed with them.' },
      { q: 'Is this free small business keyword research tool a full replacement for keyword research?', a: 'It\'s a strong starting point for a local business, though a full SEO strategy may involve deeper research into search volume and competition. For most small businesses, this gets you most of the way there.' },
      { q: 'Can I use this more than once?', a: 'Yes, and you probably should — try different business type phrasings to see a wider range of keyword ideas.' },
    ],
    nextStep: 'Once you have your keyword list, our Local SEO service puts those keywords to work across your website and profile so they actually drive rankings.',
    relatedServiceSlug: 'local-seo-optimization',
    component: 'KeywordGeneratorTool',
  },
  {
    slug: 'google-post-generator',
    num: '06',
    title: 'Google Post Generator',
    h1: 'Google Business Profile Post Generator',
    shortDesc: 'Generate a ready-to-publish Google Business Profile post in seconds.',
    metaTitle: 'Google Business Profile Post Generator | Free GBP Post Tool',
    metaDesc: 'Free Google Business Profile post generator for Farmingdale, NY businesses. Generate ready-to-publish GBP posts in seconds. No signup required.',
    whyText: 'An inactive Google Business Profile signals to both Google and customers that a business might not be paying attention. Regular posts are one of the easiest, lowest-effort signals of an active business, but "easy" only helps if it actually gets done — which is exactly what a GBP post template generator is for.',
    faqs: [
      { q: 'What kind of posts does this Google post writer free tool create?', a: 'It generates posts suited for common local business updates — promotions, announcements, and general engagement posts — written to fit directly into your Google Business Profile.' },
      { q: 'Can I edit the post before publishing it?', a: 'Yes, feel free to tweak the wording to match your business\'s voice before you post it.' },
      { q: 'How often should I post to my Google Business Profile?', a: 'Aiming for at least once a week keeps your profile active and gives Google fresh, recent content to show searchers.' },
      { q: 'Do I need to sign up to generate posts?', a: 'No signup is needed — generate and copy as many posts as you\'d like, for free.' },
      { q: 'Will posting more actually help my rankings?', a: 'Consistent activity is one factor among several that can support local visibility. It works best alongside a complete, well-optimized profile.' },
    ],
    nextStep: 'Consistent posting is one piece of a strong profile — our GBP Optimization service makes sure the rest of your profile is built to support it.',
    relatedServiceSlug: 'gbp-optimization',
    component: 'GooglePostTool',
  },
  {
    slug: 'citation-checklist',
    num: '07',
    title: 'Citation Checklist',
    h1: 'Local Citation Checklist',
    shortDesc: 'Check your business listings against 40+ directories where customers search.',
    metaTitle: 'Local Citation Checklist | Free NAP Consistency Checker',
    metaDesc: 'Free local citation checklist for Farmingdale, NY businesses. Check your business listings against 40+ directories. NAP consistency checker included. No signup required.',
    whyText: 'Inconsistent listings — a wrong phone number here, an old address there — confuse both customers and search engines, and they can quietly undercut your local rankings without you ever noticing. A NAP consistency checker like this one turns a vague worry into a specific list you can actually work through.',
    faqs: [
      { q: 'What does NAP consistency mean, and why does this citation checklist check for it?', a: 'NAP stands for Name, Address, and Phone number. This citation building checklist checks whether those details match across major directories, since mismatches can hurt how much search engines trust your listings.' },
      { q: 'How many directories does this checklist cover?', a: 'It covers 40+ directories where local customers commonly search for businesses, giving you a broad view of your citation coverage.' },
      { q: 'Do I have to fix everything on the list at once?', a: 'No. Start with the highest-traffic directories first, then work through the rest over time — even a few fixes a week adds up.' },
      { q: 'Is this citation checklist free to use?', a: 'Yes, completely free with no signup required.' },
      { q: 'What happens if my listings are inconsistent?', a: 'It won\'t break your business overnight, but it can quietly weaken how much search engines trust your business information, which can affect how often you show up in local results.' },
    ],
    nextStep: 'Working through 40+ directories on your own takes real time. Our Local SEO service handles citation building and cleanup for you, so your listings stay accurate everywhere customers look.',
    relatedServiceSlug: 'citation-building-farmingdale-ny',
    component: 'CitationChecklistTool',
  },
  {
    slug: 'competitor-gap-checker',
    num: '08',
    title: 'Competitor Gap Checker',
    h1: 'Local SEO Competitor Analysis Tool (Free)',
    shortDesc: 'See exactly where you\'re losing to a competitor across 12 ranking factors.',
    metaTitle: 'Free Local SEO Competitor Analysis Tool | Competitor Gap Checker',
    metaDesc: 'Free local SEO competitor analysis tool for Farmingdale, NY businesses. Compare yourself to a competitor across 12 ranking factors. No signup required.',
    whyText: 'It\'s hard to know if your marketing is working without something to measure it against. A competitor gap checker shows you specifically where a rival is winning — more reviews, a more complete profile, better citations — so you can focus your time on what will actually move the needle.',
    faqs: [
      { q: 'What factors does this local SEO competitor analysis tool check?', a: 'It compares you and a competitor across 12 factors that influence local visibility, including review count, profile completeness, and citation presence.' },
      { q: 'Do I need to know a lot about my competitor to use this?', a: 'No — basic, publicly visible information about their business is enough for the tool to run a comparison.' },
      { q: 'Is this competitor gap checker really free?', a: 'Yes, fully free with no signup or hidden steps.' },
      { q: 'What should I do if I\'m behind in several areas?', a: 'Pick the gap that\'s easiest to close first — often reviews or profile completeness — and use it to build momentum before tackling bigger, slower-moving factors.' },
      { q: 'Can I compare myself to more than one competitor?', a: 'Yes, you can run the comparison as many times as you\'d like against different competitors to get a fuller picture.' },
    ],
    nextStep: 'Seeing the gap is the easy part — closing it is where our Local SEO service comes in, targeting the specific areas where a competitor currently has the edge over you.',
    relatedServiceSlug: 'local-seo-optimization',
    component: 'CompetitorGapTool',
  },
  {
    slug: 'social-bio-generator',
    num: '09',
    title: 'Social Bio Generator',
    h1: 'Social Media Bio Generator for Business',
    shortDesc: 'Write bios for five social platforms at once, tailored to your business.',
    metaTitle: 'Social Media Bio Generator for Business | Free Bio Writer Tool',
    metaDesc: 'Free social media bio generator for Farmingdale, NY businesses. Write bios for five platforms at once, tailored to your business. No signup required.',
    whyText: 'A blank or generic bio is often the first thing a potential customer sees, and it can quietly cost you trust before they even look at your website. A consistent, clear presence across platforms helps customers recognize and trust your business wherever they find it.',
    faqs: [
      { q: 'Which platforms does this Instagram bio generator also cover?', a: 'It generates bios formatted for five platforms at once, including Instagram, so you can update your profiles in one pass instead of writing each separately.' },
      { q: 'Can I edit the bios after they\'re generated?', a: 'Yes, they\'re meant as a strong starting point — adjust the tone or details to match how your business actually talks to customers.' },
      { q: 'Is this business bio writer tool free to use?', a: 'Yes, it\'s completely free with no signup required.' },
      { q: 'What information do I need to generate a bio?', a: 'Just basic details about your business — what you do, where you\'re located, and what makes you worth choosing.' },
      { q: 'Will this help with SEO too?', a: 'A clear, keyword-appropriate bio can help people find and understand your business faster across platforms, which supports your overall online presence.' },
    ],
    nextStep: 'Your bios are one part of showing up consistently online — our Local SEO service makes sure that consistency carries through to your Google Business Profile and website too.',
    relatedServiceSlug: 'social-media-handle-setup',
    component: 'SocialBioTool',
  },
  {
    slug: 'review-response-templates',
    num: '10',
    title: 'Review Response Templates',
    h1: 'Review Response Template Generator',
    shortDesc: 'Get the right words for responding to any star rating, good or bad.',
    metaTitle: 'Review Response Template Generator | Free Review Reply Tool',
    metaDesc: 'Free review response template generator for Farmingdale, NY businesses. Get the right words for responding to any star rating. No signup required.',
    whyText: 'How you respond to reviews is public — future customers read your replies just as much as the reviews themselves. A thoughtful response to a great review reinforces trust, and a calm, professional response to a bad one can actually turn a skeptical reader into a customer.',
    faqs: [
      { q: 'How do I respond to Google reviews using this template generator?', a: 'Select the star rating of the review you received, and the generator gives you a matching response template you can copy, adjust, and post directly.' },
      { q: 'Does this include a negative review response template?', a: 'Yes, it includes templates specifically for lower-star reviews, written to sound calm and professional rather than defensive.' },
      { q: 'What about a 5-star review response — do I still need to reply?', a: 'Yes. A quick, genuine thank-you response to a 5-star review shows customers you\'re paying attention, even to positive feedback.' },
      { q: 'Do I need to sign up to use this tool?', a: 'No signup is needed — generate as many review response templates as you need, for free.' },
      { q: 'Can I personalize the generated response?', a: 'Yes, and you generally should — add a specific detail from the review itself so your reply feels genuine rather than copy-pasted.' },
    ],
    nextStep: 'Responding well is half the picture — our GBP Optimization service helps make sure you\'re also generating a steady flow of reviews in the first place.',
    relatedServiceSlug: 'gbp-optimization',
    component: 'ReviewResponseTool',
  },
];

export function getToolBySlug(slug: string): Tool | undefined {
  return TOOLS.find((t) => t.slug === slug);
}

export function getToolSlugs(): string[] {
  return TOOLS.map((t) => t.slug);
}
