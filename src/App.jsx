import Navbar from './components/Navbar'
import { ToastProvider } from './components/Toast'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import ScrollProgress from './components/ScrollProgress'

import Hero from './sections/Hero'
import TrustStrip from './sections/TrustStrip'
import About from './sections/About'
import Services from './sections/Services'
import Gallery from './sections/Gallery'
import WhyOmSingh from './sections/WhyOmSingh'
import Results from './sections/Results'
import ConsultationCTA from './sections/ConsultationCTA'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

/**
 * Section order.
 *
 * Source order below IS the desktop order - from 1024px up, `lg:block` on
 * <main> switches off flex and the `order-*` classes stop applying.
 *
 * On phones <main> is a flex column, so the `order-N` classes re-sequence the
 * page: the proof (real client results) moves up, so a visitor is looking at it
 * within the first couple of screens. Edit the numbers to change the phone
 * order, or delete them (and `flex flex-col`) to use one order everywhere.
 *
 * Phone order: hero, trust, results, services, gallery, about, why, CTA, contact.
 */
export default function App() {
  return (
    <ToastProvider>
      <ScrollProgress />
      <Navbar />

      <main className="flex flex-col lg:block">
        <div className="order-1 lg:order-none">
          <Hero />
        </div>
        <div className="order-2 lg:order-none">
          <TrustStrip />
        </div>
        <div className="order-6 lg:order-none">
          <About />
        </div>
        <div className="order-4 lg:order-none">
          <Services />
        </div>
        <div className="order-5 lg:order-none">
          <Gallery />
        </div>
        <div className="order-7 lg:order-none">
          <WhyOmSingh />
        </div>
        <div className="order-3 lg:order-none">
          <Results />
        </div>
        <div className="order-8 lg:order-none">
          <ConsultationCTA />
        </div>
        <div className="order-9 lg:order-none">
          <Contact />
        </div>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </ToastProvider>
  )
}
