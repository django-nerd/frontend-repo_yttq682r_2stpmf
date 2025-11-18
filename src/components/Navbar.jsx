import { Link, NavLink } from 'react-router-dom'
import { Leaf, Coffee, Sparkles } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-slate-900/60 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-green-300 hover:text-green-200 transition-colors">
          <Leaf className="w-6 h-6" />
          <span className="font-semibold tracking-tight">Renewable Innovations</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#solar" className="text-slate-300 hover:text-white transition-colors">Solar</a>
          <a href="#wind" className="text-slate-300 hover:text-white transition-colors">Wind</a>
          <a href="#footstep" className="text-slate-300 hover:text-white transition-colors">Footstep</a>
          <a href="#benefits" className="text-slate-300 hover:text-white transition-colors">Benefits</a>
          <NavLink to="/support" className="inline-flex items-center gap-1 text-slate-100 bg-emerald-600 hover:bg-emerald-500 px-3 py-1.5 rounded-md transition-colors">
            <Coffee className="w-4 h-4" />
            <span>Buy Me a Coffee</span>
          </NavLink>
        </nav>
        <NavLink to="/support" className="md:hidden inline-flex items-center gap-1 text-slate-100 bg-emerald-600 hover:bg-emerald-500 px-3 py-1.5 rounded-md transition-colors">
          <Sparkles className="w-4 h-4" />
          <span>Support</span>
        </NavLink>
      </div>
    </header>
  )
}
