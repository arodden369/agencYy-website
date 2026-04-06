"use client"

import { useState } from "react"
import { ChevronDown, ArrowRight } from "lucide-react"

const faqs = [
  {
    question: "Are leads exclusive?",
    answer: "Yes, every lead is 100% exclusive to you. We never sell the same lead to multiple contractors.",
  },
  {
    question: "Who qualifies to work with you?",
    answer: "We work with established home service contractors who have a proven track record, can handle increased lead volume, and are committed to following up with leads promptly.",
  },
  {
    question: "How much do the leads cost?",
    answer: "Lead pricing varies based on your service type, location, and volume. We'll discuss pricing during your consultation call.",
  },
  {
    question: "What happens when we book a meeting?",
    answer: "During our call, we'll discuss your business goals, service area, and lead requirements. If we're a good fit, we'll create a custom plan for your territory.",
  },
  {
    question: "Is there an agreement?",
    answer: "Yes, we have a simple agreement that protects both parties. If we deliver leads, you pay for them. If we don't, you don't pay.",
  },
  {
    question: "How fast do we get leads?",
    answer: "Once your campaign is set up (typically 3-4 days), you'll start receiving leads within 24-48 hours.",
  },
  {
    question: "How many leads can we buy per month?",
    answer: "This heavily depends on the size of your service area. We can generate 100-400+ leads per month, per GMB.",
  },
  {
    question: "How are leads qualified?",
    answer: "Every lead is screened for confirmed homeownership, valid address, valid phone number, minimum home value, and job readiness.",
  },
  {
    question: "Where do you generate our leads from?",
    answer: "We use a combination of paid advertising on Facebook, Instagram, and Google, along with proprietary targeting methods to reach high-intent homeowners in your area.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="bg-slate-900 py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ List */}
        <div className="space-y-3 mb-12">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-slate-700"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-5 flex items-center justify-between text-left"
              >
                <span className="text-white font-medium pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="pb-5 text-slate-400 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="https://links.tryjobsfuel.com/widget/booking/yVg1a5YBBPAqC7XeMKEX"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-400 text-slate-900 font-semibold px-8 py-4 rounded-lg hover:from-amber-400 hover:to-amber-300 transition-all shadow-lg shadow-amber-500/25"
          >
            Get Your Free Consultation
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
