"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

export function Guarantee() {
  const faqs = [
    {
      question: "Are Facebook leads low quality?",
      answer:
        "That's true if you're just running basic ads without a system in place. But we don't just get people to fill out a form and call them a 'lead.' Our strategy qualifies every lead using automated follow-ups, lead scoring, and pre-screening so that you only speak to homeowners who are actually interested and financially ready to invest.",
    },
    {
      question: "What if I don't make my money back?",
      answer:
        "We have NEVER had this happen to an established home service business. The only risk to you is if we deliver a bunch of appointments and you don't close any of them. That being said, across all of our clients their close rate on shown appointments is 30.8%.",
    },
    {
      question: '"We don\'t need more leads. We need better leads."',
      answer:
        "That's exactly what we provide. Instead of flooding you with random names and numbers, we focus on quality. We use advanced targeting to reach homeowners who are actively searching for your services and have the budget to afford it. Plus, every lead is exclusive to you.",
    },
    {
      question: "Is there a contract?",
      answer:
        "Yes! Our contract locks in our agreement together to protect both of us. If we deliver on the appointments, it makes sure we get paid. If we don't, it ensures you get your refund.",
    },
    {
      question: "How long does it take to start seeing results?",
      answer:
        "Once we turn the system on, you will start seeing leads come in within 24 hours. The setup process usually takes 3-4 days to launch.",
    },
    {
      question: "How do I get started with JobsFuel?",
      answer:
        'Getting started is easy! Simply click the "Request a Consultation Now!" button on our website to book your free consultation. We\'ll discuss your goals, territory, and create a custom plan for your business.',
    },
  ]

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0)

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <a
            href="https://links.tryjobsfuel.com/widget/booking/yVg1a5YBBPAqC7XeMKEX"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-bold text-xl hover:scale-105 transition-transform shadow-[0_0_40px_-10px_rgba(34,211,238,0.4)]"
          >
            Request a Consultation Now!
          </a>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Frequently Asked <span className="text-cyan-400">Questions</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="bg-white/5 border border-white/10 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
              >
                <span className="font-semibold pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-cyan-400 flex-shrink-0 transition-transform duration-200 ${
                    openFaqIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openFaqIndex === index && (
                <div className="px-6 pb-5 text-white/70 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
