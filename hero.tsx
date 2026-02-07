"use client"

import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Soft Animated Gradient Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-gradient-to-br from-cyan-500/15 via-blue-500/10 to-purple-500/10 rounded-full blur-[150px] animate-blob mix-blend-screen" />
        <div className="absolute top-[10%] right-[-15%] w-[50vw] h-[50vw] bg-gradient-to-bl from-indigo-400/15 via-cyan-400/10 to-blue-400/10 rounded-full blur-[150px] animate-blob animation-delay-2000 mix-blend-screen" />
        <div className="absolute bottom-[-20%] left-[10%] w-[55vw] h-[55vw] bg-gradient-to-tr from-blue-400/15 via-teal-400/10 to-cyan-400/10 rounded-full blur-[150px] animate-blob animation-delay-4000 mix-blend-screen" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.05, ease: "easeOut" }}
          className="inline-flex items-center gap-3 px-6 py-3 glass rounded-full mb-8 text-sm font-medium border border-white/10"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-white/90">3-10 Lead Trial Available</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-sm md:text-base font-semibold tracking-wider uppercase mb-6 text-cyan-400"
        >
          FOR HOME SERVICE CONTRACTORS
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-white leading-[1.1] lg:text-7xl"
        >
          <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto] font-bold opacity-100">
            Daily High-Intent Homeowners
          </span>
          <br />
          <span className="text-white/95">Ready for Your Service</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-white/70 text-lg md:text-xl leading-relaxed mb-4 max-w-3xl mx-auto"
        >
          Start with a 3-10 lead trial before any partnership or long-term commitment.
          <br className="hidden md:block" />
          Experience real inbound homeowner demand delivered directly to you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="max-w-5xl mx-auto mb-8"
        >
          <div className="relative p-[2px] rounded-3xl bg-gradient-to-r from-cyan-400/50 via-blue-500/50 to-indigo-400/50">
            <div className="glass rounded-[22px] p-3 overflow-hidden">
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: 0,
                  paddingTop: "56.25%",
                  paddingBottom: 0,
                  overflow: "hidden",
                  borderRadius: "16px",
                  willChange: "transform",
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
                    padding: 0,
                    margin: 0,
                  }}
                  src="https://www.canva.com/design/DAG76ETqz4k/_EA6hUfi4fbTe6x9M1QGCg/view?embed"
                  allowFullScreen
                  allow="fullscreen"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Trial CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="glass p-8 md:p-10 rounded-3xl max-w-3xl mx-auto mb-8 border border-white/10"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Experience Your First <span className="text-cyan-400">3-10 Leads</span> Before Partnering
          </h3>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-white/70 mb-6">
            <span className="flex items-center gap-2">
              <span className="text-cyan-400">&#10003;</span> Real inbound homeowner demand
            </span>
            <span className="flex items-center gap-2">
              <span className="text-cyan-400">&#10003;</span> No long-term commitments
            </span>
            <span className="flex items-center gap-2">
              <span className="text-cyan-400">&#10003;</span> Prove lead quality first
            </span>
          </div>
          <a
            href="https://links.tryjobsfuel.com/widget/booking/yVg1a5YBBPAqC7XeMKEX"
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-50 group px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-bold text-lg overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(34,211,238,0.5)] inline-block pointer-events-auto"
          >
            <span className="relative z-10">Start Your 3-10 Lead Trial</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
