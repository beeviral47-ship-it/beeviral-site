export interface RuleSection {
  id:      string
  title:   string
  content: RuleContent
}

export type RuleContent =
  | { type: 'code';    text: string }
  | { type: 'list';    items: string[] }
  | { type: 'table';   headers: string[]; rows: string[][] }
  | { type: 'grouped'; groups: { heading: string; items: string[] }[] }
  | { type: 'mixed';   blocks: ({ type: 'para'; text: string } | { type: 'list'; items: string[] })[] }

export const writingRules: RuleSection[] = [
  {
    id: 'brief',
    title: 'Post Brief Template',
    content: {
      type: 'code',
      text: `POST BRIEF TEMPLATE
===================
Post Title (H1):
Target Keyword:
Secondary Keywords (2–3):
Post Type: [ ] Pillar  [ ] Standard  [ ] Niche  [ ] Case Study  [ ] Local Guide
Target Word Count:
Target URL Slug:
Meta Title (≤60 chars):
Meta Description (≤155 chars):
Featured Image:
Internal Links To:
  1.
  2.
  3.
External Sources:
CTA Goal:
Notes / Angle:`,
    },
  },
  {
    id: 'h1',
    title: 'H1 Formula',
    content: {
      type: 'grouped',
      groups: [
        {
          heading: 'Formats',
          items: [
            'How-to: "How to [Achieve Outcome] [With/Using/For X]"',
            'Guide: "The Complete Guide to [Topic] for [Audience]"',
            'Number: "[N] [Things/Ways/Tips] to [Achieve Outcome]"',
            'Question: "What is [Topic]? [Benefit/Use Case]"',
            'Case Study: "How [Subject] [Achieved Result] with [Method]"',
          ],
        },
        {
          heading: 'Rules',
          items: [
            'Target: 55–65 characters',
            'Must include the primary keyword',
            'Must promise a clear benefit or outcome',
            'No clickbait — match the actual content',
          ],
        },
      ],
    },
  },
  {
    id: 'meta',
    title: 'Meta Title & Description Formula',
    content: {
      type: 'grouped',
      groups: [
        {
          heading: 'Meta Title Format',
          items: [
            'Format: [Primary Keyword] — [Hook] | Bee Viral',
            'Maximum 60 characters',
            'Hook options: "Expert Guide", "Proven Tips", "Step-by-Step", "For UK Businesses"',
          ],
        },
        {
          heading: 'Meta Description Format',
          items: [
            'Format: [1–2 sentence summary including primary + secondary keyword] + [CTA]',
            'Maximum 155 characters',
            'End with a CTA: "Read the guide.", "See how.", "Find out now."',
            'Must match page intent — do not oversell',
          ],
        },
      ],
    },
  },
  {
    id: 'url',
    title: 'URL Rules',
    content: {
      type: 'list',
      items: [
        'Include the target keyword only — no extra words',
        'Lowercase letters and hyphens only (no underscores, no spaces)',
        'Remove stop words: a, the, and, for, in, of, to, with',
        'Maximum 60 characters total',
        'No dates or numbers in slugs unless essential (e.g. a year)',
      ],
    },
  },
  {
    id: 'anatomy',
    title: 'Post Anatomy',
    content: {
      type: 'table',
      headers: ['Section', 'Purpose', 'Target Length'],
      rows: [
        ['H1', 'Primary keyword, clear promise', '55–65 chars'],
        ['Intro', 'Hook + context + signal what reader gets', '80–120 words'],
        ['Quick Answer Box', 'Direct answer to main query (FAQ schema candidate)', '50–80 words'],
        ['H2 Section 1', 'Most important subtopic first', '300–400 words'],
        ['H2 Sections 2–N', 'Supporting subtopics, secondary keywords', '200–300 words each'],
        ['Data / Proof Section', 'Stats, case study snippet, or real example', '200–300 words'],
        ['FAQ Section', '4–6 questions, conversational tone', '~80 words per answer'],
        ['Conclusion + CTA', 'Summarise + single clear next step', '50–100 words'],
        ['Author Bio', 'Name, role, 1 trust signal', '60–80 words'],
      ],
    },
  },
  {
    id: 'wordcount',
    title: 'Word Count by Post Type',
    content: {
      type: 'table',
      headers: ['Post Type', 'Minimum', 'Target', 'Maximum'],
      rows: [
        ['Pillar Page',          '1,800', '2,200–2,500', '3,000'],
        ['Standard Blog Post',   '1,400', '1,800–2,000', '2,500'],
        ['Niche Industry Post',  '1,200', '1,400–1,600', '2,000'],
        ['Case Study',           '800',   '1,000–1,200', '1,500'],
        ['Local Guide',          '1,000', '1,200–1,500', '1,800'],
        ['Service Page',         '700',   '900–1,100',   '1,200'],
        ['Location Page',        '1,200', '1,500–2,000', '2,500'],
        ['National Landing Page','800',   '1,000–1,200', '1,500'],
      ],
    },
  },
  {
    id: 'onpage',
    title: '10 On-Page SEO Rules',
    content: {
      type: 'list',
      items: [
        '1. Keyword Placement — Primary keyword in H1, first 100 words, a H2, meta title, and URL.',
        '2. H1–H6 Hierarchy — One H1 per page. H2s for main sections. H3s for subsections only.',
        '3. Internal Links — 3+ links to service/location pages. 1–2 links to related blog posts.',
        '4. Images & Alt Text — Every image needs descriptive alt text with keyword where natural. Compress all images to under 150 KB.',
        '5. Paragraph Length — Maximum 3 sentences per paragraph. No dense walls of text.',
        '6. Tables, Lists & Structure — Use a table or bulleted list on every post. Improves scannability and featured snippet eligibility.',
        '7. External Links — 1–2 links to authoritative external sources (gov, .edu, Statista, industry bodies).',
        '8. Reading Level — Target Hemingway Grade 7–9. Aim for "Good" on the Hemingway App.',
        '9. Schema Markup — Apply Article schema to all posts. Add FAQPage schema when a FAQ section is present.',
        '10. Freshness Signal — Add "Last Updated: [date]" near the top of the post. Update it whenever the post is edited.',
      ],
    },
  },
  {
    id: 'prepublish',
    title: 'Pre-Publish Checklist',
    content: {
      type: 'grouped',
      groups: [
        {
          heading: 'Content & Keyword',
          items: [
            'Primary keyword appears in the first 100 words',
            'H1 includes the primary keyword',
            '2+ H2s include secondary keywords',
            'Quick answer box is present',
            'Word count hits the target range for this post type',
            'Primary keyword appears in the final paragraph',
            'At least one table or bulleted list is included',
            'FAQ section with 4–6 questions is present',
            'Paragraphs are max 3 sentences long',
            'Hemingway App score is "Good" (Grade 7–9)',
          ],
        },
        {
          heading: 'Technical SEO',
          items: [
            'Meta title written (≤60 chars, includes keyword)',
            'Meta description written (≤155 chars, includes CTA)',
            'URL slug follows the URL rules',
            'Featured image has keyword in filename and alt text',
            'All images compressed to under 150 KB',
            'Article schema applied',
            'FAQPage schema applied (if FAQ section present)',
            'Canonical tag set correctly',
          ],
        },
        {
          heading: 'Internal Linking & E-E-A-T',
          items: [
            '3+ internal links pointing to service pages',
            '2+ internal links pointing to location pages',
            '1–2 internal links to related blog posts',
            '1–2 external links to authoritative sources',
            'Author bio is present',
            'Post includes a real example, data point, or client result',
            'Contextual CTA included (relevant to post topic)',
            'Conversational tone — reads like a human expert wrote it',
            'Post submitted to Google Search Console after publishing',
          ],
        },
      ],
    },
  },
]

// Post Checklist types
export type PostType = 'Pillar' | 'Standard' | 'Niche Industry' | 'Case Study' | 'Local Guide'

export const POST_TYPE_WORDCOUNT: Record<PostType, string> = {
  'Pillar':        '2,200–2,500 words',
  'Standard':      '1,800–2,000 words',
  'Niche Industry':'1,400–1,600 words',
  'Case Study':    '1,000–1,200 words',
  'Local Guide':   '1,200–1,500 words',
}

export interface ChecklistGroup {
  id:    string
  label: string
  items: { id: string; text: string }[]
}

export const checklistGroups: ChecklistGroup[] = [
  {
    id: 'content',
    label: 'Content & Keyword',
    items: [
      { id: 'ck01', text: 'Primary keyword appears in the first 100 words' },
      { id: 'ck02', text: 'H1 includes the primary keyword' },
      { id: 'ck03', text: '2+ H2s include secondary keywords' },
      { id: 'ck04', text: 'Quick answer box is present' },
      { id: 'ck05', text: 'Word count hits the target range for this post type' },
      { id: 'ck06', text: 'Primary keyword appears in the final paragraph' },
      { id: 'ck07', text: 'At least one table or bulleted list is included' },
      { id: 'ck08', text: 'FAQ section with 4–6 questions is present' },
      { id: 'ck09', text: 'Paragraphs are max 3 sentences long' },
      { id: 'ck10', text: 'Hemingway App score is "Good" (Grade 7–9)' },
    ],
  },
  {
    id: 'technical',
    label: 'Technical SEO',
    items: [
      { id: 'ts01', text: 'Meta title written (≤60 chars, includes keyword)' },
      { id: 'ts02', text: 'Meta description written (≤155 chars, includes CTA)' },
      { id: 'ts03', text: 'URL slug follows the URL rules' },
      { id: 'ts04', text: 'Featured image has keyword in filename and alt text' },
      { id: 'ts05', text: 'All images compressed to under 150 KB' },
      { id: 'ts06', text: 'Article schema applied' },
      { id: 'ts07', text: 'FAQPage schema applied (if FAQ section present)' },
      { id: 'ts08', text: 'Canonical tag set correctly' },
    ],
  },
  {
    id: 'eeat',
    label: 'Internal Linking & E-E-A-T',
    items: [
      { id: 'ee01', text: '3+ internal links pointing to service pages' },
      { id: 'ee02', text: '2+ internal links pointing to location pages' },
      { id: 'ee03', text: '1–2 internal links to related blog posts' },
      { id: 'ee04', text: '1–2 external links to authoritative sources' },
      { id: 'ee05', text: 'Author bio is present' },
      { id: 'ee06', text: 'Post includes a real example, data point, or client result' },
      { id: 'ee07', text: 'Contextual CTA included (relevant to post topic)' },
      { id: 'ee08', text: 'Conversational tone — reads like a human expert wrote it' },
      { id: 'ee09', text: 'Post submitted to Google Search Console after publishing' },
    ],
  },
]
