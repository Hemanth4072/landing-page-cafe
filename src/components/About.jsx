import { motion } from 'framer-motion'
import { FiAward, FiCoffee, FiHome } from 'react-icons/fi'

const highlights = [
  {
    icon: FiCoffee,
    title: 'Organic Beans',
    description: 'Ethically sourced beans roasted for rich, balanced flavor in every cup.',
  },
  {
    icon: FiAward,
    title: 'Skilled Baristas',
    description: 'Our trained baristas blend precision, art, and hospitality.',
  },
  {
    icon: FiHome,
    title: 'Cozy Atmosphere',
    description: 'Soft lighting, warm interiors, and music curated for comfort.',
  },
]

function About() {
  return (
    <section id="about" className="section-padding bg-texture">
      <div className="container-custom grid items-center gap-12 lg:grid-cols-2">
        <motion.img
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80"
          alt="Warm interior of Brew Haven café"
          className="h-[460px] w-full rounded-3xl object-cover shadow-glow"
        />

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-coffee-600">
            About Us
          </p>
          <h2 className="heading-font mb-4 text-3xl font-bold sm:text-4xl">A Story Brewed with Heart</h2>
          <p className="mb-8 text-coffee-700 dark:text-cream-200">
            Brew Haven began as a neighborhood passion project and has grown into a beloved gathering
            place. We serve specialty coffee and handcrafted meals designed for comfort, connection,
            and memorable moments.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-coffee-200/60 bg-white/80 p-4 shadow-sm dark:border-coffee-700 dark:bg-coffee-800"
              >
                <item.icon className="mb-2 text-xl text-coffee-500" />
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm text-coffee-700 dark:text-cream-200">{item.description}</p>
              </article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
