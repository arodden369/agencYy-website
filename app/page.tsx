import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Numbers } from "@/components/numbers"
import { Testimonials } from "@/components/testimonials"
import { FAQ } from "@/components/faq"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <Numbers />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  )
}
