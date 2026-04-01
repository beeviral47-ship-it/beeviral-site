import { defineField, defineType } from 'sanity'

export const locationPage = defineType({
  name:  'locationPage',
  title: 'Location Page',
  type:  'document',
  groups: [
    { name: 'content', title: 'Content', default: true },
    { name: 'meta',    title: 'Meta'                   },
    { name: 'seo',     title: 'SEO'                    },
  ],
  fields: [
    // ── City Name ─────────────────────────────────────────────────────────────
    defineField({
      name:        'cityName',
      title:       'City Name',
      type:        'string',
      group:       'content',
      description: 'e.g. Rotherham',
      validation:  (Rule) => Rule.required(),
    }),

    // ── Slug ──────────────────────────────────────────────────────────────────
    defineField({
      name:       'slug',
      title:      'Slug',
      type:       'slug',
      group:      'content',
      options:    { source: 'cityName', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),

    // ── Hero Headline ─────────────────────────────────────────────────────────
    defineField({
      name:        'heroHeadline',
      title:       'Hero Headline',
      type:        'string',
      group:       'content',
      description: 'e.g. Social Media Agency in Rotherham',
      validation:  (Rule) => Rule.required(),
    }),

    // ── Hero Subtext ──────────────────────────────────────────────────────────
    defineField({
      name:        'heroSubtext',
      title:       'Hero Subtext',
      type:        'text',
      rows:        3,
      group:       'content',
      description: 'Short paragraph displayed under the headline',
    }),

    // ── Services Offered ──────────────────────────────────────────────────────
    defineField({
      name:        'servicesOffered',
      title:       'Services Offered',
      type:        'array',
      group:       'content',
      of:          [{ type: 'string' }],
      description: 'List of services available in this area',
    }),

    // ── Body ──────────────────────────────────────────────────────────────────
    defineField({
      name:  'body',
      title: 'Body',
      type:  'blockContent',
      group: 'content',
    }),

    // ── FAQ Items ─────────────────────────────────────────────────────────────
    defineField({
      name:  'faqItems',
      title: 'FAQ Items',
      type:  'array',
      group: 'content',
      of: [
        {
          type:  'object',
          name:  'faqItem',
          title: 'FAQ Item',
          fields: [
            defineField({
              name:       'question',
              title:      'Question',
              type:       'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name:  'answer',
              title: 'Answer',
              type:  'text',
              rows:  4,
            }),
          ],
          preview: {
            select: { title: 'question' },
          },
        },
      ],
    }),

    // ── SEO ───────────────────────────────────────────────────────────────────
    defineField({
      name:  'seo',
      title: 'SEO',
      type:  'seo',
      group: 'seo',
    }),
  ],
  preview: {
    select: {
      title:    'cityName',
      subtitle: 'heroHeadline',
    },
    prepare({ title, subtitle }) {
      return { title: `📍 ${title ?? 'Untitled'}`, subtitle }
    },
  },
  orderings: [
    {
      title: 'City Name A–Z',
      name:  'cityNameAsc',
      by:    [{ field: 'cityName', direction: 'asc' }],
    },
  ],
})
