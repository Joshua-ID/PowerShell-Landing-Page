export default function CTA() {
  return (
    <section id="join" className="section">
      <div className="container">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12 text-center gradient-ring">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to transform?</h2>
          <p className="mt-3 text-white/70">Claim your free consultation and facility tour today.</p>
          <form className="mt-6 mx-auto grid max-w-xl gap-3 sm:grid-cols-[1fr_auto]">
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="w-full rounded-2xl border border-white/10 bg-neutral-900 px-4 py-3 outline-none placeholder:text-white/40 focus:border-brand"
            />
            <button className="btn btn-primary">Book My Tour</button>
          </form>
        </div>
      </div>
    </section>
  )
}
