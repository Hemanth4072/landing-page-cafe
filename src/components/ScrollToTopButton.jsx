import { useEffect, useState } from 'react'
import { FiArrowUp } from 'react-icons/fi'

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > 350)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!isVisible) return null

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 z-40 rounded-full bg-coffee-500 p-3 text-white shadow-lg transition hover:bg-coffee-400"
    >
      <FiArrowUp />
    </button>
  )
}

export default ScrollToTopButton
