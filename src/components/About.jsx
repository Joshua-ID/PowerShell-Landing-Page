export default function About() {
  return (
    <section id="about" className="section">
      <div className="container grid gap-8 md:grid-cols-2 items-center">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-2 gradient-ring order-2 md:order-1">
          <img
            className="rounded-2xl object-cover w-full h-[300px] md:h-[420px]"
            src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1600&auto=format&fit=crop"
            alt="About PowerFit"
            loading="lazy"
          />
        </div>
        <div className="order-1 md:order-2">
          <p className="text-brand font-semibold">About Us</p>
          <h2 className="mt-2 text-3xl font-bold md:text-4xl">A gym that feels like home</h2>
          <p className="mt-4 text-white/70">
            We built PowerFit to be the perfect blend of expert coaching, cutting-edge equipment,
            and an inclusive community. Whether you're lifting for the first time or chasing a new PR,
            our programs guide you every step of the way.
          </p>
          <ul className="mt-6 grid gap-3 text-white/80">
            <li>• Certified personal trainers on-site</li>
            <li>• 24/7 access with fingerprint entry</li>
            <li>• Recovery lounge: sauna, ice bath, physio</li>
            <li>• Free classes included in membership</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
