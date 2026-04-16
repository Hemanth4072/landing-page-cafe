import { motion } from 'framer-motion'
import { testimonials } from '../data/siteData'

function Testimonials() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-coffee-600">
            Testimonials
          </p>
          <h2 className="heading-font text-3xl font-bold sm:text-4xl">Loved by Our Community</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {testimonials.map((testimonial, index) => (
            <motion.blockquote
              key={testimonial.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.1 }}
              className="rounded-2xl border border-coffee-100 bg-white p-6 shadow-sm dark:border-coffee-700 dark:bg-coffee-800"
            >
              <p className="text-sm leading-relaxed text-coffee-700 dark:text-cream-100">
                “{testimonial.review}”
              </p>
              <footer className="mt-4 text-sm font-semibold text-coffee-900 dark:text-cream-50">
                — {testimonial.name}
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
