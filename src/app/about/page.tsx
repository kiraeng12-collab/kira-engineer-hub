import { Section } from "@/components/Section";

export const metadata = { title: "About KIRA ENGINEER HUB" };

export default function AboutPage() {
  const timeline = ["Started on Investing.com", "Built community", "Expanded to VIP services", "Building complete trading ecosystem"];
  return (
    <main>
      <Section eyebrow="KIRA ENGINEER HUB" title="About KIRA ENGINEER HUB">
        <div className="grid gap-6 lg:grid-cols-[.9fr_1.1fr]">
          <div className="card p-6">
            <h3 className="text-2xl font-bold text-white">Story</h3>
            <p className="mt-4 leading-7 text-slate-300">
              Kira Engineer is building KIRA ENGINEER HUB as the parent ecosystem for trading education, market analysis, community development, and technology tools.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {["Mission: build useful trading, education, and technology solutions.", "Vision: develop KIRA ENGINEER HUB into a trusted ecosystem.", "Values: discipline, clarity, transparency, responsibility."].map((text) => (
              <div key={text} className="card p-5 text-slate-300">{text}</div>
            ))}
          </div>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {timeline.map((item, index) => (
            <div key={item} className="card p-5">
              <p className="text-sm text-gold">0{index + 1}</p>
              <h3 className="mt-3 font-bold text-white">{item}</h3>
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}
