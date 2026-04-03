import { createClient } from 'next-sanity'

const sharedConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset:   process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',
  apiVersion: '2025-04-01',
}

export const client = createClient({
  ...sharedConfig,
  useCdn: process.env.NODE_ENV === 'production',
})

// Used only when Next.js Draft Mode is enabled — fetches draft documents.
export const previewClient = createClient({
  ...sharedConfig,
  useCdn: false,
  token: process.env.SANITY_API_READ_TOKEN,
  perspective: 'previewDrafts',
})
