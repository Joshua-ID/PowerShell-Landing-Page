import {
  Dumbbell,
  HeartPulse,
  Activity,
  StretchHorizontal,
} from "lucide-react";

const items = [
  {
    title: "Strength Training",
    icon: Dumbbell,
    desc: "Progressive overload, compound lifts, and accessory work tailored to your goals.",
  },
  {
    title: "HIIT & Conditioning",
    icon: Activity,
    desc: "High-intensity circuits designed to burn fat and build athletic capacity.",
  },
  {
    title: "Mobility & Yoga",
    icon: StretchHorizontal,
    desc: "Improve flexibility, posture, and recovery with guided mobility flows.",
  },
  {
    title: "Personal Coaching",
    icon: HeartPulse,
    desc: "1-on-1 training, custom plans, and nutrition guidance from certified coaches.",
  },
];

export default function Programs() {
  return (
    <section id="programs" className="section">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-brand font-semibold">Programs</p>
          <h2 className="mt-2 text-3xl font-bold md:text-4xl">
            Built for real results
          </h2>
          <p className="mt-3 text-white/70">
            Pick a path or combine tracks — our coaches adapt the plan to you.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {items.map(({ title, icon: Icon, desc }) => (
            <div
              key={title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 gradient-ring"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand text-black">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-semibold">{title}</h3>
              </div>
              <p className="mt-3 text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
