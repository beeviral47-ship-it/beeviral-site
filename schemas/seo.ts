import { defineField, defineType } from 'sanity'

// Schema type options — used to populate the schemaType selector
const SCHEMA_TYPES = [
  { title: 'Article',           value: 'Article' },
  { title: 'Blog Posting',      value: 'BlogPosting' },
  { title: 'Local Business',    value: 'LocalBusiness' },
  { title: 'Organization',      value: 'Organization' },
  { title: 'Product',           value: 'Product' },
  { title: 'Service',           value: 'Service' },
  { title: 'FAQ Page',          value: 'FAQPage' },
  { title: 'Web Page',          value: 'WebPage' },
  { title: 'Professional Service', value: 'ProfessionalService' },
]

export const seo = defineType({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  groups: [
    { name: 'search',   title: 'Search'       },
    { name: 'social',   title: 'Open Graph'   },
    { name: 'advanced', title: 'Advanced'     },
  ],
  fields: [

    // ── Search ──────────────────────────────────────────────────────────────
    defineField({
      name:  'metaTitle',
      title: 'Meta Title',
      type:  'string',
      group: 'search',
      description: 'Title shown in search results — 50–60 characters recommended. Falls back to the page title.',
      validation: (Rule) => Rule.max(60).warning('Keep meta titles under 60 characters'),
    }),
    defineField({
      name:  'metaDescription',
      title: 'Meta Description',
      type:  'text',
      rows:  3,
      group: 'search',
      description: 'Snippet shown below the title in search results — 120–160 characters recommended.',
      validation: (Rule) => Rule.max(160).warning('Keep meta descriptions under 160 characters'),
    }),
    defineField({
      name:  'canonicalUrl',
      title: 'Canonical URL',
      type:  'url',
      group: 'search',
      description: 'Override the canonical URL. Leave blank to use the default page URL.',
    }),
    defineField({
      name:  'noindex',
      title: 'Hide from search engines (noindex)',
      type:  'boolean',
      group: 'search',
      description: 'Tick to prevent Google and other search engines from indexing this page.',
      initialValue: false,
    }),

    // ── Open Graph ───────────────────────────────────────────────────────────
    defineField({
      name:  'ogTitle',
      title: 'Open Graph Title',
      type:  'string',
      group: 'social',
      description: 'Title shown when shared on Facebook, LinkedIn, etc. Falls back to Meta Title then page title.',
      validation: (Rule) => Rule.max(60).warning('Keep OG titles under 60 characters'),
    }),
    defineField({
      name:  'ogDescription',
      title: 'Open Graph Description',
      type:  'text',
      rows:  3,
      group: 'social',
      description: 'Description shown when shared on social media. Falls back to Meta Description.',
      validation: (Rule) => Rule.max(200).warning('Keep OG descriptions under 200 characters'),
    }),
    defineField({
      name:    'ogImage',
      title:   'Open Graph Image',
      type:    'image',
      group:   'social',
      description: 'Image shown when shared on social media — 1200×630px recommended.',
      options: { hotspot: true },
    }),

    // ── Advanced ─────────────────────────────────────────────────────────────
    defineField({
      name:  'schemaType',
      title: 'Schema Type',
      type:  'string',
      group: 'advanced',
      description: 'Structured data type for this page. Used to auto-generate JSON-LD if no custom markup is provided.',
      options: {
        list: SCHEMA_TYPES,
        layout: 'radio',
      },
    }),
    defineField({
      name:  'structuredData',
      title: 'Custom Structured Data (JSON-LD)',
      type:  'text',
      rows:  8,
      group: 'advanced',
      description: 'Paste custom JSON-LD here to override the auto-generated schema. Must be valid JSON.',
    }),
  ],
})
