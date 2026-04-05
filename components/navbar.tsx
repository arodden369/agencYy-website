"use client"

import { useState } from "react"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50)
  })

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Services", href: "#services" },
    { name: "Results", href: "#results" },
    { name: "Contact Us", href: "#contact" },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-black/90 backdrop-blur-lg border-b border-white/5" : "bg-transparent",
      )}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tight">
          JobsFuel<span className="text-cyan-400">.</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <a
            href="https://links.tryjobsfuel.com/widget/booking/yVg1a5YBBPAqC7XeMKEX"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Book a Consultation Now!
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-40 flex items-center justify-center md:hidden"
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-medium text-white hover:text-cyan-400 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="https://links.tryjobsfuel.com/widget/booking/yVg1a5YBBPAqC7XeMKEX"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold"
              >
                Book a Consultation Now!
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
