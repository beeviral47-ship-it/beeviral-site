import { defineConfig, type DocumentActionProps } from 'sanity'
import { structureTool } from 'sanity/structure'
import { table } from '@sanity/table'
import { schemaTypes } from './schemas'

// ── Preview Action — opens the corresponding live page in a new tab ───────────

const PREVIEW_TYPES = new Set(['blog', 'caseStudy', 'service', 'locationPage', 'page'])

function OpenPreviewAction(props: DocumentActionProps) {
  const { draft, published, type } = props
  if (!PREVIEW_TYPES.has(type)) return null

  const doc   = draft ?? published
  const slug  = (doc as { slug?: { current?: string } } | null)?.slug?.current
  if (!slug) return null

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.beeviral.co.uk'
  const secret  = process.env.NEXT_PUBLIC_SANITY_PREVIEW_SECRET ?? ''

  if (!secret) return null

  const previewUrl = `${siteUrl}/api/draft?secret=${encodeURIComponent(secret)}&slug=${encodeURIComponent(slug)}&type=${encodeURIComponent(type)}`

  return {
    label:    'Open Preview',
    tone:     'primary' as const,
    onHandle: () => { window.open(previewUrl, '_blank') },
  }
}

// Document types that should only ever have one instance
const SINGLETONS = new Set(['areasWeServe'])

export default defineConfig({
  name:     'default',
  title:    'Bee Viral CMS',
  basePath: '/studio',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset:   process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',

  plugins: [
    table(),
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

  document: {
    actions: (prev) => [...prev, OpenPreviewAction],
  },
})
