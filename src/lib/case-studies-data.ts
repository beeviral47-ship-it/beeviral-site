export interface CaseStudyData {
  slug: string
  business: string
  location: string
  industry: string
  service: string
  gradientFrom: string
  initial: string
  seoTitle: string
  metaDescription: string
  tagline: string
  overview: string[]
  challenge: string
  challengeDetail: string[]
  strategy: string
  strategyDetail: string[]
  execution: Array<{ title: string; detail: string }>
  metrics: Array<{ value: string; label: string; context: string }>
  resultsNarrative: string[]
  proofOfWork: {
    beforeAfter: Array<{ metric: string; before: string; after: string }>
    timeline: Array<{ period: string; milestone: string }>
    keyWins: string[]
  }
  quote: string
  quoteAuthor: string
  quoteRole: string
  timeframe: string
  relatedSlugs: string[]
}

export const caseStudies: CaseStudyData[] = [
  {
    slug: 'the-blossom-cafe',
    business: 'The Blossom Café',
    location: 'Wath-upon-Dearne',
    industry: 'Restaurant',
    service: 'Social Media Management',
    gradientFrom: 'from-rose-900/70',
    initial: 'B',
    seoTitle: 'The Blossom Café Case Study | Bee Viral',
    metaDescription: 'How Bee Viral helped The Blossom Café grow Instagram reach by 340% and increase table bookings by 60% through consistent, community-led social media management.',
    tagline: 'A beloved local café turned their empty midweek tables into a fully-booked destination — all through the power of community-first social media.',
    overview: [
      'The Blossom Café has been a cornerstone of Wath-upon-Dearne\'s high street for over eight years. Known for its homemade cakes, locally sourced brunches, and the kind of warm atmosphere that makes people linger long after their coffee goes cold, it\'s exactly the sort of independent that deserves to thrive. Owner Sarah and her small team had built something genuinely special — but their online presence didn\'t reflect it.',
      'Before working with Bee Viral, their Instagram had fewer than 400 followers and hadn\'t been posted to consistently in months. Their Google listing was claimed but had no recent photos, and most of their new customers came through word of mouth alone. They had the product. What they needed was an audience.',
    ],
    challenge: 'Relying entirely on word of mouth with no social media presence and declining midweek footfall.',
    challengeDetail: [
      'Midweek covers had dropped noticeably over the twelve months prior to our engagement. The café was doing solid Friday and weekend trade, but Tuesday through Thursday felt quiet — sometimes uncomfortably so. Sarah knew the food and service were as good as ever; the problem was visibility. Potential customers in the area simply didn\'t know the café existed, or had forgotten about it between visits.',
      'The deeper issue was that The Blossom Café had no consistent brand voice anywhere online. Posts were sporadic, photos were taken on an old phone with poor lighting, and there was no strategy connecting content to booking behaviour. Competitors — including a newer café chain that had opened nearby — were posting daily and building real followings. Without intervention, the gap was only going to widen.',
    ],
    strategy: 'We built a consistent Instagram presence with daily content, stories, and community engagement that captured the café\'s warm, local character.',
    strategyDetail: [
      'Our approach centred on authenticity over polish. The Blossom Café\'s greatest asset was its personality — the hand-written chalkboard specials, Sarah\'s banter with regulars, the genuinely incredible lemon drizzle — and we built a content strategy around making that personality unmissable online. We committed to a daily posting schedule across Instagram and Facebook, built around three content pillars: food and drink showcase, behind-the-scenes moments, and community storytelling.',
      'We also introduced a structured Stories strategy, using daily polls, "what\'s on today" updates, and end-of-week countdowns to specials. This drove consistent engagement and kept The Blossom Café top of mind for local followers. We coupled this with an active community management approach — responding to every comment and DM within two hours — to build the kind of warm, responsive presence that mirrors the in-person experience.',
    ],
    execution: [
      {
        title: 'Content Calendar & Brand Voice',
        detail: 'We developed a 90-day content calendar capturing the café\'s seasonal specials, events, and team moments, establishing a consistent warm and conversational brand voice.',
      },
      {
        title: 'Photography & Visual Identity',
        detail: 'We provided monthly on-site photography sessions, delivering high-quality food and lifestyle imagery that made the café\'s Instagram feed instantly recognisable and scroll-stopping.',
      },
      {
        title: 'Google Business Profile Optimisation',
        detail: 'We fully refreshed the Google Business listing with updated photos, service descriptions, booking links, and a review-generation strategy that pushed them to a 4.9-star rating.',
      },
      {
        title: 'Stories & Community Engagement',
        detail: 'Daily Instagram Stories featuring polls, "specials today" updates, and shout-outs to regular customers drove habitual daily check-ins and rapid follower growth among locals.',
      },
    ],
    metrics: [
      {
        value: '+340%',
        label: 'Instagram Reach',
        context: 'Monthly Instagram reach grew from around 1,200 to over 5,200 within the first 90 days of consistent content delivery.',
      },
      {
        value: '+60%',
        label: 'Table Bookings',
        context: 'Online and phone table bookings increased by 60% compared to the same period in the previous year, with midweek covers recovering strongly.',
      },
      {
        value: '4.9★',
        label: 'Google Rating',
        context: 'A structured review-generation strategy helped push The Blossom Café to a 4.9-star Google rating across 140+ reviews.',
      },
    ],
    resultsNarrative: [
      'Within three months, The Blossom Café had gone from a quiet Instagram presence to one of the most engaged local food accounts in the Dearne Valley. Their follower count passed 2,000, midweek bookings recovered to near-weekend levels, and the café was regularly being tagged in posts by customers who\'d discovered them online for the first time. Sarah started to notice new faces coming in saying they\'d "seen them on Instagram" — something that had never happened before.',
      'The Google improvement was particularly meaningful. Moving to a 4.9-star rating with over 140 reviews transformed the café\'s credibility in local search. They now appear in the top three results for "café Wath-upon-Dearne" and comparable searches — effectively turning Google into a steady stream of first-time visitors who quickly become regulars.',
    ],
    proofOfWork: {
      beforeAfter: [
        { metric: 'Monthly Instagram Reach', before: '~1,200', after: '5,200+' },
        { metric: 'Instagram Followers', before: '387', after: '2,100+' },
        { metric: 'Weekly Posting Frequency', before: '0–1 posts', after: '7 posts + daily Stories' },
        { metric: 'Google Reviews', before: '28 reviews / 4.3★', after: '140+ reviews / 4.9★' },
        { metric: 'Midweek Table Bookings', before: 'Consistently quiet', after: 'Near-weekend levels' },
        { metric: 'Google Search Visibility', before: 'Not in top 10', after: 'Top 3 for "café Wath-upon-Dearne"' },
      ],
      timeline: [
        { period: 'Week 1–2', milestone: 'Brand audit, photography session, content calendar built for 90 days' },
        { period: 'Week 3–4', milestone: 'Daily posting launched across Instagram and Facebook; Google Business Profile fully rebuilt' },
        { period: 'Month 2', milestone: 'Stories strategy introduced; engagement rate climbs from 1.2% to 4.8%' },
        { period: 'Month 3', milestone: 'Midweek bookings recover; Instagram reach exceeds 5,000 monthly for first time' },
        { period: 'Month 4', milestone: 'Google rating hits 4.9★ with 140+ reviews; café appears in top 3 local search results' },
      ],
      keyWins: [
        'First Instagram post to exceed 1,000 reach — a lemon drizzle reveal — achieved in week 3',
        'Google reviews more than tripled from 28 to 140+ within four months',
        'Midweek covers recovered to near-weekend levels for the first time in 18 months',
        'Daily Stories averaging 8–12 responses per day from local followers',
        'New customers began citing Instagram as how they discovered the café',
        'Café now appears in top 3 Google results for primary local search terms',
      ],
    },
    quote: 'I honestly didn\'t think social media could make that much difference to a café. I was wrong. We\'re busier midweek than we\'ve been in years, and I\'m constantly getting new customers saying they found us on Instagram. Bee Viral just got us completely.',
    quoteAuthor: 'Sarah Mellor',
    quoteRole: 'Owner, The Blossom Café',
    timeframe: 'Results within 90 days',
    relatedSlugs: ['spice-garden', 'the-old-forge-kitchen'],
  },

  {
    slug: 'hartley-roofing',
    business: 'Hartley Roofing',
    location: 'Rotherham',
    industry: 'Trades',
    service: 'Paid Advertising',
    gradientFrom: 'from-blue-900/70',
    initial: 'H',
    seoTitle: 'Hartley Roofing Case Study | Bee Viral',
    metaDescription: 'How Bee Viral generated 40+ roofing leads per month at £8 cost per lead for Hartley Roofing in Rotherham using targeted Facebook and Instagram ads.',
    tagline: 'From feast-or-famine referrals to a steady pipeline of 40+ qualified leads every month — paid advertising transformed how Hartley Roofing does business.',
    overview: [
      'Hartley Roofing has operated across Rotherham and the surrounding South Yorkshire area for over twelve years, building a solid reputation for quality workmanship on everything from emergency repairs to full re-roofing projects. Owner Dave Hartley ran a lean, skilled team and had never struggled for work during busy periods — but the quiet months were genuinely difficult, and planning ahead was nearly impossible when the phone could go silent for weeks at a time.',
      'The business had grown almost entirely through word of mouth and recommendations from estate agents and property managers. While that foundation was valuable, it left Hartley Roofing entirely dependent on others for new enquiries. Dave had tried boosting a few Facebook posts in the past but saw little return and written off social advertising entirely — until he got in touch with Bee Viral.',
    ],
    challenge: 'Over-reliant on referrals with an inconsistent enquiry pipeline and no digital lead generation.',
    challengeDetail: [
      'The core problem wasn\'t quality — Hartley Roofing\'s work spoke for itself. The problem was reach. During storm seasons or after a spell of bad weather, the phone would ring constantly. But in settled weather or the quieter winter months, work dried up and the team sometimes had days with nothing booked in. Dave was spending his own time chasing up old contacts and relying on referrals that could take weeks to convert into actual bookings.',
      'There was also a competitive pressure problem. Several larger roofing contractors in the area were running Google Ads and appearing at the top of search results for emergency roof repair, guttering, and fascia work. Dave\'s business didn\'t appear until page two or three, meaning that the customers most ready to buy — those with an active roof problem right now — were going elsewhere by default.',
    ],
    strategy: 'We launched targeted Facebook and Instagram ad campaigns promoting emergency repairs and seasonal roof checks to local homeowners.',
    strategyDetail: [
      'We built a performance-focused paid advertising strategy specifically designed around the buying triggers for roofing work. Rather than generic brand awareness, every campaign was built to intercept homeowners at the moment they had a problem — or to create the prompt to act before a small issue became an emergency. We segmented audiences by property type, homeowner status, and proximity, targeting within a 12-mile radius of Rotherham.',
      'Campaign creative was built around trust and urgency. We used before-and-after project imagery, direct-response copy highlighting free quotes and same-day call-outs, and short video walkthroughs of completed jobs. Seasonal campaigns — "Winter Roof Check", "Storm Damage Repair" — created hooks that drove relevance and click-through. We continuously A/B tested headlines and creative, optimising toward cost per lead rather than click volume.',
    ],
    execution: [
      {
        title: 'Campaign Architecture & Audience Targeting',
        detail: 'We built out three distinct campaign types — emergency repair, scheduled maintenance, and seasonal re-roofing — each with tailored audience segments targeting local homeowners by postcode cluster.',
      },
      {
        title: 'Creative Production',
        detail: 'We produced a suite of static and video ad creatives using Dave\'s own job photography, turning real completed projects into compelling social proof that drove enquiry.',
      },
      {
        title: 'Lead Form Integration',
        detail: 'We set up native Facebook Lead Ads with instant notification to Dave\'s phone, ensuring every enquiry was followed up within minutes rather than hours.',
      },
      {
        title: 'Performance Optimisation',
        detail: 'Weekly campaign reviews and ongoing creative rotation kept cost per lead below £10 throughout the engagement, with the best-performing months hitting £8 per qualified enquiry.',
      },
    ],
    metrics: [
      {
        value: '40+',
        label: 'Leads per Month',
        context: 'Hartley Roofing consistently receives over 40 qualified enquiries per month through paid social, compared to an average of 6-8 referral leads before the campaign.',
      },
      {
        value: '£8',
        label: 'Cost per Lead',
        context: 'Through rigorous creative testing and audience refinement, we achieved a cost per qualified lead of just £8 — well below the industry average for trades advertising.',
      },
      {
        value: '6×',
        label: 'Return on Ad Spend',
        context: 'For every £1 spent on advertising, Hartley Roofing is generating £6 in revenue — a return that has allowed the business to take on an additional crew member.',
      },
    ],
    resultsNarrative: [
      'Within six weeks of the first campaigns going live, Dave\'s phone had changed completely. He went from checking whether he\'d have enough work next week to turning down jobs because his schedule was full. The consistency of the lead flow meant he could plan his team\'s workload weeks in advance, reduce downtime, and start quoting on larger contracts with the confidence that the pipeline would stay full.',
      'The 6× return on ad spend figure is the one that matters most to Dave — for a business that had never spent money on advertising before, the idea that every £100 in ads generates £600 in invoiced work was transformative. Hartley Roofing has since hired an additional labourer to handle the increased workload, and they\'re now running year-round campaigns with full-season booking diaries.',
    ],
    proofOfWork: {
      beforeAfter: [
        { metric: 'Monthly Lead Volume', before: '6–8 referral leads', after: '40+ qualified enquiries' },
        { metric: 'Cost per Lead', before: 'No paid advertising', after: '£8 per qualified lead' },
        { metric: 'Lead Source', before: '100% word-of-mouth / estate agents', after: '80%+ direct from paid social' },
        { metric: 'Return on Ad Spend', before: '£0 ad investment', after: '6× revenue per £1 spent' },
        { metric: 'Team Size', before: 'Owner + 2 crew', after: 'Owner + 3 crew (new hire to handle volume)' },
        { metric: 'Booking Horizon', before: 'Week-to-week uncertainty', after: 'Fully booked 3–4 weeks ahead' },
      ],
      timeline: [
        { period: 'Week 1', milestone: 'Campaign architecture built — three audience segments, creative brief agreed, ad account structured' },
        { period: 'Week 2', milestone: 'First campaigns live; static and video creatives deployed across Facebook and Instagram' },
        { period: 'Week 3–4', milestone: 'First 22 qualified leads received; CPL tracking confirmed at under £15' },
        { period: 'Month 2', milestone: 'Creative rotation based on performance data; CPL optimised down to £8 on best campaigns' },
        { period: 'Month 3', milestone: '40+ leads per month consistently achieved; Dave hires additional crew member' },
        { period: 'Month 4+', milestone: 'Seasonal campaigns running year-round; full booking diary maintained through quieter winter months' },
      ],
      keyWins: [
        'Generated first 22 leads within the opening two weeks of campaigns going live',
        'Cost per lead dropped from £24 in month 1 to £8 by month 2 through systematic creative testing',
        'Emergency repair campaign achieved a 9.4% click-through rate — over 4× industry average',
        'Dave was able to turn down jobs for the first time in the business\'s 12-year history',
        'Business hired an additional crew member driven entirely by the new lead volume',
        '6× return on ad spend maintained consistently across four months of activity',
      ],
    },
    quote: 'I\'d given up on Facebook ads after wasting money boosting posts years ago. Bee Viral showed me how to actually do it. I\'ve had to hire someone new just to keep up. The leads are consistent, they\'re local, and the quality is good. It\'s completely changed how I plan the business.',
    quoteAuthor: 'Dave Hartley',
    quoteRole: 'Owner, Hartley Roofing',
    timeframe: 'Results within 6 weeks',
    relatedSlugs: ['south-yorkshire-plumbing', 'clarkes-auto-centre'],
  },

  {
    slug: 'spice-garden',
    business: 'Spice Garden',
    location: 'Barnsley',
    industry: 'Restaurant',
    service: 'Content Creation',
    gradientFrom: 'from-orange-900/70',
    initial: 'S',
    seoTitle: 'Spice Garden Case Study | Bee Viral',
    metaDescription: 'How Bee Viral helped Spice Garden in Barnsley gain 8,200 new followers and triple weekend reservations through professional content creation on Instagram and TikTok.',
    tagline: 'Stunning food deserves a stunning platform — content creation gave Spice Garden a social presence that finally matched the ambition of their kitchen.',
    overview: [
      'Spice Garden has been one of Barnsley\'s most-loved South Asian restaurants since it opened a decade ago. The menu blends classic Punjabi cooking with contemporary presentation — dishes that look as extraordinary as they taste. The restaurant seats 80 covers and has a loyal base of regulars who return week after week. Yet despite the quality of the food and the strength of the in-person experience, their online presence was almost invisible.',
      'The team had attempted social media on and off over the years, but without a strategy or consistent visual identity, the accounts felt disconnected from the warmth and quality of the restaurant itself. Owner Ranjit knew the food was the star — he just needed someone to help the world see it.',
    ],
    challenge: 'Low online visibility and no consistent brand voice across social channels.',
    challengeDetail: [
      'Spice Garden\'s social accounts were a patchwork of inconsistent posts — some taken on phones, some stock images, some menus photographed flat on a table. There was no brand palette, no visual consistency, and no strategy connecting content to actual customer behaviour like bookings or visits. The result was an account that failed to convey the quality of the restaurant, and followers who engaged rarely if at all.',
      'The competitive landscape in Barnsley\'s restaurant market had also shifted. Newer restaurants opening in the area were investing in professional photography and TikTok content from day one, building large followings quickly. Spice Garden was losing visibility to competitors who were arguably less established but far more present online. Ranjit needed a content partner who could reverse that dynamic fast.',
    ],
    strategy: 'We created a full content strategy with professional food photography, branded Reels, and targeted local promotions on Instagram and TikTok.',
    strategyDetail: [
      'The brief was clear: make the food the hero. We started with a full visual brand audit, creating a consistent palette, typography treatment for captions, and a signature shooting style — close, warm, with steam rising and sauces pooling — that made Spice Garden\'s content immediately recognisable in a feed. We built a content calendar around three recurring series: "Dish of the Week", "The Making Of" (behind-the-scenes prep videos), and "Friday Night Ready" (pre-weekend booking prompts).',
      'TikTok was identified as a key growth lever for reaching a younger Barnsley audience, and we produced a series of short-form videos showcasing the theatre of the kitchen — tandoor bread being pulled, sizzling karahi dishes arriving tableside, chefs plating up at speed. These videos were engineered to generate shares and saves, with clear calls to action linking to the reservation page. The strategy blended organic growth with occasional paid promotion of top-performing content.',
    ],
    execution: [
      {
        title: 'Professional Food Photography',
        detail: 'Monthly on-site shoots producing a library of 40+ styled dish and restaurant atmosphere images, giving a consistent supply of scroll-stopping visual content.',
      },
      {
        title: 'Short-Form Video Production',
        detail: 'Weekly Instagram Reels and TikTok videos showcasing the kitchen, the dishes, and the dining experience — edited to trend formats with original audio and captions.',
      },
      {
        title: 'Content Strategy & Scheduling',
        detail: 'A structured 12-week rolling content calendar across Instagram, Facebook, and TikTok, with posts scheduled at peak engagement windows and a consistent brand voice in every caption.',
      },
      {
        title: 'Local Promotion Campaigns',
        detail: 'Targeted paid promotions for special events, new menu launches, and seasonal offers pushed to local food audiences within a 10-mile radius of Barnsley town centre.',
      },
    ],
    metrics: [
      {
        value: '8,200',
        label: 'New Followers',
        context: 'Combined Instagram and TikTok following grew by over 8,200 new, engaged local followers within the first four months of the new content strategy.',
      },
      {
        value: '3×',
        label: 'Weekend Reservations',
        context: 'Weekend reservation volumes tripled compared to the prior year period, with Friday evenings now fully booked two weeks in advance.',
      },
      {
        value: '+180%',
        label: 'Profile Visits',
        context: 'Instagram profile visits increased by 180%, with a significant portion clicking through directly to the reservation link in the bio.',
      },
    ],
    resultsNarrative: [
      'The transformation in Spice Garden\'s online presence was visible almost immediately. Within four weeks of the new content launching, engagement rates jumped from under 1% to over 6%, and individual Reel posts began reaching audiences of 10,000 to 30,000 — many of them entirely new to the brand. The kitchen\'s "karahi sizzle" video was their first piece of content to go genuinely viral within the local area, reaching 85,000 views and generating a wave of first-time bookings.',
      'For Ranjit, the most meaningful result was the change in his booking pattern. Before working with Bee Viral, walk-ins were unpredictable and weekend evenings sometimes had gaps. Now the restaurant runs a waiting list for Friday and Saturday evenings, and Ranjit has had to extend opening hours on certain nights to accommodate demand. The content didn\'t just build a following — it built a business case for growth.',
    ],
    proofOfWork: {
      beforeAfter: [
        { metric: 'Combined Followers (Instagram + TikTok)', before: '1,100', after: '9,300+' },
        { metric: 'Average Post Engagement Rate', before: 'Under 1%', after: '6.2%' },
        { metric: 'Monthly Profile Visits (Instagram)', before: '~480', after: '1,350+' },
        { metric: 'Weekend Reservation Volume', before: 'Sporadic, gaps most weekends', after: 'Fully booked 2 weeks in advance' },
        { metric: 'TikTok Presence', before: 'No account', after: 'Active account, top video at 85,000 views' },
        { metric: 'Content Volume', before: '2–3 posts/week, no video', after: '5 posts/week + TikTok + daily Stories' },
      ],
      timeline: [
        { period: 'Week 1–2', milestone: 'Visual brand audit completed; shooting style guide, colour palette, and caption templates established' },
        { period: 'Week 3–4', milestone: 'First professional food shoot completed; TikTok account created and first five videos published' },
        { period: 'Month 2', milestone: 'Engagement rate rises to 4%+ as professional content replaces phone imagery; "Dish of the Week" series launches' },
        { period: 'Month 3', milestone: '"Karahi sizzle" video reaches 85,000 views; first-time bookings spike noticeably' },
        { period: 'Month 4', milestone: 'Combined following passes 9,000; weekend reservations fully booked two weeks in advance' },
      ],
      keyWins: [
        'Individual Reel posts reaching 10,000–30,000 impressions from audiences entirely new to the brand',
        '"Karahi sizzle" video reached 85,000 views and generated a wave of first-time bookings within days',
        'Engagement rate grew from under 1% to over 6% — a 500%+ improvement in audience quality',
        'Restaurant now runs a waiting list for Friday and Saturday evenings',
        'Opening hours extended to meet demand created through social media activity',
        '8,200 new followers gained — the majority local, food-engaged Barnsley area accounts',
      ],
    },
    quote: 'People kept telling me the food would sell itself. It does — but only if people can see it. The content Bee Viral creates makes our dishes look like works of art. I\'ve had people come in specifically because they saw a video and had to try it. That\'s the power of good content.',
    quoteAuthor: 'Ranjit Dhaliwal',
    quoteRole: 'Owner, Spice Garden',
    timeframe: 'Results within 90 days',
    relatedSlugs: ['the-blossom-cafe', 'forge-flame-bbq'],
  },

  {
    slug: 'peak-performance-gym',
    business: 'Peak Performance Gym',
    location: 'Sheffield',
    industry: 'Fitness',
    service: 'Paid Advertising',
    gradientFrom: 'from-emerald-900/70',
    initial: 'P',
    seoTitle: 'Peak Performance Gym Case Study | Bee Viral',
    metaDescription: 'How Bee Viral helped Peak Performance Gym in Sheffield sign up 120 new members in 8 weeks at £18 cost per acquisition using paid social advertising.',
    tagline: 'A brand-new gym in a crowded market signed up 120 members in 8 weeks — paid advertising made the launch impossible to ignore.',
    overview: [
      'Peak Performance Gym opened its doors in Sheffield\'s Hillsborough area in early 2024, bringing a 6,000 sq ft facility with free weights, cardio equipment, functional training zones, and personal training to a neighbourhood that had previously been underserved by quality fitness facilities. Owner and former personal trainer Marcus had spent two years planning and fitting out the space — but without a pre-existing customer base, the launch was make-or-break.',
      'Marcus knew that the facility was excellent — the kit was premium, the team was qualified, and the membership pricing was competitive. What he didn\'t have was time. With a lease starting and fixed costs from day one, he needed to fill the gym fast. He approached Bee Viral eight weeks before opening with a clear brief: get members through the door on launch day.',
    ],
    challenge: 'New gym opening into a competitive market, needing rapid membership growth from day one.',
    challengeDetail: [
      'Sheffield has no shortage of gyms — from budget chains charging £10 a month to boutique studio fitness concepts. Breaking through in that environment as a brand-new independent required more than just opening the doors and hoping for the best. Marcus needed a launch strategy that would generate genuine excitement among local fitness audiences before the gym even opened, and convert that excitement into paid memberships within the first few weeks.',
      'The secondary challenge was trust. A brand-new gym with no reviews, no track record, and no community yet had to work significantly harder to earn commitment from potential members who could easily join an established competitor. Every piece of marketing had to overcome that hesitation — positioning Peak Performance as worth the leap despite being new.',
    ],
    strategy: 'We ran pre-launch and launch-phase Facebook and Instagram ads targeting local fitness audiences with membership offers and a free trial campaign.',
    strategyDetail: [
      'We built the campaign in two distinct phases. The pre-launch phase — running for four weeks before opening — was designed to build awareness and capture intent. We ran teaser campaigns showing the fit-out progress, equipment reveals, and interviews with the training team. A "Founding Member" offer with a significant discount for those who signed up before opening day created urgency and generated over 60 pre-registrations before launch.',
      'The launch phase then hit hard across Facebook and Instagram, with video ads showing the completed facility, testimonials from Founding Members, and a 14-day free trial offer targeted at local postcode audiences. We used Facebook\'s detailed interest targeting to reach people who had engaged with fitness content, gym brands, or sporting events — and retargeted anyone who had viewed the pre-launch content. Every ad drove to a simple landing page with a one-click trial registration form.',
    ],
    execution: [
      {
        title: 'Pre-Launch Awareness Campaign',
        detail: 'A four-week teaser campaign using facility reveal content, team introductions, and a Founding Member offer drove pre-launch sign-ups and built a warm audience before opening day.',
      },
      {
        title: 'Launch Phase Paid Ads',
        detail: 'Multi-format Facebook and Instagram campaigns combining video tours, offer creatives, and social proof drove a sustained wave of trial registrations throughout the launch month.',
      },
      {
        title: 'Retargeting & Conversion',
        detail: 'A custom retargeting sequence re-engaged anyone who had viewed launch content but not yet converted, with time-limited offers that pushed fence-sitters to act.',
      },
      {
        title: 'Facebook & Google Review Strategy',
        detail: 'We built a systematic review-generation process into the onboarding journey, helping Peak Performance build a 4.8-star Facebook rating from 80+ reviews within two months.',
      },
    ],
    metrics: [
      {
        value: '120',
        label: 'Members in 8 Weeks',
        context: 'Peak Performance Gym signed up 120 paid members within eight weeks of opening, exceeding the original 90-member target set for the first quarter.',
      },
      {
        value: '£18',
        label: 'Cost per Acquisition',
        context: 'The blended cost per new member across the pre-launch and launch phases came to £18 — exceptional value for a fitness vertical where £40-£70 is considered good.',
      },
      {
        value: '4.8★',
        label: 'Facebook Rating',
        context: 'A structured review-generation approach built a 4.8-star Facebook rating across 80+ reviews within two months, establishing immediate social proof for the new gym.',
      },
    ],
    resultsNarrative: [
      'The pre-launch campaign generated more pre-registrations than Marcus had dared hope for — 63 Founding Members had committed before the gym was even open. On opening day itself, the facility saw over 200 walk-ins for tours, and the first weekend generated 47 new memberships. The launch phase ads then sustained that momentum through weeks two to eight, consistently delivering 10-15 new sign-ups per week at a cost that made the marketing investment clearly worthwhile.',
      'What Marcus valued as much as the raw numbers was the quality of the membership base. Because the targeting was so specific — local, fitness-engaged, and price-appropriate — retention rates were high from the start. Members who joined through the paid ads came in knowing what they were getting and were engaged from day one. Eight months after opening, Peak Performance has over 400 active members and is considering a second Sheffield location.',
    ],
    proofOfWork: {
      beforeAfter: [
        { metric: 'Paid Members', before: '0 (pre-launch)', after: '120 within 8 weeks' },
        { metric: 'Pre-Launch Registrations', before: '0', after: '63 Founding Members before opening day' },
        { metric: 'Cost per Member Acquisition', before: 'No benchmark', after: '£18 blended CPA' },
        { metric: 'Opening Day Walk-Ins', before: 'Target: 50+', after: '200+ facility tours completed' },
        { metric: 'Facebook Rating', before: 'No reviews (brand new)', after: '4.8★ across 80+ reviews at 2 months' },
        { metric: 'Total Active Members (8 months)', before: '0', after: '400+ — second location now planned' },
      ],
      timeline: [
        { period: 'Week 1–4 (Pre-Launch)', milestone: 'Teaser campaigns live; facility reveal content, team introductions, Founding Member offer launched' },
        { period: 'Week 3 (Pre-Launch)', milestone: '40 Founding Member pre-registrations secured before gym even opens' },
        { period: 'Opening Week', milestone: '200+ walk-in tours; 47 new memberships signed in first weekend; Facebook launch campaign deployed' },
        { period: 'Week 3–6', milestone: 'Retargeting campaigns convert fence-sitters; 10–15 new sign-ups per week sustained' },
        { period: 'Week 8', milestone: '120th paid member joins; original 90-member target exceeded by 33%' },
        { period: 'Month 8', milestone: '400+ active members; Marcus exploring second Sheffield location' },
      ],
      keyWins: [
        '63 Founding Member pre-registrations secured before the gym doors opened for the first time',
        '200+ walk-in tours completed on opening day alone',
        'CPA of £18 against a fitness sector benchmark of £40–£70 — achieved in a launch context',
        'First-weekend sign-up rate of 47 memberships exceeded Marcus\'s entire first-month target',
        'Review strategy built 4.8★ Facebook rating from 80+ reviews within just two months of trading',
        '400 active members at month eight — trajectory now supporting second location feasibility',
      ],
    },
    quote: 'Opening a gym from scratch is terrifying. Bee Viral took away the biggest worry — whether anyone would show up. We had members booked in before we even opened. The launch campaign was just exceptional. It felt like the whole of Hillsborough knew about us overnight.',
    quoteAuthor: 'Marcus Thompson',
    quoteRole: 'Owner, Peak Performance Gym',
    timeframe: 'Results from week one',
    relatedSlugs: ['elevate-physiotherapy', 'meadows-dental-practice'],
  },

  {
    slug: 'luxe-hair-beauty',
    business: 'Luxe Hair & Beauty',
    location: 'Rotherham',
    industry: 'Beauty',
    service: 'Social Media Management',
    gradientFrom: 'from-fuchsia-900/70',
    initial: 'L',
    seoTitle: 'Luxe Hair & Beauty Case Study | Bee Viral',
    metaDescription: 'How Bee Viral helped Luxe Hair & Beauty in Rotherham achieve 220% follower growth and three weeks of advance bookings through professional social media management.',
    tagline: 'From sporadic posts and a half-empty appointment book to a three-week wait list — social media management gave Luxe Hair & Beauty the platform it deserved.',
    overview: [
      'Luxe Hair & Beauty is one of Rotherham town centre\'s most stylish salons, offering a full range of hair, nail, and beauty treatments in a modern, welcoming space. Owner and senior stylist Danielle built the salon from the ground up over six years, developing a team of seven therapists and stylists who deliver genuinely exceptional results. The salon had strong word-of-mouth, loyal clients, and a beautiful physical space — but the social media presence told a completely different story.',
      'Before Bee Viral, Luxe was posting perhaps two or three times a week at most — and often going completely silent during busy periods when there was no time to think about content. The photos were taken quickly between clients on a phone, the captions were generic, and the account looked nothing like the quality of the work being produced inside the salon every day.',
    ],
    challenge: 'Inconsistent posting, low local brand awareness, and struggling to fill the appointment book.',
    challengeDetail: [
      'The appointment book told the story clearly: Mondays and Tuesdays were consistently quiet, and late-availability slots through the week were regularly going unfilled. While Danielle and her team were genuinely talented, the salon was competing with several newer beauty businesses in the area that were posting daily, using Reels confidently, and offering online booking with visible availability. Luxe was losing potential new clients to competitors who simply looked more active and current online.',
      'There was also the matter of showcasing the breadth of services. Luxe offered everything from balayage and extensions to semi-permanent makeup and luxury manicures — but clients often didn\'t know. The social account focussed almost entirely on hair, leaving beauty and nail treatments largely invisible. A full-service salon was effectively marketing itself as a hair-only business, leaving significant revenue on the table.',
    ],
    strategy: 'We took over their Instagram and Facebook with daily content, before-and-after transformations, seasonal offers, and active community management.',
    strategyDetail: [
      'We took full ownership of Luxe\'s Instagram and Facebook from day one. Our strategy was built around three things: consistency, transformation content, and local engagement. We established a daily posting rhythm across both platforms, mixing client transformation reveals, educational how-to content, product recommendations, and team features. Before-and-after transformations proved to be the strongest-performing content type by a significant margin, regularly reaching local audiences of 5,000 to 15,000 per post.',
      'We also built a structured Stories strategy specifically designed to drive bookings — daily "we have availability today" updates, limited-offer promotions mid-week, and countdowns to popular seasonal services like Christmas party hair and Valentine\'s nail art. Community management was handled by our team, with every comment and DM responded to within an hour during business hours, creating a warm and responsive online presence that mirrored the in-salon experience.',
    ],
    execution: [
      {
        title: 'Daily Content Delivery',
        detail: 'A seven-days-a-week posting schedule across Instagram and Facebook, with content batched and scheduled monthly to ensure consistency without burden on the Luxe team.',
      },
      {
        title: 'Transformation Content Programme',
        detail: 'A structured brief for the Luxe team to photograph completed client looks for social use, with editing, captions, and hashtag strategy handled entirely by Bee Viral.',
      },
      {
        title: 'Seasonal Campaign Calendar',
        detail: 'Dedicated campaigns for key booking periods — Christmas, Valentine\'s, prom season, and summer holidays — with designed graphics, offer copy, and Stories sequences driving direct bookings.',
      },
      {
        title: 'Active Community Management',
        detail: 'Full inbox and comment management during business hours, ensuring every enquiry was handled quickly and every new follower was welcomed warmly.',
      },
    ],
    metrics: [
      {
        value: '+220%',
        label: 'Follower Growth',
        context: 'Instagram following grew by 220% in the first six months, moving from under 800 followers to over 2,500 genuinely local, engaged accounts.',
      },
      {
        value: '3 Wks',
        label: 'Advance Bookings',
        context: 'Within four months, Luxe\'s appointment book had extended from same-week availability to a consistent three-week advance booking window.',
      },
      {
        value: '+95%',
        label: 'Story Reach',
        context: 'Average daily Instagram Story reach grew by 95%, with booking-prompt Stories generating an average of 8-12 direct message enquiries per week.',
      },
    ],
    resultsNarrative: [
      'The change in Luxe\'s business came in two waves. The first was a rapid increase in new client enquiries — within the first six weeks, Danielle was regularly getting DMs from people who had found the salon through Instagram and wanted to book in for the first time. The transformation content in particular was driving this; potential clients could see the quality of the work before they committed, which meant they arrived already sold. Conversion from enquiry to booking was extremely high.',
      'The second wave was the depth of the booking pipeline. Where previously Danielle would have dead Monday mornings and occasional gaps through the week, the consistent social presence created a steady stream of enquiries that filled those slots. Within four months, the salon moved from same-week availability to a three-week forward booking position — a pressure Danielle describes as a very good problem to have. She has since taken on a part-time junior stylist to handle the additional demand.',
    ],
    proofOfWork: {
      beforeAfter: [
        { metric: 'Instagram Followers', before: 'Under 800', after: '2,500+' },
        { metric: 'Posting Frequency', before: '2–3 posts/week, inconsistent', after: '7 posts/week + daily Stories' },
        { metric: 'Advance Booking Window', before: 'Same-week slots available', after: '3-week forward booking window' },
        { metric: 'Daily Story Reach', before: 'Under 200 average', after: '390+ average (95% increase)' },
        { metric: 'Weekly DM Enquiries from Stories', before: '2–3 per week', after: '8–12 per week' },
        { metric: 'Monday/Tuesday Utilisation', before: 'Consistently quiet', after: 'Fully booked within 48 hours of slots opening' },
      ],
      timeline: [
        { period: 'Week 1–2', milestone: 'Full account audit; content calendar built; transformation photography brief issued to the Luxe team' },
        { period: 'Week 3', milestone: 'Daily posting schedule begins; first before-and-after transformations published' },
        { period: 'Week 4–6', milestone: 'First before-and-after posts reach 5,000+ impressions; new client DM enquiries begin increasing' },
        { period: 'Month 2–3', milestone: 'Stories strategy introduced; "availability today" prompts drive direct bookings; quieter weekday slots start filling' },
        { period: 'Month 4', milestone: 'Appointment book extends to 3-week advance bookings; Danielle takes on part-time junior stylist' },
        { period: 'Month 6', milestone: 'Follower count passes 2,500; engagement rate consistently above 5%' },
      ],
      keyWins: [
        'Before-and-after posts regularly reaching local audiences of 5,000 to 15,000 per post',
        'DM enquiries from Stories grew from 2–3 per week to 8–12 per week by month 3',
        'Monday and Tuesday slots now filling within 48 hours — previously the salon\'s quietest days',
        'Appointment book extended from same-week to a consistent 3-week advance booking position',
        'Part-time junior stylist hired to handle the additional client volume generated through social',
        'Seasonal campaigns (Christmas, Valentine\'s, prom) now fully booked out weeks in advance',
      ],
    },
    quote: 'I used to feel guilty about not posting, like I was failing the business. Now I don\'t have to think about it — Bee Viral handle everything. But the real difference is the bookings. I\'m three weeks ahead now. That has genuinely changed how I feel about running the salon.',
    quoteAuthor: 'Danielle Firth',
    quoteRole: 'Owner, Luxe Hair & Beauty',
    timeframe: 'Results within 8 weeks',
    relatedSlugs: ['thorntons-fine-jewellery', 'the-blossom-cafe'],
  },

  {
    slug: 'clarkes-auto-centre',
    business: "Clarke's Auto Centre",
    location: 'Doncaster',
    industry: 'Automotive',
    service: 'Local SEO',
    gradientFrom: 'from-slate-700/70',
    initial: 'C',
    seoTitle: "Clarke's Auto Centre Case Study | Bee Viral",
    metaDescription: "How Bee Viral helped Clarke's Auto Centre in Doncaster reach page one of Google and increase call enquiries by 70% through local SEO.",
    tagline: "Buried on page three of Google, Clarke's Auto Centre was losing customers to national chains every single day — local SEO changed everything.",
    overview: [
      "Clarke's Auto Centre has been servicing, repairing, and MOT-testing vehicles across Doncaster for over 15 years. Owner Phil Clarke built the business on straight talking, fair pricing, and the kind of old-school customer service that keeps families bringing every car they've ever owned to the same garage. With a team of four qualified technicians and a full ramp bay, they had the capacity and the quality — they just weren't being found.",
      "For years, Phil had relied on a combination of passing trade, repeat customers, and the occasional recommendation. But as national chains and fast-fit centres expanded their presence in Doncaster and invested heavily in digital marketing, Clarke's was losing first-time customers who found competitors first on Google. Phil knew SEO was the answer but had no idea where to start.",
    ],
    challenge: 'Buried on page 3 of Google, losing customers to national chains that appeared ahead of them in local search.',
    challengeDetail: [
      "A simple search for 'MOT Doncaster' or 'car service Doncaster' placed Clarke's on page three or beyond — effectively invisible to the majority of potential customers who never scroll past the first few results. The Google Business Profile was outdated, had minimal reviews, and wasn't fully optimised. The website had no local SEO structure, missing title tags, thin location content, and zero backlink profile from local sources.",
      "The business was also losing out specifically on high-intent, time-sensitive searches — someone searching 'emergency car repair Doncaster' or 'same-day MOT Doncaster' is ready to spend money right now. Every day those searches were going to competitors was a direct revenue loss. Phil estimated he was losing three to five potential new customers per day to garages he knew were no better than his own.",
    ],
    strategy: 'We fully optimised their Google Business Profile, built location-specific content, and executed a local link-building campaign.',
    strategyDetail: [
      "We approached Clarke's Local SEO as a three-layer project: technical foundation, content authority, and profile optimisation. Starting with the Google Business Profile, we rebuilt it from scratch — updated categories, added services with individual descriptions, loaded a full image library, enabled booking and call features, and implemented a weekly posting schedule to signal activity to Google's local ranking algorithm.",
      "We then restructured the website with dedicated service landing pages for MOT testing, car servicing, diagnostics, tyres, and brakes — each with unique location-optimised content targeting Doncaster and surrounding areas. We also built a local link-acquisition strategy, earning citations and mentions from Doncaster community sites, local business directories, and automotive trade bodies. The combination of profile authority, content relevance, and citation consistency moved Clarke's from page three to page one within 16 weeks.",
    ],
    execution: [
      {
        title: 'Google Business Profile Rebuild',
        detail: 'Complete overhaul of the GBP listing including categories, service descriptions, image library, booking links, and a structured review-generation strategy targeting verified customers.',
      },
      {
        title: 'Service Page SEO',
        detail: 'Creation of individual optimised landing pages for each core service, with unique local content, schema markup, and clear conversion paths for calls and bookings.',
      },
      {
        title: 'Local Citation Building',
        detail: 'Systematic acquisition of consistent NAP citations across 40+ local directories, automotive sites, and Doncaster business listings to build local search authority.',
      },
      {
        title: 'Review Generation System',
        detail: 'Implementation of a post-visit SMS and email review-prompt sequence that generated 60+ new Google reviews within the first three months.',
      },
    ],
    metrics: [
      {
        value: 'Pg 1',
        label: 'Google Ranking',
        context: "Clarke's Auto Centre now ranks on page one of Google for 12 target keywords, including top-three positions for 'MOT Doncaster' and 'car service Doncaster'.",
      },
      {
        value: '+70%',
        label: 'Call Enquiries',
        context: 'Inbound phone enquiries tracked via Google Business Profile and call tracking increased by 70% compared to the six months prior to the SEO campaign.',
      },
      {
        value: '12',
        label: 'Keywords on Page 1',
        context: 'From zero page-one positions at the start of the engagement, Clarke\'s now ranks on page one for 12 target search terms across MOT, servicing, and repair categories.',
      },
    ],
    resultsNarrative: [
      "The impact of ranking on page one was almost immediate. Within the first month of achieving page-one positions, Clarke's saw a consistent increase in calls from new customers — people who had found them on Google rather than through a recommendation or repeat visit. Phil started asking every new caller how they'd found the garage, and 'Google' became the most common answer within weeks of the rankings improving.",
      "After 16 weeks, Clarke's was generating more new customer calls than at any point in its 15-year history. The 70% increase in call enquiries translated directly into ramp bookings, with the workshop running at near-full capacity for the first time. Phil has since implemented an online booking system to handle the volume, and is considering expanding to a second site in the Doncaster area.",
    ],
    proofOfWork: {
      beforeAfter: [
        { metric: 'Google Ranking — "MOT Doncaster"', before: 'Page 3+', after: 'Top 3, Page 1' },
        { metric: 'Page 1 Keyword Rankings', before: '0', after: '12 target keywords' },
        { metric: 'Monthly Inbound Calls', before: 'Baseline pre-campaign', after: '+70% increase' },
        { metric: 'Google Reviews', before: '31 reviews / 4.1★', after: '91+ reviews / 4.7★' },
        { metric: 'Google Business Profile Completeness', before: 'Basic listing, few photos', after: 'Fully optimised with 30+ photos, all services listed' },
        { metric: 'Local Directory Citations', before: '4 citations (inconsistent NAP)', after: '40+ consistent citations across local and trade directories' },
      ],
      timeline: [
        { period: 'Week 1–2', milestone: 'Full SEO audit completed; GBP assessment, website crawl, competitor gap analysis' },
        { period: 'Week 3–4', milestone: 'Google Business Profile fully rebuilt; image library uploaded; services configured with descriptions' },
        { period: 'Week 5–8', milestone: 'Individual service landing pages created for MOT, servicing, diagnostics, tyres, and brakes' },
        { period: 'Week 9–12', milestone: 'Citation building campaign across 40+ directories completed; review-prompt SMS system activated' },
        { period: 'Week 13–16', milestone: 'First page-one rankings appear for target keywords; call volume tracking confirms +40% uplift' },
        { period: 'Month 5', milestone: 'All 12 target keywords on page one; inbound calls at 70% above pre-campaign baseline' },
      ],
      keyWins: [
        'Moved from page 3 to top 3 for "MOT Doncaster" — the highest-value search term for the business',
        'Achieved page-one rankings for 12 target keywords within 16 weeks',
        '60+ new Google reviews generated in the first three months through post-visit SMS prompts',
        'Phil\'s team now reports "Google" as the most common answer when new callers are asked how they found the garage',
        'Workshop running at near-full capacity — ramp bookings at record levels',
        'Online booking system implemented to handle increased call and enquiry volume',
      ],
    },
    quote: "I've been in the same spot for 15 years and Google just didn't know I existed. Bee Viral fixed that. The phone rings differently now — more new people, less regulars calling back. Both are great, but the new customers mean the business is actually growing. Worth every penny.",
    quoteAuthor: 'Phil Clarke',
    quoteRole: "Owner, Clarke's Auto Centre",
    timeframe: 'Page 1 rankings within 16 weeks',
    relatedSlugs: ['hartley-roofing', 'south-yorkshire-plumbing'],
  },

  {
    slug: 'the-old-forge-kitchen',
    business: 'The Old Forge Kitchen',
    location: 'Barnsley',
    industry: 'Hospitality',
    service: 'Content Creation',
    gradientFrom: 'from-amber-900/70',
    initial: 'O',
    seoTitle: 'The Old Forge Kitchen Case Study | Bee Viral',
    metaDescription: 'How Bee Viral helped The Old Forge Kitchen in Barnsley quadruple social engagement and increase direct bookings by 55% through a complete content overhaul.',
    tagline: 'The food was extraordinary. The social media was not. Content creation finally gave The Old Forge Kitchen the online presence its kitchen had always earned.',
    overview: [
      'The Old Forge Kitchen sits in a beautifully converted forge building on the edge of Barnsley, offering a modern British menu that changes with the seasons and has earned a reputation among food lovers across South Yorkshire for genuinely adventurous, beautifully executed dishes. Head chef and owner James Whiteley has been refining the menu for seven years, building something that regularly draws customers from Sheffield, Wakefield, and beyond. The food has always been worth the journey.',
      'But the restaurant\'s social media had never kept pace with the quality of what was coming out of the kitchen. James was too busy cooking to think about content, the few photos they did post were taken quickly on a phone, and the accounts felt amateur compared to the premium dining experience they were charging for. Prospective diners who found them online were getting the wrong impression entirely.',
    ],
    challenge: 'The quality of the food far exceeded what their social media showed — they were losing bookings to better-looking competitors.',
    challengeDetail: [
      'The restaurant operated a booking-only model with limited covers, meaning every empty table had a direct and painful cost. James had noticed that the restaurants filling first in Barnsley and the surrounding area weren\'t necessarily the best — they were the ones that looked the best online. Competitors with glossy Instagram accounts and professional food photography were booking out weeks ahead, while The Old Forge Kitchen was often taking last-minute walk-in enquiries because their forward bookings were thin.',
      'There was also a broader brand perception problem. At the price point The Old Forge Kitchen operated, customers expected the full premium experience from first Instagram scroll to final dessert. The gap between the in-person experience — candlelit tables, hand-made pasta, wine list curated with genuine care — and the online presence was jarring. Potential diners scrolling a competitor\'s beautifully photographed feed before checking The Old Forge Kitchen\'s phone-quality snaps would almost always choose the former.',
    ],
    strategy: 'We delivered a complete content overhaul with professional photography, short-form video, and a consistent posting strategy that matched the premium dining experience.',
    strategyDetail: [
      'The starting point was establishing a visual identity that matched the restaurant\'s quality positioning. We conducted a full brand visual review, developing a signature shooting style — low light, close detail, warm tones, focused bokeh — that captured the intimacy and craft of the dining experience. We introduced a quarterly photography day that produced a full library of hero dish images, atmospheric restaurant shots, and preparation close-ups that gave three months\' worth of content at a time.',
      'Alongside the stills programme, we developed a short-form video strategy built around the most cinematic moments in James\'s kitchen — the butter baste, the plating, the open fire. These 30-second Reels were carefully edited with sound design to make the food feel tactile and alive. We also secured two collaborations with Yorkshire food bloggers and writers through our network, resulting in editorial coverage in two local publications that brought significant third-party credibility.',
    ],
    execution: [
      {
        title: 'Quarterly Photography Programme',
        detail: 'Full-day professional photography sessions each quarter producing 80+ hero images across dishes, atmosphere, and team portraits, creating a rich and varied content library.',
      },
      {
        title: 'Short-Form Video Content',
        detail: 'Weekly Instagram Reels using kitchen cinema — plating sequences, open-fire cooking, and sauce finishing — edited with professional sound design to make the food irresistible.',
      },
      {
        title: 'Content Calendar & Brand Voice',
        detail: 'A structured monthly content calendar with a refined, editorial brand voice in captions — warm but polished, matching the tone of a premium dining destination.',
      },
      {
        title: 'Press & Blogger Outreach',
        detail: 'Facilitated two hosted dining experiences with Yorkshire food media, resulting in editorial coverage in Barnsley Chronicle and a Yorkshire food and drink publication.',
      },
    ],
    metrics: [
      {
        value: '4×',
        label: 'Social Engagement',
        context: 'Average post engagement — likes, comments, shares, and saves — quadrupled within three months as professional content replaced phone-quality imagery.',
      },
      {
        value: '2',
        label: 'Local Press Features',
        context: 'Two editorial features secured in local food media drove significant new customer awareness and positioned The Old Forge Kitchen as a destination dining experience.',
      },
      {
        value: '+55%',
        label: 'Direct Bookings',
        context: 'Online direct bookings through the restaurant\'s own booking system increased by 55% in the six months following the content overhaul.',
      },
    ],
    resultsNarrative: [
      'The shift in perception was almost immediate. Within weeks of the new content going live, James started hearing from new customers who had come specifically because of the Instagram account — something that had never happened before. The professional photography transformed the account into a genuine showcase of the restaurant\'s quality, and the video content in particular drove strong share and save rates that amplified reach far beyond their existing following.',
      'The 55% increase in direct bookings was the number that mattered most commercially. At the restaurant\'s price point, filling every cover was the difference between a good week and an exceptional one. The Old Forge Kitchen now routinely books out two to three weeks ahead for weekend evenings, and James has been able to reduce the last-minute walk-in slots he\'d previously had to rely on. The content investment has directly and measurably translated into revenue.',
    ],
    proofOfWork: {
      beforeAfter: [
        { metric: 'Average Post Engagement', before: 'Under 1.5% — sporadic, phone-quality imagery', after: '6%+ — professional photography and video' },
        { metric: 'Advance Booking Window (weekends)', before: 'Walk-ins relied upon, sparse forward bookings', after: 'Routinely booked out 2–3 weeks ahead' },
        { metric: 'Direct Online Bookings', before: 'Baseline pre-engagement', after: '+55% increase over 6 months' },
        { metric: 'Press Coverage', before: 'No editorial mentions in prior 12 months', after: '2 editorial features in local food publications' },
        { metric: 'Content Quality', before: 'Phone snapshots between service', after: 'Quarterly professional shoot; 80+ images per session' },
        { metric: 'Last-Minute Walk-In Reliance', before: 'Regular; used to fill empty covers', after: 'Significantly reduced — covers pre-booked' },
      ],
      timeline: [
        { period: 'Week 1', milestone: 'Visual brand audit and brief; signature shooting style defined — warm, low-light, close detail, bokeh focus' },
        { period: 'Week 2–3', milestone: 'First full-day photography session; 80+ hero images produced across dishes, atmosphere, and team' },
        { period: 'Week 4–6', milestone: 'New content rolls out; engagement rate jumps from under 1.5% to over 4% within three weeks' },
        { period: 'Month 2', milestone: 'First short-form kitchen videos published; plating Reel reaches 40,000 impressions' },
        { period: 'Month 3', milestone: 'Press and blogger outreach delivers first editorial feature in Barnsley Chronicle' },
        { period: 'Month 4–6', milestone: 'Direct bookings up 55%; second quarterly shoot completed; weekend forward bookings extend to 3 weeks' },
      ],
      keyWins: [
        'First kitchen cinema Reel reached 40,000 impressions — content that never previously came close to this reach',
        'Two editorial features secured in local food media, bringing credibility and third-party validation',
        'Restaurant now routinely books out 2–3 weeks ahead for Friday and Saturday evenings',
        '55% increase in direct bookings through the restaurant\'s own system — reducing commission costs',
        'New first-time diners now regularly arrive citing Instagram as what convinced them to book',
        'Last-minute walk-in reliance dramatically reduced — covers are pre-booked weeks in advance',
      ],
    },
    quote: 'I knew the food was good enough. I just needed people to be able to see that before they walked through the door. The photos Bee Viral take are genuinely beautiful — I\'ve had guests say they came in because of an Instagram post and the food was exactly as good as it looked. That\'s everything.',
    quoteAuthor: 'James Whiteley',
    quoteRole: 'Head Chef & Owner, The Old Forge Kitchen',
    timeframe: 'Results within 12 weeks',
    relatedSlugs: ['spice-garden', 'the-blossom-cafe'],
  },

  {
    slug: 'south-yorkshire-plumbing',
    business: 'South Yorkshire Plumbing',
    location: 'Wath-upon-Dearne',
    industry: 'Trades',
    service: 'Local SEO + Paid Ads',
    gradientFrom: 'from-cyan-900/70',
    initial: 'S',
    seoTitle: 'South Yorkshire Plumbing Case Study | Bee Viral',
    metaDescription: 'How Bee Viral helped South Yorkshire Plumbing double their enquiry volume and reach the top 3 of the Google Local Pack through combined local SEO and paid advertising.',
    tagline: 'Competing against national comparison sites and losing emergency call-outs daily — a combined SEO and paid ads strategy put South Yorkshire Plumbing back on top.',
    overview: [
      'South Yorkshire Plumbing covers a wide area of South Yorkshire including Wath-upon-Dearne, Mexborough, Swinton, and Rotherham, offering everything from emergency boiler repairs and gas safety certificates to full bathroom installations. Owner and Gas Safe engineer Craig Henderson has been trading for nine years with a team of three engineers. The business had a solid reputation locally but was fighting an increasingly tough digital battle for emergency and urgent work.',
      'Comparison sites like Checkatrade and Rated People were taking up growing portions of paid search results and Google\'s local panel. Homeowners searching urgently for a plumber were increasingly going to these aggregators first — and those leads came with referral fees and competition that ate into margins significantly. Craig needed a way to own his local market directly, without paying to play on someone else\'s platform.',
    ],
    challenge: 'Competing against large national comparison sites and losing emergency call-out work to better-ranked competitors.',
    challengeDetail: [
      'The economics of relying on comparison sites were becoming untenable. Craig was paying lead fees on work that used to come directly, and found himself competing on price against plumbers he didn\'t know and couldn\'t verify. More frustrating still was watching competitors with inferior qualifications and reviews rank above him in Google\'s local results simply because they\'d invested in SEO and he hadn\'t. For a business with Craig\'s experience and Gas Safe credentials, being outranked felt deeply unfair — and it was costing him real money.',
      'The urgency problem was also significant. Plumbing and heating emergencies are high-value, time-sensitive jobs where the first credible business to appear on screen wins the work. If South Yorkshire Plumbing wasn\'t visible in the Google Local Pack for "emergency plumber Wath-upon-Dearne" or "boiler breakdown Rotherham", those calls were going somewhere else — irretrievably. Every missed ranking was a missed emergency call-out, and those jobs often led to long-term relationships with returning customers.',
    ],
    strategy: 'We combined a full Local SEO overhaul with targeted Google Ads for emergency plumbing keywords across the South Yorkshire area.',
    strategyDetail: [
      'The strategy had two parallel tracks designed to cover different time horizons. Google Ads gave us immediate visibility for the highest-intent emergency searches while the SEO work built long-term organic authority. We structured the Ads campaigns tightly around emergency and urgent keywords — "emergency plumber", "boiler breakdown", "no hot water" — with tight geographic targeting and call-only ad formats designed to get the phone ringing, not drive website visits.',
      'In parallel, the SEO programme tackled the Google Business Profile first — rebuilding it with full service detail, Gas Safe registration information, professional images of the team and vehicles, and a review-generation workflow that produced 45 new five-star reviews in the first three months. We then built location-specific service pages for each area South Yorkshire Plumbing covered, with schema markup, optimised meta structure, and locally relevant content that Google\'s ranking algorithm rewarded with strong local pack positions within 12 weeks.',
    ],
    execution: [
      {
        title: 'Google Ads Emergency Campaigns',
        detail: 'Call-only and search campaigns targeting high-intent emergency plumbing and heating keywords across South Yorkshire, structured for maximum visibility during out-of-hours periods.',
      },
      {
        title: 'Google Business Profile Authority Build',
        detail: 'Full GBP rebuild with service categories, professional imagery, Gas Safe accreditation details, and a structured customer review programme driving consistent five-star ratings.',
      },
      {
        title: 'Location Service Page Development',
        detail: 'Creation of individual SEO-optimised service pages for each town and district served, targeting local search intent with unique, relevant content.',
      },
      {
        title: 'Citation & Link Authority',
        detail: 'Systematic NAP citation building across trade directories, local business listings, and Gas Safe registration directories to establish consistent local search authority.',
      },
    ],
    metrics: [
      {
        value: '2×',
        label: 'Enquiry Volume',
        context: 'Total monthly enquiries — combining organic search, Google Ads, and Google Business Profile calls — doubled within three months of the combined strategy launching.',
      },
      {
        value: 'Top 3',
        label: 'Google Local Pack',
        context: 'South Yorkshire Plumbing now consistently appears in the top three results of the Google Local Pack for primary target keywords across all areas served.',
      },
      {
        value: '+88%',
        label: 'Organic Traffic',
        context: 'Organic website traffic grew by 88% as location service pages achieved strong Google rankings for area-specific plumbing and heating search terms.',
      },
    ],
    resultsNarrative: [
      'The Google Ads campaigns delivered results within the first week — Craig\'s phone was ringing with emergency call-outs that were going directly to him rather than through a comparison platform. By the end of the first month, the volume of direct enquiries had already matched what he\'d previously been receiving through referral and comparison sites combined. The quality of the leads was also markedly better — customers coming direct were more committed and less price-sensitive than those sourced through aggregators.',
      'As the organic SEO work matured over the following three months, the paid ad spend could be gradually reduced as organic visibility picked up the slack. By month four, South Yorkshire Plumbing was generating the majority of its leads organically — appearing in the Local Pack consistently, and converting at a rate that meant Craig could maintain a full schedule for his three-engineer team with minimal ongoing ad spend. The investment had effectively bought him his own digital infrastructure rather than perpetual dependence on third-party platforms.',
    ],
    proofOfWork: {
      beforeAfter: [
        { metric: 'Monthly Enquiry Volume', before: 'Mixed — referral + comparison site leads', after: '2× total enquiries — predominantly direct' },
        { metric: 'Google Local Pack Position', before: 'Not ranked in Local Pack', after: 'Consistent top 3 across primary keywords' },
        { metric: 'Organic Website Traffic', before: 'Baseline pre-campaign', after: '+88% organic sessions' },
        { metric: 'Comparison Site Dependency', before: 'Significant — paying referral fees on most leads', after: 'Minimal — majority of leads now direct' },
        { metric: 'Google Business Profile', before: 'Sparse — few photos, limited services listed', after: 'Fully optimised; Gas Safe credentials, team photos, 45 new reviews in 3 months' },
        { metric: 'Location Keyword Coverage', before: '0 ranked location service pages', after: 'Multiple pages ranked for Wath, Mexborough, Swinton, Rotherham terms' },
      ],
      timeline: [
        { period: 'Week 1', milestone: 'Dual-track strategy scoped: Google Ads for immediate visibility; SEO for long-term ownership' },
        { period: 'Week 2', milestone: 'Google Ads emergency campaigns live — call-only ads for emergency plumber and boiler breakdown terms' },
        { period: 'Week 3', milestone: 'Craig\'s phone begins ringing with direct emergency call-outs; first week generates 14 direct enquiries' },
        { period: 'Week 4–8', milestone: 'GBP rebuild completed; location service pages developed for each area served' },
        { period: 'Week 12', milestone: 'Local Pack top-3 achieved for primary keywords; organic traffic begins supplementing paid visibility' },
        { period: 'Month 4', milestone: 'Majority of leads now organic; ad spend reduced while pipeline maintained' },
      ],
      keyWins: [
        'First week of Google Ads delivered 14 direct emergency call-out enquiries — Craig had never had a day like it',
        'Achieved top 3 Local Pack ranking within 12 weeks for "emergency plumber" across all areas served',
        '45 new five-star Google reviews generated in the first three months through a structured customer review programme',
        'Comparison site dependency eliminated — Craig no longer pays referral fees on the majority of his work',
        'Organic traffic now sustains enquiry volume independent of paid spend',
        'Three-engineer team running at full capacity for the first time in the business\'s nine-year history',
      ],
    },
    quote: "I was sick of paying Checkatrade and then losing jobs on price anyway. Bee Viral got my business ranking so that people call me directly. My phone rings constantly now and I'm not sharing any of that revenue with a middleman. Best decision I've made for the business in years.",
    quoteAuthor: 'Craig Henderson',
    quoteRole: 'Owner, South Yorkshire Plumbing',
    timeframe: 'Local Pack in 12 weeks',
    relatedSlugs: ['hartley-roofing', 'clarkes-auto-centre'],
  },

  {
    slug: 'meadows-dental-practice',
    business: 'Meadows Dental Practice',
    location: 'Rotherham',
    industry: 'Healthcare',
    service: 'Social Media Strategy',
    gradientFrom: 'from-teal-900/70',
    initial: 'M',
    seoTitle: 'Meadows Dental Practice Case Study | Bee Viral',
    metaDescription: 'How Bee Viral helped Meadows Dental Practice in Rotherham generate 150+ new patient enquiries and achieve a 4.9-star Google rating through social media strategy.',
    tagline: 'In a sector where trust is everything, a carefully crafted social media strategy helped Meadows Dental reach 150 new patient enquiries in under six months.',
    overview: [
      'Meadows Dental Practice has served patients in Rotherham for over 20 years, offering both NHS and private dental care including teeth whitening, composite bonding, Invisalign, and implants. Practice principal Dr Aisha Noor had gradually expanded the private offering over recent years, investing in training and technology to deliver a genuinely exceptional patient experience. But the practice was struggling to communicate this evolution online and attract the new NHS and private patients needed to maintain growth.',
      'Healthcare marketing demands a particular sensitivity — it must build trust, handle patient anxieties carefully, and navigate clinical compliance requirements while still engaging effectively with a local audience. Previous attempts at social media had been patchy, well-intentioned but inconsistent, and had yielded little measurable result. Dr Noor needed a partner who understood both marketing and the specific demands of healthcare communications.',
    ],
    challenge: 'Struggling to attract new NHS and private patients in a competitive local market with no meaningful online presence.',
    challengeDetail: [
      'Rotherham has a considerable number of dental practices, and patients increasingly make their choice based on online reputation and social media presence before they ever pick up the phone. Meadows Dental had a Google listing with few recent reviews and almost no social media activity to speak of. When potential new patients searched for a dentist in Rotherham and then went to check social media before committing, they found almost nothing — which in healthcare is often interpreted as a lack of activity rather than just a lack of marketing, and creates doubt.',
      'The private treatment side of the business presented a particular challenge. Cosmetic and orthodontic treatments are significant investments, and patients considering Invisalign, veneers, or implants spend weeks or months researching before contacting a practice. Without a consistent, credible social media presence showcasing treatment results, patient journeys, and clinical expertise, Meadows was invisible during that crucial research phase — and the private chair was often under-utilised as a result.',
    ],
    strategy: 'We built a trust-first social media strategy with educational content, patient testimonials, team introductions, and targeted local ads promoting specific treatments.',
    strategyDetail: [
      'Healthcare social media requires a different approach from most sectors. Our strategy was built on the principle of \'educate first, promote second\'. We developed a content framework with four pillars: treatment education (what does composite bonding actually involve?), patient journey stories (with full consent and clinical sign-off), team and practice culture content, and direct treatment promotion for specific private services. This mix ensured the account built genuine authority and trust before asking for anything from the audience.',
      'All content was developed in close collaboration with Dr Noor and her clinical team to ensure accuracy and compliance. We worked within GDC advertising guidelines throughout, ensuring testimonials were handled appropriately and treatment results presented responsibly. Targeted paid ads promoted Invisalign consultations and teeth whitening offers to local audiences, with specific demographic targeting toward the age groups most likely to consider each treatment. Compliance and conversion in equal measure.',
    ],
    execution: [
      {
        title: 'Healthcare-Compliant Content Strategy',
        detail: 'Development of a four-pillar content framework covering patient education, treatment showcases, team culture, and compliant promotion, reviewed and approved by the clinical team at each stage.',
      },
      {
        title: 'Patient Testimonial Programme',
        detail: 'A structured, consent-managed system for capturing patient stories and transformation content, creating a bank of authentic social proof that built trust over time.',
      },
      {
        title: 'Private Treatment Campaigns',
        detail: 'Targeted social ad campaigns promoting Invisalign consultations and teeth whitening treatments to local audiences, driving direct enquiry to the practice via DM and phone.',
      },
      {
        title: 'Google Review Generation',
        detail: 'Implementation of a post-appointment review-prompt system that generated over 80 new Google reviews in six months, building the practice\'s 4.9-star rating.',
      },
    ],
    metrics: [
      {
        value: '150+',
        label: 'New Patient Enquiries',
        context: 'Meadows Dental received over 150 new patient enquiries attributable to social media activity in the first six months, a significant portion of which converted to registered patients.',
      },
      {
        value: '6 Mo',
        label: 'Time to Results',
        context: 'The trust-building nature of healthcare social media meant results built over a six-month period, with enquiry volumes compounding month on month as the strategy gained traction.',
      },
      {
        value: '4.9★',
        label: 'Google Reviews',
        context: 'A structured review-generation programme pushed the practice to a 4.9-star Google rating across 120+ reviews, making them the highest-rated dental practice in the local area.',
      },
    ],
    resultsNarrative: [
      'Healthcare social media is a slow build — trust takes time, and patients considering a new dentist rarely act on a single post. But the cumulative effect of six months of consistent, quality content was substantial. By month three, the private Invisalign consultation slots were filling regularly for the first time. By month six, the practice was receiving enquiries for treatments they\'d previously found difficult to promote — composite bonding and dental implants chief among them. The content had effectively educated the audience about treatments they didn\'t know they could access locally.',
      'The Google review improvement had a compounding effect that was arguably as impactful as the social media work itself. Moving to a 4.9-star rating with 120+ reviews made Meadows Dental the most trusted-looking option in local search results. Dr Noor reports that new patients frequently mention the Google rating as the thing that made them choose the practice over others. The combined effect of social media presence and review authority has created a sustainable new patient pipeline that continues to grow.',
    ],
    proofOfWork: {
      beforeAfter: [
        { metric: 'New Patient Enquiries (monthly)', before: 'Low — limited digital presence', after: '25+ attributable to social media by month 6' },
        { metric: 'Google Rating', before: '4.2★ — 38 reviews', after: '4.9★ — 120+ reviews' },
        { metric: 'Invisalign Consultation Bookings', before: 'Under-utilised — private chair often empty', after: 'Consultation slots filling consistently from month 3' },
        { metric: 'Social Media Posting', before: 'Occasional, no strategy, no video', after: '4-pillar content framework, consistent weekly schedule' },
        { metric: 'Patient Testimonials Online', before: 'Minimal — no structured process', after: '20+ consent-managed patient stories published across platforms' },
        { metric: 'Composite Bonding Enquiries', before: 'Rare — treatment not visible online', after: 'Regular enquiries from patients who found treatment via social content' },
      ],
      timeline: [
        { period: 'Week 1–2', milestone: 'Healthcare compliance review; content framework agreed with clinical team; consent management process established' },
        { period: 'Week 3–4', milestone: 'First educational content posts go live; team introduction series begins; Google review prompt system implemented' },
        { period: 'Month 2', milestone: 'First patient journey story published; Invisalign awareness campaign launched on Facebook' },
        { period: 'Month 3', milestone: 'Invisalign consultation slots begin filling consistently; Google review count passes 80' },
        { period: 'Month 4–5', milestone: 'Composite bonding and implant enquiries increase; 100+ reviews achieved on Google' },
        { period: 'Month 6', milestone: '150+ attributable new patient enquiries reached; 4.9★ Google rating with 120+ reviews' },
      ],
      keyWins: [
        'Google rating improved from 4.2★ to 4.9★ — 80 new reviews generated through systematic post-appointment prompts',
        'Invisalign consultation slots filling regularly from month 3 — previously the private chair was consistently under-utilised',
        'Composite bonding enquiries emerged as a new enquiry type — treatment now visible to patients who previously didn\'t know it was available locally',
        '20+ consent-managed patient transformation stories published, each driving trust and direct enquiry',
        'Practice is now the highest-rated dental practice in the local area based on Google reviews',
        'New patients frequently cite Google rating and social media presence as why they chose Meadows over competitors',
      ],
    },
    quote: "Dental marketing is tricky because patients need to trust you before they\'ll even book in. Bee Viral understood that from day one. They never pushed us to do anything that felt uncomfortable clinically, and the content they created genuinely represents who we are. The new patients we\'ve gained through this are exactly the kind of patients we want.",
    quoteAuthor: 'Dr Aisha Noor',
    quoteRole: 'Principal Dentist, Meadows Dental Practice',
    timeframe: 'Results compound over 6 months',
    relatedSlugs: ['elevate-physiotherapy', 'bramley-co-solicitors'],
  },

  {
    slug: 'bramley-co-solicitors',
    business: 'Bramley & Co. Solicitors',
    location: 'Sheffield',
    industry: 'Legal',
    service: 'Paid Advertising',
    gradientFrom: 'from-indigo-900/70',
    initial: 'B',
    seoTitle: 'Bramley & Co. Solicitors Case Study | Bee Viral',
    metaDescription: 'How Bee Viral helped Bramley & Co. Solicitors in Sheffield generate 65+ new enquiries per month at £22 per enquiry through targeted paid advertising.',
    tagline: 'A respected Sheffield law firm with no digital strategy was leaving thousands in new instructions on the table every month — paid advertising changed that overnight.',
    overview: [
      'Bramley & Co. Solicitors has operated from offices in Sheffield city centre for over 25 years, building a strong reputation in family law, residential conveyancing, and employment disputes. The firm employed eight solicitors and three paralegals, with a client base built largely through referral networks, professional introductions from estate agents, and word of mouth among Sheffield\'s business community. The quality of their legal work was beyond question.',
      'Managing partner Helen Bramley had watched other local firms invest heavily in digital marketing while Bramley & Co. relied on the same acquisition channels they\'d used for decades. As the referral landscape changed — estate agents consolidating, fewer professional introductions coming through — the firm\'s new instruction volumes had plateaued. Helen knew they needed to find new routes to clients but was rightly cautious about maintaining the professional image the firm had spent 25 years building.',
    ],
    challenge: 'Invisible online outside of their existing client base, with no digital strategy for attracting new enquiries for family law and conveyancing.',
    challengeDetail: [
      'A potential client going through a separation, buying their first home, or facing an employment dispute almost invariably searches Google before making a single phone call. Bramley & Co. had a website but it was dated, offered little useful information, and had never been optimised for search. Paid advertising was non-existent. When someone in Sheffield searched "family law solicitor Sheffield" or "conveyancing solicitor Sheffield", Bramley & Co. simply wasn\'t there — and those are the searches that translate directly into instructions.',
      "The professional services sector also presents a specific trust challenge in digital marketing. Potential clients need to feel confident in the firm before they contact them — and confidence comes from consistent, credible online presence. Bramley & Co.'s near-absence from social media and digital advertising meant they had no opportunity to build that pre-contact trust. They were being selected or discarded before they even knew a potential client existed.",
    ],
    strategy: 'We ran targeted Google and Facebook campaigns focused on high-intent local searches, backed by professional creative that conveyed trust and expertise.',
    strategyDetail: [
      'Legal advertising requires precision — both in targeting and in tone. We developed a campaign architecture with separate strategies for the two primary service areas: family law and conveyancing. Google Search Ads captured high-intent searches at the point of need — someone searching for a divorce solicitor in Sheffield right now is a qualified lead by definition, and getting in front of that search with a compelling, trust-building ad is the entire game. We structured tight keyword groups, compelling ad copy emphasising Bramley\'s 25-year track record, and sent traffic to purpose-built landing pages rather than the main website.',
      'Facebook campaigns served a different function: building awareness and consideration among local audiences who weren\'t actively searching yet but were in life stages that commonly require legal advice — first-time buyers, those going through relationship changes, small business owners. Carefully crafted educational content ads — "What to expect from conveyancing in 2024", "Separating? Here\'s what you need to know first" — drove click-throughs that positioned Bramley & Co. as knowledgeable and approachable before any commitment was required.',
    ],
    execution: [
      {
        title: 'Google Search Campaigns',
        detail: 'High-intent keyword campaigns for family law and conveyancing searches in Sheffield, with dedicated landing pages and call tracking for every ad group.',
      },
      {
        title: 'Facebook Awareness & Education',
        detail: 'Awareness-stage Facebook campaigns targeting life-event audiences with educational content that built Bramley\'s credibility and drove warm traffic to the website.',
      },
      {
        title: 'Professional Ad Creative',
        detail: 'Bespoke creative produced for every campaign — photography, copy, and design all developed to reflect the firm\'s 25-year reputation and professional positioning.',
      },
      {
        title: 'Conversion Tracking & Optimisation',
        detail: 'Full conversion tracking implementation across calls, contact form completions, and live chat, enabling precise campaign optimisation against actual enquiry cost.',
      },
    ],
    metrics: [
      {
        value: '65+',
        label: 'Enquiries per Month',
        context: 'Bramley & Co. now receives over 65 new digital enquiries per month across Google and Facebook — a channel that generated zero enquiries twelve months prior.',
      },
      {
        value: '£22',
        label: 'Cost per Enquiry',
        context: 'The blended cost per qualified legal enquiry across all campaigns sits at £22 — exceptional value in a sector where Google Ads alone can cost £80-£150 per lead without careful management.',
      },
      {
        value: '+210%',
        label: 'Website Traffic',
        context: 'Combined paid and organic website traffic increased by 210% from pre-campaign levels, establishing the firm\'s website as a meaningful business development channel for the first time.',
      },
    ],
    resultsNarrative: [
      'The Google Ads campaigns produced results almost immediately. Within the first two weeks, the firm was receiving calls from people who had found them through search — something that had simply never happened before. The enquiry quality was high: people with specific, immediate legal needs who had searched, found Bramley & Co. presented credibly, and called. Helen noted that these leads were in some ways more qualified than traditional referrals, because they\'d already found the firm independently and made an active choice.',
      'By month three, digital enquiries represented over 40% of all new instructions at Bramley & Co. — a channel that had contributed essentially nothing a year earlier. The firm has since invested in upgrading their website and is exploring content marketing and SEO as the next phase of their digital strategy, building on the foundation the paid campaigns established. For a firm that prided itself on traditional values, the digital transformation has been remarkably smooth.',
    ],
    proofOfWork: {
      beforeAfter: [
        { metric: 'Monthly Digital Enquiries', before: '0 — no digital advertising', after: '65+ per month from Google and Facebook' },
        { metric: 'Website Traffic', before: 'Baseline — minimal digital investment', after: '+210% combined paid and organic' },
        { metric: 'New Instruction Source Mix', before: '100% referrals and professional introductions', after: '40%+ from digital channels by month 3' },
        { metric: 'Google Ads Impression Share', before: '0% — not advertising', after: 'Top positions for "family law Sheffield" and "conveyancing Sheffield"' },
        { metric: 'Cost per Enquiry', before: 'No benchmark — no paid activity', after: '£22 blended across Google and Facebook' },
        { metric: 'Facebook Business Presence', before: 'Minimal — no ad campaigns', after: 'Active awareness campaigns reaching local life-event audiences weekly' },
      ],
      timeline: [
        { period: 'Week 1', milestone: 'Campaign strategy and landing page brief agreed; Google Ads account structured for family law and conveyancing' },
        { period: 'Week 2', milestone: 'Google Search Ads live for high-intent Sheffield legal searches; first enquiries received by end of week' },
        { period: 'Week 3–4', milestone: 'Facebook awareness campaigns launched targeting first-time buyers and life-event audiences with educational content' },
        { period: 'Month 2', milestone: 'Conversion tracking fully implemented across calls, contact forms, and live chat; optimisation cycle begins' },
        { period: 'Month 3', milestone: 'Digital enquiries reach 65+ per month; 40% of all new instructions now attributable to digital' },
        { period: 'Month 4+', milestone: 'Website upgrade begins; content marketing and SEO identified as next phase of digital strategy' },
      ],
      keyWins: [
        'First digital enquiries in the firm\'s 25-year history received within two weeks of campaigns going live',
        'Google Ads achieving top positions for "family law Sheffield" and "conveyancing Sheffield" — high-intent, high-value searches',
        '£22 cost per legal enquiry against a sector benchmark of £80–£150 without careful management',
        'Digital channel now represents 40% of all new instructions — a complete new revenue stream from zero',
        'Enquiry quality rated as high by the fee-earner team — clients arrive already informed and committed',
        'Facebook educational content reaching thousands of local residents in target life stages every week',
      ],
    },
    quote: "I was worried that online advertising would feel beneath us — that it would somehow compromise the firm's image. I was wrong. The campaigns Bee Viral ran were professional, tasteful, and effective. We're getting enquiries from people we'd never have reached before, and the conversion rate is excellent. I wish we'd done it five years ago.",
    quoteAuthor: 'Helen Bramley',
    quoteRole: 'Managing Partner, Bramley & Co. Solicitors',
    timeframe: 'First enquiries within 2 weeks',
    relatedSlugs: ['meadows-dental-practice', 'horizon-property-group'],
  },

  {
    slug: 'forge-flame-bbq',
    business: 'Forge & Flame BBQ',
    location: 'Barnsley',
    industry: 'Food & Beverage',
    service: 'Content Creation',
    gradientFrom: 'from-red-900/70',
    initial: 'F',
    seoTitle: 'Forge & Flame BBQ Case Study | Bee Viral',
    metaDescription: 'How Bee Viral helped Forge & Flame BBQ in Barnsley build 12,000 followers, secure 28 event bookings, and generate 2.1 million video views through content creation.',
    tagline: 'Zero followers. Zero event bookings. Zero brand presence. Forge & Flame BBQ went from a standing start to 12K followers and fully booked in four months.',
    overview: [
      'Forge & Flame BBQ launched as a street food and private catering concept in Barnsley in early 2024, the brainchild of pitmaster brothers Jake and Connor Sutton. Having spent years perfecting their low-and-slow technique — 18-hour briskets, applewood-smoked ribs, hand-crafted rubs — they were ready to take their food to the public and build a business around it. The product was exceptional. The challenge was that absolutely nobody knew it existed.',
      'Street food and catering is a discovery business. Unlike a fixed restaurant with a location and footfall, Forge & Flame needed to build an audience that would follow them to markets, book them for events, and spread the word. In 2024, that meant one thing: social media. Jake and Connor came to Bee Viral with a bold brief — build a brand that commands attention.',
    ],
    challenge: 'A new street food and catering business needing to build a following and attract event bookings from a standing start.',
    challengeDetail: [
      'Starting from absolute zero in a crowded food content landscape presented a significant challenge. There were already numerous established BBQ and street food accounts online, many with years of content and hundreds of thousands of followers. Breaking through required content that was genuinely exceptional — not just good — and a distribution strategy that could accelerate growth faster than organic alone would allow. Jake and Connor had passion and extraordinary food; they needed creative execution to match.',
      'The event booking side was particularly pressing. The business model depended on securing corporate events, private parties, and market slots to generate income. Without an audience or reputation, persuading event organisers to take a chance on an unknown catering brand was a difficult pitch. A social media following that demonstrated quality, reach, and engagement would be their most powerful sales tool — and they needed it fast.',
    ],
    strategy: 'We produced cinematic food video content for Instagram Reels and TikTok, combined with a targeted local awareness campaign to build brand recognition fast.',
    strategyDetail: [
      'We identified early that the food itself was cinematic — there is something genuinely compelling about a perfectly barked brisket being carved, about smoke rolling off a pit, about sauce pooling on a wooden board. Our content strategy was built entirely around making that theatre visible and irresistible. We shot short-form video with a cinematic approach — slow motion pulls, macro lens detail shots, dramatic lighting — and edited to trending audio formats that maximised the chance of algorithmic amplification on both TikTok and Instagram.',
      'Volume and consistency were as important as quality. We committed to a content cadence of five videos per week across TikTok and Instagram, supplemented by daily Stories showing the prep process, market setups, and behind-the-scenes moments that made the brand feel real and accessible. Local community amplification — tagging Barnsley food and events accounts, engaging with South Yorkshire food communities — accelerated growth in the critical local audience that would become event customers.',
    ],
    execution: [
      {
        title: 'Cinematic Food Video Production',
        detail: 'Weekly video shoots producing five short-form videos for TikTok and Instagram Reels, combining slow-motion carves, macro detail shots, and smoke-and-fire atmosphere for maximum visual impact.',
      },
      {
        title: 'TikTok Growth Strategy',
        detail: 'TikTok-native content strategy using trending audio, hashtag research, and duet-friendly formats that drove significant algorithmic reach and accumulated 2.1 million video views in four months.',
      },
      {
        title: 'Daily Stories & Behind-the-Scenes',
        detail: 'Daily Instagram Stories capturing prep, market setup, customer reactions, and team moments that built an authentic, engaged community around the brand.',
      },
      {
        title: 'Event Booking Content',
        detail: 'Dedicated content series showcasing corporate events, private parties, and market appearances that converted followers into event booking enquiries.',
      },
    ],
    metrics: [
      {
        value: '12K',
        label: 'Followers in 4 Months',
        context: 'Forge & Flame grew from zero to 12,000 combined Instagram and TikTok followers in four months, building one of the most-followed independent food brands in the Barnsley area.',
      },
      {
        value: '28',
        label: 'Event Bookings',
        context: 'Twenty-eight confirmed event bookings — including corporate catering, private parties, and market appearances — were secured directly through social media enquiries in the first four months.',
      },
      {
        value: '2.1M',
        label: 'Video Views',
        context: 'A single TikTok brisket carve video reached 850,000 views; combined video views across TikTok and Instagram Reels exceeded 2.1 million in the first four months.',
      },
    ],
    resultsNarrative: [
      'The first viral moment came in week six — a brisket carve video that Jake filmed during a Saturday market appearance and sent to the Bee Viral team for editing. Turned around and posted the same evening, it hit 100,000 views overnight on TikTok and 850,000 over the following week. The enquiries that followed were overwhelming — event organisers, market managers, local businesses asking about Christmas party catering, and food lovers asking when they could try the food. Forge & Flame had to put up a waiting list for new bookings.',
      'What made the growth sustainable was the community that formed around the content. The daily Stories, the behind-the-scenes prep videos, the market setup timelapse content — all of it made followers feel invested in the Sutton brothers\' journey. When Forge & Flame posted about a new market appearance, hundreds of followers would show up. The social following had become a genuine business asset — an audience that actively supported and championed the brand. Twenty-eight event bookings in four months for a brand that didn\'t exist is a result that exceeded every expectation.',
    ],
    proofOfWork: {
      beforeAfter: [
        { metric: 'Instagram Followers', before: '0 (brand new)', after: '7,400+' },
        { metric: 'TikTok Followers', before: '0 (brand new)', after: '4,600+' },
        { metric: 'Total Video Views', before: '0', after: '2.1 million across TikTok and Instagram Reels' },
        { metric: 'Event Bookings', before: '0', after: '28 confirmed bookings in 4 months' },
        { metric: 'Single Top Video Performance', before: 'No content published', after: '850,000 views — brisket carve, posted week 6' },
        { metric: 'Content Cadence', before: 'No accounts or content', after: '5 videos/week + daily Stories from week 3' },
      ],
      timeline: [
        { period: 'Week 1', milestone: 'Brand identity established; shooting brief agreed; Instagram and TikTok accounts created and optimised' },
        { period: 'Week 2–3', milestone: 'First shoot completed; 5 videos produced and launched across both platforms' },
        { period: 'Week 4–5', milestone: 'Consistent content cadence established; combined following reaches 800; first event enquiry received' },
        { period: 'Week 6', milestone: 'Brisket carve video posted — hits 100,000 TikTok views overnight; 850,000 total over following week' },
        { period: 'Week 7–8', milestone: 'Event enquiries overwhelming — waiting list opened; 12 corporate bookings confirmed' },
        { period: 'Month 4', milestone: '12,000 combined followers; 28 event bookings completed; 2.1 million total video views' },
      ],
      keyWins: [
        'Brisket carve video hit 100,000 TikTok views in its first night — week 6 of the account existing',
        'That single video reached 850,000 views and directly triggered a wave of event booking enquiries',
        'A waiting list for new bookings opened within 8 weeks of the brand launching from zero',
        '28 confirmed event bookings — corporate catering, private parties, and market slots — all attributed to social media',
        'From zero to one of the most-followed independent food brands in the Barnsley area within 4 months',
        '2.1 million video views achieved without a single pound spent on paid promotion',
      ],
    },
    quote: "We knew the food was special. We had no idea how to show the world. Bee Viral took what we were doing and made it look incredible on camera. The brisket video going viral was surreal — we were turning away event bookings the week after. From nothing to fully booked in four months. Unbelievable.",
    quoteAuthor: 'Jake Sutton',
    quoteRole: 'Co-Founder, Forge & Flame BBQ',
    timeframe: 'First viral moment at week 6',
    relatedSlugs: ['spice-garden', 'the-old-forge-kitchen'],
  },

  {
    slug: 'horizon-property-group',
    business: 'Horizon Property Group',
    location: 'Rotherham',
    industry: 'Property',
    service: 'Social Media Management',
    gradientFrom: 'from-violet-900/70',
    initial: 'H',
    seoTitle: 'Horizon Property Group Case Study | Bee Viral',
    metaDescription: 'How Bee Viral helped Horizon Property Group in Rotherham increase lead enquiries by 175%, quadruple LinkedIn reach, and secure 18 new vendor listings through social media management.',
    tagline: 'In a market crowded with established estate agents, Horizon Property Group used social media to become Rotherham\'s most visible and trusted property name.',
    overview: [
      'Horizon Property Group is an independent estate and letting agent covering Rotherham and surrounding villages, founded in 2019 by experienced property professional Mark Dawson. The agency combined genuine local knowledge with a commitment to service quality that stood apart from the volume-driven chains — but five years in, communicating that difference digitally remained a challenge. The company had a good website and a small but loyal client base, yet struggled to compete with the brand visibility and marketing budgets of the larger agencies.',
      'Property is a trust-based business above almost all else. Sellers and landlords are making decisions worth tens or hundreds of thousands of pounds, and they choose an agent they believe in. Mark knew that social media done well could build that trust at scale — showcasing expertise, celebrating successful sales, and positioning Horizon as the knowledgeable, personable alternative to the national chains.',
    ],
    challenge: 'Needed to establish credibility and generate landlord and vendor leads in a crowded local property market.',
    challengeDetail: [
      'Rotherham\'s property market was competitive and getting more so, with several national agency brands having expanded their local presence significantly. These chains had substantial marketing budgets and name recognition built over decades. Horizon Property Group\'s social media at the time of engagement was sporadic — occasional property listings shared from their website, a few sold signs photographed on phones, and very little that conveyed the depth of market knowledge and client care that actually differentiated the business.',
      'LinkedIn was identified as a key underexploited channel. The landlord and property investor market in South Yorkshire is active on LinkedIn, and Mark\'s own professional network could be a significant source of referrals and direct instructions if properly activated. Neither the company page nor Mark\'s personal profile had been developed as strategic business tools. The opportunity to become the go-to property voice on LinkedIn in Rotherham was very much open.',
    ],
    strategy: 'We built a content-led LinkedIn and Facebook strategy showcasing sold properties, market insights, and client testimonials to position them as the local experts.',
    strategyDetail: [
      'Our strategy centred on positioning Horizon Property Group as the definitive expert voice on the Rotherham property market — not just an agent advertising properties, but a source of genuinely useful market intelligence. We developed a weekly "Rotherham Property Market Update" series for LinkedIn, analysing local data, price trends, and area-specific insights that proved genuinely valuable to both property owners and investors. This content drove strong engagement and shares, reaching audiences far beyond Horizon\'s existing connections.',
      'On Facebook, the strategy was warmer and more community-focused — celebrating completions with client thank-you posts (with permission), showcasing the personality of the team, and sharing the stories behind properties. A structured vendor testimonial programme created a steady stream of social proof that directly addressed the trust barrier new clients faced. We also developed a "Sold in X days" format for each completed sale that combined transparency with a powerful conversion message.',
    ],
    execution: [
      {
        title: 'LinkedIn Market Authority Content',
        detail: 'Weekly market insight posts on LinkedIn — price trend analysis, investment area guides, and local property commentary — positioning Horizon as the expert voice in Rotherham property.',
      },
      {
        title: 'Facebook Community & Conversion Content',
        detail: 'Warm, story-led Facebook content featuring completions, vendor testimonials, and team culture posts that built community trust and drove direct enquiry.',
      },
      {
        title: 'Vendor Testimonial Programme',
        detail: 'A structured system for capturing and publishing vendor reviews and case studies, creating a consistent flow of authentic social proof across both platforms.',
      },
      {
        title: 'Landlord-Focused Ad Campaigns',
        detail: 'Targeted paid promotions to local landlords and property investors on both Facebook and LinkedIn, promoting Horizon\'s lettings management service and generating new landlord enquiries.',
      },
    ],
    metrics: [
      {
        value: '+175%',
        label: 'Lead Enquiries',
        context: 'Total vendor and landlord lead enquiries attributable to social media activity increased by 175% in the six months following the strategy launch.',
      },
      {
        value: '4×',
        label: 'LinkedIn Reach',
        context: 'LinkedIn post reach quadrupled as the market insight content was shared widely by the local property community, growing Mark\'s professional network by over 400 connections.',
      },
      {
        value: '18',
        label: 'New Vendor Listings',
        context: 'Eighteen new vendor instructions were directly attributed to social media contact in the first six months — sellers who reached out having followed Horizon\'s content before deciding to list.',
      },
    ],
    resultsNarrative: [
      'The LinkedIn market insight strategy proved more powerful than even we anticipated. Within six weeks, Mark\'s posts were consistently achieving 3,000 to 8,000 views — remarkable for a local estate agent — and generating direct messages from local landlords and property investors who wanted to discuss their portfolios. The content had effectively made Mark the most visible, knowledgeable-seeming property professional on LinkedIn in Rotherham, and that perception translated directly into instructions.',
      'The vendor listings metric told the most compelling business story. Eighteen instructions in six months directly attributed to social media — sellers who mentioned they\'d "been following Horizon for a while" before calling — represented a significant addition to Horizon\'s revenue pipeline. Property instructions that come through warm social channels also convert at higher rates and encounter less fee negotiation, because the relationship and trust have already been built. Mark is now one of the most connected property professionals in South Yorkshire on LinkedIn, and that network continues to generate instructions on a regular basis.',
    ],
    proofOfWork: {
      beforeAfter: [
        { metric: 'Monthly Lead Enquiries', before: 'Low — referral and repeat only', after: '+175% increase in vendor and landlord enquiries' },
        { metric: 'LinkedIn Post Reach (average)', before: 'Under 300 impressions/post', after: '3,000–8,000 impressions/post' },
        { metric: 'LinkedIn Network Size', before: 'Small professional network', after: '+400 new connections in 6 months' },
        { metric: 'New Vendor Instructions from Social', before: '0 attributable', after: '18 instructions in 6 months' },
        { metric: 'Facebook Engagement', before: 'Occasional property listings, low engagement', after: 'Regular completion celebrations and testimonials, strong local engagement' },
        { metric: 'Market Authority Positioning', before: 'Unknown digitally outside existing clients', after: 'Recognised as leading property voice on LinkedIn in Rotherham' },
      ],
      timeline: [
        { period: 'Week 1–2', milestone: 'Platform audit; LinkedIn profile and company page optimised; content pillar framework developed' },
        { period: 'Week 3–4', milestone: '"Rotherham Property Market Update" series launches on LinkedIn; first market insight posts published' },
        { period: 'Week 5–6', milestone: 'Market insight posts begin reaching 3,000+ impressions; first direct DM from a local landlord via LinkedIn' },
        { period: 'Month 2', milestone: 'Facebook completion and testimonial content schedule established; vendor testimonial programme launched' },
        { period: 'Month 3', milestone: 'LinkedIn network growing by 60+ connections/month; first vendor instructions attributed to social contact' },
        { period: 'Month 6', milestone: '18 vendor instructions attributed; +175% in total enquiries; Mark cited as go-to property expert in Rotherham on LinkedIn' },
      ],
      keyWins: [
        'LinkedIn market insight posts consistently achieving 3,000–8,000 impressions — remarkable for a local independent agent',
        'First DM from a local landlord via LinkedIn arrived in week 6 — a contact type that had never come from social before',
        '18 new vendor instructions directly attributed to social media contact in 6 months',
        'Vendor and landlord leads from social convert at higher rates with less fee negotiation — trust already built through content',
        '+400 new LinkedIn connections with local property community in 6 months',
        'Mark now widely regarded as the most visible, credible property professional on LinkedIn in Rotherham',
      ],
    },
    quote: "The LinkedIn strategy was a game changer. I was posting occasionally and getting nothing. Bee Viral turned it into a proper channel. I get DMs from landlords and investors every week now who\'ve been reading my content for months before reaching out. That kind of warm lead converts so much better than a cold enquiry.",
    quoteAuthor: 'Mark Dawson',
    quoteRole: 'Director, Horizon Property Group',
    timeframe: 'Results within 6 weeks on LinkedIn',
    relatedSlugs: ['bramley-co-solicitors', 'thorntons-fine-jewellery'],
  },

  {
    slug: 'elevate-physiotherapy',
    business: 'Elevate Physiotherapy',
    location: 'Wath-upon-Dearne',
    industry: 'Healthcare',
    service: 'Local SEO + Paid Ads',
    gradientFrom: 'from-sky-900/70',
    initial: 'E',
    seoTitle: 'Elevate Physiotherapy Case Study | Bee Viral',
    metaDescription: 'How Bee Viral helped Elevate Physiotherapy in Wath-upon-Dearne reach page one of Google and fill 95% of their appointment capacity through local SEO and paid advertising.',
    tagline: 'Sitting at 60% appointment capacity with a better-ranked competitor just down the road — local SEO and targeted ads filled every treatment slot.',
    overview: [
      'Elevate Physiotherapy offers musculoskeletal physiotherapy, sports rehabilitation, and injury assessment services from a purpose-built clinic in Wath-upon-Dearne, serving patients across the Dearne Valley and surrounding South Yorkshire communities. Practice owner and chartered physiotherapist Rachel Coates had been running the clinic for four years, building a reputation for excellent clinical outcomes and a genuinely patient-centred approach. The quality of care was not the problem.',
      'The problem was discoverability. A longer-established physiotherapy practice less than a mile away had invested in SEO and consistently outranked Elevate in Google search. Patients who would have been better served by Rachel\'s more modern, specialised approach were going to the competitor by default, simply because that practice appeared first. With the clinic running at only 60% appointment capacity, Rachel was turning a good clinic into a failing business through no fault of her clinical work.',
    ],
    challenge: 'Sitting on page 2 of Google with an appointment book that was only 60% full, losing patients to a better-ranked competitor nearby.',
    challengeDetail: [
      'The root cause of Elevate\'s discoverability problem was straightforward: almost nothing had been done on the digital side since the website was built four years prior. The Google Business Profile was sparse, reviews were few, and the website had no local SEO structure — no dedicated pages for individual conditions or treatment types, thin content, and no location-specific signals. In competitive local search terms like "physiotherapist Wath-upon-Dearne" or "sports physio Rotherham", Elevate simply wasn\'t present.',
      'The capacity problem had a tangible financial consequence. At Elevate\'s average appointment value, running at 60% capacity rather than 90-95% represented a significant monthly revenue shortfall. The fixed costs of running a clinic — rent, insurance, equipment — don\'t scale with appointment volume, meaning that the gap between 60% and 95% capacity flowed almost entirely to the bottom line. Filling that gap was the clearest possible commercial priority.',
    ],
    strategy: 'We combined a Local SEO overhaul with a Google Ads campaign targeting injury-specific searches across the South Yorkshire area.',
    strategyDetail: [
      'The strategy mirrored the approach we\'d developed for other healthcare clients: immediate paid visibility while organic rankings built. For physiotherapy, the most valuable search terms are injury and condition-specific — "knee pain treatment Rotherham", "back pain physiotherapy Barnsley", "sports injury rehab Sheffield" — because they signal active, specific need. We built Google Ads campaigns around a comprehensive list of these condition-specific terms, with ad copy and landing pages tailored to each injury type for maximum relevance and conversion.',
      'The SEO programme focused first on the Google Business Profile — a comprehensive rebuild including treatment categories, HCPC registration details, professional team photography, and a review-generation system. We then developed condition-specific service pages for the website, each targeting a cluster of related search terms, with location signals for the communities Elevate served. Combined with local citation building and a link acquisition programme from relevant healthcare directories, the clinic moved from page two to page one within 14 weeks.',
    ],
    execution: [
      {
        title: 'Condition-Specific Google Ads Campaigns',
        detail: 'Google Search campaigns targeting injury and condition-specific keywords across South Yorkshire, with unique landing pages for each condition cluster driving maximum Quality Score and conversion.',
      },
      {
        title: 'Google Business Profile Rebuild',
        detail: 'Full GBP overhaul including HCPC registration, treatment specialisms, professional photography, appointment booking integration, and a structured patient review programme.',
      },
      {
        title: 'Condition Service Pages',
        detail: 'Development of 12 condition-specific landing pages for the clinic website, targeting high-value search terms for back pain, sports injuries, knee and hip conditions, and post-operative rehabilitation.',
      },
      {
        title: 'Local Authority Building',
        detail: 'Citation acquisition across physiotherapy directories, healthcare registers, and local business listings establishing the consistent NAP signals essential for Local Pack rankings.',
      },
    ],
    metrics: [
      {
        value: 'Pg 1',
        label: 'Google Ranking',
        context: 'Elevate Physiotherapy reached page one of Google for 14 target search terms within 14 weeks, including top-three Local Pack positions for primary area-specific searches.',
      },
      {
        value: '95%',
        label: 'Appointment Capacity',
        context: 'Appointment book utilisation rose from 60% to a consistent 95% within five months, with Rachel now maintaining a short waiting list for new patient appointments.',
      },
      {
        value: '+130%',
        label: 'Organic Sessions',
        context: 'Website organic traffic grew by 130% as condition-specific service pages achieved strong search rankings, creating a sustainable flow of new patient enquiries.',
      },
    ],
    resultsNarrative: [
      'Google Ads delivered an immediate impact — within the first two weeks, Rachel was receiving appointment booking requests from patients who had found the clinic through specific injury searches. These were exactly the patients Elevate was best equipped to treat: sports injuries, complex musculoskeletal problems, post-surgical rehabilitation. The specificity of condition-targeted ads meant the quality of enquiries was excellent from the start, with conversion rates of over 70% from initial contact to booked appointment.',
      'As the SEO work matured through months two to four, organic enquiries began supplementing the paid traffic significantly. The condition-specific pages in particular proved highly effective for patients who were researching rather than ready to book immediately — they\'d find an article on knee pain rehabilitation, read it, and convert to a booking weeks later. By month five, Elevate was operating at 95% capacity and had moved to a waiting list model for new patient intake. Rachel has since hired a second physiotherapist to handle the additional demand.',
    ],
    proofOfWork: {
      beforeAfter: [
        { metric: 'Appointment Capacity Utilisation', before: '60%', after: '95% — short waiting list now in place' },
        { metric: 'Google Ranking — primary keywords', before: 'Page 2', after: 'Page 1, top 3 Local Pack' },
        { metric: 'Page 1 Keyword Rankings', before: '0', after: '14 target search terms' },
        { metric: 'Organic Website Sessions', before: 'Baseline pre-campaign', after: '+130% increase' },
        { metric: 'Condition-Specific Landing Pages', before: '0 — single generic homepage', after: '12 condition-specific service pages ranked on Google' },
        { metric: 'Team Size', before: 'Rachel + reception only', after: 'Rachel + second physiotherapist hired to handle demand' },
      ],
      timeline: [
        { period: 'Week 1', milestone: 'Dual-track strategy agreed; Google Ads account structured for condition-specific search terms; SEO audit completed' },
        { period: 'Week 2', milestone: 'Google Ads campaigns live targeting knee, back, shoulder, and sports injury searches across South Yorkshire' },
        { period: 'Week 3', milestone: 'First paid enquiries confirmed — 70%+ converting from initial contact to booked appointment' },
        { period: 'Week 4–8', milestone: 'GBP rebuilt with HCPC credentials, treatment categories, professional photography, and review system' },
        { period: 'Week 9–12', milestone: '12 condition-specific service pages developed and indexed; citation building complete' },
        { period: 'Week 14', milestone: 'Page-one rankings achieved for 14 target keywords; appointment capacity reaches 95%' },
      ],
      keyWins: [
        'First paid enquiries received within days of Google Ads launch — 70%+ converting to booked appointments',
        'Condition-specific targeting attracted the exact patients Elevate is best equipped to treat — high-complexity, high-value cases',
        'Page-one rankings for 14 keywords within 14 weeks, including top-3 Local Pack positions',
        '35-point jump in appointment utilisation — from 60% to 95% in under 5 months',
        'Clinic moved from "available this week" to waiting list model for new patients',
        'Second physiotherapist hired — a direct consequence of the new patient volume generated',
      ],
    },
    quote: "I was doing everything right clinically but the business wasn\'t growing because people couldn\'t find me. Bee Viral fixed the visibility problem and suddenly the phone started ringing with exactly the right kind of patients. I\'m at full capacity now and I\'ve taken on another physio. The impact on the business has been transformational.",
    quoteAuthor: 'Rachel Coates',
    quoteRole: 'Owner & Chartered Physiotherapist, Elevate Physiotherapy',
    timeframe: 'Page 1 rankings in 14 weeks',
    relatedSlugs: ['meadows-dental-practice', 'peak-performance-gym'],
  },

  {
    slug: 'thorntons-fine-jewellery',
    business: "Thornton's Fine Jewellery",
    location: 'Doncaster',
    industry: 'Retail',
    service: 'Social Media Management',
    gradientFrom: 'from-yellow-900/70',
    initial: 'T',
    seoTitle: "Thornton's Fine Jewellery Case Study | Bee Viral",
    metaDescription: "How Bee Viral helped Thornton's Fine Jewellery in Doncaster achieve 290% Instagram engagement growth and a 40% increase in footfall — with zero ad spend.",
    tagline: "A heritage jeweller with 30 years of craftsmanship and zero Instagram strategy proved that the right story, told beautifully, doesn't need a penny of paid advertising.",
    overview: [
      "Thornton's Fine Jewellery has occupied a prime position on Doncaster's Baxter Gate for over 30 years, becoming part of the fabric of the town's high street. Owner and master jeweller Gerald Thornton trained under a Sheffield goldsmith in the 1990s and has built a business known for bespoke commissions, estate jewellery, and an engagement ring collection that has featured in hundreds of proposals across South Yorkshire. The craftsmanship and the stories behind the pieces were extraordinary. The Instagram grid was not.",
      "Gerald had resisted social media for years, convinced that his clientele was older and that Instagram was for fashion brands and influencers rather than fine jewellery. His daughter Emma, who joined the business in 2022, had started posting occasionally but without strategy or consistency. When Emma approached Bee Viral, the ask was clear: help us show Doncaster — and a new generation of customers — what we actually are.",
    ],
    challenge: 'A heritage jeweller struggling to attract younger customers and compete with online retailers on social media.',
    challengeDetail: [
      "Thornton's faced a challenge common to heritage retail businesses: the perception gap between reality and online representation. Their physical shop was a genuinely beautiful experience — display cases of handmade pieces, the smell of jeweller's polish, Gerald working at his bench visible from the floor. Their Instagram at the time of engagement had a few hundred followers, inconsistent posting, and images that failed to capture any of that magic. A potential young couple researching engagement rings could easily overlook Thornton's entirely, choosing an online retailer or a chain with a slicker digital presence.",
      "The business also had an untold story problem. Every piece in the shop had a history — a bespoke commission designed around a customer's grandmother's brooch, a sapphire ring made to mark a 30th anniversary, a vintage art deco bracelet sourced from a Paris estate sale. These stories were gold for social media content, but they had never been told online. Gerald's craftsmanship and the emotional resonance of bespoke jewellery were invisible to anyone who hadn't walked through the door.",
    ],
    strategy: 'We repositioned their brand story through Instagram and Facebook — showcasing craftsmanship, bespoke commissions, and customer moments to drive footfall and enquiries.',
    strategyDetail: [
      "Our strategy was built around a single insight: fine jewellery is fundamentally emotional, not transactional. People don't buy an engagement ring or a bespoke anniversary piece — they buy a moment, a promise, a feeling. Thornton's had an extraordinary inventory of those moments and had never shared a single one. We built a content framework around three themes: The Craft (behind-the-scenes jewellery making, tool close-ups, bench time with Gerald), The Story (the history behind individual pieces, customer commission journeys, the heritage of the shop), and The Moment (subtle, tasteful celebration of occasions — proposals, anniversaries, milestones).",
      "The decision to operate entirely organically was a deliberate strategic choice. Fine jewellery audiences respond to authenticity and exclusivity, and the content we were creating — macro photography of stones, slow videos of setting work, caption-driven stories of bespoke commissions — was performing strongly without paid amplification. The accounts grew through genuine sharing behaviour: couples tagging each other in proposal content, customers sharing their commission journey. This organic advocacy was far more powerful for Thornton's brand than any paid reach could have been.",
    ],
    execution: [
      {
        title: 'Brand Story Repositioning',
        detail: 'Development of a full brand narrative for Thornton\'s digital presence, establishing the Craft / Story / Moment content framework and a refined, elegant brand voice that spoke to both heritage customers and a new younger audience.',
      },
      {
        title: 'Macro Jewellery Photography',
        detail: 'Monthly photography sessions using macro and lightbox techniques to capture the extraordinary detail of Thornton\'s pieces — stones, settings, hallmarks, and metalwork — producing imagery that performed exceptionally on Instagram.',
      },
      {
        title: 'Behind-the-Scenes Content Programme',
        detail: 'A regular "at the bench" content series featuring Gerald\'s commission work and restoration projects, turning the jeweller\'s craft process into compelling, shareable social content.',
      },
      {
        title: 'Bespoke Commission Storytelling',
        detail: 'A structured process for capturing and sharing bespoke commission journeys — with customer permission — from initial sketch to finished piece, driving significant engagement and generating direct commission enquiries.',
      },
    ],
    metrics: [
      {
        value: '+290%',
        label: 'Instagram Engagement',
        context: 'Average post engagement rate grew by 290%, with individual pieces regularly receiving hundreds of saves and shares as the new content strategy took hold.',
      },
      {
        value: '40%',
        label: 'Increase in Footfall',
        context: "In-store footfall increased by 40% in the six months following the content relaunch, with a significant portion of new visitors directly attributing their visit to Thornton's Instagram account.",
      },
      {
        value: '£0',
        label: 'Ad Spend (Organic)',
        context: 'All results were achieved without a single pound of paid advertising, demonstrating the power of authentic content and brand storytelling for heritage retail businesses.',
      },
    ],
    resultsNarrative: [
      "The transformation in engagement was rapid and significant. Within six weeks of the new content framework launching, individual posts were regularly generating saves in the hundreds — the jewellery photography in particular proved extraordinarily well-suited to Instagram's algorithmic preference for save-worthy content. Gerald's bench videos were shared widely by jewellery enthusiasts and craftsmanship communities, taking Thornton's well beyond Doncaster's geography and building a following of genuinely interested, quality-focused followers.",
      "The business result that meant most to Gerald was the change in the type of customers coming through the door. Before the social media work, he rarely saw customers under 40. Six months in, young couples were regularly coming in specifically to discuss bespoke engagement ring commissions — having spent weeks following the Instagram account and building confidence in Gerald's craft. The heritage of the business, which had previously felt like a barrier to younger customers, had become the most compelling thing about it. Told well, the story of 30 years of South Yorkshire jewellery making was irresistible.",
    ],
    proofOfWork: {
      beforeAfter: [
        { metric: 'Average Post Engagement Rate', before: 'Under 1% — sporadic phone images', after: '4.9%+ — professional macro and bench content' },
        { metric: 'Instagram Saves per Post', before: 'Single figures', after: 'Hundreds — jewellery photography driving consistent save behaviour' },
        { metric: 'In-Store Footfall', before: 'Baseline pre-engagement', after: '+40% over 6 months' },
        { metric: 'Bespoke Commission Enquiries', before: 'Rare — mostly walk-in driven', after: 'Regular — customers arriving having followed the account for weeks or months' },
        { metric: 'Customer Age Profile', before: 'Predominantly 40+', after: 'Significant increase in under-35 customers — particularly engaged couples' },
        { metric: 'Ad Spend Required', before: 'N/A', after: '£0 — all results achieved organically' },
      ],
      timeline: [
        { period: 'Week 1', milestone: 'Brand narrative workshop; Craft / Story / Moment content framework agreed; brand voice defined' },
        { period: 'Week 2', milestone: 'First macro photography session; lightbox setup; initial "at the bench" videos recorded with Gerald' },
        { period: 'Week 3–4', milestone: 'New content framework launches; first pieces reach 1,000+ impressions organically within days' },
        { period: 'Week 6', milestone: 'Engagement rate passes 4%; individual posts generating hundreds of saves from jewellery communities beyond Doncaster' },
        { period: 'Month 3', milestone: 'First bespoke commission story published (with customer consent) — generates direct commission enquiries' },
        { period: 'Month 6', milestone: '+40% footfall; younger demographic now regularly in store; commission enquiries become a consistent channel' },
      ],
      keyWins: [
        'Engagement rate grew from under 1% to over 4.9% within six weeks — without spending a single pound on ads',
        'Individual posts regularly generating hundreds of saves — jewellery photography performing exceptionally as save-worthy content',
        'Gerald\'s bench videos shared by jewellery craft communities beyond Doncaster, expanding reach nationally',
        '+40% in-store footfall over six months — a significant result for a heritage retail business',
        'Young couples now regularly visiting to discuss bespoke engagement commissions, citing Instagram as their introduction to the brand',
        'The heritage of the shop — a potential barrier for younger customers — has become the most compelling brand asset online',
      ],
    },
    quote: "I thought Instagram was for young people and it had nothing to do with a jewellery shop like mine. I couldn\'t have been more wrong. The way Bee Viral tell our story — the craft, the commissions, the people — is exactly right. I\'ve got couples coming in saying they\'ve been following us for months. Thirty years on and the shop feels younger than it ever has.",
    quoteAuthor: 'Gerald Thornton',
    quoteRole: "Owner, Thornton's Fine Jewellery",
    timeframe: 'Engagement results within 6 weeks',
    relatedSlugs: ['luxe-hair-beauty', 'horizon-property-group'],
  },
]
