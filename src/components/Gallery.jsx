import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiX } from 'react-icons/fi'
import { galleryImages } from '../data/siteData'

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <section className="section-padding bg-cream-100 dark:bg-coffee-800">
      <div className="container-custom">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-coffee-600">Gallery</p>
          <h2 className="heading-font text-3xl font-bold sm:text-4xl">Moments at Brew Haven</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <button
              key={image}
              type="button"
              onClick={() => setSelectedImage(image)}
              className="group overflow-hidden rounded-2xl"
              aria-label={`Open gallery image ${index + 1}`}
            >
              <img
                src={image}
                alt={`Brew Haven gallery ${index + 1}`}
                className="h-64 w-full object-cover transition duration-300 group-hover:scale-110"
              />
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-black/75 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute right-6 top-6 rounded-full bg-white p-2 text-black"
              aria-label="Close lightbox"
            >
              <FiX />
            </button>
            <motion.img
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              src={selectedImage}
              alt="Expanded café preview"
              className="max-h-[85vh] w-full max-w-4xl rounded-xl object-cover"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Gallery
