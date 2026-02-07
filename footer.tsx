import Link from "next/link"

export function Footer() {
  return (
    <footer className="relative pt-32 pb-12 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div>
            <Link href="/" className="text-2xl font-bold tracking-tighter mb-6 block">
              JobsFuel<span className="text-blue-400">.</span>
            </Link>
            <p className="text-white/50 leading-relaxed">Qualified job leads on demand. Pay only for results.</p>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-white/60">
              <li>
                <Link href="#how-it-works" className="hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="#difference" className="hover:text-white transition-colors">
                  With Us vs. Without Us
                </Link>
              </li>
              <li>
                <Link href="#results" className="hover:text-white transition-colors">
                  Results
                </Link>
              </li>
              <li>
                <Link href="#guarantee-contact" className="hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div></div>

          <div>
            <h4 className="font-semibold mb-6">Get Started</h4>
            <p className="text-white/60 mb-4">Ready to book more jobs?</p>
            <a
              href="https://links.tryjobsfuel.com/widget/booking/yVg1a5YBBPAqC7XeMKEX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-white/10 hover:bg-white/20 rounded-full font-semibold transition-colors relative z-50 pointer-events-auto"
            >
              Book a Call
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
