import { Dumbbell, Menu } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/70">
      <nav className="container flex items-center justify-between py-4">
        <a href="#" className="flex items-center gap-2">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand text-black">
            <Dumbbell />
          </span>
          <span className="text-lg font-bold tracking-tight">PowerFit</span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm">
          <a href="#programs" className="hover:text-brand transition-colors">Programs</a>
          <a href="#about" className="hover:text-brand transition-colors">About</a>
          <a href="#testimonials" className="hover:text-brand transition-colors">Testimonials</a>
          <a href="#pricing" className="hover:text-brand transition-colors">Pricing</a>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="#join" className="btn btn-ghost">Sign In</a>
          <a href="#join" className="btn btn-primary">Join Now</a>
        </div>

        <button onClick={() => setOpen(v => !v)} className="md:hidden p-2 rounded-xl bg-white/5 border border-white/10">
          <Menu />
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-neutral-950/90 backdrop-blur">
          <div className="container py-4 space-y-3">
            <a href="#programs" className="block">Programs</a>
            <a href="#about" className="block">About</a>
            <a href="#testimonials" className="block">Testimonials</a>
            <a href="#pricing" className="block">Pricing</a>
            <a href="#join" className="btn btn-primary w-full mt-2">Join Now</a>
          </div>
        </div>
      )}
    </header>
  )
}
