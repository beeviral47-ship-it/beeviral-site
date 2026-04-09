export interface ActionItem {
  id: string
  title: string
  detail: string
}

export interface StrategySection {
  num: string
  title: string
  intro: string
  items: ActionItem[]
}

export const strategySections: StrategySection[] = [
  {
    num: '01',
    title: 'Critical Technical Fixes',
    intro: 'These issues are actively destroying your rankings right now. Do not touch content strategy until these are resolved.',
    items: [
      {
        id: 's1-1',
        title: 'Implement 301 Redirects — Old URLs to New URLs',
        detail: 'In next.config.ts add a redirects() function mapping every old URL (beeviral.co.uk/about-us/, /social-media-marketing/, /marketing-solutions/, /contact/, /portfolio/, old blog URLs) to their new equivalents. Use 301 not 302 to pass full link equity.',
      },
      {
        id: 's1-2',
        title: 'Fix www vs. non-www Canonicalisation',
        detail: 'Both beeviral.co.uk and www.beeviral.co.uk are resolving — Google sees duplicate content. Set a 301 redirect from non-www to www at the hosting/CDN level. Add canonical tags pointing to www on every page.',
      },
      {
        id: 's1-3',
        title: 'Fix Duplicate Brand in Meta Titles — Sitewide Template Bug',
        detail: 'Every service and location page has "Bee Viral" duplicated in the title (e.g. "Social Media Management | Bee Viral | Bee Viral"). Fix the Next.js metadata title template so brand appears once. Format: [Primary Keyword] | [Secondary Keyword] | Bee Viral.',
      },
      {
        id: 's1-4',
        title: 'Fix the Homepage H1 — Replace Brand Statement with Keyword',
        detail: 'Current H1 "We Build, Market & Grow Local Businesses Online" is a tagline not a keyword signal. Change to "South Yorkshire\'s Full-Service Digital Marketing Agency" or similar. The tagline can stay as an H2.',
      },
      {
        id: 's1-5',
        title: 'Fix Animated Counter Values in HTML',
        detail: 'Stats (200+ businesses, 5M+ reach, 98% retention) are rendered as "0" in static HTML and animated via JS. If Googlebot crawls before JS executes it sees zeros. Use server-rendered static values as base HTML with animation on top.',
      },
      {
        id: 's1-6',
        title: 'Verify Sitemap.xml and Submit to Google Search Console',
        detail: 'Confirm www.beeviral.co.uk/sitemap.xml exists and contains all current URLs. Must NOT contain old 404 URLs. Submit in GSC. Use URL Inspection tool to manually request indexing for homepage, all location pages, all service pages, packages page.',
      },
      {
        id: 's1-7',
        title: 'Check and Clean robots.txt',
        detail: 'Verify robots.txt is not accidentally blocking any important pages or directories (/services/, /locations/, /blog/). Should only disallow /studio and /dashboard. Ensure Sitemap URL is declared: Sitemap: https://www.beeviral.co.uk/sitemap.xml',
      },
      {
        id: 's1-8',
        title: 'Run PageSpeed Insights & Fix Core Web Vitals',
        detail: 'Run all key pages through pagespeed.web.dev. Targets: LCP under 2.5s, CLS under 0.1, INP under 200ms on mobile. Watch for: large Sanity CMS images, layout shifts from font loading, unnecessary third-party scripts. Score 90+ on mobile is achievable.',
      },
    ],
  },

  {
    num: '02',
    title: 'On-Page SEO Overhaul',
    intro: 'Every page needs to send clear, unambiguous keyword signals to Google. Most pages are currently doing 60% of the job.',
    items: [
      {
        id: 's2-1',
        title: 'Rewrite Meta Titles — Apply New Formula to All Pages',
        detail: 'Homepage → "Social Media & SEO Agency South Yorkshire | Bee Viral". Social Media → "Social Media Management South Yorkshire | From £120/mo | Bee Viral". Local SEO → "Local SEO Services South Yorkshire | Google Rankings | Bee Viral". Apply formula [Primary KW] | [Secondary] | Bee Viral to every page.',
      },
      {
        id: 's2-2',
        title: 'Write Meta Descriptions for Every Key Page',
        detail: 'Format: [Benefit] + [Specificity] + [CTA]. Under 155 characters. Homepage: "South Yorkshire\'s full-service digital growth agency. Social media, SEO, websites & booking systems from £120/mo. 200+ local businesses. Free Health Check." Write one for each service page, location page, and packages page.',
      },
      {
        id: 's2-3',
        title: 'Service Page Keyword Optimisation',
        detail: 'Add primary keyword to H1, first paragraph, at least 2 H2s, image alt text and URL. Specific gaps: SMM page needs "social media management Rotherham"; Local SEO page needs "SEO agency South Yorkshire"; Website Design needs city-level keywords; Booking Systems page needs "booking system for salons" — unique opportunity no local competitor targets.',
      },
      {
        id: 's2-4',
        title: 'Case Studies — SEO Keyword Activation',
        detail: 'Each case study should target industry-specific keywords. Hartley Roofing → "Facebook ads for roofers UK". Clarke\'s Auto → "local SEO for garages". Meadows Dental → "social media for dentists UK". Luxe Hair → "social media for hair salons". Peak Gym → "gym marketing South Yorkshire". Each is a high-intent ranking opportunity.',
      },
      {
        id: 's2-5',
        title: 'Image Alt Text Audit — All Pages',
        detail: 'Audit every image across all pages and ensure alt text describes the image using relevant keywords naturally. No keyword stuffing — descriptive and accurate. Logo: "Bee Viral digital marketing agency logo". Case study images: include business name and service type.',
      },
      {
        id: 's2-6',
        title: 'Internal Linking — Service Pages ↔ Location Pages',
        detail: 'Every service page should link to all location pages with keyword-rich anchor text (e.g. "social media management in Rotherham"). Every location page should link to all service pages. Create a web of internal links that distributes authority and helps Google understand your site structure.',
      },
    ],
  },

  {
    num: '03',
    title: 'Schema Markup Implementation',
    intro: 'Schema markup enables rich results — FAQ dropdowns, star ratings, breadcrumbs — that dramatically increase click-through rates. You currently have none.',
    items: [
      {
        id: 's3-1',
        title: 'LocalBusiness Schema — Homepage + All Location Pages',
        detail: 'Add JSON-LD LocalBusiness schema. Required fields: @type: LocalBusiness, name: "Bee Viral", address (South Yorkshire), telephone, email, url, priceRange: "££", areaServed: [Rotherham, Sheffield, Barnsley, Doncaster, Wath, South Yorkshire], openingHours, geo coordinates. Add hasMap linking to Google Maps listing.',
      },
      {
        id: 's3-2',
        title: 'FAQPage Schema — All Service + Location Pages',
        detail: 'Every service page and location page already has an FAQ section. Adding FAQPage schema earns accordion dropdowns in the SERP, often doubling your result\'s space on the page. Implement on: all 6 service pages, all 4 location pages, /packages, every blog post with FAQ section.',
      },
      {
        id: 's3-3',
        title: 'Service Schema — Each /services/ Page',
        detail: 'Add Service schema on each service page: name, description, provider (Bee Viral), areaServed, hasOfferCatalog with pricing tiers. Links your schema to the LocalBusiness schema for a complete structured data picture.',
      },
      {
        id: 's3-4',
        title: 'Article Schema — All Blog Posts',
        detail: 'Add Article schema to all blog posts: headline, author (Tahir Azam with @type: Person), datePublished, dateModified, image, publisher (Bee Viral with logo). This enables Google to show article metadata in search results and is required for Google News eligibility.',
      },
      {
        id: 's3-5',
        title: 'BreadcrumbList Schema — All Pages',
        detail: 'Add BreadcrumbList schema to all pages to help Google understand site hierarchy and generate breadcrumb display in SERPs. Format: Home > Services > [Service Name] or Home > Locations > [Location].',
      },
      {
        id: 's3-6',
        title: 'AggregateRating Schema — Once 10+ Reviews',
        detail: 'Once you have 10+ Google reviews, pull the aggregate rating into schema markup on the homepage and relevant service pages. This enables star ratings in search results — one of the highest CTR improvements possible.',
      },
    ],
  },

  {
    num: '04',
    title: 'Google Business Profile Strategy',
    intro: 'The Google Map Pack is the single highest-converting placement in local search. GBP is your most immediate lead generation lever — results within 24–48 hours of optimisation.',
    items: [
      {
        id: 's4-1',
        title: 'Verify GBP is Claimed and Verified',
        detail: 'Confirm GBP is claimed, verified, and you have full management access. Check it is listed under primary category "Marketing Agency". Ensure the listing is not suspended or penalised.',
      },
      {
        id: 's4-2',
        title: 'Set Primary Category to "Marketing Agency"',
        detail: 'This is the single most important ranking factor for GBP. If yours is set to anything else, change it immediately. Primary category determines which keyword searches you appear for in the Map Pack.',
      },
      {
        id: 's4-3',
        title: 'Add All Secondary Categories',
        detail: 'Add: "Internet Marketing Service", "Social Media Agency", "Advertising Agency", "Web Design Company". Each secondary category makes you eligible for more keyword searches in the Map Pack.',
      },
      {
        id: 's4-4',
        title: 'Write Keyword-Rich Business Description (750 chars)',
        detail: 'Include naturally: "South Yorkshire", "Rotherham", "Barnsley", "Sheffield", "social media management", "local SEO", "website design", "booking systems". End with a CTA. This is indexed by Google — treat it like on-page SEO copy.',
      },
      {
        id: 's4-5',
        title: 'Complete Services Section — All 7 Services',
        detail: 'List each service individually with keyword-rich descriptions: Social Media Management, Local SEO, Website Design, Paid Advertising, Booking Systems, Content Creation, Analytics & Reporting. Each service entry can contain additional keyword context.',
      },
      {
        id: 's4-6',
        title: 'Upload 20+ Photos — Minimum',
        detail: 'Upload: team photos (Tahir + any staff), office/workspace shots, screenshots of client results (with permission), work examples. Upload at least 3 new photos per week for the first month. Google rewards active photo profiles with better visibility.',
      },
      {
        id: 's4-7',
        title: 'Publish Weekly Google Posts',
        detail: 'Publish a Google Post every week covering a service, case study result, tip, or offer. Each post should include your service name + location keyword naturally. Posts keep your listing active and signal engagement to Google\'s local algorithm.',
      },
      {
        id: 's4-8',
        title: 'Seed Q&A Section with 10 Questions',
        detail: 'Post and answer 10 questions yourself covering: pricing, contract terms, what services include, areas covered, how long results take. Keyword-rich answers are indexed by Google. Do this before customers ask — you control the narrative.',
      },
      {
        id: 's4-9',
        title: 'Achieve 25+ Google Reviews — URGENT',
        detail: 'Minimum 25 reviews to seriously compete in the map pack. Request from every current and recent client. Send direct review link via WhatsApp/email. Respond to every review within 24 hours using service keywords naturally. Target 5 new reviews per week.',
      },
      {
        id: 's4-10',
        title: 'Verify NAP Consistency Across All Citations',
        detail: 'Name, Address, Phone must be IDENTICAL across GBP, website footer, Yell, Bing Places, Apple Maps, and every other directory listing. Even small differences (spaces in phone number, abbreviated vs full address) confuse Google\'s local algorithm.',
      },
    ],
  },

  {
    num: '05',
    title: 'Local SEO & Keyword Strategy',
    intro: 'Keywords split across three tiers: Local (South Yorkshire — win first), Regional/National (3–12 months), and Informational (blog traffic + lead gen). Every keyword maps to a specific page.',
    items: [
      {
        id: 's5-1',
        title: 'Target All Tier 1 Local Commercial Keywords',
        detail: 'Map and actively track: social media agency Rotherham, digital marketing agency Rotherham/Barnsley/Doncaster/Sheffield, social media management Rotherham, website design Rotherham/Barnsley, SEO agency South Yorkshire, local SEO Rotherham, booking system for salons UK. These are your highest-value leads.',
      },
      {
        id: 's5-2',
        title: 'Target Tier 2 National Commercial Keywords',
        detail: 'Create or optimise pages for: social media management agency UK, social media management small business UK, online booking system UK, how much does social media management cost UK (blog LIVE), website design agency UK small business, Facebook ads for local businesses UK.',
      },
      {
        id: 's5-3',
        title: 'Map All Informational Blog Keywords to Posts',
        detail: 'Ensure every blog keyword has a corresponding post planned or live: what is local SEO, social media tips, how to get more customers, local SEO tips, Google Business Profile tips, Instagram for business UK, TikTok for local business, Facebook ads vs Google ads, how much does a website cost UK.',
      },
      {
        id: 's5-4',
        title: 'Set Up Google Search Console Fully',
        detail: 'Verify GSC property for www.beeviral.co.uk. Submit sitemap. Set up email alerts for coverage issues. Use Performance report to track which keywords are already driving impressions (even without clicks). This is your baseline data.',
      },
      {
        id: 's5-5',
        title: 'Set Up Rank Tracking Tool',
        detail: 'Set up a rank tracking tool (Google Search Console, SE Ranking, or even a free tool like SerpRobot) to track your top 20 target keywords weekly. Document starting positions — you cannot measure improvement without a baseline.',
      },
      {
        id: 's5-6',
        title: 'Monthly Keyword Ranking Review',
        detail: 'Schedule a monthly review to update the Keyword & Content Plan tracker with current rankings. Note which keywords moved up, down, or entered top 10. Adjust content plan based on what is gaining traction fastest.',
      },
    ],
  },

  {
    num: '06',
    title: 'Location Page Expansion',
    intro: 'Location pages are your fastest route to local leads. You have gaps. Your Rotherham and Barnsley pages are strong models — replicate the pattern across new towns.',
    items: [
      {
        id: 's6-1',
        title: 'Build /locations/wath — Home Base — #1 Priority',
        detail: 'Non-negotiable. Wath-upon-Dearne is your physical base. You have local clients there. Yet no location page exists. This will be your easiest-ranking location page — physical proximity gives genuine local relevance signals Google rewards. Build immediately.',
      },
      {
        id: 's6-2',
        title: 'Audit and Rebuild /locations/sheffield if Needed',
        detail: 'Sheffield is your highest-competition market (6–12 months to rank). Verify the page has: 1,500+ words, keyword-rich H1, local specifics (neighbourhoods, industries), FAQ section with schema, all service sections with Sheffield-specific context.',
      },
      {
        id: 's6-3',
        title: 'Build /locations/mexborough',
        detail: 'Low-competition town close to Wath. Build full location page following the proven template: 1,500+ words, local knowledge signals, service sections, FAQ section with FAQPage schema, internal links to all service pages.',
      },
      {
        id: 's6-4',
        title: 'Build /locations/swinton',
        detail: 'Adjacent to Wath — strong geographic proximity signal. Same template as all location pages. Include references to specific local areas, industries, and link to Wath/Rotherham pages for internal linking network.',
      },
      {
        id: 's6-5',
        title: 'Build /locations/dearne-valley',
        detail: 'The broader Dearne Valley area covers multiple towns where you operate. Build this page to capture area-level searches. Reference all the constituent towns and link to their individual location pages.',
      },
      {
        id: 's6-6',
        title: 'Phase 2: Build 6 More Location Pages (Month 3+)',
        detail: 'After primary locations rank: /locations/wakefield, /locations/leeds (wider reach), /locations/huddersfield, /locations/pontefract, /locations/maltby, /locations/rawmarsh. Prioritise in order of proximity and search volume.',
      },
      {
        id: 's6-7',
        title: 'Build Service × Location Pages (Advanced — Month 3+)',
        detail: 'Create service-specific location combinations for high-intent searches with low competition: /social-media-management-rotherham, /seo-agency-rotherham, /website-design-barnsley, /facebook-ads-sheffield. Each targets an exact-match keyword with very high purchase intent.',
      },
    ],
  },

  {
    num: '07',
    title: '12-Month Content Calendar',
    intro: 'Content is how you build topical authority. Publish 4 posts per month minimum. Every post targets a specific keyword, serves a specific audience, and links to your money pages.',
    items: [
      {
        id: 's7-1',
        title: 'Set Up Content Production System',
        detail: 'Establish a repeatable workflow: keyword assigned → brief written → draft created → edited → SEO-checked → published → internal links added. Assign who does each step. Agree publication day and consistency. Consistency beats volume.',
      },
      {
        id: 's7-2',
        title: 'Enforce Author Bio on Every Post (Tahir Azam)',
        detail: 'Every post must be authored by Tahir Azam with a bio section at the bottom: name, title, years of experience, short bio covering expertise. Include a photo. This is an E-E-A-T signal — Google\'s "Experience" and "Expertise" check. No anonymous posts.',
      },
      {
        id: 's7-3',
        title: 'Month 1 Posts — Publish All 4',
        detail: '1. How Much Does Social Media Management Cost? (LIVE ✓) 2. What Is Local SEO? Plain English Guide for South Yorkshire Businesses 3. How to Get More Customers for Your Rotherham Business in 2026 4. The Complete Guide to Google Business Profile for South Yorkshire Businesses.',
      },
      {
        id: 's7-4',
        title: 'Month 2 Posts — Publish All 4',
        detail: '5. Local SEO for Tradespeople: The Complete 2026 Guide 6. Facebook Ads vs Google Ads for Local Businesses: Which Wins? 7. How Hartley Roofing Gets 40+ Leads Per Month from Facebook Ads 8. Why Barnsley Businesses Need to Be on TikTok in 2026.',
      },
      {
        id: 's7-5',
        title: 'Month 3 Posts — Publish All 4',
        detail: '9. How to Fill Your Appointment Book: Social Media & Booking for Salons 10. The Best Booking System for Small Businesses UK 2026 11. Social Media Management for Hair Salons: What Works (With Results) 12. How to Rank #1 on Google Maps for Your Local Business.',
      },
      {
        id: 's7-6',
        title: 'Enforce Internal Linking Rule — 3 Links Per Post Minimum',
        detail: 'Every post must contain at least 3 internal links using keyword-rich anchor text linking to service pages or location pages. E.g. a post about social media for salons links to /services/social-media-management, /packages, and /locations/rotherham. Non-negotiable.',
      },
      {
        id: 's7-7',
        title: 'Enforce 1,200-Word Minimum Per Post',
        detail: 'Google ranks longer, more comprehensive content for competitive keywords. Set a hard minimum of 1,200 words for standard posts, 2,000+ for pillar posts. Use the SEO Writing System\'s post anatomy as your structure template for every single post.',
      },
    ],
  },

  {
    num: '08',
    title: 'Link Building & Authority Strategy',
    intro: 'Backlinks are still a top-3 Google ranking factor. You need authoritative, relevant links pointing to your domain to compete for national and high-competition local keywords.',
    items: [
      {
        id: 's8-1',
        title: 'Submit to All Major UK Business Directories',
        detail: 'Submit and fully optimise listings on: Yell.com, Bing Places, Apple Maps, Google Maps (GBP), Thomson Local, Scoot, Hotfrog, Cylex, FreeIndex. Ensure NAP is identical across all. Each citation builds local authority and corroborates your location signals.',
      },
      {
        id: 's8-2',
        title: 'Get Listed on Local South Yorkshire Directories',
        detail: 'Find and submit to: Rotherham Chamber of Commerce member directory, South Yorkshire Business Network, local business association directories, Wath Business Association, Rotherham Advertiser business listings. Local relevance is a direct GBP ranking signal.',
      },
      {
        id: 's8-3',
        title: 'Guest Post Outreach — Marketing & Business Blogs',
        detail: 'Identify 10 UK marketing, small business, or entrepreneur blogs that accept guest posts. Pitch data-driven articles from your expertise: social media ROI, local SEO case studies, booking system case studies. Each guest post earns a do-follow link. Target 2 per month.',
      },
      {
        id: 's8-4',
        title: 'Digital PR — Local Press Coverage',
        detail: 'Pitch stories to: Rotherham Advertiser, Barnsley Chronicle, South Yorkshire Times, Sheffield Star. Story angles: client success statistics, expert commentary on local business digital trends, free resource launches. Even a no-follow press mention builds authority and brand recognition.',
      },
      {
        id: 's8-5',
        title: 'Request Backlinks from Current Clients',
        detail: 'Ask every active client to link to your website from their website footer or "about us" page with anchor text like "Social media managed by Bee Viral" or "Website by Bee Viral". This is your easiest source of relevant local backlinks. Target all 14+ current clients.',
      },
      {
        id: 's8-6',
        title: 'Chamber of Commerce & Business Association Links',
        detail: 'Join Rotherham Chamber of Commerce and Barnsley & Rotherham Chamber. Most member directories include do-follow links — this is a direct local authority signal. The domain authority of chamber sites is typically 50+. Worth the membership fee for the backlink alone.',
      },
      {
        id: 's8-7',
        title: 'Sponsor Local Events for Backlinks',
        detail: 'Sponsor local business events, charity events, or networking groups. Sponsors are almost always listed with links on event websites. Target events with websites on .org.uk or high-authority local domains. Budget £50–£200 per event for the link value.',
      },
      {
        id: 's8-8',
        title: 'HARO / Journalist Source Outreach',
        detail: 'Sign up to Help a Reporter Out (HARO) and respond to journalist queries in marketing, small business, and local economy categories. When your quote is used you earn a high-authority backlink from national publications. Requires consistent daily checking — takes 5 mins.',
      },
    ],
  },

  {
    num: '09',
    title: 'E-E-A-T & Trust Signals',
    intro: 'Google\'s E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) framework determines whether your content is worthy of rankings for competitive terms. You need to demonstrate all four.',
    items: [
      {
        id: 's9-1',
        title: 'Build a Dedicated Author Page for Tahir Azam',
        detail: 'Create /about/tahir-azam with: professional photo, years in industry, specific expertise areas, notable results, education/certifications, LinkedIn link, published articles list. This page is referenced in every blog post author bio and signals deep human expertise to Google.',
      },
      {
        id: 's9-2',
        title: 'Display Client Results Prominently — with Numbers',
        detail: 'Add specific, verifiable result statements throughout the site. Not "we help businesses grow" but "Hartley Roofing: 40+ leads/month in 90 days from Facebook Ads". Numbers build credibility and are E-E-A-T signals. Get written permission from clients to use specific figures.',
      },
      {
        id: 's9-3',
        title: 'Add Client Logos Section to Homepage and Service Pages',
        detail: 'Display logos of all current clients (with permission) in a "Trusted By" or "Our Clients" section. Even 8–10 recognisable local business logos dramatically increase trust for new visitors. This reduces bounce rate which is an indirect ranking signal.',
      },
      {
        id: 's9-4',
        title: 'Collect Testimonials with Photos and Full Names',
        detail: 'Request video or written testimonials from your best clients with: full name, business name, photo, specific result achieved. Testimonials with photos convert 3–4× better than text-only. Display on homepage, service pages, and relevant location pages.',
      },
      {
        id: 's9-5',
        title: 'Optimise LinkedIn Profile — Tahir Azam',
        detail: 'LinkedIn profile for Tahir Azam should: match the bio on your website exactly, show Bee Viral as current role, have 500+ connections, publish 2 posts per month sharing content from your blog. LinkedIn signals are increasingly used by Google for author authority.',
      },
      {
        id: 's9-6',
        title: 'Seek Press Mentions and Industry Recognition',
        detail: 'Proactively seek coverage in: South Yorkshire business press, marketing industry publications, local podcast appearances, speaking at local business events. Each mention — even without a link — builds the brand signals Google uses to assess authority.',
      },
      {
        id: 's9-7',
        title: 'Add Certifications and Industry Credentials',
        detail: 'Display any industry certifications prominently: Google Ads certification, Meta Blueprint, any marketing awards, industry association memberships. If you don\'t have certifications, consider obtaining Google\'s free digital marketing certifications. These are legitimate trust signals.',
      },
    ],
  },

  {
    num: '10',
    title: 'National & Global SEO Expansion',
    intro: 'Once local SEO is delivering consistent leads, expand to national UK targeting with dedicated landing pages and higher-volume informational content.',
    items: [
      {
        id: 's10-1',
        title: 'Create /social-media-agency-uk Landing Page',
        detail: 'Build a dedicated national landing page targeting "social media management agency UK" (3,600/mo) and "social media management agency" (2,400/mo). 2,000+ words. Showcase results across multiple industries. This is a 9–12 month SEO target but should be built now.',
      },
      {
        id: 's10-2',
        title: 'Create /social-media-management-small-business Page',
        detail: 'Target "social media management small business UK" (880/mo, medium difficulty). 1,500+ words focused entirely on small business pain points, pricing, and results. CTA to /packages. Medium-term target: 4–6 months to Page 1.',
      },
      {
        id: 's10-3',
        title: 'Create /booking-systems/beauty-salon Page',
        detail: 'Target "online booking system for beauty salon" (210/mo, low difficulty). This is a specific enough query that a dedicated page can rank within 6–10 weeks. Low competition but high commercial intent — someone searching this is ready to buy.',
      },
      {
        id: 's10-4',
        title: 'Publish High-Volume Informational Posts (Months 4–8)',
        detail: 'Target national informational keywords with 2,000+ word pillar posts: "how to get more customers" (5,400/mo), "social media content ideas for businesses" (2,600/mo), "what is local SEO" (2,900/mo), "how much does a website cost UK" (3,200/mo). These drive traffic at scale.',
      },
      {
        id: 's10-5',
        title: 'Build Domain Authority to 30+ via Content + Links',
        detail: 'Track domain authority monthly using Ahrefs or Moz. Current estimated DA is very low (new domain). Target: DA 20 by Month 3, DA 30 by Month 6, DA 40 by Month 12. This is achieved through consistent content publication and active link building from Sections 7 and 8.',
      },
      {
        id: 's10-6',
        title: 'Track National Keyword Rankings Monthly',
        detail: 'Set up tracking for your national target keywords alongside local ones. Record baseline positions when pages first go live. Document month-on-month movement. National rankings take longer but the traffic volume justifies the investment.',
      },
    ],
  },

  {
    num: '11',
    title: 'Lead Generation & Conversion',
    intro: 'Ranking is not enough. Your site needs to convert visitors into enquiries. Every percentage point improvement in conversion rate doubles the value of your SEO traffic.',
    items: [
      {
        id: 's11-1',
        title: 'Ensure Every Page Has a Clear CTA Above the Fold',
        detail: 'Every service page, location page, and key blog post must have a visible CTA in the top 50% of the page — before the user scrolls. Primary CTA: "Free Health Check" button. Secondary: phone number. If users cannot see how to contact you immediately, they will leave.',
      },
      {
        id: 's11-2',
        title: 'Set Up Google Analytics 4 Conversion Tracking',
        detail: 'Configure GA4 to track: contact form submissions, phone number clicks, "Free Health Check" button clicks, time on page, scroll depth. Without conversion tracking you cannot measure which pages and which keywords actually generate leads — you are flying blind.',
      },
      {
        id: 's11-3',
        title: 'Add WhatsApp Click-to-Chat Button',
        detail: 'Add a persistent WhatsApp button (bottom-right, visible on all pages on mobile). WhatsApp enquiries from local service businesses convert at 2–3× the rate of contact forms. Low friction = more leads. Make the number the same as GBP for NAP consistency.',
      },
      {
        id: 's11-4',
        title: 'Optimise Contact Form — Reduce Friction',
        detail: 'Current contact form may be asking for too much information. Ideal: Name, Email, Phone, Business Type, How can we help? (dropdown). Do not ask for budget, website URL, or anything non-essential at the first contact. Every extra field drops conversion rate by ~10%.',
      },
      {
        id: 's11-5',
        title: 'Create Lead Magnet — Free SEO Checklist Download',
        detail: 'Create a downloadable "Local Business SEO Checklist" as a PDF. Offer it in exchange for name + email on the blog and homepage. This builds an email list for future nurture sequences. The checklist content can be derived directly from this strategy document.',
      },
      {
        id: 's11-6',
        title: 'Install Retargeting Pixel (Meta)',
        detail: 'Install Meta Pixel on all pages. This allows you to retarget visitors who viewed your service pages but didn\'t enquire — with ads on Instagram and Facebook. Budget £3–£5/day for retargeting. These are your warmest leads: they already know you.',
      },
      {
        id: 's11-7',
        title: 'Display Pricing Information Prominently',
        detail: 'Your packages page shows pricing — but service pages should tease pricing too ("from £120/month"). Visitors who see pricing are 60% more likely to enquire because it pre-qualifies them. Hiding pricing causes hesitation and increases bounce.',
      },
      {
        id: 's11-8',
        title: 'Add Exit-Intent Pop-up on Key Pages',
        detail: 'Add a minimal exit-intent overlay on service and location pages offering the free health check when a visitor moves to close the tab. Keep it simple: "Wait — get your free digital health check before you go." Just name + email. This typically recovers 5–10% of bouncing visitors.',
      },
    ],
  },

  {
    num: '12',
    title: '90-Day Action Roadmap',
    intro: 'The full strategy condensed into a prioritised 90-day sprint. Sequence matters — complete each phase before moving to the next.',
    items: [
      {
        id: 's12-1',
        title: 'Week 1: All Technical Fixes (Section 01)',
        detail: 'Complete in this order: 301 redirects → www/non-www canonical → meta title template fix → homepage H1 → animated counters fix → sitemap submission to GSC → robots.txt audit → PageSpeed baseline. This is the highest ROI week of the entire strategy.',
      },
      {
        id: 's12-2',
        title: 'Week 2: On-Page Meta Titles and Descriptions — All Pages',
        detail: 'Rewrite meta titles and meta descriptions for: homepage, all 6 service pages, all 4 location pages, /packages, /about, /contact. Prioritise pages that already have Google impressions in GSC (fixing titles on pages already seen by Google delivers fastest ranking improvement).',
      },
      {
        id: 's12-3',
        title: 'Week 2–3: GBP Optimisation — Full Completion',
        detail: 'Complete the full GBP checklist from Section 04: categories set, description written, services listed, 20 photos uploaded, Q&A seeded. Start the review request campaign — target 5 new reviews in the first 2 weeks. GBP is live lead generation starting immediately.',
      },
      {
        id: 's12-4',
        title: 'Week 3–4: Schema Markup — LocalBusiness + FAQ',
        detail: 'Implement LocalBusiness JSON-LD schema on homepage and all location pages. Implement FAQPage schema on all service and location pages. Test each page in Google\'s Rich Results Test tool. Schema errors can prevent rich results from appearing — verify everything.',
      },
      {
        id: 's12-5',
        title: 'Month 1: First 4 Blog Posts Published',
        detail: 'Publish all 4 Month 1 posts by end of Month 1. Prioritise the cost guide post (already live ✓) and the "What Is Local SEO" pillar post. Ensure each post has: author bio, 3+ internal links, CTA, 1,200+ words, meta title/description, and is submitted for indexing in GSC.',
      },
      {
        id: 's12-6',
        title: 'Month 1: Build /locations/wath Page',
        detail: 'Build the Wath-upon-Dearne location page as your first new location build. Use Rotherham page as the template. 1,500+ words, local knowledge, all service sections, FAQ with schema, internal links. Submit to GSC for indexing immediately.',
      },
      {
        id: 's12-7',
        title: 'Month 2: Link Building Outreach — Start and Maintain',
        detail: 'Begin directory submissions, client backlink requests, and chamber membership. Set up HARO account. Identify and pitch first 5 guest post targets. Document every link acquired in the Link Building tracker. This is ongoing — 5+ hours per month minimum.',
      },
      {
        id: 's12-8',
        title: 'Month 3: Review First Organic Rankings + Adjust Strategy',
        detail: 'Pull GSC data and rank tracking data. Document which keywords moved. Identify which pages are getting impressions but not clicks (fix meta titles/descriptions). Identify which posts are gaining traction fastest (publish more on that topic). Adjust Month 4 content plan based on data.',
      },
      {
        id: 's12-9',
        title: 'Month 3: 12 Blog Posts Live — Content Velocity Established',
        detail: 'By end of Month 3 you should have 12 blog posts published (4 per month). Google will have indexed all of them. First organic clicks from long-tail keywords should be appearing. This is the first real evidence of SEO momentum — maintain the 4/month cadence without exception.',
      },
    ],
  },
]
