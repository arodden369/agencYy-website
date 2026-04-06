"use client"

import { useState } from "react"
import { Check, ArrowRight } from "lucide-react"

const leadTypes = [
  { id: "roofing", label: "Roofing" },
  { id: "siding", label: "Siding" },
  { id: "windows", label: "Windows" },
  { id: "painting", label: "Painting" },
]

export function Hero() {
  const [selectedLeads, setSelectedLeads] = useState<string[]>([])

  const toggleLead = (id: string) => {
    setSelectedLeads(prev => 
      prev.includes(id) ? prev.filter(l => l !== id) : [...prev, id]
    )
  }

  const handleContinue = () => {
    window.open("https://links.tryjobsfuel.com/widget/booking/yVg1a5YBBPAqC7XeMKEX", "_blank")
  }

  return (
    <section className="relative bg-slate-900 pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <p className="text-amber-500 font-semibold text-sm tracking-wide uppercase mb-4">
              Lead Generation For Home Improvement
            </p>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              The #1{" "}
              <span className="text-amber-500">Pay-Per-Lead</span>
              <br />
              Partner For Home
              <br />
              Service Enterprises
            </h1>

            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-amber-500/20 flex items-center justify-center">
                  <Check className="w-3 h-3 text-amber-500" />
                </div>
                <span className="text-slate-300">Phone, Address, & Home Value Verified</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-amber-500/20 flex items-center justify-center">
                  <Check className="w-3 h-3 text-amber-500" />
                </div>
                <span className="text-slate-300">{"1000's of Leads/mo & No Long Contracts"}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-amber-500/20 flex items-center justify-center">
                  <Check className="w-3 h-3 text-amber-500" />
                </div>
                <span className="text-slate-300">Only Pay Per Lead, No Ad Spend or Retainer</span>
              </div>
            </div>

            {/* Trust badges */}
            <div className="pt-8 border-t border-slate-800">
              <p className="text-slate-500 text-xs uppercase tracking-wider mb-4">
                Trusted by 50+ Leading Home Improvement Brands
              </p>
              <div className="flex items-center gap-6 opacity-60">
                <div className="text-slate-400 text-sm font-semibold">Pro Painting</div>
                <div className="text-slate-400 text-sm font-semibold">Link Roofing</div>
                <div className="text-slate-400 text-sm font-semibold">Summit Exteriors</div>
              </div>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="lg:pl-8">
            <div className="bg-white rounded-xl p-6 lg:p-8 shadow-2xl">
              <div className="w-12 h-1 bg-amber-500 rounded mb-6" />
              
              <h2 className="text-slate-900 text-xl font-semibold mb-2">
                What kind of leads do you need?
              </h2>
              <p className="text-slate-500 text-sm mb-6">Select all that apply</p>

              <div className="grid grid-cols-2 gap-3 mb-6">
                {leadTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => toggleLead(type.id)}
                    className={`p-4 rounded-lg border-2 text-left transition-all ${
                      selectedLeads.includes(type.id)
                        ? "border-amber-500 bg-amber-50"
                        : "border-slate-200 hover:border-slate-300 bg-white"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                        selectedLeads.includes(type.id)
                          ? "border-amber-500 bg-amber-500"
                          : "border-slate-300"
                      }`}>
                        {selectedLeads.includes(type.id) && (
                          <Check className="w-3 h-3 text-white" />
                        )}
                      </div>
                      <span className="text-slate-700 font-medium">{type.label}</span>
                    </div>
                  </button>
                ))}
              </div>

              <button
                onClick={handleContinue}
                className="w-full bg-gradient-to-r from-amber-500 to-amber-400 text-slate-900 font-semibold py-4 rounded-lg flex items-center justify-center gap-2 hover:from-amber-400 hover:to-amber-300 transition-all shadow-lg shadow-amber-500/25"
              >
                Continue
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
