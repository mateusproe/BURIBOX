import { useInView } from 'react-intersection-observer'

export default function FadeIn({ children, delay = 0, direction = 'up', className = '', style = {} }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 })
  const dirs = {
    up: 'translateY(28px)',
    left: 'translateX(-28px)',
    right: 'translateX(28px)',
    none: 'none',
  }
  return (
    <div ref={ref} className={className} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? 'none' : dirs[direction],
      transition: `opacity 0.6s ease ${delay}s, transform 0.65s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
      ...style,
    }}>
      {children}
    </div>
  )
}
