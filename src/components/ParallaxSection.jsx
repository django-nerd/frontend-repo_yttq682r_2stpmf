import { useEffect, useRef } from 'react'

export default function ParallaxSection({ id, bgUrl, intensity = 0.4, children }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const onScroll = () => {
      const rect = el.getBoundingClientRect()
      const offset = rect.top * intensity
      el.style.setProperty('--y', `${offset}px`)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [intensity])

  return (
    <section id={id} ref={ref} className="relative py-24 sm:py-32">
      {bgUrl && (
        <div
          className="absolute inset-0 bg-cover bg-center will-change-transform"
          style={{ backgroundImage: `url(${bgUrl})`, transform: 'translateY(var(--y, 0px))' }}
          aria-hidden
        />
      )}
      <div className={`relative ${bgUrl ? 'bg-slate-950/70' : ''} `}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-slate-100">
          {children}
        </div>
      </div>
    </section>
  )
}
