import { useState } from 'react'
import { motion } from 'framer-motion'

const defaultForm = {
  name: '',
  email: '',
  message: '',
}

function Contact() {
  const [formData, setFormData] = useState(defaultForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const validateForm = () => {
    const nextErrors = {}

    if (!formData.name.trim()) nextErrors.name = 'Name is required.'
    if (!formData.email.trim()) {
      nextErrors.email = 'Email is required.'
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      nextErrors.email = 'Please enter a valid email.'
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      nextErrors.message = 'Message should be at least 10 characters.'
    }

    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!validateForm()) return

    setStatus('Message sent! We will get back to you shortly.')
    setFormData(defaultForm)
    setErrors({})
  }

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom grid gap-10 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-coffee-600">Contact</p>
          <h2 className="heading-font mb-4 text-3xl font-bold sm:text-4xl">Reserve or Say Hello</h2>
          <p className="mb-6 text-coffee-700 dark:text-cream-200">
            We'd love to host your next coffee date. Drop us a message for reservations, collaborations,
            or feedback.
          </p>

          <form noValidate onSubmit={handleSubmit} className="space-y-4 rounded-2xl bg-white p-6 shadow-md dark:bg-coffee-800">
            <div>
              <label htmlFor="name" className="mb-1 block text-sm font-medium">
                Name
              </label>
              <input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-xl border border-coffee-200 px-4 py-2 outline-none ring-coffee-300 focus:ring-2 dark:bg-coffee-700"
              />
              {errors.name ? <p className="mt-1 text-xs text-red-600">{errors.name}</p> : null}
            </div>

            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-xl border border-coffee-200 px-4 py-2 outline-none ring-coffee-300 focus:ring-2 dark:bg-coffee-700"
              />
              {errors.email ? <p className="mt-1 text-xs text-red-600">{errors.email}</p> : null}
            </div>

            <div>
              <label htmlFor="message" className="mb-1 block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full rounded-xl border border-coffee-200 px-4 py-2 outline-none ring-coffee-300 focus:ring-2 dark:bg-coffee-700"
              />
              {errors.message ? <p className="mt-1 text-xs text-red-600">{errors.message}</p> : null}
            </div>

            <button
              type="submit"
              className="rounded-full bg-coffee-500 px-6 py-2 text-sm font-semibold text-white transition hover:bg-coffee-400"
            >
              Send Message
            </button>

            {status ? <p className="text-sm font-medium text-green-600">{status}</p> : null}
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-6"
        >
          <article className="rounded-2xl bg-white p-6 shadow-md dark:bg-coffee-800">
            <h3 className="mb-3 text-lg font-semibold">Visit Us</h3>
            <p>221 Market Street, San Francisco, CA</p>
            <p className="mt-2 text-sm text-coffee-600 dark:text-coffee-200">
              Open daily · 7:00 AM – 10:00 PM
            </p>
          </article>

          <article className="overflow-hidden rounded-2xl shadow-md">
            <iframe
              title="Brew Haven location"
              src="https://www.google.com/maps?q=San+Francisco,+CA&output=embed"
              loading="lazy"
              className="h-[340px] w-full border-0"
            />
          </article>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
