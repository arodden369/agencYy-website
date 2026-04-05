import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { ClientResults } from "@/components/client-results"
import { QuickMathSection } from "@/components/quick-math"
import { Results } from "@/components/results"
import { Guarantee } from "@/components/guarantee"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-cyan-500/30">
      <Navbar />
      <Hero />
      <Services />
      <ClientResults />
      <QuickMathSection />
      <Results />
      <Guarantee />
      <Footer />
    </main>
  )
}
