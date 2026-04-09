'use client'

import { useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import DashboardShell from './DashboardShell'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const router   = useRouter()
  const [ready, setReady] = useState(false)

  const isLoginPage = pathname === '/dashboard/login'

  useEffect(() => {
    if (isLoginPage) {
      setReady(true)
      return
    }

    const auth = localStorage.getItem('dashboard_auth')
    if (auth !== 'true') {
      router.replace('/dashboard/login')
      // keep ready=false — blank screen prevents flash of protected content
    } else {
      setReady(true)
    }
  }, [isLoginPage, router])

  if (!ready) {
    return <div className="min-h-screen bg-[#222222]" />
  }

  // Login page renders without the dashboard shell
  if (isLoginPage) {
    return <>{children}</>
  }

  return <DashboardShell>{children}</DashboardShell>
}
