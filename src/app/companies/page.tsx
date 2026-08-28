import { pillars, brands } from "@/data/site";
import Image from "next/image";

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
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {brands.map((b) => {
              const card = (
                <div className="overflow-hidden rounded border border-white/10 bg-white/5 transition hover:border-white/40">
                  <div className="relative aspect-[16/10] bg-white/10">
                    <Image
                      src={b.image ?? "/logo.png"}
                      alt={`${b.name} logo`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex items-center justify-between gap-4 p-4">
                    <span className="font-medium">{b.name}</span>
                    {b.href && <span className="text-sm text-white/60">Visit site</span>}
                  </div>
                </div>
              );

              return b.href ? (
                <a key={b.id} href={b.href} target="_blank" rel="noreferrer">
                  {card}
                </a>
              ) : (
                <div key={b.id}>{card}</div>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}
