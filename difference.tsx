"use client"

import { motion } from "framer-motion"

export function Difference() {
  const comparisons = [
    {
      title: "Exclusive Territories",
      withUs:
        "Each contractor gets exclusive access to their chosen area — no competition from other JobsFuel partners. Your territory, your leads.",
      withoutUs:
        "Shared leads with competitors. Multiple contractors bidding on the same homeowners, driving down your closing rates and profit margins.",
    },
    {
      title: "3-10 Lead Trial Validation",
      withUs:
        "Start with a 3-10 lead trial to validate quality and fit before any long-term partnership. Experience real homeowner demand firsthand.",
      withoutUs:
        "$500-$3000 setup fees. Companies lock you in with upfront costs and monthly contracts because they can't deliver consistent results.",
    },
    {
      title: "Direct Inbound Quality",
      withUs:
        "Homeowners interested in estimates connect directly with you — feels natural, builds trust instantly, superior conversions. They initiated contact from the start.",
      withoutUs:
        "Cold leads or shared contacts. Homeowners don't know who you are, resulting in low trust, poor response rates, and wasted time.",
    },
    {
      title: "Hands-Off Operation",
      withUs:
        "We manage the entire AI outreach process daily; you focus on responding and closing. Consistent pipeline without the marketing headaches.",
      withoutUs:
        "DIY lead generation. Spend hours managing ads, follow-ups, and cold outreach instead of focusing on what you do best — closing jobs.",
    },
    {
      title: "Consistent Daily Pipeline",
      withUs:
        "Predictable conversations every day — end slow seasons and empty calendars. Know exactly what's coming in your pipeline.",
      withoutUs:
        "Feast or famine cycles. Some months are great, others are dead. Inconsistent revenue and constant stress about where the next job comes from.",
    },
    {
      title: "24/7 Support",
      withUs:
        "Our team is in your corner whenever you need us to ensure you have a massive ROI working with JobsFuel.",
      withoutUs:
        "Slow & Hard To Work With. Delays and slow communication leaves you in the dust not knowing if it's a right fit.",
    },
  ]

  return (
    <section
      id="difference"
      className="py-32 relative bg-gradient-to-b from-transparent via-cyan-950/10 to-transparent"
    >
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-sm uppercase tracking-wider text-cyan-400 mb-4">Benefits</p>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-balance">
            Benefits of <span className="text-cyan-400">JobsFuel</span>
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            See how partnering with JobsFuel transforms your lead generation
          </p>
        </motion.div>

        <div className="space-y-6 max-w-5xl mx-auto">
          {comparisons.map((comparison, index) => (
            <motion.div
              key={comparison.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass p-8 rounded-3xl"
            >
              <h3 className="text-2xl font-bold mb-6 text-center">{comparison.title}</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="glass-hover p-6 rounded-2xl border-2 border-cyan-500/30">
                  <h4 className="text-lg font-bold mb-3 text-cyan-400">With JobsFuel</h4>
                  <p className="text-white/70 leading-relaxed text-sm">{comparison.withUs}</p>
                </div>
                <div className="glass-hover p-6 rounded-2xl border-2 border-red-500/20">
                  <h4 className="text-lg font-bold mb-3 text-red-400">Without</h4>
                  <p className="text-white/70 leading-relaxed text-sm">{comparison.withoutUs}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
