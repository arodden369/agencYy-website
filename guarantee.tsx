"use client"

import { motion } from "framer-motion"
import { HelpCircle } from "lucide-react"
import { useState } from "react"

export function Guarantee() {
  const faqs = [
    {
      question: "How soon do leads start?",
      answer:
        "Leads begin flowing immediately once the system is activated. Contractors receive their first homeowner enquiries during the 3-10 lead trial period.",
    },
    {
      question: "How do leads come in?",
      answer:
        "Direct inbound conversations from motivated homeowners, delivered straight to your phone. No apps or dashboards required.",
    },
    {
      question: "Can I pause or adjust volume?",
      answer:
        "Yes. Full flexibility to pause, adjust, or scale lead volume at any time based on your capacity and growth goals.",
    },
    {
      question: "What is the 3-10 lead trial?",
      answer:
        "The 3-10 lead trial allows contractors to experience real homeowner demand before entering a long-term partnership. It is designed to validate lead quality, responsiveness, and fit.",
    },
    {
      question: "What makes leads high-quality?",
      answer:
        "Motivated homeowners in your exclusive territories who have expressed interest in getting an estimate. Because they initiate contact, trust is built instantly, resulting in superior conversions.",
    },
    {
      question: "Are the leads geographically exclusive?",
      answer:
        "Yes. All leads are located in the area you specifically choose during setup. You get exclusive rights to those areas — we won't work with competing contractors in your zones.",
    },
  ]

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0)

  return (
    <section id="guarantee-contact" className="py-32 relative">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-sm uppercase tracking-wider text-cyan-400 mb-4">Pricing</p>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-balance">
            <span className="text-cyan-400">3-10 Lead Trial</span>
            <br />
            Before Partnership
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto mb-4">Custom licensing plans tailored to your territory, volume, and growth goals.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto glass p-12 rounded-3xl mb-20 text-center"
        >
          <h3 className="text-3xl font-bold mb-4">Custom Licensing Plans</h3>
          <p className="text-white/70 mb-8">Tailored to your territory, volume goals, and growth targets.</p>
          <div className="text-5xl font-bold mb-8">
            <span className="text-cyan-400">3-10 Lead Trial</span>
          </div>
          <ul className="text-left space-y-3 mb-8 text-white/80">
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 mt-1">&#10003;</span>
              <span>Exclusive territory access</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 mt-1">&#10003;</span>
              <span>Daily homeowner conversations</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 mt-1">&#10003;</span>
              <span>Full system control & flexibility</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 mt-1">&#10003;</span>
              <span>Validate lead quality before commitment</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 mt-1">&#10003;</span>
              <span>24/7 support & optimization</span>
            </li>
          </ul>
          <p className="text-sm text-white/60 mb-6">
            Details discussed on call — designed for massive ROI with flexible terms.
          </p>
          <a
            href="https://links.tryjobsfuel.com/widget/booking/yVg1a5YBBPAqC7XeMKEX"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-bold text-lg hover:scale-105 transition-transform relative z-50 pointer-events-auto hover:shadow-[0_0_40px_-10px_rgba(34,211,238,0.5)]"
          >
            Book a Call to Start Your Trial
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-4xl mx-auto mb-20"
        >
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-wider text-cyan-400 mb-4">FAQ</p>
            <h3 className="text-4xl font-bold mb-4">
              <span className="text-cyan-400">Frequently Asked Questions</span>
            </h3>
            <p className="text-white/60">
              Can't find your answer here?{" "}
              <a
                href="https://links.tryjobsfuel.com/widget/booking/yVg1a5YBBPAqC7XeMKEX"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:underline"
              >
                Book a call
              </a>
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="glass rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                >
                  <span className="font-semibold text-lg pr-4">{faq.question}</span>
                  <HelpCircle
                    className={`w-6 h-6 text-cyan-400 flex-shrink-0 transition-transform ${
                      openFaqIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaqIndex === index && <div className="px-8 pb-6 text-white/70 leading-relaxed">{faq.answer}</div>}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center relative z-50 glass p-12 rounded-3xl max-w-4xl mx-auto"
        >
          <p className="text-sm uppercase tracking-wider text-cyan-400 mb-4">
            Start with 3-10 Leads — No Long-Term Commitment
          </p>
          <h3 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
            Partner with JobsFuel Today
          </h3>
          <p className="text-lg text-white/60 mb-8 max-w-2xl mx-auto">
            Experience daily homeowner conversations before committing to a long-term partnership. Validate lead quality and fit on your terms.
          </p>
          <a
            href="https://links.tryjobsfuel.com/widget/booking/yVg1a5YBBPAqC7XeMKEX"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-12 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-bold text-xl hover:scale-105 transition-transform shadow-[0_0_40px_-10px_rgba(34,211,238,0.3)] relative z-50 pointer-events-auto hover:shadow-[0_0_50px_-10px_rgba(34,211,238,0.5)]"
          >
            Book a Call
          </a>
          <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-sm text-white/50">
            <span>Empty calendar? Fixed</span>
            <span>Slow Season? Over</span>
            <span>Low Pipeline? Solved</span>
          </div>
        </motion.div>
      </div>

      {/* Background Gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-t from-cyan-900/20 to-transparent pointer-events-none" />
    </section>
  )
}
