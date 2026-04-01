import { defineField, defineType } from 'sanity'

export const category = defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
      validation: (Rule) => Rule.required(),
      description: 'Used in the URL: /blog/category/[slug]',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      description: 'Short description of this category (optional)',
    }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'slug.current' },
    prepare({ title, subtitle }) {
      return { title, subtitle: `/blog/category/${subtitle}` }
    },
  },
})
