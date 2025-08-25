import { ArrowRight, Flame } from 'lucide-react'

export default function Hero() {
  return (
    <section className="section relative overflow-hidden">
      {/* background grid & gradient */}
      <div className="absolute inset-0 -z-10 bg-grid [background-size:22px_22px]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.15),transparent_60%)]" />

      <div className="container text-center">
        <div className="mx-auto max-w-3xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
            <Flame className="h-4 w-4 text-brand" />
            New: Summer Shred Program now live
          </p>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight md:text-6xl">
            Train <span className="text-brand">Smarter</span>, Get <span className="text-brand">Stronger</span>
          </h1>
          <p className="mt-4 text-white/70">
            Premium coaching, tailored programs, and community support — all under one roof.
            Start your transformation with PowerFit today.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <a href="#join" className="btn btn-primary gap-2">
              Get Started <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#programs" className="btn btn-ghost">Explore Programs</a>
          </div>
          <div className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-2 gradient-ring">
            <img
              className="rounded-2xl object-cover w-full h-[280px] md:h-[420px]"
              src="https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=80&w=1600&auto=format&fit=crop"
              alt="Gym workout"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
