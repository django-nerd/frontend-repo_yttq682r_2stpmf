import { Wind as WindIcon, BarChart3, Building2 } from 'lucide-react'
import ParallaxSection from './ParallaxSection'

export default function Wind() {
  return (
    <ParallaxSection id="wind" bgUrl="https://images.unsplash.com/photo-1501630834273-4b5604d2ee31?q=80&w=1600&auto=format&fit=crop">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 text-emerald-300 mb-3">
            <WindIcon className="w-5 h-5" />
            <span className="uppercase tracking-wider text-xs">Wind Energy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">How turbines generate power</h2>
          <p className="text-slate-300 leading-relaxed">
            Wind turns the rotor blades connected to a hub and shaft. This spins a generator which converts
            rotational mechanical energy into electrical energy via electromagnetic induction.
          </p>
          <ul className="mt-6 space-y-3 text-slate-200">
            <li className="flex items-start gap-3"><BarChart3 className="w-5 h-5 text-emerald-400 mt-0.5"/> Small turbines: 400 W – 20 kW for homes and farms</li>
            <li className="flex items-start gap-3"><Building2 className="w-5 h-5 text-emerald-400 mt-0.5"/> Utility-scale: 2 – 6+ MW per turbine</li>
            <li className="flex items-start gap-3"><BarChart3 className="w-5 h-5 text-emerald-400 mt-0.5"/> Offshore projects exceed 12 MW in latest models</li>
          </ul>
        </div>
        <div className="bg-white/10 rounded-xl p-6 border border-white/10">
          <h3 className="text-xl font-semibold mb-3">Real-world examples</h3>
          <p className="text-slate-300">From community micro-turbines to massive offshore arrays, wind scales to demand.</p>
          <div className="mt-6 grid grid-cols-2 gap-4 text-center">
            <div className="p-4 rounded-lg bg-white/5">
              <p className="font-semibold">Home & Farm</p>
              <p className="text-sm text-slate-300">1–10 kW</p>
            </div>
            <div className="p-4 rounded-lg bg-white/5">
              <p className="font-semibold">Offshore</p>
              <p className="text-sm text-slate-300">12+ MW</p>
            </div>
          </div>
        </div>
      </div>
    </ParallaxSection>
  )
}
