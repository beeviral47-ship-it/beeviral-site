'use client'

import { createContext, useContext, useState, useCallback } from 'react'
import AuditModal from '@/components/ui/AuditModal'

type ModalMode = 'service' | 'book-package'

interface AuditModalContextValue {
  openAuditModal: (mode?: ModalMode, defaultService?: string, serviceKey?: string) => void
}

const AuditModalContext = createContext<AuditModalContextValue | null>(null)

export function useAuditModal() {
  const ctx = useContext(AuditModalContext)
  if (!ctx) throw new Error('useAuditModal must be used within AuditModalProvider')
  return ctx
}

export function AuditModalProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen]                     = useState(false)
  const [mode, setMode]                     = useState<ModalMode>('service')
  const [defaultService, setDefaultService] = useState('')
  const [serviceKey, setServiceKey]         = useState<string | undefined>(undefined)

  const openAuditModal = useCallback((m: ModalMode = 'service', ds = '', sk?: string) => {
    setMode(m)
    setDefaultService(ds)
    setServiceKey(sk)
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
        serviceKey={serviceKey}
      />
    </AuditModalContext.Provider>
  )
}
