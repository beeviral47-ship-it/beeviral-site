import { defineField, defineType } from 'sanity'

export const page = defineType({
  name: 'page',
  title: 'Page',
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
      name:  'body',
      title: 'Body Content',
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
    select: { title: 'title', status: 'status', subtitle: 'slug.current' },
    prepare({ title, status, subtitle }) {
      const badge = status === 'published' ? '✅' : '📝'
      return { title: `${badge} ${title}`, subtitle: `/${subtitle}` }
    },
  },
})
