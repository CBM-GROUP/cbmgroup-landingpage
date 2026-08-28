import { pillars, brands } from "@/data/site";

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white py-20">
      <div className="mx-auto max-w-5xl px-6">
        <h1 className="text-4xl font-bold">Companies & Pillars</h1>
        <p className="mt-4 text-white/70">Explore the pillars and brands within CBM Group.</p>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Pillars</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {pillars.map((p) => (
              <div key={p.id} className="rounded border border-white/10 p-4">
                <div className="text-sm text-white/40">{p.number}</div>
                <div className="mt-1 text-lg font-medium">{p.title}</div>
                <p className="mt-2 text-white/70">{p.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Brands</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {brands.map((b) => (
              <span key={b.id} className="rounded-full bg-white/5 px-3 py-1 text-sm">
                {b.name}
              </span>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
