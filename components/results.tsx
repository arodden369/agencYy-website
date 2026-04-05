"use client"

import { motion } from "framer-motion"
import { Star, Phone } from "lucide-react"

export function Results() {
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

  const writtenTestimonials = [
    {
      name: "Rafael",
      company: "Bayze Painting",
      quote: "This is the only company that's actually delivered on what they say. Great leads, great service.",
    },
    {
      name: "Max",
      company: "Sargent Roofing", 
      quote: "We decided to work with JobsFuel to build leads for our roofing business and the service and outcomes have been fantastic. I definitely recommend this service.",
    },
    {
      name: "Steve",
      company: "Moondance Painting",
      quote: "Working with JobsFuel has been a game changer for our company. The results have been outstanding. The team is knowledgeable and truly invested in our success.",
    },
  ]

  const references = [
    { name: "Rafael – Bayze Painting", phone: "(480) 797-4599" },
    { name: "Max – Sargent Roofing", phone: "947-944-4362" },
    { name: "Steve – Moondance Painting", phone: "(925) 383-4537" },
  ]

  return (
    <section id="results" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Video Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Video <span className="text-cyan-400">Testimonials</span>
          </h2>
        </motion.div>

        <div className="space-y-8 mb-24 max-w-5xl mx-auto">
          {videoTestimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden"
            >
              <div className="flex flex-col lg:flex-row">
                {/* Video */}
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

                {/* Text */}
                <div className="w-full lg:w-1/2 p-8 flex flex-col justify-center">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold mb-1">{testimonial.name}</h3>
                  <p className="text-cyan-400 text-sm mb-4">{testimonial.role}, {testimonial.company}</p>
                  <p className="text-white/70 leading-relaxed">{testimonial.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Written Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold">
            More <span className="text-cyan-400">Reviews</span>
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-24">
          {writtenTestimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-white/70 leading-relaxed mb-4 italic">"{testimonial.quote}"</p>
              <div>
                <p className="font-bold">{testimonial.name}</p>
                <p className="text-cyan-400 text-sm">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* References */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 border border-white/10 rounded-2xl p-10 max-w-4xl mx-auto text-center mb-16"
        >
          <h3 className="text-2xl font-bold mb-2">Want to Verify Results Directly?</h3>
          <p className="text-white/60 mb-8">
            Call or text our existing partners and ask about their experience with JobsFuel.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {references.map((ref) => (
              <div key={ref.name} className="bg-white/5 border border-white/10 px-6 py-4 rounded-xl flex items-center gap-3">
                <Phone className="w-5 h-5 text-cyan-400" />
                <div className="text-left">
                  <p className="font-semibold text-sm">{ref.name}</p>
                  <p className="text-sm text-white/60">{ref.phone}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <a
            href="https://links.tryjobsfuel.com/widget/booking/yVg1a5YBBPAqC7XeMKEX"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_40px_-10px_rgba(34,211,238,0.4)]"
          >
            Request a Consultation Now!
          </a>
        </motion.div>
      </div>
    </section>
  )
}
