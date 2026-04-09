'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import {
  LayoutDashboard,
  TrendingUp,
  Table2,
  BookOpen,
  LogOut,
  Menu,
  X,
} from 'lucide-react'

const navItems = [
  { label: 'Overview',                href: '/dashboard',               icon: LayoutDashboard, exact: true },
  { label: 'SEO Strategy',            href: '/dashboard/seo-strategy',  icon: TrendingUp,      exact: false },
  { label: 'Keyword & Content Plan',  href: '/dashboard/keywords',      icon: Table2,          exact: false },
  { label: 'Writing System',          href: '/dashboard/writing-system', icon: BookOpen,       exact: false },
]

export default function DashboardShell({ children }: { children: React.ReactNode }) {
  const pathname    = usePathname()
  const router      = useRouter()
  const [open, setOpen] = useState(false)

  function handleLogout() {
    localStorage.removeItem('dashboard_auth')
    router.replace('/dashboard/login')
  }

  return (
    <div className="min-h-screen bg-[#1a1a1a] flex">

      {/* ── Sidebar ─────────────────────────────────────── */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-[#222222] border-r border-white/8 flex flex-col transition-transform duration-300 lg:translate-x-0 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Logo */}
        <div className="h-16 flex items-center px-6 border-b border-white/8 flex-shrink-0">
          <Image
            src="/images/logo-transparent.png"
            alt="Bee Viral"
            width={100}
            height={50}
            className="h-8 w-auto"
          />
        </div>

        {/* Section label */}
        <div className="px-6 py-3 border-b border-white/8 flex-shrink-0">
          <p className="text-[10px] font-semibold text-[#FFC512]/60 uppercase tracking-widest">
            SEO Dashboard
          </p>
        </div>

        {/* Nav items */}
        <nav className="flex-1 px-3 py-4 flex flex-col gap-0.5 overflow-y-auto">
          {navItems.map(({ label, href, icon: Icon, exact }) => {
            const active = exact
              ? pathname === href
              : pathname.startsWith(href)
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-all duration-150 ${
                  active
                    ? 'bg-[#FFC512]/10 text-[#FFC512] border border-[#FFC512]/20'
                    : 'text-white/50 hover:text-white hover:bg-white/5 border border-transparent'
                }`}
              >
                <Icon size={15} className="flex-shrink-0" />
                {label}
              </Link>
            )
          })}
        </nav>

        {/* Logout — sidebar */}
        <div className="p-3 border-t border-white/8 flex-shrink-0">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium text-white/30 hover:text-white/60 hover:bg-white/5 border border-transparent transition-all duration-150"
          >
            <LogOut size={15} />
            Log Out
          </button>
        </div>
      </aside>

      {/* Mobile backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-30 bg-black/60 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* ── Main area ───────────────────────────────────── */}
      <div className="flex-1 flex flex-col min-w-0 lg:pl-64">

        {/* Header */}
        <header className="h-16 bg-[#222222] border-b border-white/8 flex items-center justify-between px-4 lg:px-8 sticky top-0 z-20 flex-shrink-0">
          <div className="flex items-center gap-3">
            {/* Mobile hamburger */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden text-white/50 hover:text-white p-1.5 rounded-md hover:bg-white/5 transition-colors"
              aria-label={open ? 'Close menu' : 'Open menu'}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>

            <span className="font-display font-bold text-white text-sm lg:text-base tracking-tight">
              Bee Viral{' '}
              <span className="text-white/25 font-normal">— SEO Dashboard</span>
            </span>
          </div>

          {/* Logout — header (desktop) */}
          <button
            onClick={handleLogout}
            className="hidden lg:flex items-center gap-2 text-xs font-medium text-white/30 hover:text-white/60 px-3 py-2 rounded-md hover:bg-white/5 transition-all duration-150"
          >
            <LogOut size={13} />
            Log Out
          </button>
        </header>

        {/* Page content */}
        <main className="flex-1 p-4 lg:p-8 min-w-0">
          {children}
        </main>
      </div>
    </div>
  )
}
