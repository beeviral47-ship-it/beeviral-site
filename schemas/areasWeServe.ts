import { defineField, defineType } from 'sanity'

export const areasWeServe = defineType({
  name:  'areasWeServe',
  title: 'Areas We Serve',
  type:  'document',
  fields: [
    // ── Section Heading ───────────────────────────────────────────────────────
    defineField({
      name:         'sectionHeading',
      title:        'Section Heading',
      type:         'string',
      description:  'e.g. Areas We Serve',
      initialValue: 'Areas We Serve',
    }),

    // ── Section Subtext ───────────────────────────────────────────────────────
    defineField({
      name:  'sectionSubtext',
      title: 'Section Subtext',
      type:  'text',
      rows:  3,
    }),

    // ── Areas ─────────────────────────────────────────────────────────────────
    defineField({
      name:  'areas',
      title: 'Areas',
      type:  'array',
      of: [
        {
          type:  'object',
          name:  'area',
          title: 'Area',
          fields: [
            defineField({
              name:  'cityName',
              title: 'City Name',
              type:  'string',
            }),
            defineField({
              name:  'shortDescription',
              title: 'Short Description',
              type:  'text',
              rows:  2,
            }),
            defineField({
              name:  'locationPage',
              title: 'Location Page',
              type:  'reference',
              to:    [{ type: 'locationPage' }],
            }),
          ],
          preview: {
            select: { title: 'cityName', subtitle: 'shortDescription' },
          },
        },
      ],
    }),
  ],
  preview: {
    select: { title: 'sectionHeading' },
    prepare({ title }) {
      return { title: `🗺️ ${title ?? 'Areas We Serve'}` }
    },
  },
})
