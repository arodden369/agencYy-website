"use client"

import { motion } from "framer-motion"

export function ClientResults() {
  const results = [
    {
      company: "Pro Painting & More",
      stat: "$42,000+ in new revenue closed in just weeks of running our system!",
    },
    {
      company: "Link Roofing",
      stat: "Consistent high-ticket roofing jobs every month with exclusive territory access!",
    },
    {
      company: "Summit Roofing & Exteriors",
      stat: "4-5 additional jobs per month on average, delivering strong ROI without overhead!",
    },
    {
      company: "Bayze Painting",
      stat: "Scaled from struggling with leads to having a predictable pipeline of quality jobs!",
    },
    {
      company: "Sargent Roofing",
      stat: "Exclusive territory rights led to dominating their local market!",
    },
    {
      company: "Moondance Painting",
      stat: "Transformed their business with daily inbound homeowner conversations!",
    },
  ]

  return (
    <section className="py-24 relative bg-gradient-to-b from-transparent via-cyan-950/10 to-transparent">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our Clients <span className="text-cyan-400">Say About Us</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {results.map((result, index) => (
            <motion.div
              key={result.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-cyan-500/30 transition-colors"
            >
              <h3 className="text-xl font-bold text-cyan-400 mb-4">{result.company}</h3>
              <p className="text-white/80 leading-relaxed">{result.stat}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
