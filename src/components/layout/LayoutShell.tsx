'use client'

import { usePathname } from 'next/navigation'
import Navbar from './Navbar'
import Footer from './Footer'
import { AuditModalProvider } from '@/components/providers/AuditModalProvider'

export default function LayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isStudio    = pathname?.startsWith('/studio')
  const isDashboard = pathname?.startsWith('/dashboard')

  if (isStudio || isDashboard) {
    return <>{children}</>
  }

  return (
    <AuditModalProvider>
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </AuditModalProvider>
  )
}
