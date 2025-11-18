import ParallaxSection from './ParallaxSection'

export default function Footstep() {
  return (
    <ParallaxSection id="footstep" bgUrl="https://images.unsplash.com/photo-1460364157752-926555421a7e?q=80&w=1600&auto=format&fit=crop">
      <div className="mx-auto max-w-5xl text-center">
        <p className="text-emerald-300/90 tracking-wider uppercase text-xs mb-2">Featured Technology</p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Footstep Energy — Piezoelectric Harvesting</h2>
        <p className="text-slate-300 max-w-3xl mx-auto">
          Piezoelectric tiles convert mechanical pressure from footsteps into electrical charge. Each step deforms the crystal structure,
          generating a voltage that is rectified and stored in supercapacitors or batteries.
        </p>
        <div className="mt-8 grid sm:grid-cols-3 gap-6 text-left">
          <div className="bg-white/10 rounded-xl p-6 border border-white/10">
            <p className="text-sm text-emerald-300 uppercase tracking-wide mb-2">How it Works</p>
            <ul className="text-slate-200 space-y-2 list-disc pl-5">
              <li>Pressure → crystal strain → electrical charge</li>
              <li>AC output rectified to DC</li>
              <li>Energy buffered in storage</li>
            </ul>
          </div>
          <div className="bg-white/10 rounded-xl p-6 border border-white/10">
            <p className="text-sm text-emerald-300 uppercase tracking-wide mb-2">Typical Energy</p>
            <p className="text-slate-200">Around 2–20 watts per step depending on tile design, gait, and load.</p>
          </div>
          <div className="bg-white/10 rounded-xl p-6 border border-white/10">
            <p className="text-sm text-emerald-300 uppercase tracking-wide mb-2">Origins</p>
            <p className="text-slate-200">Commercialized early by Pavegen in the UK; deployed in transport hubs and events.</p>
          </div>
        </div>
        <div className="mt-8">
          <p className="text-slate-200">Ideal for high-footfall cities: London, Tokyo, New York, Singapore, Dubai.</p>
          <p className="mt-3 text-emerald-300">Best for innovative micro-energy systems where ambient motion becomes utility lighting, sensors, and signage power.</p>
        </div>
      </div>
    </ParallaxSection>
  )
}
