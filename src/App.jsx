import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Solar from './components/Solar'
import Wind from './components/Wind'
import Footstep from './components/Footstep'
import Benefits from './components/Benefits'
import Footer from './components/SiteFooter'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <Solar />
        <Wind />
        <Footstep />
        <Benefits />
        <Footer />
      </main>
    </div>
  )
}

export default App
