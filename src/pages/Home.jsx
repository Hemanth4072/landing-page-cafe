import Hero from '../components/Hero'
import About from '../components/About'
import Menu from '../components/Menu'
import Testimonials from '../components/Testimonials'
import Gallery from '../components/Gallery'
import Reservation from '../components/Reservation'
import Contact from '../components/Contact'

function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Menu />
      <Testimonials />
      <Gallery />
      <Reservation />
      <Contact />
    </main>
  )
}

export default Home
