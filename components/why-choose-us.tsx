"use client"

import { DollarSign, Target, Users, BarChart3, FileX, Shield, ArrowRight } from "lucide-react"

const features = [
  {
    icon: DollarSign,
    title: "Only Pay Per Qualified Lead",
    description: "Only pay for exclusive, pre-qualified leads that meet your criteria. No setup fee, no retainer.",
  },
  {
    icon: Target,
    title: "Industry Leading Set Rates",
    description: "With full exclusivity and unique lead prequalification, most partners see set rates between 25-35%.",
  },
  {
    icon: Users,
    title: "Pre-Qualified Prospects",
    description: "Every lead is screened for confirmed homeownership, valid address, valid phone number, minimum home value, and minimum job size.",
  },
  {
    icon: BarChart3,
    title: "Scalability",
    description: "Our system is built for large contractors purchasing 50-100+ leads per day.",
  },
  {
    icon: FileX,
    title: "No Long Contracts",
    description: "We earn your business month after month with high-quality leads that grow your company.",
  },
  {
    icon: Shield,
    title: "TCPA Compliant",
    description: "Receive TrustedForm certificates with every lead, keeping you safe and compliant.",
  },
]

export function WhyChooseUs() {
  return (
    <section id="difference" className="bg-slate-50 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Why Contractors Choose Us
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            {"We've helped hundreds of contractors grow their businesses with high-quality, exclusive leads. Here's what makes us different."}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white rounded-xl p-6 border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-amber-100 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a
            href="https://links.tryjobsfuel.com/widget/booking/yVg1a5YBBPAqC7XeMKEX"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-400 text-slate-900 font-semibold px-8 py-4 rounded-lg hover:from-amber-400 hover:to-amber-300 transition-all shadow-lg shadow-amber-500/25"
          >
            See If You Qualify
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
