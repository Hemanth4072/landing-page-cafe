import { FiInstagram, FiFacebook, FiTwitter } from 'react-icons/fi'

function Footer() {
  return (
    <footer className="border-t border-coffee-200 bg-cream-100 py-8 dark:border-coffee-700 dark:bg-coffee-900">
      <div className="container-custom flex flex-col items-center justify-between gap-4 px-4 text-sm sm:flex-row sm:px-6 lg:px-8">
        <p>© {new Date().getFullYear()} Brew Haven Café. All rights reserved.</p>

        <div className="flex items-center gap-4 text-lg">
          <a href="#" aria-label="Instagram" className="transition hover:text-coffee-500">
            <FiInstagram />
          </a>
          <a href="#" aria-label="Facebook" className="transition hover:text-coffee-500">
            <FiFacebook />
          </a>
          <a href="#" aria-label="Twitter" className="transition hover:text-coffee-500">
            <FiTwitter />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
