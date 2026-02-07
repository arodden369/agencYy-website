"use client"

import { useState, useRef, useCallback, useEffect } from "react"
import { motion } from "framer-motion"

const SliderControl = ({
  label,
  value,
  onChange,
  min,
  max,
  step,
  displayValue,
}: {
  label: string
  value: number
  onChange: (v: number) => void
  min: number
  max: number
  step: number
  displayValue: string
}) => {
  const trackRef = useRef<HTMLDivElement>(null)
  const [dragging, setDragging] = useState(false)

  const fraction = (value - min) / (max - min)

  const updateValue = useCallback(
    (clientX: number) => {
      const rect = trackRef.current?.getBoundingClientRect()
      if (!rect) return
      let ratio = (clientX - rect.left) / rect.width
      ratio = Math.max(0, Math.min(1, ratio))
      const raw = min + ratio * (max - min)
      const stepped = Math.round(raw / step) * step
      onChange(Math.max(min, Math.min(max, stepped)))
    },
    [min, max, step, onChange],
  )

  useEffect(() => {
    if (!dragging) return
    const onMove = (e: MouseEvent | TouchEvent) => {
      const x = "touches" in e ? e.touches[0].clientX : e.clientX
      updateValue(x)
    }
    const onUp = () => setDragging(false)
    window.addEventListener("mousemove", onMove)
    window.addEventListener("mouseup", onUp)
    window.addEventListener("touchmove", onMove)
    window.addEventListener("touchend", onUp)
    return () => {
      window.removeEventListener("mousemove", onMove)
      window.removeEventListener("mouseup", onUp)
      window.removeEventListener("touchmove", onMove)
      window.removeEventListener("touchend", onUp)
    }
  }, [dragging, updateValue])

  return (
    <div>
      <p className="text-sm font-normal text-white/55 mb-3">{label}</p>

      {/* Track */}
      <div
        ref={trackRef}
        onMouseDown={(e) => {
          setDragging(true)
          updateValue(e.clientX)
        }}
        onTouchStart={(e) => {
          setDragging(true)
          updateValue(e.touches[0].clientX)
        }}
        className="relative h-1.5 rounded-full cursor-pointer touch-none"
        style={{ background: "rgba(255,255,255,0.08)" }}
      >
        {/* Filled portion */}
        <div
          className="absolute left-0 top-0 h-full rounded-full"
          style={{
            width: `${fraction * 100}%`,
            background: "linear-gradient(90deg, #06b6d4, #3b82f6)",
            boxShadow: "0 0 12px rgba(6,182,212,0.3)",
            transition: dragging ? "none" : "width 0.1s ease",
          }}
        />

        {/* Thumb */}
        <div
          className="absolute top-1/2"
          style={{
            left: `${fraction * 100}%`,
            transform: "translate(-50%, -50%)",
            width: 22,
            height: 22,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #22d3ee, #06b6d4)",
            boxShadow: "0 0 16px rgba(6,182,212,0.4), 0 2px 8px rgba(0,0,0,0.5)",
            border: "2px solid rgba(255,255,255,0.15)",
            transition: dragging ? "none" : "left 0.1s ease",
          }}
        />
      </div>

      {/* Display value */}
      <p
        className="text-center text-3xl font-bold mt-3"
        style={{
          color: "#22d3ee",
          textShadow: "0 0 20px rgba(34,211,238,0.25)",
          letterSpacing: "-0.01em",
        }}
      >
        {displayValue}
      </p>
    </div>
  )
}

const ResultCard = ({ value, label }: { value: string | number; label: string }) => (
  <div className="rounded-2xl border border-cyan-400/12 p-6 text-center" style={{
    background: "linear-gradient(160deg, rgba(6,182,212,0.04) 0%, rgba(14,12,18,0.6) 100%)",
  }}>
    <p
      className="text-4xl font-extrabold mb-1"
      style={{
        color: "#22d3ee",
        textShadow: "0 0 24px rgba(34,211,238,0.2)",
        letterSpacing: "-0.02em",
      }}
    >
      {value}
    </p>
    <p className="text-[0.65rem] font-semibold text-white/35 tracking-widest">{label}</p>
  </div>
)

export function QuickMathSection() {
  const [leads, setLeads] = useState(25)
  const [jobTicket, setJobTicket] = useState(8000)
  const closeRate = 0.3

  const closedJobs = Math.round(leads * closeRate)
  const monthlyRevenue = closedJobs * jobTicket

  const formatCurrency = (val: number) => "$" + val.toLocaleString("en-US")

  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-wider text-cyan-400 mb-4">Think About This</p>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            What Would <span className="text-cyan-400">More Leads</span> Do For You?
          </h2>
        </motion.div>

        {/* Calculator Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-[620px] mx-auto"
        >
          <div
            className="rounded-[20px] border border-white/[0.07] relative overflow-hidden"
            style={{
              background: "linear-gradient(170deg, rgba(30,25,38,0.95) 0%, rgba(14,12,18,0.98) 100%)",
              boxShadow: "0 0 80px rgba(6,182,212,0.04), 0 40px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.04)",
              padding: "3rem 2.5rem",
            }}
          >
            {/* Subtle glow */}
            <div
              className="absolute pointer-events-none"
              style={{
                top: -60,
                left: -60,
                width: 200,
                height: 200,
                background: "radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 70%)",
              }}
            />

            {/* Header */}
            <div className="text-center mb-10">
              <h3 className="text-4xl font-extrabold text-white/95 mb-1 tracking-tight">
                Quick Math
              </h3>
              <p className="text-sm text-white/35 font-light">
                Know your numbers before we talk
              </p>
            </div>

            {/* Sliders */}
            <SliderControl
              label="Leads per month"
              value={leads}
              onChange={setLeads}
              min={1}
              max={100}
              step={1}
              displayValue={`${leads} leads`}
            />

            <div className="h-8" />

            <SliderControl
              label="Your average job ticket"
              value={jobTicket}
              onChange={setJobTicket}
              min={500}
              max={50000}
              step={500}
              displayValue={formatCurrency(jobTicket)}
            />

            {/* Results */}
            <div className="grid grid-cols-2 gap-4 mt-10">
              <ResultCard
                value={String(closedJobs)}
                label={`CLOSED JOBS (${Math.round(closeRate * 100)}% CLOSE RATE)`}
              />
              <ResultCard value={formatCurrency(monthlyRevenue)} label="MONTHLY REVENUE" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
