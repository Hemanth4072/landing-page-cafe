import { motion } from 'framer-motion'

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[url('https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&w=1800&q=80')] bg-cover bg-center"
    >
      <div className="absolute inset-0 bg-coffee-900/60" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 mx-auto max-w-3xl px-4 text-center text-cream-50"
      >
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-coffee-200">
          Brew Haven Café
        </p>
        <h1 className="heading-font mb-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
          Fresh Coffee, Cozy Vibes
        </h1>
        <p className="mx-auto max-w-xl text-base text-coffee-100 sm:text-lg">
          Your daily dose of happiness served with handcrafted coffee, irresistible bites, and a warm
          neighborhood atmosphere.
        </p>
        <a
          href="#menu"
          className="mt-8 inline-block rounded-full bg-coffee-500 px-8 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-coffee-400"
        >
          View Menu
        </a>
      </motion.div>
    </section>
  )
}

export default Hero
