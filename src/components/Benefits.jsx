export default function Benefits() {
  return (
    <section id="benefits" className="relative py-24 sm:py-32 bg-gradient-to-b from-slate-950 to-slate-900 text-slate-100">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Combining Systems</h2>
            <p className="text-slate-300 leading-relaxed">
              Hybrid deployments blend solar, wind, and footstep harvesting. Solar covers daylight loads, wind
              complements during windy or nighttime conditions, while footstep tiles supply micro-power for
              sensors, beacons, and wayfinding in busy areas.
            </p>
            <ul className="mt-6 space-y-3 text-slate-200 list-disc pl-5">
              <li>Resilient microgrids for campuses and transit hubs</li>
              <li>Energy-aware smart lighting and signage</li>
              <li>Environmental monitoring without trenching power lines</li>
              <li>Lower lifetime emissions and maintenance costs</li>
            </ul>
          </div>
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <h3 className="text-xl font-semibold mb-3">Real-world use cases</h3>
            <div className="space-y-4 text-slate-200">
              <p><span className="font-semibold">Transit stations:</span> platform tiles power displays and sensors.</p>
              <p><span className="font-semibold">Campuses:</span> walkways harvest steps; rooftops host PV; micro-turbines on towers.</p>
              <p><span className="font-semibold">Events & retail:</span> data-rich engagement powered by the crowd.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
