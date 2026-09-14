// Central content for the site. Edit copy, links and people here —
// components read everything from this file.

export const site = {
  name: 'Alttred Miinds',
  tagline: "We Don't Do Agency. We Do Alchemy",
  description:
    'Data-backed, creative-led growth for brands who want profit, not just impressions and applause.',
  email: 'hello@alttredminds.com',
  socials: {
    instagram: 'https://www.instagram.com/',
    linkedin: 'https://www.linkedin.com/',
    youtube: 'https://www.youtube.com/',
  },
};

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Coaches', href: '/#coaches' },
  { label: 'D2C', href: '/#d2c' },
  { label: 'Case Studies', href: '/#testimonials' },
  { label: 'About Us', href: '/#team' },
  { label: 'Contact Us', href: '/contact' },
];

// Two rows of six cells; the label occupies the middle two cells of row one.
export const clientLogos = {
  rowOneLeft: [
    { name: 'Yonder', src: '/images/logos/yonder.png', w: 315, h: 87 },
    { name: 'Prosper', src: '/images/logos/prosper.png', w: 263, h: 81 },
  ],
  rowOneRight: [
    { name: 'Countingup', src: '/images/logos/countingup.png', w: 361, h: 96 },
    { name: 'TransferGo', src: '/images/logos/transfergo.png', w: 331, h: 56 },
  ],
  rowTwo: [
    { name: 'TransactPay', src: '/images/logos/transactpay.png', w: 460, h: 98 },
    { name: 'ANNA', src: '/images/logos/anna.png', w: 198, h: 73 },
    { name: 'Sidekick', src: '/images/logos/sidekick.png', w: 359, h: 57 },
    { name: 'LettsPay', src: '/images/logos/lettspay.png', w: 322, h: 73 },
    { name: 'WealthKernel', src: '/images/logos/wealthkernel.png', w: 382, h: 112 },
    { name: 'AfriChange', src: '/images/logos/africhange.png', w: 446, h: 83 },
  ],
};

export const pillars = [
  {
    title: 'Where Spreadsheets Meet Storyboards',
    body: "Every ad is backed by a number, and every number tells a story worth watching. We don't choose between data and creative; we fuse them.",
    image: '/images/card-purple.jpg',
    glow: 'rgba(214, 92, 214, 0.45)',
  },
  {
    title: 'Built for Hyperscale, Not Hype',
    body: "We don't spray budget across every account and hope. We go all-in on the ones ready to explode, then push them past their ceiling.",
    image: '/images/card-green.jpg',
    glow: 'rgba(140, 220, 90, 0.4)',
  },
  {
    title: 'Profit Is the Only KPI That Pays Rent',
    body: 'Vanity metrics look great on a slide. We optimize every rupee of spend for what actually lands in your bank account.',
    image: '/images/card-blue.jpg',
    glow: 'rgba(40, 120, 255, 0.45)',
  },
];

// Values are placeholders from the design — swap "XX" for real numbers
// (e.g. "50+", "120 Cr+", "35%+") and they will count up on scroll.
export const stats = [
  { value: 'XX+', label: 'Brands Hyperscaled', theme: 'cream', height: 255 },
  { value: 'XX Cr+', label: 'Ad Spend Managed', theme: 'stone', height: 342 },
  { value: 'XX+', label: 'Years Combined Growth Expertise', theme: 'dark', height: 449 },
  { value: 'XX%+', label: 'Avg. Profit Uplift', theme: 'blue', height: 653 },
];

export const capabilities = [
  {
    id: 'performance',
    title: ['Performance', 'Marketing'],
    body: 'Meta, Google and beyond, run like a P&L, not a spend report.',
    visual: 'bars',
  },
  {
    id: 'creative',
    title: ['Creative That', 'Converts'],
    body: 'Scroll-stopping work, stress-tested against data. Built to sell, not just to look pretty.',
    visual: 'creative',
  },
  {
    id: 'funnel',
    title: ['Funnel &', 'Conversion'],
    body: 'From click to checkout: we find the leaks, kill the friction, turn traffic into transactions.',
    visual: 'funnel',
  },
  {
    id: 'analytics',
    title: ['Data &', 'Analytics'],
    body: "Dashboards you'll actually open. Real numbers, zero fluff, decisions made in days, not quarters.",
    visual: 'analytics',
  },
];

export const industries = [
  {
    id: 'coaches',
    title: 'Coaches & Creators',
    body: 'From your first webinar funnel to your fiftieth cohort launch, we turn expertise into a scalable revenue machine.',
    image: '/images/industry-coaches.jpg',
  },
  {
    id: 'edtech',
    title: 'EdTech',
    body: 'Enrollments, retention, LTV: we speak fluent edtech, engineering growth from first click to course completion.',
    image: '/images/industry-edtech.jpg',
  },
  {
    id: 'd2c',
    title: 'D2C',
    body: "We've cracked profitable D2C scaling, from first sale to repeat customer, without torching your margins to get there.",
    image: '/images/industry-d2c.jpg',
  },
];

// Testimonials. Quotes marked PLACEHOLDER were written to fill the layout —
// replace them with real client words before launch.
// Add `video: '/videos/file.mp4'` to a photo card and it autoplays when active.
export const testimonials = [
  {
    type: 'photo',
    image: '/images/testimonial-thomas.jpg',
    tag: 'D2C',
    quote: '“Great strategy, better leads, and real growth.”',
    name: 'Thomas',
    role: 'General Manager',
  },
  {
    type: 'color',
    color: '#bbf0bd',
    logo: '/images/logo-naestved.png',
    tag: 'EdTech',
    quote: '“Finally, marketing that delivers measurable results.”',
    name: 'Heidi',
    role: 'CEO',
  },
  {
    type: 'photo',
    image: '/images/testimonial-dorte.jpg',
    tag: 'D2C',
    quote: '“We’ve seen a lift in the quality of customers on our page.”',
    name: 'Dorte',
    role: 'SEO',
  },
  {
    type: 'color',
    color: '#e7e3fd',
    wordmark: 'Northwind Learning',
    tag: 'EdTech',
    // PLACEHOLDER
    quote: '“For the first time I know exactly what every rupee of ad spend is doing.”',
    name: 'Nina',
    role: 'Founder',
  },
  {
    type: 'photo',
    image: '/images/testimonial-tina.jpg',
    tag: 'Coaches',
    // PLACEHOLDER
    quote: '“Our cost per acquisition dropped while revenue kept climbing.”',
    name: 'Tina',
    role: 'Co-founder',
  },
  {
    type: 'color',
    color: '#ffffaf',
    wordmark: 'Studio Maja',
    tag: 'D2C',
    // PLACEHOLDER
    quote: '“They think like owners, not vendors. Every decision ties back to profit.”',
    name: 'Maja',
    role: 'Founder',
  },
  {
    type: 'photo',
    image: '/images/testimonial-lasse.jpg',
    tag: 'Coaches',
    // PLACEHOLDER
    quote: '“Our cohort launches sell out now. The funnel just works.”',
    name: 'Lasse',
    role: 'Coach & Creator',
  },
];

// PLACEHOLDER people from the design — replace names, roles, photos and links.
export const team = [
  { name: 'Name', role: 'Founder', image: '/images/team.jpg', linkedin: 'https://www.linkedin.com/' },
  { name: 'Name', role: 'Co-Founder', image: '/images/team.jpg', linkedin: 'https://www.linkedin.com/' },
  { name: 'Name', role: 'Chief Operations Officer', image: '/images/team.jpg', linkedin: 'https://www.linkedin.com/' },
  { name: 'Name', role: 'Strategist', image: '/images/team.jpg', linkedin: 'https://www.linkedin.com/' },
];

export const footerColumns = [
  {
    title: 'Verticals',
    links: [
      { label: 'Coaches & Creators', href: '/#coaches' },
      { label: 'EdTech', href: '/#edtech' },
      { label: 'D2C', href: '/#d2c' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/#team' },
      { label: 'Case Studies', href: '/#testimonials' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Legal & Disclaimer', href: '/legal' },
      { label: 'Social Policy', href: '/social-policy' },
    ],
  },
  {
    title: 'Get in Touch',
    links: [{ label: 'Contact Us', href: '/contact' }],
  },
];

export const budgetOptions = ['Under ₹5L / month', '₹5L – ₹20L / month', '₹20L – ₹1Cr / month', '₹1Cr+ / month'];
