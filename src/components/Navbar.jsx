import { useEffect, useState } from 'react'
import { FiCoffee, FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'
import { navLinks } from '../data/siteData'

function Navbar({ darkMode, onToggleDarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'glass border-b border-coffee-200/50 shadow-glow' : 'bg-transparent'
      }`}
    >
      <nav className="container-custom flex items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-2 text-xl font-semibold tracking-tight">
          <FiCoffee className="text-coffee-600" />
          <span className="heading-font">Brew Haven</span>
        </a>

        <ul className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="text-sm font-medium text-coffee-800 transition hover:text-coffee-500 dark:text-cream-100"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onToggleDarkMode}
            aria-label="Toggle dark mode"
            className="rounded-full p-2 text-lg text-coffee-700 transition hover:bg-coffee-100 dark:text-cream-100 dark:hover:bg-coffee-700"
          >
            {darkMode ? <FiSun /> : <FiMoon />}
          </button>

          <button
            type="button"
            aria-label="Toggle mobile menu"
            className="rounded-md p-2 text-xl md:hidden"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="glass border-t border-coffee-200/60 md:hidden"
          >
            <ul className="space-y-4 px-4 py-5">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={closeMenu}
                    className="block text-base font-medium text-coffee-800 dark:text-cream-100"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
