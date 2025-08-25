const quotes = [
  {
    name: 'Adaeze O.',
    role: 'Member • 8 months',
    quote: 'I dropped 9kg and finally nailed my first pull-up. The coaches actually care.'
  },
  {
    name: 'Daniel K.',
    role: 'Member • 1 year',
    quote: 'The community is unmatched. I show up more because I genuinely enjoy it.'
  },
  {
    name: 'Sophia L.',
    role: 'Member • 3 months',
    quote: 'From the sauna to the programs, everything is premium. Worth every naira.'
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="section">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-brand font-semibold">What members say</p>
          <h2 className="mt-2 text-3xl font-bold md:text-4xl">Results that speak</h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {quotes.map((q) => (
            <figure key={q.name} className="rounded-3xl border border-white/10 bg-white/5 p-6 gradient-ring">
              <blockquote className="text-white/80">&ldquo;{q.quote}&rdquo;</blockquote>
              <figcaption className="mt-4 text-sm text-white/60">
                <span className="font-medium text-white/80">{q.name}</span> — {q.role}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
