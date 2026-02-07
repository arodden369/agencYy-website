"use client"

import { motion } from "framer-motion"
import { Star, Phone } from "lucide-react"
import Image from "next/image"

export function Results() {
  const stats = [
    { label: "Contractors Helped", value: "50+" },
    { label: "Leads Delivered", value: "400+" },
    { label: "Jobs Booked", value: "120+" },
  ]

  const videoTestimonials = [
    {
      name: "Brett",
      company: "Link Roofing",
      role: "Owner",
      description: "JobsFuel connected me with homeowners who were ready to move forward, not just shopping around.",
      wistiaId: "55ux6exx3q",
      aspectRatio: "16/9",
    },
    {
      name: "Travis",
      company: "Pro Painting",
      role: "Owner",
      description: "From my first batch of leads, I booked 14 estimates and closed over 5 jobs. JobsFuel became a scalable acquisition channel that let me grow without relying on referrals or marketplaces.",
      wistiaId: "63aa6t1deg",
      aspectRatio: "9/16",
    },
    {
      name: "Robin",
      company: "Summit Roofing & Exteriors",
      role: "Owner",
      description: "JobsFuel consistently generates 4-5 additional jobs per month for my company.",
      wistiaId: "ee6y8jcgvl",
      aspectRatio: "16/9",
    },
  ]

  const references = [
    { name: "Rafael – Bayze Painting", phone: "(480) 797-4599" },
    { name: "Max – Sargent Roofing", phone: "947-944-4362" },
    { name: "Steve – Moondance Painting", phone: "(925) 383-4537" },
  ]

  return (
    <section id="results" className="py-32 relative">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-wider text-cyan-400 mb-4">Testimonials</p>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            <span className="text-cyan-400">Loved by Contractors</span>
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Hear from some of our top partners and the success they've found with JobsFuel
          </p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass p-8 md:p-12 rounded-3xl mb-20"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={stat.label} className="relative">
                {index < stats.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 right-0 w-[1px] h-16 -translate-y-1/2 bg-white/10" />
                )}
                <div className="text-5xl md:text-6xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                <div className="text-lg text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Video Testimonials - Stacked */}
        <div className="space-y-12 mb-20">
          {videoTestimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass rounded-3xl overflow-hidden"
            >
              <div className="flex flex-col lg:flex-row">
                {/* Wistia Video Embed */}
                <div className="w-full lg:w-1/2">
                  <div 
                    className="relative w-full"
                    style={{ aspectRatio: testimonial.aspectRatio }}
                  >
                    <iframe
                      src={`https://fast.wistia.net/embed/iframe/${testimonial.wistiaId}?videoFoam=true`}
                      title={`${testimonial.name} testimonial video`}
                      allow="autoplay; fullscreen"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                      style={{ border: 'none' }}
                    />
                  </div>
                </div>

                {/* Written Context */}
                <div className="w-full lg:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2">{testimonial.name}</h3>
                  <p className="text-cyan-400 text-sm mb-4">
                    {testimonial.role}, {testimonial.company}
                  </p>
                  
                  <p className="text-white/80 text-sm leading-relaxed">{testimonial.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lead Types Collage */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass glass-hover p-8 rounded-3xl mb-20"
        >
          <h3 className="text-2xl font-bold mb-4 text-center">Types of Leads You'll Receive</h3>
          <p className="text-white/60 text-center mb-8 max-w-2xl mx-auto">
            From roofing and painting to HVAC and landscaping — homeowners across all home service categories reach out daily through our system.
          </p>
          <Image
            src="/images/lead-connector-notifications.png"
            alt="LeadConnector notifications showing different types of homeowner leads"
            width={1400}
            height={800}
            className="rounded-lg w-full"
          />
        </motion.div>

        {/* References Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass p-10 rounded-3xl mb-16 text-center"
        >
          <p className="text-sm uppercase tracking-wider text-cyan-400 mb-4">References</p>
          <h3 className="text-3xl font-bold mb-4">Want to Verify Results Directly?</h3>
          <p className="text-white/60 mb-8 max-w-2xl mx-auto">
            Call or text our existing partners and ask about their experience with JobsFuel. We're confident in our results.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {references.map((ref) => (
              <div key={ref.name} className="glass-hover px-6 py-4 rounded-2xl flex items-center gap-3">
                <Phone className="w-5 h-5 text-cyan-400" />
                <div className="text-left">
                  <p className="font-semibold">{ref.name}</p>
                  <p className="text-sm text-white/60">{ref.phone}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <a
            href="https://links.tryjobsfuel.com/widget/booking/yVg1a5YBBPAqC7XeMKEX"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-bold text-xl hover:scale-105 transition-transform relative z-50 pointer-events-auto hover:shadow-[0_0_40px_-10px_rgba(34,211,238,0.5)]"
          >
            Start Your 3-10 Lead Trial
          </a>
        </motion.div>
      </div>
    </section>
  )
}
