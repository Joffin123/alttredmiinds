// Central content for the site. Edit copy, links and people here —
// components read everything from this file.

export const site = {
  name: 'Alttred Miinds',
  tagline: "We Don't Do Agency. We Do Alchemy",
  description:
    'Data-backed, creative-led growth for brands who want profit, not just impressions and applause.',
  email: 'hello@alttredminds.com',
  socials: {
    instagram: 'https://www.instagram.com/alttredmiinds',
    linkedin: 'https://www.linkedin.com/company/alttred-miinds/',
  },
};

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Coaches', href: 'https://alttredmiinds.com/coaches/' },
  { label: 'D2C', href: 'https://alttredmiinds.com/d2c/' },
  //{ label: 'Case Studies', href: '/#testimonials' },
  { label: 'About Us', href: '/#pillars' },
  { label: 'Contact Us', href: '/contact' },
];

// Two rows of six cells; the label occupies the middle two cells of row one.
export const clientLogos = {
  rowOne: [
    { name: 'Salt', src: '/images/logos/salt.png', w: 315, h: 87 },
    { name: 'Swiggy', src: '/images/logos/swiggy.png', w: 263, h: 81 },
    { name: 'UVAirspace', src: '/images/logos/uv_airspace.png', w: 361, h: 96 },
    { name: 'Calmosis', src: '/images/logos/clamosis.png', w: 331, h: 56 },
    { name: 'MamaEarth', src: '/images/logos/mamaearth.png', w: 460, h: 98 },
    { name: 'IFB', src: '/images/logos/ifb.png', w: 198, h: 73 },
  ],
  rowTwo: [
    { name: 'Dot & Key', src: '/images/logos/dot_and_key.png', w: 359, h: 57 },
    { name: 'Jawa', src: '/images/logos/jawa.png', w: 322, h: 73 },
    { name: 'Mirraw', src: '/images/logos/mirraw.png', w: 382, h: 112 },
    { name: 'Yezdi', src: '/images/logos/yezdi.png', w: 446, h: 83 },
    { name: 'Carbonadno', src: '/images/logos/carbonado.png', w: 460, h: 98 },
    { name: 'Personal touch skincare', src: '/images/logos/personal_touch_skincare.png', w: 198, h: 73 },
  ],
  rowThree: [
    { name: 'Kama Ayurveda', src: '/images/logos/kama_ayurveda.png', w: 359, h: 57 },
    { name: 'The Earth Collective', src: '/images/logos/the_earth_collective.png', w: 322, h: 73 },
    { name: 'AnugagShukhla Speaks', src: '/images/logos/anuragshukla_speaks.png', w: 382, h: 112 },
    { name: 'Sneh Desai', src: '/images/logos/sneh_desai.png', w: 446, h: 83 },
    { name: 'The Baatra Numerology', src: '/images/logos/the_batraa_numerology.png', w: 460, h: 98 },
     { name: 'Arviend Sud', src: '/images/logos/arviend_sud.png', w: 198, h: 73 },
  ],
  rowFour: [
    { name: 'Astro Arun Pandit', src: '/images/logos/astro_arun_pandit.png', w: 359, h: 57 },
    { name: 'Lamcon', src: '/images/logos/lamcon.png', w: 322, h: 73 },
    { name: 'Wan', src: '/images/logos/wan.png', w: 382, h: 112 },
    { name: 'Vastu Shikhar', src: '/images/logos/vastu_shikhar.png', w: 446, h: 83 },
    { name: 'Skill Nation', src: '/images/logos/skill_nation.png', w: 446, h: 83 },
    { name: 'Dev Gadhvi', src: '/images/logos/dev_gadhvi.png', w: 446, h: 83 },
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
  { value: '25+', label: 'Brands Hyperscaled', theme: 'cream', height: 255 },
  { value: '3Cr+', label: 'Ad Spend Managed', theme: 'stone', height: 342 },
  { value: '12+', label: 'Years Combined Growth Expertise', theme: 'dark', height: 449 },
  { value: '100%', label: 'Avg. Profit Uplift', theme: 'blue', height: 653 },
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
    href: 'https://alttredmiinds.com/coaches/'
  },
  {
    id: 'edtech',
    title: 'EdTech',
    body: 'Enrollments, retention, LTV: we speak fluent edtech, engineering growth from first click to course completion.',
    image: '/images/industry-edtech.png',
  },
  {
    id: 'd2c',
    title: 'D2C',
    body: "We've cracked profitable D2C scaling, from first sale to repeat customer, without torching your margins to get there.",
    image: '/images/industry-d2c.png',
    href: 'https://alttredmiinds.com/d2c/'

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
      { label: 'Coaches & Creators', href: 'https://alttredmiinds.com/coaches/' },
      { label: 'D2C', href: 'https://alttredmiinds.com/d2c/' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/#pillars' },
      //{ label: 'Case Studies', href: '/#testimonials' },
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
