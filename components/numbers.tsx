"use client"

import { ArrowRight } from "lucide-react"
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps"

const stats = [
  { value: "50+", label: "Active Partners" },
  { value: "$15M+", label: "Revenue Generated" },
  { value: "30%+", label: "Avg. Set Rate" },
  { value: "4.8/5", label: "Contractor Rating" },
]

// Sample marker locations across the US
const markers = [
  { coordinates: [-122.4194, 37.7749] as [number, number], name: "San Francisco" },
  { coordinates: [-118.2437, 34.0522] as [number, number], name: "Los Angeles" },
  { coordinates: [-117.1611, 32.7157] as [number, number], name: "San Diego" },
  { coordinates: [-122.3321, 47.6062] as [number, number], name: "Seattle" },
  { coordinates: [-121.8863, 37.3382] as [number, number], name: "San Jose" },
  { coordinates: [-111.891, 40.7608] as [number, number], name: "Salt Lake City" },
  { coordinates: [-104.9903, 39.7392] as [number, number], name: "Denver" },
  { coordinates: [-112.074, 33.4484] as [number, number], name: "Phoenix" },
  { coordinates: [-115.1398, 36.1699] as [number, number], name: "Las Vegas" },
  { coordinates: [-97.7431, 30.2672] as [number, number], name: "Austin" },
  { coordinates: [-96.797, 32.7767] as [number, number], name: "Dallas" },
  { coordinates: [-95.3698, 29.7604] as [number, number], name: "Houston" },
  { coordinates: [-98.4936, 29.4241] as [number, number], name: "San Antonio" },
  { coordinates: [-87.6298, 41.8781] as [number, number], name: "Chicago" },
  { coordinates: [-93.265, 44.9778] as [number, number], name: "Minneapolis" },
  { coordinates: [-94.5786, 39.0997] as [number, number], name: "Kansas City" },
  { coordinates: [-90.0490, 35.1495] as [number, number], name: "Memphis" },
  { coordinates: [-86.7816, 36.1627] as [number, number], name: "Nashville" },
  { coordinates: [-84.388, 33.749] as [number, number], name: "Atlanta" },
  { coordinates: [-80.1918, 25.7617] as [number, number], name: "Miami" },
  { coordinates: [-81.3792, 28.5383] as [number, number], name: "Orlando" },
  { coordinates: [-82.4572, 27.9506] as [number, number], name: "Tampa" },
  { coordinates: [-78.6382, 35.7796] as [number, number], name: "Raleigh" },
  { coordinates: [-80.8431, 35.2271] as [number, number], name: "Charlotte" },
  { coordinates: [-77.0369, 38.9072] as [number, number], name: "Washington DC" },
  { coordinates: [-76.6122, 39.2904] as [number, number], name: "Baltimore" },
  { coordinates: [-75.1652, 39.9526] as [number, number], name: "Philadelphia" },
  { coordinates: [-74.006, 40.7128] as [number, number], name: "New York" },
  { coordinates: [-71.0589, 42.3601] as [number, number], name: "Boston" },
  { coordinates: [-73.7562, 42.6526] as [number, number], name: "Albany" },
  { coordinates: [-83.0458, 42.3314] as [number, number], name: "Detroit" },
  { coordinates: [-81.6944, 41.4993] as [number, number], name: "Cleveland" },
  { coordinates: [-83.0007, 39.9612] as [number, number], name: "Columbus" },
  { coordinates: [-85.7585, 38.2527] as [number, number], name: "Louisville" },
  { coordinates: [-86.158, 39.7684] as [number, number], name: "Indianapolis" },
]

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json"

export function Numbers() {
  return (
    <section id="numbers" className="bg-slate-100 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900">
            Numbers That Speak For Themselves
          </h2>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-amber-500 mb-2">{stat.value}</div>
              <div className="text-slate-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* US Map */}
        <div className="max-w-4xl mx-auto mb-12">
          <ComposableMap
            projection="geoAlbersUsa"
            projectionConfig={{ scale: 1000 }}
            className="w-full h-auto"
          >
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="#1e293b"
                    stroke="#334155"
                    strokeWidth={0.5}
                    style={{
                      default: { outline: "none" },
                      hover: { outline: "none" },
                      pressed: { outline: "none" },
                    }}
                  />
                ))
              }
            </Geographies>
            {markers.map((marker) => (
              <Marker key={marker.name} coordinates={marker.coordinates}>
                <circle r={6} fill="#f59e0b" stroke="#fff" strokeWidth={1} />
              </Marker>
            ))}
          </ComposableMap>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a
            href="https://links.tryjobsfuel.com/widget/booking/yVg1a5YBBPAqC7XeMKEX"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-400 text-slate-900 font-semibold px-8 py-4 rounded-lg hover:from-amber-400 hover:to-amber-300 transition-all shadow-lg shadow-amber-500/25"
          >
            Join 50+ Contractors
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
