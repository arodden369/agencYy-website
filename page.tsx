import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Results } from "@/components/results"
import { QuickMathSection } from "@/components/quick-math"
import { HowItWorks } from "@/components/how-it-works"
import { Difference } from "@/components/difference"
import { Guarantee } from "@/components/guarantee"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-cyan-500/30">
      <Navbar />
      <Hero />
      <QuickMathSection />
      <Results />
      <HowItWorks />
      <Difference />
      <Guarantee />
      <Footer />
    </main>
  )
}
