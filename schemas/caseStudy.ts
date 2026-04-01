import { defineField, defineType } from 'sanity'

export const caseStudy = defineType({
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: 'client',   title: 'Client Name', type: 'string' }),
    defineField({ name: 'industry', title: 'Industry',    type: 'string' }),
    defineField({ name: 'location', title: 'Location',    type: 'string' }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      description: 'One-line summary of the result',
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true },
      fields: [{ name: 'alt', type: 'string', title: 'Alt Text' }],
    }),
    defineField({
      name: 'challenge',
      title: 'The Challenge',
      type: 'blockContent',
    }),
    defineField({
      name: 'approach',
      title: 'Our Approach',
      type: 'blockContent',
    }),
    defineField({
      name: 'results',
      title: 'The Results',
      type: 'blockContent',
    }),
    defineField({
      name: 'metrics',
      title: 'Key Metrics',
      type: 'array',
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
      name: 'testimonial',
      title: 'Testimonial',
      type: 'object',
      fields: [
        { name: 'quote',  title: 'Quote',            type: 'text', rows: 4 },
        { name: 'author', title: 'Author Name',      type: 'string' },
        { name: 'role',   title: 'Author Role/Title', type: 'string' },
      ],
    }),
    defineField({ name: 'seo', title: 'SEO', type: 'seo' }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'client', media: 'coverImage' },
  },
})
