"use client"

import { motion } from "framer-motion"
import { Video, Filter, Target } from "lucide-react"

export function Services() {
  const services = [
    {
      icon: Video,
      title: "Professional Ad Creation",
      description:
        "Unlike most marketing agencies that use cheap tactics to bait low quality homeowners, we put out professional video ads designed to attract homeowners focused on quality.",
    },
    {
      icon: Filter,
      title: "Unique Lead Prequalification",
      description:
        "Not only are our ads designed to repel low quality customers, our funnel automatically disqualifies people that don't own their home, aren't in your service area, or aren't looking for your services.",
    },
    {
      icon: Target,
      title: "High Income Targeting",
      description:
        "We use AI to target all of the high income homeowners in your area on Facebook, and manually exclude all of the zip codes correlated with high crime or low income.",
    },
  ]

  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What We <span className="text-cyan-400">Do</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/[0.07] transition-colors"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-white/60 leading-relaxed mb-6">{service.description}</p>
                <a
                  href="https://links.tryjobsfuel.com/widget/booking/yVg1a5YBBPAqC7XeMKEX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-cyan-400 font-semibold hover:text-cyan-300 transition-colors"
                >
                  Book Consultation Now &rarr;
                </a>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
