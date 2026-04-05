"use client"

import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-950/20 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Main headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-5xl mx-auto mb-12"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
            Lead Generation Specialist For{" "}
            <span className="text-cyan-400">Home Service Contractors</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            We book exclusive, pre-qualified appointments for our clients without them having to spend money on ineffective ads or chase low-quality leads.
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <a
            href="https://links.tryjobsfuel.com/widget/booking/yVg1a5YBBPAqC7XeMKEX"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_40px_-10px_rgba(34,211,238,0.4)] hover:shadow-[0_0_50px_-10px_rgba(34,211,238,0.6)]"
          >
            Book Consultation Now
          </a>
        </motion.div>

        {/* Video embed */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <div
              style={{
                position: "relative",
                width: "100%",
                height: 0,
                paddingTop: "56.25%",
                overflow: "hidden",
              }}
            >
              <iframe
                loading="lazy"
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  top: 0,
                  left: 0,
                  border: "none",
                }}
                src="https://www.canva.com/design/DAG76ETqz4k/_EA6hUfi4fbTe6x9M1QGCg/view?embed"
                allowFullScreen
                allow="fullscreen"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
