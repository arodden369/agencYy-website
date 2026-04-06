"use client"

import { Star, ArrowRight } from "lucide-react"

const videoTestimonials = [
  {
    name: "Brett",
    company: "Link Roofing",
    result: "Closed over $150,000+ in sales with a 32% close rate",
    wistiaId: "55ux6exx3q",
  },
  {
    name: "Travis", 
    company: "Pro Painting",
    result: "Closed over $80,000 in less than month with a cost of marketing under 10%",
    wistiaId: "63aa6t1deg",
  },
  {
    name: "Robin",
    company: "Summit Roofing & Exteriors",
    result: "Closed over $200,000+ with a marketing cost below 12%",
    wistiaId: "ee6y8jcgvl",
  },
]

const writtenTestimonials = [
  {
    name: "Rafael Martinez",
    company: "Bayze Painting",
    location: "Phoenix, AZ",
    quote: "Working with JobsFuel, we get more than 20 leads or less than leads per week and we always close more than 50% of them. These guys know what they're doing. Would recommend.",
    rating: 5,
  },
  {
    name: "Max Sterling",
    company: "Sargent Roofing",
    location: "Detroit, MI",
    quote: "Painting and Siding hit our sales goals. Would recommend for anyone looking to scale.",
    rating: 5,
  },
  {
    name: "Steve Thompson",
    company: "Moondance Painting",
    location: "Jacksonville, FL",
    quote: "Recommends JF Acquisition to any home service company looking to generate higher quality leads.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-slate-50 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Contractors Love Working With Us
          </h2>
          <p className="text-slate-600 text-lg">
            {"Don't just take our word for it. Here's what our partners have to say."}
          </p>
        </div>

        {/* Video Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {videoTestimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-shadow"
            >
              {/* Video */}
              <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
                <iframe
                  src={`https://fast.wistia.net/embed/iframe/${testimonial.wistiaId}?videoFoam=true`}
                  title={`${testimonial.name} testimonial video`}
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                  style={{ border: "none" }}
                />
              </div>
              
              {/* Info */}
              <div className="p-5">
                <h3 className="font-semibold text-slate-900 mb-1">{testimonial.company}</h3>
                <p className="text-slate-600 text-sm">{testimonial.result}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Written Testimonials */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {writtenTestimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-white rounded-xl p-6 border border-slate-200"
            >
              {/* Avatar and Info */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 font-semibold">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p className="font-semibold text-slate-900 text-sm">{testimonial.name}</p>
                  <p className="text-slate-500 text-xs">{testimonial.company} • {testimonial.location}</p>
                </div>
              </div>
              
              {/* Stars */}
              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              
              {/* Quote */}
              <p className="text-slate-600 text-sm leading-relaxed">{testimonial.quote}</p>
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
            See If You Qualify
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
