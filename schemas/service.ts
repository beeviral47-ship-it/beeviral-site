import { defineField, defineType } from 'sanity'

export const service = defineType({
  name: 'service',
  title: 'Service',
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
      description: 'Used on service cards, social sharing, and as the OG image fallback.',
      fields: [
        { name: 'alt', type: 'string', title: 'Alt Text', description: 'Describe the image for screen readers and SEO' },
      ],
    }),
    defineField({
      name:        'tagline',
      title:       'Tagline',
      type:        'string',
      group:       'content',
      description: 'One-line summary shown in cards and page headers',
    }),
    defineField({
      name:  'description',
      title: 'Description',
      type:  'text',
      rows:  4,
      group: 'content',
    }),
    defineField({
      name:        'icon',
      title:       'Icon Name',
      type:        'string',
      group:       'content',
      description: 'Lucide icon name — e.g. TrendingUp, Video, Search',
    }),
    defineField({
      name:        'features',
      title:       'Features',
      type:        'array',
      group:       'content',
      of:          [{ type: 'string' }],
      description: 'Bullet-point list of what is included',
    }),
    defineField({
      name:  'body',
      title: 'Page Body',
      type:  'blockContent',
      group: 'content',
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
    select: { title: 'title', status: 'status', subtitle: 'tagline', media: 'featuredImage' },
    prepare({ title, status, subtitle, media }) {
      const badge = status === 'published' ? '✅' : '📝'
      return { title: `${badge} ${title}`, subtitle, media }
    },
  },
})
