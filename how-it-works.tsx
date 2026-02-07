"use client"

import { motion } from "framer-motion"
import { MapPin, Zap, MessageSquare, Gauge } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      number: "Step 1",
      title: "Choose Your Exclusive Area",
      description:
        "Select your service territory. Each contractor gets exclusive access — no competition from other JobsFuel partners in your area.",
      icon: MapPin,
    },
    {
      number: "Step 2",
      title: "System Activation & Lead Delivery",
      description:
        "We activate our proprietary AI system in your territory, generating daily qualified homeowner conversations ready for estimates.",
      icon: Zap,
    },
    {
      number: "Step 3",
      title: "Direct Conversations Begin",
      description:
        "Homeowners interested in estimates connect with you directly on your phone in real-time. No apps, no dashboards — straight to you.",
      icon: MessageSquare,
    },
    {
      number: "Step 4",
      title: "Full Control & Scaling",
      description:
        "Adjust volume, pause, or scale anytime. Start with your 3-10 lead trial to experience the quality before any long-term commitment.",
      icon: Gauge,
    },
  ]

  return (
    <section id="how-it-works" className="py-32 relative">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-sm uppercase tracking-wider text-cyan-400 mb-4">Our Process</p>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-balance">
            Qualified Leads to Closed Jobs
            <br />
            <span className="text-cyan-400">Zero Ad Spend AI System</span>
          </h2>
          <p className="text-xl text-white/60 max-w-4xl mx-auto">
            Consistent daily inbound homeowner demand — motivated homeowners ready for quotes, connecting directly with you for seamless, high-trust conversations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass glass-hover p-8 rounded-3xl relative group"
              >
                <div className="mb-6">
                  <Icon className="w-12 h-12 text-cyan-400" />
                </div>

                <div className="text-sm font-bold text-cyan-400 mb-2">{step.number}</div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-white/70 leading-relaxed">{step.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
