import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { menuItems } from '../data/siteData'

const filters = ['All', 'Coffee', 'Snacks', 'Desserts']

function Menu() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredMenuItems = useMemo(
    () =>
      activeFilter === 'All'
        ? menuItems
        : menuItems.filter((item) => item.category === activeFilter),
    [activeFilter],
  )

  return (
    <section id="menu" className="section-padding bg-cream-100 dark:bg-coffee-800">
      <div className="container-custom">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-coffee-600">Menu</p>
          <h2 className="heading-font text-3xl font-bold sm:text-4xl">A Cup for Every Mood</h2>
        </div>

        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                activeFilter === filter
                  ? 'bg-coffee-500 text-white shadow-glow'
                  : 'bg-white text-coffee-700 hover:bg-coffee-100 dark:bg-coffee-700 dark:text-cream-100'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredMenuItems.map((item) => (
            <motion.article
              key={item.id}
              layout
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -4 }}
              className="overflow-hidden rounded-2xl bg-white shadow-md transition dark:bg-coffee-700"
            >
              <img src={item.image} alt={item.name} className="h-48 w-full object-cover" />
              <div className="p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-coffee-500">{item.category}</p>
                <h3 className="mt-1 font-semibold">{item.name}</h3>
                <p className="mt-2 text-sm font-bold text-coffee-700 dark:text-cream-100">{item.price}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Menu
