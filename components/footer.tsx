"use client"

import Link from "next/link"
import Image from "next/image"

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/icon.svg"
              alt="JobsFuel"
              width={24}
              height={24}
              className="w-6 h-6"
            />
            <span className="text-white font-semibold">JobsFuel</span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-6">
            <button
              onClick={() => scrollToSection("difference")}
              className="text-slate-400 hover:text-white transition-colors text-sm"
            >
              The Difference
            </button>
            <button
              onClick={() => scrollToSection("numbers")}
              className="text-slate-400 hover:text-white transition-colors text-sm"
            >
              The Numbers
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-slate-400 hover:text-white transition-colors text-sm"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-slate-400 hover:text-white transition-colors text-sm"
            >
              FAQ
            </button>
          </div>

          {/* Copyright */}
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} JobsFuel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
