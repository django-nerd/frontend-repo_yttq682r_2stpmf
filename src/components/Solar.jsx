import { SunMedium, Battery, ShieldCheck, Zap } from 'lucide-react'
import ParallaxSection from './ParallaxSection'

export default function Solar() {
  return (
    <ParallaxSection id="solar" bgUrl="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1600&auto=format&fit=crop">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 text-emerald-300 mb-3">
            <SunMedium className="w-5 h-5" />
            <span className="uppercase tracking-wider text-xs">Solar Energy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">How solar panels work</h2>
          <p className="text-slate-300 leading-relaxed">
            Solar photovoltaic (PV) cells made from semiconductor materials absorb photons from sunlight,
            causing electrons to become excited and flow, generating direct current (DC). Inverters then
            convert DC to alternating current (AC) usable by homes and grids.
          </p>
          <ul className="mt-6 space-y-3 text-slate-200">
            <li className="flex items-start gap-3"><ShieldCheck className="w-5 h-5 text-emerald-400 mt-0.5"/> Reliable with low maintenance</li>
            <li className="flex items-start gap-3"><Battery className="w-5 h-5 text-emerald-400 mt-0.5"/> Works with battery storage for night use</li>
            <li className="flex items-start gap-3"><Zap className="w-5 h-5 text-emerald-400 mt-0.5"/> Scales from rooftops to utility-scale farms</li>
          </ul>
        </div>
        <div className="bg-white/10 rounded-xl p-6 border border-white/10">
          <h3 className="text-xl font-semibold mb-3">Typical output</h3>
          <p className="text-slate-300">A standard 60–72 cell panel produces roughly 300–450 W under STC.</p>
          <div className="mt-6 grid grid-cols-3 gap-4 text-center">
            <div className="p-4 rounded-lg bg-white/5">
              <p className="text-2xl font-bold">300W</p>
              <p className="text-xs text-slate-300">Entry</p>
            </div>
            <div className="p-4 rounded-lg bg-white/5">
              <p className="text-2xl font-bold">400W</p>
              <p className="text-xs text-slate-300">Common</p>
            </div>
            <div className="p-4 rounded-lg bg-white/5">
              <p className="text-2xl font-bold">450W</p>
              <p className="text-xs text-slate-300">High-efficiency</p>
            </div>
          </div>
        </div>
      </div>
    </ParallaxSection>
  )
}
