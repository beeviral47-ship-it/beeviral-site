// ─── Keywords ────────────────────────────────────────────────────────────────

export type Difficulty = 'Low' | 'Medium' | 'High'
export type KwStatus   = 'Not Started' | 'Optimising' | 'Ranking'

export interface Keyword {
  id:         string
  keyword:    string
  cluster:    1 | 2 | 3 | 4
  volume:     number
  difficulty: Difficulty
  targetPage: string
}

export const keywords: Keyword[] = [
  // ── Cluster 1 — Agency / Service Commercial ──────────────────────────────
  { id: 'k01', keyword: 'social media management agency UK',           cluster: 1, volume: 3600, difficulty: 'High',   targetPage: '/social-media-agency-uk (create)' },
  { id: 'k02', keyword: 'social media management agency',             cluster: 1, volume: 2400, difficulty: 'High',   targetPage: '/social-media-agency-uk (create)' },
  { id: 'k03', keyword: 'social media management small business UK',  cluster: 1, volume: 880,  difficulty: 'Medium', targetPage: '/social-media-management-small-business (create)' },
  { id: 'k04', keyword: 'how much does social media management cost UK', cluster: 1, volume: 1900, difficulty: 'Medium', targetPage: '/blog/social-media-management-cost-uk ✓ LIVE' },
  { id: 'k05', keyword: 'social media management cost UK',            cluster: 1, volume: 1300, difficulty: 'Medium', targetPage: '/blog/social-media-management-cost-uk ✓ LIVE' },
  { id: 'k06', keyword: 'local SEO services UK',                      cluster: 1, volume: 720,  difficulty: 'High',   targetPage: '/services/local-seo' },
  { id: 'k07', keyword: 'online booking system UK',                   cluster: 1, volume: 590,  difficulty: 'Medium', targetPage: '/services/booking-systems' },
  { id: 'k08', keyword: 'booking system for salons UK',               cluster: 1, volume: 480,  difficulty: 'Medium', targetPage: '/services/booking-systems' },
  { id: 'k09', keyword: 'website design small business UK',           cluster: 1, volume: 1600, difficulty: 'High',   targetPage: '/services/website-design' },
  { id: 'k10', keyword: 'Facebook ads for local businesses UK',       cluster: 1, volume: 390,  difficulty: 'Medium', targetPage: '/services/paid-advertising' },

  // ── Cluster 2 — South Yorkshire Local Commercial ─────────────────────────
  { id: 'k11', keyword: 'social media agency Rotherham',              cluster: 2, volume: 110,  difficulty: 'Medium', targetPage: '/locations/rotherham' },
  { id: 'k12', keyword: 'digital marketing agency Rotherham',         cluster: 2, volume: 170,  difficulty: 'Medium', targetPage: '/locations/rotherham' },
  { id: 'k13', keyword: 'social media management Rotherham',          cluster: 2, volume: 90,   difficulty: 'Medium', targetPage: '/locations/rotherham' },
  { id: 'k14', keyword: 'digital marketing agency Barnsley',          cluster: 2, volume: 140,  difficulty: 'Low',    targetPage: '/locations/barnsley' },
  { id: 'k15', keyword: 'social media agency South Yorkshire',        cluster: 2, volume: 170,  difficulty: 'Medium', targetPage: '/ (homepage)' },
  { id: 'k16', keyword: 'digital marketing agency Doncaster',         cluster: 2, volume: 210,  difficulty: 'Medium', targetPage: '/locations/doncaster' },
  { id: 'k17', keyword: 'social media agency Sheffield',              cluster: 2, volume: 390,  difficulty: 'High',   targetPage: '/locations/sheffield' },
  { id: 'k18', keyword: 'website design Rotherham',                   cluster: 2, volume: 130,  difficulty: 'Medium', targetPage: '/locations/rotherham' },
  { id: 'k19', keyword: 'website design Barnsley',                    cluster: 2, volume: 110,  difficulty: 'Low',    targetPage: '/locations/barnsley' },
  { id: 'k20', keyword: 'SEO agency South Yorkshire',                 cluster: 2, volume: 90,   difficulty: 'Medium', targetPage: '/services/local-seo' },
  { id: 'k21', keyword: 'local SEO Rotherham',                        cluster: 2, volume: 70,   difficulty: 'Medium', targetPage: '/locations/rotherham' },
  { id: 'k22', keyword: 'digital marketing Wath upon Dearne',         cluster: 2, volume: 30,   difficulty: 'Low',    targetPage: '/locations/wath (create NOW)' },

  // ── Cluster 3 — High-Volume Informational Blog ───────────────────────────
  { id: 'k23', keyword: 'what is local SEO',                              cluster: 3, volume: 2900, difficulty: 'Medium', targetPage: 'Blog: What Is Local SEO? Plain English Guide' },
  { id: 'k24', keyword: 'social media management tips',                   cluster: 3, volume: 2400, difficulty: 'Medium', targetPage: 'Blog: 10 Social Media Tips That Generate Leads' },
  { id: 'k25', keyword: 'how much does a website cost UK',                cluster: 3, volume: 3200, difficulty: 'Medium', targetPage: 'Blog: How Much Does a Website Cost? (2026)' },
  { id: 'k26', keyword: 'social media marketing for small business',      cluster: 3, volume: 2100, difficulty: 'Medium', targetPage: 'Blog: Social Media Marketing for Small Businesses Guide' },
  { id: 'k27', keyword: 'local SEO tips',                                 cluster: 3, volume: 1800, difficulty: 'Medium', targetPage: 'Blog: 12 Local SEO Tips for South Yorkshire Businesses' },
  { id: 'k28', keyword: 'Facebook ads for small business UK',             cluster: 3, volume: 880,  difficulty: 'Medium', targetPage: 'Blog: Facebook Ads for Small Business UK Guide' },
  { id: 'k29', keyword: 'how to get more customers',                      cluster: 3, volume: 5400, difficulty: 'High',   targetPage: 'Blog: How to Get More Customers for Your Local Business' },
  { id: 'k30', keyword: 'social media strategy for small business',       cluster: 3, volume: 1200, difficulty: 'Medium', targetPage: 'Blog: Small Business Social Strategy That Generates Leads' },
  { id: 'k31', keyword: 'Google Business Profile tips',                   cluster: 3, volume: 1600, difficulty: 'Medium', targetPage: 'Blog: Google Business Profile Complete Optimisation Guide' },
  { id: 'k32', keyword: 'Instagram for business tips UK',                 cluster: 3, volume: 720,  difficulty: 'Medium', targetPage: 'Blog: Instagram for Business: 15 Tips That Work' },
  { id: 'k33', keyword: 'TikTok for business UK',                         cluster: 3, volume: 590,  difficulty: 'Low',    targetPage: 'Blog: TikTok for Local Businesses UK: Is It Worth It?' },
  { id: 'k34', keyword: 'social media for restaurants UK',                cluster: 3, volume: 480,  difficulty: 'Medium', targetPage: 'Blog: Social Media for Restaurants: What Works in 2026' },
  { id: 'k35', keyword: 'how to get more salon bookings',                 cluster: 3, volume: 390,  difficulty: 'Medium', targetPage: 'Blog: Fill Your Appointment Book' },
  { id: 'k36', keyword: 'reduce no-show appointments UK',                 cluster: 3, volume: 320,  difficulty: 'Low',    targetPage: 'Blog: No-Show Appointments Are Costing You Thousands' },
  { id: 'k37', keyword: 'social media marketing for dentists UK',         cluster: 3, volume: 260,  difficulty: 'Low',    targetPage: 'Blog: Social Media for Dental Practices' },
  { id: 'k38', keyword: 'digital marketing for tradespeople UK',          cluster: 3, volume: 340,  difficulty: 'Low',    targetPage: 'Blog: Digital Marketing for Tradespeople Guide' },
  { id: 'k39', keyword: 'social media content ideas for businesses',      cluster: 3, volume: 2600, difficulty: 'Medium', targetPage: 'Blog: 50 Social Media Content Ideas for Local Businesses' },

  // ── Cluster 4 — Industry-Specific Niche ─────────────────────────────────
  { id: 'k40', keyword: 'social media management for hair salons UK',  cluster: 4, volume: 140, difficulty: 'Low', targetPage: 'Blog: Social Media for Hair Salons' },
  { id: 'k41', keyword: 'online booking system for beauty salons',      cluster: 4, volume: 210, difficulty: 'Low', targetPage: 'Blog: Best Booking System for Beauty Salons' },
  { id: 'k42', keyword: 'Facebook ads for roofers UK',                  cluster: 4, volume: 90,  difficulty: 'Low', targetPage: 'Blog: How Hartley Roofing Gets 40+ Leads/Month' },
  { id: 'k43', keyword: 'local SEO for plumbers UK',                    cluster: 4, volume: 170, difficulty: 'Low', targetPage: 'Blog: Local SEO for Plumbers Case Study' },
  { id: 'k44', keyword: 'digital marketing for physiotherapy clinic',   cluster: 4, volume: 90,  difficulty: 'Low', targetPage: 'Blog: SEO for Physiotherapy Clinics Case Study' },
  { id: 'k45', keyword: 'social media for solicitors UK',               cluster: 4, volume: 110, difficulty: 'Low', targetPage: 'Blog: Digital Marketing for Solicitors Case Study' },
  { id: 'k46', keyword: 'Instagram for restaurants UK',                 cluster: 4, volume: 260, difficulty: 'Low', targetPage: 'Blog: Instagram for Restaurants Case Study' },
  { id: 'k47', keyword: 'how to get more Google reviews UK',            cluster: 4, volume: 480, difficulty: 'Medium', targetPage: 'Blog: How to Get More Google Reviews' },
  { id: 'k48', keyword: 'content ideas for small business Instagram',   cluster: 4, volume: 590, difficulty: 'Low', targetPage: 'Blog: 30 Instagram Content Ideas' },
  { id: 'k49', keyword: 'why is my website not generating leads',       cluster: 4, volume: 320, difficulty: 'Low', targetPage: 'Blog: Why Your Website Isn\'t Generating Leads' },
]

// ─── Blog Posts ───────────────────────────────────────────────────────────────

export type PostStatus = 'Not Started' | 'Brief Written' | 'Draft' | 'Edited' | 'Published'

export interface BlogPost {
  id:      string
  num:     number
  title:   string
  keyword: string
  volume:  number | string
}

export const blogPosts: BlogPost[] = [
  { id: 'p01', num: 1,  title: 'How Much Does Social Media Management Cost in the UK? (2026 Honest Guide)',    keyword: 'social media management cost UK',                   volume: 1900 },
  { id: 'p02', num: 2,  title: "No-Show Appointments Are Costing Your Business Thousands. Here's the Fix.",   keyword: 'reduce no-show appointments UK',                     volume: 320  },
  { id: 'p03', num: 3,  title: 'Digital Marketing for Tradespeople: The Complete 2026 Guide',                  keyword: 'digital marketing for tradespeople UK',              volume: 340  },
  { id: 'p04', num: 4,  title: 'How Hartley Roofing Gets 40+ Qualified Leads Every Month From Facebook Ads',  keyword: 'Facebook ads for roofers UK',                        volume: 90   },
  { id: 'p05', num: 5,  title: '30 Instagram Content Ideas for Small Businesses (Steal These Now)',            keyword: 'content ideas for small business Instagram',         volume: 590  },
  { id: 'p06', num: 6,  title: 'Local SEO for Plumbers: How South Yorkshire Plumbing Doubled Enquiries',       keyword: 'local SEO for plumbers UK',                          volume: 170  },
  { id: 'p07', num: 7,  title: 'Social Media for Hair Salons: What Actually Works (With Real Results)',        keyword: 'social media management for hair salons UK',         volume: 140  },
  { id: 'p08', num: 8,  title: "Why Your Website Isn't Generating Leads (And Exactly How to Fix It)",         keyword: 'why is my website not generating leads',             volume: 320  },
  { id: 'p09', num: 9,  title: 'How to Get More Google Reviews for Your Local Business (Step-by-Step)',        keyword: 'how to get more Google reviews UK',                  volume: 480  },
  { id: 'p10', num: 10, title: 'TikTok for Local Businesses UK: Is It Actually Worth It in 2026?',            keyword: 'TikTok for business UK',                             volume: 590  },
  { id: 'p11', num: 11, title: 'Google Business Profile: The Complete Optimisation Guide for 2026',            keyword: 'Google Business Profile tips',                       volume: 1600 },
  { id: 'p12', num: 12, title: 'Social Media for Dental Practices: How to Attract New Patients in 2026',      keyword: 'social media marketing for dentists UK',             volume: 260  },
  { id: 'p13', num: 13, title: 'How to Get More Customers for Your Rotherham Business in 2026',               keyword: 'how to get more customers Rotherham',                volume: 110  },
  { id: 'p14', num: 14, title: 'The Best Online Booking System for Beauty Salons in 2026 (Compared)',         keyword: 'online booking system for beauty salons',            volume: 210  },
  { id: 'p15', num: 15, title: 'Instagram for Restaurants: How Spice Garden Got 8,200 Followers in 6 Months',keyword: 'Instagram for restaurants UK',                        volume: 260  },
  { id: 'p16', num: 16, title: 'What Is Local SEO? A Plain English Guide for South Yorkshire Businesses',     keyword: 'what is local SEO',                                  volume: 2900 },
  { id: 'p17', num: 17, title: 'Social Media Marketing for Small Businesses: The Complete 2026 Guide',        keyword: 'social media marketing for small business',          volume: 2100 },
  { id: 'p18', num: 18, title: 'Facebook Ads vs Google Ads for Local Business: Which One Wins?',              keyword: 'Facebook ads vs Google ads UK',                      volume: 480  },
  { id: 'p19', num: 19, title: 'How to Rank Higher on Google: A Local Business Guide for 2026',               keyword: 'how to rank higher on Google local business',        volume: 1300 },
  { id: 'p20', num: 20, title: 'Social Media for Restaurants: What Actually Drives Bookings in 2026',         keyword: 'social media for restaurants UK',                    volume: 480  },
  { id: 'p21', num: 21, title: 'Instagram for Business: 15 Tips That Actually Work in 2026',                  keyword: 'Instagram for business tips UK',                     volume: 720  },
  { id: 'p22', num: 22, title: 'SEO for Physiotherapy Clinics: How Elevate Physio Hit 95% Appointment Capacity', keyword: 'digital marketing for physiotherapy clinic',      volume: 90   },
  { id: 'p23', num: 23, title: 'How to Fill Your Appointment Book: Social Media & Booking Tips for Salons',   keyword: 'how to get more salon bookings',                     volume: 390  },
  { id: 'p24', num: 24, title: 'Digital Marketing for Solicitors: How Bramley & Co. Gets 65+ Enquiries Per Month', keyword: 'social media for solicitors UK',               volume: 110  },
  { id: 'p25', num: 25, title: '50 Social Media Content Ideas for Local Businesses (Steal These)',            keyword: 'social media content ideas for businesses',          volume: 2600 },
  { id: 'p26', num: 26, title: 'Gym Marketing: How to Get More Members Using Social Media in 2026',           keyword: 'gym marketing ideas UK',                             volume: 210  },
  { id: 'p27', num: 27, title: 'How to Get More Customers for Your Barnsley Business in 2026',                keyword: 'how to get more customers Barnsley',                 volume: 70   },
  { id: 'p28', num: 28, title: 'How Much Does a Website Cost for a Small Business in the UK? (2026)',         keyword: 'how much does a website cost UK',                    volume: 3200 },
  { id: 'p29', num: 29, title: 'Social Media for Estate Agents: How to Get More Vendor Leads in 2026',        keyword: 'social media for estate agents UK',                  volume: 170  },
  { id: 'p30', num: 30, title: '10 Social Media Management Tips That Actually Generate Leads (Not Likes)',     keyword: 'social media management tips',                       volume: 2400 },
  { id: 'p31', num: 31, title: 'Facebook Ads for Small Business UK: What Works and What Wastes Money',        keyword: 'Facebook ads for small business UK',                 volume: 880  },
  { id: 'p32', num: 32, title: 'The Small Business Social Media Strategy That Generates Leads, Not Just Likes',keyword: 'social media strategy for small business',           volume: 1200 },
  { id: 'p33', num: 33, title: '12 Local SEO Tips That Get South Yorkshire Businesses Found on Google',       keyword: 'local SEO tips',                                     volume: 1800 },
  { id: 'p34', num: 34, title: 'Social Media Management for Restaurants: A Practical Guide',                  keyword: 'restaurant social media management UK',              volume: 290  },
  { id: 'p35', num: 35, title: 'How Meadows Dental Practice Got 150+ New Patient Enquiries in 6 Months',      keyword: 'dental practice marketing UK',                       volume: 260  },
  { id: 'p36', num: 36, title: 'How to Get More Customers for Your Doncaster Business in 2026',               keyword: 'how to get more customers Doncaster',                volume: 60   },
  { id: 'p37', num: 37, title: "Clarke's Auto Centre: From Page 3 to Page 1 Google in 4 Months",             keyword: 'local SEO for garages UK',                           volume: 110  },
  { id: 'p38', num: 38, title: 'How to Choose a Social Media Agency in the UK (What to Look For + Red Flags)', keyword: 'how to choose a social media agency UK',           volume: 480  },
  { id: 'p39', num: 39, title: 'Local SEO for Restaurants: Get Found When Hungry Customers Search Near Me',   keyword: 'local SEO for restaurants UK',                       volume: 390  },
  { id: 'p40', num: 40, title: "Why Your Social Media Isn't Generating Enquiries (And How to Fix It)",        keyword: "why isn't my social media working",                  volume: 320  },
  { id: 'p41', num: 41, title: 'Content Creation for Local Businesses: A No-Nonsense 2026 Guide',             keyword: 'content creation for small businesses UK',           volume: 590  },
  { id: 'p42', num: 42, title: 'Horizon Property Group: How We Generated 18 New Vendor Listings with Social Media', keyword: 'social media for property agents UK',         volume: 170  },
  { id: 'p43', num: 43, title: 'How to Use Google Maps to Get More Local Business (Complete Guide)',           keyword: 'how to rank on Google Maps',                         volume: 1600 },
  { id: 'p44', num: 44, title: 'Black Friday Social Media Campaign Strategy for Local Businesses',             keyword: 'Black Friday social media local business',           volume: 480  },
  { id: 'p45', num: 45, title: 'Online Booking Systems for Small Businesses UK: Which One Should You Use?',   keyword: 'online booking system UK',                           volume: 590  },
  { id: 'p46', num: 46, title: 'Sheffield Business Digital Guide: Getting Found Online in 2026',               keyword: 'digital marketing Sheffield small business',         volume: 390  },
  { id: 'p47', num: 47, title: 'Forge & Flame BBQ: 2.1 Million Video Views and 12K Followers From a Standing Start', keyword: 'TikTok marketing for food business UK',      volume: 140  },
  { id: 'p48', num: 48, title: 'How Much Does SEO Cost for a Small Business in the UK? (2026 Guide)',         keyword: 'how much does SEO cost UK',                          volume: 1100 },
  { id: 'p49', num: 49, title: 'Social Media Management for Small Businesses UK: The 2026 Complete Guide',    keyword: 'social media management small business UK',          volume: 880  },
  { id: 'p50', num: 50, title: 'How to Get More Customers Online: A Local Business Guide for 2026',           keyword: 'how to get more customers',                          volume: 5400 },
  { id: 'p51', num: 51, title: 'The Complete Guide to Paid Social Advertising for UK Small Businesses',       keyword: 'paid social advertising UK small business',          volume: 390  },
  { id: 'p52', num: 52, title: 'South Yorkshire Business Digital Report 2026 (Original Research)',            keyword: 'South Yorkshire business digital marketing',         volume: 0    },
  { id: 'p53', num: 53, title: 'How to Choose a Website Design Agency in the UK: What to Ask Before You Sign', keyword: 'how to choose a web design agency UK',            volume: 480  },
  { id: 'p54', num: 54, title: 'Digital Marketing for Healthcare: How to Attract More Patients in 2026',      keyword: 'digital marketing for healthcare UK',                volume: 590  },
  { id: 'p55', num: 55, title: 'How to Market Your Independent Retail Shop on Social Media',                  keyword: 'social media for independent retailers UK',          volume: 260  },
  { id: 'p56', num: 56, title: 'Christmas Social Media Campaign Ideas for South Yorkshire Businesses',         keyword: 'Christmas social media ideas local business',        volume: 720  },
  { id: 'p57', num: 57, title: "Thornton's Fine Jewellery: How Organic Instagram Increased Footfall by 40%", keyword: 'organic social media for retailers UK',               volume: 90   },
  { id: 'p58', num: 58, title: "Social Media Agency vs In-House: What's Actually Better for Your Business?", keyword: 'social media agency vs in-house UK',                  volume: 320  },
  { id: 'p59', num: 59, title: 'How Bee Viral Works: What Happens When You Sign Up',                          keyword: 'what does a social media agency do',                 volume: 590  },
  { id: 'p60', num: 60, title: 'Local SEO vs National SEO: Which Does Your Business Need?',                   keyword: 'local SEO vs national SEO',                          volume: 480  },
  { id: 'p61', num: 61, title: 'Peak Performance Gym: 120 Members in 8 Weeks Using Facebook Ads',            keyword: 'gym membership Facebook ads UK',                     volume: 140  },
  { id: 'p62', num: 62, title: 'B2B Social Media Marketing: How to Get Business Leads on LinkedIn in 2026',  keyword: 'B2B social media marketing UK',                      volume: 880  },
  { id: 'p63', num: 63, title: 'How to Measure Social Media ROI (Without Lying to Yourself)',                 keyword: 'social media ROI UK',                                volume: 720  },
  { id: 'p64', num: 64, title: 'The Bee Viral Method: Why We Do SEO, Social, and Web in One Package',        keyword: 'full service digital marketing agency',              volume: 1600 },
]
