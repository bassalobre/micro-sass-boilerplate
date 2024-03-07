import HeroSection from '@/app/(overview)/components/hero-section'
import AboutSection from '@/app/(overview)/components/about-section'
import TestimonialsSection from '@/app/(overview)/components/testimonials-section'
import PricingSection from '@/app/(overview)/components/pricing-section'
import FaqSection from '@/app/(overview)/components/faq-section'
import ProductDescription from '@/app/(overview)/components/product-description'
import Header from '@/app/(overview)/components/header'
import Footer from '@/app/(overview)/components/footer'

export default function Home() {
  return (
    <main className="flex-1 flex flex-col min-h-[100dvh]">
      <Header />
      <HeroSection />
      <ProductDescription />
      <AboutSection />
      <TestimonialsSection />
      <PricingSection />
      <FaqSection />
      <Footer />
    </main>
  )
}
