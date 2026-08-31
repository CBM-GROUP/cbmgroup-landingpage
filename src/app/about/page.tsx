import Header from "@/components/landing/Header";
import { teamMembers, pillars, coreValues, aboutUsInfo } from "@/data/site";

export default function Page() {
  return (

    <main className="min-h-screen bg-black text-white py-20">
      <div className="mx-auto max-w-4xl px-6">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="mt-4 text-white/70">
          Learn more about CBM Group, our mission and what drives us.
        </p>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Who We Are</h2>
          <p className="mt-4 text-white/70">{aboutUsInfo.whoWeAre}</p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Our Pillars</h2>
          <p className="mt-4 text-white/70">Explore the pillars and brands within CBM Group.</p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((p) => (
              <div key={p.id} className="rounded border border-white/10 p-4">
                <div className="text-sm text-white/40">{p.number}</div>
                <div className="mt-1 text-lg font-medium">{p.title}</div>
                <p className="mt-2 text-white/70">{p.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Vision & Mission</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div className="rounded border border-white/10 p-6">
              <h3 className="text-xl font-semibold">Vision</h3>
              <p className="mt-3 text-white/70">{aboutUsInfo.vision}</p>
            </div>
            <div className="rounded border border-white/10 p-6">
              <h3 className="text-xl font-semibold">Mission</h3>
              <p className="mt-3 text-white/70">{aboutUsInfo.mission}</p>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Core Values</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {coreValues.map((v) => (
              <div key={v.id} className="rounded border border-white/10 p-4">
                <div className="text-sm text-white/40">{v.number}</div>
                <div className="mt-1 text-lg font-medium">{v.title}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Team</h2>
          <p className="mt-4 text-white/70">Meet the people behind CBM Group.</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {teamMembers.map((m) => (
              <div key={m.id} className="rounded border border-white/10 p-4">
                <div className="text-lg font-medium">{m.name}</div>
                <div className="mt-1 text-sm text-white/60">{m.role}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
