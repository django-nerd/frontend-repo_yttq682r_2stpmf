import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/60 to-slate-950/90 pointer-events-none" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-emerald-300/90 tracking-wider uppercase text-xs sm:text-sm mb-3">Solar • Wind • Footstep Power</p>
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
          Innovating the Future of Renewable Energy
        </h1>
        <p className="mt-6 text-slate-200 max-w-2xl mx-auto">
          Exploring cutting-edge systems that blend macro and micro generation to power cleaner cities.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <a href="#solar" className="px-5 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-medium transition-colors">Explore Solar</a>
          <a href="#footstep" className="px-5 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium transition-colors">See Footstep Tech</a>
        </div>
      </div>
    </section>
  )
}
