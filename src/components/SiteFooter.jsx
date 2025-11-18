export default function SiteFooter() {
  return (
    <footer className="bg-slate-950 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold">Get in touch</h3>
            <p className="mt-2 text-slate-400">Have a project or question? Send a message below.</p>
            <form className="mt-6 grid gap-4">
              <input type="text" placeholder="Your name" className="w-full px-4 py-3 rounded-md bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
              <input type="email" placeholder="Email address" className="w-full px-4 py-3 rounded-md bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
              <textarea placeholder="Message" rows="4" className="w-full px-4 py-3 rounded-md bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
              <button type="button" className="justify-self-start px-5 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-medium transition-colors">Send</button>
            </form>
          </div>
          <div className="md:pl-12">
            <h3 className="text-xl font-semibold">Follow</h3>
            <ul className="mt-4 space-y-2 text-slate-300">
              <li><a className="hover:text-white" href="#">Twitter</a></li>
              <li><a className="hover:text-white" href="#">LinkedIn</a></li>
              <li><a className="hover:text-white" href="#">GitHub</a></li>
            </ul>
          </div>
        </div>
        <p className="mt-10 text-center text-slate-500 text-sm">© {new Date().getFullYear()} Renewable Innovations</p>
      </div>
    </footer>
  )
}
