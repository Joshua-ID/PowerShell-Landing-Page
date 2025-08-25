export default function Pricing() {
  return (
    <section id="pricing" className="section">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-brand font-semibold">Membership</p>
          <h2 className="mt-2 text-3xl font-bold md:text-4xl">Simple, transparent pricing</h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            { title: 'Day Pass', price: '₦4,000', perks: ['Full gym access', '1 group class', 'Locker & showers'] },
            { title: 'Monthly', price: '₦28,000', perks: ['24/7 access', 'Unlimited classes', 'Sauna & recovery'] },
            { title: 'Coaching+', price: '₦65,000', perks: ['Everything in monthly', 'Weekly check-ins', 'Custom program'] },
          ].map(t => (
            <div key={t.title} className="rounded-3xl border border-white/10 bg-white/5 p-6 gradient-ring">
              <h3 className="text-lg font-semibold">{t.title}</h3>
              <p className="mt-2 text-3xl font-extrabold">{t.price}</p>
              <ul className="mt-4 space-y-2 text-white/70">
                {t.perks.map(p => <li key={p}>• {p}</li>)}
              </ul>
              <a href="#join" className="btn btn-primary w-full mt-6">Choose Plan</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
