import {brands } from "@/data/site";
import Image from "next/image";

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white py-20">
      <div className="mx-auto max-w-5xl px-6">
        <h1 className="text-lg font-bold">Companies</h1>

        

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Our Companies</h2>
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
