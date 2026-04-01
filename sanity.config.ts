import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './schemas'

// Document types that should only ever have one instance
const SINGLETONS = new Set(['areasWeServe'])

export default defineConfig({
  name:     'default',
  title:    'Bee Viral CMS',
  basePath: '/studio',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset:   process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            // All regular document types (excludes singletons)
            ...S.documentTypeListItems().filter(
              (item) => !SINGLETONS.has(item.getId() ?? '')
            ),
            S.divider(),
            // Singleton: Areas We Serve — always opens the same document
            S.listItem()
              .title('Areas We Serve')
              .id('areasWeServe')
              .child(
                S.document()
                  .schemaType('areasWeServe')
                  .documentId('areasWeServe')
              ),
          ]),
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
