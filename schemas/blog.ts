import { defineField, defineType } from 'sanity'

export const blog = defineType({
  name: 'blog',
  title: 'Blog Post',
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
      name:         'featuredImage',
      title:        'Featured Image',
      type:         'image',
      group:        'content',
      options:      { hotspot: true },
      description:  'Used on listing cards, social sharing, and as the OG image fallback.',
      fields: [
        { name: 'alt', type: 'string', title: 'Alt Text', description: 'Describe the image for screen readers and SEO' },
      ],
    }),
    defineField({
      name:  'excerpt',
      title: 'Excerpt',
      type:  'text',
      rows:  3,
      group: 'content',
      description: 'Short summary shown on listing cards and in search results (120–160 chars)',
    }),
    defineField({
      name:  'body',
      title: 'Body',
      type:  'blockContent',
      group: 'content',
    }),

    // ── Meta ────────────────────────────────────────────────────────────────
    defineField({
      name:         'author',
      title:        'Author',
      type:         'string',
      group:        'meta',
      initialValue: 'Bee Viral',
    }),
    defineField({
      name:         'publishedAt',
      title:        'Published At',
      type:         'datetime',
      group:        'meta',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name:  'categories',
      title: 'Categories',
      type:  'array',
      group: 'meta',
      of:    [{ type: 'reference', to: [{ type: 'category' }] }],
      description: 'Assign one or more categories to this post',
    }),

    // ── SEO ─────────────────────────────────────────────────────────────────
    defineField({
      name:        'focusKeyword',
      title:       'Focus Keyword',
      type:        'string',
      group:       'seo',
      description: 'Primary keyword or keyphrase this article is optimised for (e.g. "social media management Sheffield"). Used for on-page SEO analysis.',
    }),
    defineField({
      name:  'seo',
      title: 'SEO',
      type:  'seo',
      group: 'seo',
    }),
  ],
  preview: {
    select: {
      title:  'title',
      status: 'status',
      author: 'author',
      media:  'featuredImage',
    },
    prepare({ title, status, author, media }) {
      const badge = status === 'published' ? '✅' : '📝'
      return { title: `${badge} ${title}`, subtitle: `By ${author ?? 'Bee Viral'}`, media }
    },
  },
  orderings: [
    {
      title: 'Published: Newest First',
      name:  'publishedAtDesc',
      by:    [{ field: 'publishedAt', direction: 'desc' }],
    },
    {
      title: 'Status',
      name:  'statusAsc',
      by:    [{ field: 'status', direction: 'asc' }],
    },
  ],
})
