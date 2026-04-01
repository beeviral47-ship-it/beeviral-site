import { defineField, defineType } from 'sanity'

export const caseStudy = defineType({
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  groups: [
    { name: 'content',  title: 'Content',  default: true },
    { name: 'meta',     title: 'Meta'                    },
    { name: 'seo',      title: 'SEO'                     },
  ],
  fields: [
    // ── Status ─────────────────────────────────────────────────────────────
    defineField({
      name:  'status',
      title: 'Status',
      type:  'string',
      group: 'meta',
      options: {
        list: [
          { title: 'Draft',     value: 'draft'     },
          { title: 'Published', value: 'published' },
        ],
        layout: 'radio',
      },
      initialValue: 'draft',
      validation: (Rule) => Rule.required(),
    }),

    // ── Core content ────────────────────────────────────────────────────────
    defineField({
      name:  'title',
      title: 'Title',
      type:  'string',
      group: 'content',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name:    'slug',
      title:   'Slug',
      type:    'slug',
      group:   'content',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name:        'featuredImage',
      title:       'Featured Image',
      type:        'image',
      group:       'content',
      options:     { hotspot: true },
      description: 'Used on listing cards, social sharing, and as the OG image fallback.',
      fields: [
        { name: 'alt', type: 'string', title: 'Alt Text', description: 'Describe the image for screen readers and SEO' },
      ],
    }),
    defineField({ name: 'client',   title: 'Client Name', type: 'string', group: 'content' }),
    defineField({ name: 'industry', title: 'Industry',    type: 'string', group: 'content' }),
    defineField({ name: 'location', title: 'Location',    type: 'string', group: 'content' }),
    defineField({
      name:        'tagline',
      title:       'Tagline',
      type:        'string',
      group:       'content',
      description: 'One-line summary of the result',
    }),
    defineField({
      name:  'challenge',
      title: 'The Challenge',
      type:  'blockContent',
      group: 'content',
    }),
    defineField({
      name:  'approach',
      title: 'Our Approach',
      type:  'blockContent',
      group: 'content',
    }),
    defineField({
      name:  'results',
      title: 'The Results',
      type:  'blockContent',
      group: 'content',
    }),
    defineField({
      name:  'metrics',
      title: 'Key Metrics',
      type:  'array',
      group: 'content',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label',   title: 'Label',   type: 'string' },
            { name: 'value',   title: 'Value',   type: 'string' },
            { name: 'context', title: 'Context', type: 'string' },
          ],
          preview: {
            select: { title: 'label', subtitle: 'value' },
          },
        },
      ],
    }),
    defineField({
      name:  'testimonial',
      title: 'Testimonial',
      type:  'object',
      group: 'content',
      fields: [
        { name: 'quote',  title: 'Quote',             type: 'text', rows: 4 },
        { name: 'author', title: 'Author Name',       type: 'string' },
        { name: 'role',   title: 'Author Role/Title', type: 'string' },
      ],
    }),

    // ── SEO ─────────────────────────────────────────────────────────────────
    defineField({
      name:  'seo',
      title: 'SEO',
      type:  'seo',
      group: 'seo',
    }),
  ],
  preview: {
    select: { title: 'title', status: 'status', subtitle: 'client', media: 'featuredImage' },
    prepare({ title, status, subtitle, media }) {
      const badge = status === 'published' ? '✅' : '📝'
      return { title: `${badge} ${title}`, subtitle, media }
    },
  },
})
