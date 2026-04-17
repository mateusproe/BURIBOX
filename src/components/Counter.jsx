import { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

export default function Counter({ target, suffix = '' }) {
  const [n, setN] = useState(0)
  const { ref, inView } = useInView({ triggerOnce: true })
  useEffect(() => {
    if (!inView) return
    const t0 = performance.now(), dur = 1800
    const tick = (t) => {
      const p = Math.min((t - t0) / dur, 1)
      setN(Math.round((1 - Math.pow(1 - p, 3)) * target))
      if (p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [inView, target])
  return <span ref={ref}>{n}{suffix}</span>
}
