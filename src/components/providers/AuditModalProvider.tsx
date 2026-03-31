'use client'

import { createContext, useContext, useState, useCallback } from 'react'
import AuditModal from '@/components/ui/AuditModal'

type ModalMode = 'service' | 'book-package'

interface AuditModalContextValue {
  openAuditModal: (mode?: ModalMode, defaultService?: string) => void
}

const AuditModalContext = createContext<AuditModalContextValue | null>(null)

export function useAuditModal() {
  const ctx = useContext(AuditModalContext)
  if (!ctx) throw new Error('useAuditModal must be used within AuditModalProvider')
  return ctx
}

export function AuditModalProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen]                   = useState(false)
  const [mode, setMode]                   = useState<ModalMode>('service')
  const [defaultService, setDefaultService] = useState('')

  const openAuditModal = useCallback((m: ModalMode = 'service', ds = '') => {
    setMode(m)
    setDefaultService(ds)
    setOpen(true)
  }, [])

  return (
    <AuditModalContext.Provider value={{ openAuditModal }}>
      {children}
      <AuditModal
        open={open}
        onClose={() => setOpen(false)}
        mode={mode}
        defaultService={defaultService}
      />
    </AuditModalContext.Provider>
  )
}
