import { brands } from "@/data/site";
import Image from "next/image";

export default function Page() {
  return (
    <main className="min-h-screen bg-[#fff4f3] py-16 text-center text-[#2f2f2f] sm:py-20">
      <div className="mx-auto max-w-5xl px-6">
        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">Our Companies</h1>
        <p className="mt-4 text-md text-[#686363]">Explore brands within CBM Group Ecosystem that define our identity.</p>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Brands</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {brands.map((b) => {
              const card = (
                <div className="group flex min-h-[376px] flex-col bg-white px-8 py-10 text-left transition-transform duration-300 hover:-translate-y-1 sm:px-10">
                  <div className="relative flex flex-1 items-center justify-center">
                    <Image
                      src={b.image ?? "/logo.png"}
                      alt={`${b.name} logo`}
                      width={240}
                      height={180}
                      className="h-auto max-h-[180px] w-auto max-w-full object-contain"
                    />
                  </div>
                  <div className="flex items-center justify-between gap-4 pt-10">
                    <span className="text-[24px] font-normal leading-tight tracking-[-0.02em] sm:text-[25px]">{b.name}</span>
                    <span
                      aria-hidden="true"
                      className="h-3 w-3 shrink-0 rotate-45 border-r border-t border-[#ed1c24] transition-transform duration-300 group-hover:translate-x-1"
                    />
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
