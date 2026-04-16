import { motion } from 'framer-motion'

function Loader() {
  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center bg-coffee-900">
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 1.2 }}
        className="heading-font text-3xl font-bold text-cream-100"
      >
        Brew Haven
      </motion.div>
    </div>
  )
}

export default Loader
