import { useState } from 'react'
import { Coffee, CreditCard, Shield } from 'lucide-react'

export default function Support() {
  const [selected, setSelected] = useState(500)
  const [status, setStatus] = useState('')

  const options = [
    { label: '1 Coffee', amount: 500 },
    { label: '2 Coffees', amount: 1000 },
    { label: '5 Coffees', amount: 2500 },
  ]

  const handleCheckout = () => {
    setStatus('Processing... (demo)')
    setTimeout(() => setStatus('Thank you! This is a demo checkout.'), 1200)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-10">
          <Coffee className="w-12 h-12 mx-auto text-amber-400" />
          <h1 className="mt-4 text-3xl sm:text-4xl font-bold">Support My Work — Buy Me a Coffee ☕</h1>
          <p className="mt-3 text-slate-300">If you enjoy this project, you can support me by buying a coffee.</p>
        </div>

        <div className="bg-white/5 rounded-2xl border border-white/10 p-6">
          <div className="grid sm:grid-cols-3 gap-4">
            {options.map((opt) => (
              <button
                key={opt.amount}
                onClick={() => setSelected(opt.amount)}
                className={`rounded-lg p-4 text-left border transition-all ${
                  selected === opt.amount ? 'bg-amber-500/20 border-amber-400' : 'bg-white/5 border-white/10 hover:bg-white/10'
                }`}
              >
                <p className="text-lg font-semibold">{opt.label}</p>
                <p className="text-sm text-slate-300">{opt.amount} KZT</p>
              </button>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-between">
            <div className="text-slate-300">Selected: <span className="font-semibold text-white">{selected} KZT</span></div>
            <button onClick={handleCheckout} className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold transition-colors">
              <CreditCard className="w-5 h-5" />
              Checkout
            </button>
          </div>

          {status && <p className="mt-4 text-amber-300">{status}</p>}

          <div className="mt-6 flex items-center gap-2 text-slate-400 text-sm">
            <Shield className="w-4 h-4" />
            <span>Secure payments coming soon. This is a placeholder UI.</span>
          </div>
        </div>

        <a href="/" className="inline-block mt-10 text-slate-300 hover:text-white">← Back to Home</a>
      </div>
    </div>
  )
}
