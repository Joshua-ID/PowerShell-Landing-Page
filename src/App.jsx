import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Programs from './components/Programs'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <Programs />
        <About />
        <Testimonials />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
