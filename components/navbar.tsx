"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/icon.svg"
              alt="JobsFuel"
              width={28}
              height={28}
              className="w-7 h-7"
            />
            <span className="text-white font-semibold text-lg">JobsFuel</span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("difference")}
              className="text-slate-300 hover:text-white transition-colors text-sm"
            >
              The Difference
            </button>
            <button
              onClick={() => scrollToSection("numbers")}
              className="text-slate-300 hover:text-white transition-colors text-sm"
            >
              The Numbers
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-slate-300 hover:text-white transition-colors text-sm"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-slate-300 hover:text-white transition-colors text-sm"
            >
              FAQ
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white p-2" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-800">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("difference")}
                className="text-slate-300 hover:text-white transition-colors text-left py-2"
              >
                The Difference
              </button>
              <button
                onClick={() => scrollToSection("numbers")}
                className="text-slate-300 hover:text-white transition-colors text-left py-2"
              >
                The Numbers
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-slate-300 hover:text-white transition-colors text-left py-2"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-slate-300 hover:text-white transition-colors text-left py-2"
              >
                FAQ
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
