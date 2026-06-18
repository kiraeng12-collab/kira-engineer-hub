import { Section } from "@/components/Section";

export const metadata = { title: "Admin Dashboard" };

export default function AdminPage() {
  return (
    <main>
      <Section eyebrow="Admin" title="Operations dashboard">
        <div className="grid gap-4 md:grid-cols-3">
          {["User management", "Membership management", "Signal management", "Blog management", "Analytics", "Performance sync"].map((item) => (
            <div key={item} className="card p-5 text-xl font-bold text-white">{item}</div>
          ))}
        </div>
      </Section>
    </main>
  );
}
