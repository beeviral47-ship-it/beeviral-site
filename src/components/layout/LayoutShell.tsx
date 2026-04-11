'use client'

import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'motion/react'
import Navbar from './Navbar'
import Footer from './Footer'
import Cursor from '@/components/ui/Cursor'
import { AuditModalProvider } from '@/components/providers/AuditModalProvider'
import { EASE_OUT_EXPO } from '@/lib/motion-variants'

const pageVariants = {
  initial: { opacity: 0,  y: 14 },
  animate: { opacity: 1,  y: 0  },
  exit:    { opacity: 0,  y: -8 },
}

export default function LayoutShell({ children }: { children: React.ReactNode }) {
  const pathname     = usePathname()
  const isStudio     = pathname?.startsWith('/studio')
  const isDashboard  = pathname?.startsWith('/dashboard')

  if (isStudio || isDashboard) {
    return <>{children}</>
  }

  return (
    <AuditModalProvider>
      <Cursor />
      <Navbar />
      <AnimatePresence mode="wait" initial={false}>
        <motion.main
          key={pathname}
          className="flex-1"
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            // enter is slightly slower than exit so it feels deliberate
            duration: pathname === '/' ? 0.35 : 0.28,
            ease: EASE_OUT_EXPO,
          }}
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <Footer />
    </AuditModalProvider>
  )
}
