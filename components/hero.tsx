"use client"

import { useState } from "react"
import { Check, ArrowRight, ChevronLeft } from "lucide-react"

const leadTypes = [
  { id: "roofing", label: "Roofing" },
  { id: "siding", label: "Siding" },
  { id: "windows", label: "Windows" },
  { id: "painting", label: "Painting" },
]

const roleOptions = [
  { id: "owner", label: "Owner / Executive", disqualifies: false },
  { id: "marketing", label: "Marketing or Sales Leader", disqualifies: false },
  { id: "salesperson", label: "Salesperson", disqualifies: true },
  { id: "other", label: "Other", disqualifies: false },
]

const revenueOptions = [
  { id: "0-1m", label: "$0 - $1M/yr", disqualifies: true },
  { id: "1m-5m", label: "$1M - $5M/yr", disqualifies: false },
  { id: "5m-10m", label: "$5M - $10M/yr", disqualifies: false },
  { id: "10m-50m", label: "$10M - $50M/yr", disqualifies: false },
  { id: "50m+", label: "Over $50M/yr", disqualifies: false },
]

type FormStep = "leads" | "role" | "revenue" | "disqualified" | "qualified"

export function Hero() {
  const [step, setStep] = useState<FormStep>("leads")
  const [selectedLeads, setSelectedLeads] = useState<string[]>([])
  const [selectedRole, setSelectedRole] = useState<string>("")
  const [selectedRevenue, setSelectedRevenue] = useState<string>("")
  
  // Contact info with progressive reveal
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [website, setWebsite] = useState("")

  const toggleLead = (id: string) => {
    setSelectedLeads(prev => 
      prev.includes(id) ? prev.filter(l => l !== id) : [...prev, id]
    )
  }

  const handleContinue = () => {
    if (step === "leads") {
      setStep("role")
    } else if (step === "role") {
      const role = roleOptions.find(r => r.id === selectedRole)
      if (role?.disqualifies) {
        setStep("disqualified")
      } else {
        setStep("revenue")
      }
    } else if (step === "revenue") {
      const revenue = revenueOptions.find(r => r.id === selectedRevenue)
      if (revenue?.disqualifies) {
        setStep("disqualified")
      } else {
        setStep("qualified")
      }
    }
  }

  const handleBack = () => {
    if (step === "role") setStep("leads")
    else if (step === "revenue") setStep("role")
    else if (step === "qualified") setStep("revenue")
    else if (step === "disqualified") {
      // Go back to either role or revenue depending on what disqualified them
      const role = roleOptions.find(r => r.id === selectedRole)
      if (role?.disqualifies) {
        setStep("role")
      } else {
        setStep("revenue")
      }
    }
  }

  const handleScheduleMeeting = () => {
    if (email && phone && website) {
      window.open("https://links.tryjobsfuel.com/widget/booking/yVg1a5YBBPAqC7XeMKEX", "_blank")
    }
  }

  const canContinue = () => {
    if (step === "leads") return selectedLeads.length > 0
    if (step === "role") return selectedRole !== ""
    if (step === "revenue") return selectedRevenue !== ""
    return false
  }

  // Check if fields should be visible (progressive reveal)
  const showEmail = firstName.length > 0 || lastName.length > 0
  const showPhone = email.length > 0
  const showWebsite = phone.length > 0
  const canSchedule = email.length > 0 && phone.length > 0 && website.length > 0

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
              
              {/* Step 1: Lead Types */}
              {step === "leads" && (
                <>
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
                    disabled={!canContinue()}
                    className={`w-full font-semibold py-4 rounded-lg flex items-center justify-center gap-2 transition-all ${
                      canContinue()
                        ? "bg-gradient-to-r from-amber-500 to-amber-400 text-slate-900 hover:from-amber-400 hover:to-amber-300 shadow-lg shadow-amber-500/25"
                        : "bg-gradient-to-r from-amber-500/50 to-amber-400/50 text-slate-900/50 cursor-not-allowed"
                    }`}
                  >
                    Continue
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </>
              )}

              {/* Step 2: Role */}
              {step === "role" && (
                <>
                  <h2 className="text-slate-900 text-xl font-semibold mb-6">
                    What is your role in the company?
                  </h2>

                  <div className="space-y-3 mb-6">
                    {roleOptions.map((option) => (
                      <button
                        key={option.id}
                        onClick={() => setSelectedRole(option.id)}
                        className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                          selectedRole === option.id
                            ? "border-amber-500 bg-amber-50"
                            : "border-slate-200 hover:border-slate-300 bg-white"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                            selectedRole === option.id
                              ? "border-amber-500"
                              : "border-slate-300"
                          }`}>
                            {selectedRole === option.id && (
                              <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                            )}
                          </div>
                          <span className="text-slate-700 font-medium">{option.label}</span>
                        </div>
                      </button>
                    ))}
                  </div>

                  <div className="flex items-center gap-4">
                    <button
                      onClick={handleBack}
                      className="text-slate-500 hover:text-slate-700 font-medium flex items-center gap-1 transition-colors"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      Back
                    </button>
                    <button
                      onClick={handleContinue}
                      disabled={!canContinue()}
                      className={`flex-1 font-semibold py-4 rounded-lg flex items-center justify-center gap-2 transition-all ${
                        canContinue()
                          ? "bg-gradient-to-r from-amber-500 to-amber-400 text-slate-900 hover:from-amber-400 hover:to-amber-300 shadow-lg shadow-amber-500/25"
                          : "bg-gradient-to-r from-amber-500/50 to-amber-400/50 text-slate-900/50 cursor-not-allowed"
                      }`}
                    >
                      Continue
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </>
              )}

              {/* Step 3: Revenue */}
              {step === "revenue" && (
                <>
                  <h2 className="text-slate-900 text-xl font-semibold mb-6">
                    {"What is your company's annual revenue?"}
                  </h2>

                  <div className="space-y-3 mb-6">
                    {revenueOptions.map((option) => (
                      <button
                        key={option.id}
                        onClick={() => setSelectedRevenue(option.id)}
                        className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                          selectedRevenue === option.id
                            ? "border-amber-500 bg-amber-50"
                            : "border-slate-200 hover:border-slate-300 bg-white"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                            selectedRevenue === option.id
                              ? "border-amber-500"
                              : "border-slate-300"
                          }`}>
                            {selectedRevenue === option.id && (
                              <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                            )}
                          </div>
                          <span className="text-slate-700 font-medium">{option.label}</span>
                        </div>
                      </button>
                    ))}
                  </div>

                  <div className="flex items-center gap-4">
                    <button
                      onClick={handleBack}
                      className="text-slate-500 hover:text-slate-700 font-medium flex items-center gap-1 transition-colors"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      Back
                    </button>
                    <button
                      onClick={handleContinue}
                      disabled={!canContinue()}
                      className={`flex-1 font-semibold py-4 rounded-lg flex items-center justify-center gap-2 transition-all ${
                        canContinue()
                          ? "bg-gradient-to-r from-amber-500 to-amber-400 text-slate-900 hover:from-amber-400 hover:to-amber-300 shadow-lg shadow-amber-500/25"
                          : "bg-gradient-to-r from-amber-500/50 to-amber-400/50 text-slate-900/50 cursor-not-allowed"
                      }`}
                    >
                      Continue
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </>
              )}

              {/* Disqualified */}
              {step === "disqualified" && (
                <>
                  <h2 className="text-slate-900 text-xl font-semibold mb-2">
                    {"We're not the right fit"}
                  </h2>
                  <p className="text-slate-500 text-sm mb-6">
                    Based on your responses, our program may not be the best fit for your business at this time. We work best with decision-makers at companies doing $1M+ in annual revenue.
                  </p>

                  <button
                    onClick={handleBack}
                    className="text-slate-500 hover:text-slate-700 font-medium flex items-center gap-1 transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Back
                  </button>
                </>
              )}

              {/* Qualified - Contact Info */}
              {step === "qualified" && (
                <>
                  <h2 className="text-slate-900 text-xl font-semibold mb-2">
                    You qualify!
                  </h2>
                  <p className="text-slate-500 text-sm mb-6">Enter your info to schedule a call</p>

                  <div className="space-y-4 mb-6">
                    {/* First & Last Name */}
                    <div className="grid grid-cols-2 gap-3">
                      <input
                        type="text"
                        placeholder="First Name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="w-full p-4 rounded-lg border-2 border-slate-200 focus:border-amber-500 focus:outline-none text-slate-700 placeholder-slate-400 transition-colors"
                      />
                      <input
                        type="text"
                        placeholder="Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="w-full p-4 rounded-lg border-2 border-slate-200 focus:border-amber-500 focus:outline-none text-slate-700 placeholder-slate-400 transition-colors"
                      />
                    </div>

                    {/* Email - shows after name is started */}
                    {showEmail && (
                      <input
                        type="email"
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-4 rounded-lg border-2 border-slate-200 focus:border-amber-500 focus:outline-none text-slate-700 placeholder-slate-400 transition-colors"
                      />
                    )}

                    {/* Phone - shows after email is started */}
                    {showPhone && (
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full p-4 rounded-lg border-2 border-slate-200 focus:border-amber-500 focus:outline-none text-slate-700 placeholder-slate-400 transition-colors"
                      />
                    )}

                    {/* Website - shows after phone is started */}
                    {showWebsite && (
                      <input
                        type="url"
                        placeholder="Company Website"
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                        className="w-full p-4 rounded-lg border-2 border-slate-200 focus:border-amber-500 focus:outline-none text-slate-700 placeholder-slate-400 transition-colors"
                      />
                    )}
                  </div>

                  <div className="flex items-center gap-4">
                    <button
                      onClick={handleBack}
                      className="text-slate-500 hover:text-slate-700 font-medium flex items-center gap-1 transition-colors"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      Back
                    </button>
                    <button
                      onClick={handleScheduleMeeting}
                      disabled={!canSchedule}
                      className={`flex-1 font-semibold py-4 rounded-lg flex items-center justify-center gap-2 transition-all ${
                        canSchedule
                          ? "bg-gradient-to-r from-amber-500 to-amber-400 text-slate-900 hover:from-amber-400 hover:to-amber-300 shadow-lg shadow-amber-500/25"
                          : "bg-gradient-to-r from-amber-500/50 to-amber-400/50 text-slate-900/50 cursor-not-allowed"
                      }`}
                    >
                      Schedule Meeting
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
