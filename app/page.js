import Header from './components/Header'
import Hero from './components/Hero'
import Promo from './components/Promo'
import About from './components/About'
import FoodMenu from './components/FoodMenu'
import CTA from './components/CTA'
import Delivery from './components/Delivery'
import Testimonials from './components/Testimonials'
import Banner from './components/Banner'
import Blog from './components/Blog'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main>
      <article>
        <Header />
        <Hero />
        <Promo />
        <About />
        <FoodMenu />
        <CTA />
        <Delivery />
        <Testimonials />
        <Banner />
        <Blog />
      </article>
      <Footer />
    </main>
  )
}
