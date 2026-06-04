import useScrollAnimation from '../hooks/useScrollAnimation'

export default function AnimatedCard({ children, index = 0 }) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 })
  const delay = index * 100

  return (
    <div
      ref={ref}
      className={`animate-card${isVisible ? ' animate-card--visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
