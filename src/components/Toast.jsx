import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { AlertCircle, CheckCircle2, X } from 'lucide-react'

/**
 * Toast — tiny front-end-only notification system.
 *
 *   const { toast } = useToast()
 *   toast({ title: 'Request sent', description: '...', variant: 'success' })
 *
 * Mount <ToastProvider> once, near the root of the app.
 */
const ToastContext = createContext(null)

export function useToast() {
  const ctx = useContext(ToastContext)
  if (!ctx) throw new Error('useToast must be used inside <ToastProvider>')
  return ctx
}

export function ToastProvider({ children, duration = 5200 }) {
  const [toasts, setToasts] = useState([])

  const dismiss = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }, [])

  const toast = useCallback(
    ({ title, description, variant = 'success' }) => {
      const id = Math.random().toString(36).slice(2)
      setToasts((prev) => [...prev, { id, title, description, variant }])
      window.setTimeout(() => dismiss(id), duration)
      return id
    },
    [dismiss, duration]
  )

  const value = useMemo(() => ({ toast, dismiss }), [toast, dismiss])

  return (
    <ToastContext.Provider value={value}>
      {children}

      <div
        className="pointer-events-none fixed inset-x-0 bottom-0 z-[100] flex flex-col items-center gap-3 px-4 pb-6 sm:items-end sm:px-6 sm:pb-8"
        role="region"
        aria-live="polite"
        aria-label="Notifications"
      >
        <AnimatePresence initial={false}>
          {toasts.map((t) => (
            <motion.div
              key={t.id}
              layout
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.97 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="pointer-events-auto w-full max-w-sm overflow-hidden rounded-[3px] border border-charcoal/10 bg-charcoal text-bone shadow-[0_24px_60px_-24px_rgba(20,21,15,0.6)]"
            >
              <div className="flex items-start gap-3.5 p-5">
                <span
                  className={`mt-0.5 shrink-0 ${
                    t.variant === 'error' ? 'text-clay' : 'text-moss-300'
                  }`}
                >
                  {t.variant === 'error' ? (
                    <AlertCircle size={18} strokeWidth={1.6} />
                  ) : (
                    <CheckCircle2 size={18} strokeWidth={1.6} />
                  )}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium tracking-tight">{t.title}</p>
                  {t.description && (
                    <p className="mt-1.5 text-[13px] leading-relaxed text-bone/60">
                      {t.description}
                    </p>
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => dismiss(t.id)}
                  className="-mr-1 -mt-1 shrink-0 rounded-full p-1.5 text-bone/45 transition-colors hover:bg-bone/10 hover:text-bone"
                  aria-label="Dismiss notification"
                >
                  <X size={15} strokeWidth={1.6} />
                </button>
              </div>
              <motion.span
                className="block h-px bg-moss-300/60"
                initial={{ scaleX: 1 }}
                animate={{ scaleX: 0 }}
                transition={{ duration: duration / 1000, ease: 'linear' }}
                style={{ transformOrigin: 'left' }}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  )
}
