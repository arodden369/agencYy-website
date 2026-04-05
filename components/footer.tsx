import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-16 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="text-2xl font-bold tracking-tight mb-4 block">
              JobsFuel<span className="text-cyan-400">.</span>
            </Link>
            <p className="text-white/50 leading-relaxed">
              Lead generation specialist for home service contractors. Exclusive, pre-qualified appointments delivered daily.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-white/60">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#results" className="hover:text-white transition-colors">
                  Results
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-white/60">
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-cyan-400" />
                <a href="mailto:support@tryjobsfuel.com" className="hover:text-white transition-colors">
                  support@tryjobsfuel.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span>Remote - Serving contractors nationwide</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} JobsFuel. All rights reserved.
          </p>
          <div className="flex gap-6 text-white/40 text-sm">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
