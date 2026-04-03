// ─── Navigation ─────────────────────────────────────────────────────────────
export const navLinks = [
  { label: 'Home',         href: '/' },
  { label: 'About Us',     href: '/about' },
  { label: 'Services',     href: '/services' },
  { label: 'Portfolio',    href: '/portfolio' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Blog',         href: '/blog' },
  { label: 'Packages',     href: '/packages' },
  { label: 'Contact',      href: '/contact' },
]

// ─── Stats ───────────────────────────────────────────────────────────────────
export const stats = [
  { value: 200,  suffix: '+', label: 'Local Businesses' },
  { value: 5,    suffix: 'M+', label: 'Social Reach' },
  { value: 98,   suffix: '%',  label: 'Client Retention' },
  { value: 10,   suffix: '+',  label: 'Years Experience' },
]

// ─── Services ────────────────────────────────────────────────────────────────
export const services = [
  {
    icon: 'Instagram',
    title: 'Social Media Management',
    href: '/services/social-media-management',
    description: 'Full-service management of your Instagram, Facebook and TikTok — content, captions, scheduling, and community management.',
  },
  {
    icon: 'TrendingUp',
    title: 'Paid Advertising',
    href: '/services/paid-advertising',
    description: 'Targeted Meta and TikTok ad campaigns that put your brand in front of the right local audience at the right time.',
  },
  {
    icon: 'Video',
    title: 'Content Creation',
    href: '/services/content-creation',
    description: 'Scroll-stopping photos, Reels, and graphics crafted specifically for your brand voice and local audience.',
  },
  {
    icon: 'Search',
    title: 'SEO & Local Search',
    href: '/services/local-seo',
    description: 'Dominate local search results. We optimise your Google profile and website so customers in South Yorkshire find you first.',
  },
  {
    icon: 'BarChart2',
    title: 'Analytics & Reporting',
    href: '/services/social-media-audit',
    description: 'Clear monthly reports showing exactly what\'s working — growth, reach, engagement, and return on investment.',
  },
  {
    icon: 'MessageCircle',
    title: 'Brand Strategy',
    href: '/services/social-media-strategy',
    description: 'We help you define your brand story, tone of voice, and visual identity so every post feels consistent and premium.',
  },
]

// ─── Testimonials ─────────────────────────────────────────────────────────────
export const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Owner, The Blossom Café — Wath',
    quote: 'Bee Viral completely transformed our Instagram. We went from 300 to over 4,000 followers in four months and our footfall has genuinely increased. Incredible team.',
    rating: 5,
  },
  {
    name: 'James Hartley',
    role: 'Director, Hartley Roofing — Rotherham',
    quote: 'I was sceptical about social media for a roofing company but Bee Viral proved me wrong. We now get leads directly from Facebook every single week.',
    rating: 5,
  },
  {
    name: 'Priya Patel',
    role: 'Manager, Spice Garden Restaurant — Barnsley',
    quote: 'Our content looks absolutely professional. Customers comment on our posts every day now. Best investment we\'ve made in years.',
    rating: 5,
  },
  {
    name: 'Tom Clarke',
    role: 'Owner, Clarke\'s Auto — South Yorkshire',
    quote: 'From zero online presence to 2,000 engaged followers in three months. Bee Viral know exactly what they\'re doing for local businesses.',
    rating: 5,
  },
  {
    name: 'Emma Dawson',
    role: 'Founder, Dawson\'s Florals — Rotherham',
    quote: 'The team at Bee Viral genuinely care about your business. They treat our small shop like it\'s a big brand and the results speak for themselves.',
    rating: 5,
  },
]

// ─── Packages ────────────────────────────────────────────────────────────────
export const packages = [
  {
    name: 'Starter',
    tagline: 'Get your business visible online',
    price: 120,
    featured: false,
    features: [
      '12 branded posts per month',
      'Facebook & Instagram',
      '3 posts per week',
      'Custom content & graphics',
      'Your logo on every post',
      'Professional captions & hashtags',
      'Scheduling & publishing',
      'Monthly performance report',
      'No setup fees',
      'Cancel anytime — no contract',
    ],
    notIncluded: ['Dedicated account manager', 'Priority support', 'TikTok', 'SEO blog posts'],
  },
  {
    name: 'Growth',
    tagline: 'More content, more reach, more customers',
    price: 150,
    featured: true,
    features: [
      '16 branded posts per month',
      'Facebook & Instagram',
      '4 posts per week',
      'Custom content & graphics',
      'Your logo on every post',
      'Professional captions & hashtags',
      'Scheduling & publishing',
      'Monthly performance report',
      'Dedicated account manager',
      '2 SEO blog posts per month',
      'No setup fees',
      'Cancel anytime — no contract',
    ],
    notIncluded: ['Priority support', 'TikTok'],
  },
  {
    name: 'Hive',
    tagline: 'Maximum reach across every major platform',
    price: 200,
    featured: false,
    features: [
      '20 branded posts per month',
      'Facebook, Instagram & TikTok',
      '~5 posts per week',
      'Custom content & graphics',
      'Your logo on every post',
      'Professional captions & hashtags',
      'Scheduling & publishing',
      'Monthly performance report',
      'Dedicated account manager',
      'Priority support',
      '4 SEO blog posts per month',
      'No setup fees',
      'Cancel anytime — no contract',
    ],
    notIncluded: [],
  },
]

// ─── Service sub-pages ────────────────────────────────────────────────────────
export const serviceLinks = [
  { label: 'Social Media Management',   href: '/services/social-media-management' },
  { label: 'Paid Advertising',          href: '/services/paid-advertising' },
  { label: 'Content Creation',          href: '/services/content-creation' },
  { label: 'Local SEO',                 href: '/services/local-seo' },
  { label: 'Website Design & Build',    href: '/services/website-design' },
  { label: 'Booking Systems',           href: '/services/booking-systems' },
  { label: 'Social Media Strategy',     href: '/services/social-media-strategy' },
  { label: 'Social Media Audit',        href: '/services/social-media-audit' },
]

// ─── Locations ────────────────────────────────────────────────────────────────
export const locations = ['Wath', 'Rotherham', 'Barnsley', 'South Yorkshire']

// ─── Social links ─────────────────────────────────────────────────────────────
export const socials = [
  { label: 'Instagram', href: 'https://www.instagram.com/beeviralltd/' },
  { label: 'Facebook',  href: 'https://www.facebook.com/profile.php?id=61583786462363' },
]
