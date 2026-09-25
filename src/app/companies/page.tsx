import { brands } from "@/data/site";
import Image from "next/image";

export default function Page() {
  return (
    <main className="min-h-screen bg-[#f5f5f1] text-slate-900">
      <div className="mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 sm:pb-24 lg:px-8">
        <section className="mb-12">
          <div className="relative overflow-hidden rounded-[2rem] sm:rounded-[30px] border border-white/20 bg-[#36BEA3] shadow-[0_24px_80px_rgba(15,23,42,0.14)]">
            <img
              src="/assets/nature.jpg"
              alt="Our Companies background"
              className="absolute inset-0 h-full w-full object-cover opacity-45"
            />
            <div className="absolute inset-0 bg-[#36BEA3]/80" />
            <div
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 60% 30%, rgba(255,255,255,0.18) 0 18%, transparent 19%), repeating-radial-gradient(circle at 50% 50%, rgba(255,255,255,0.12) 0 18px, transparent 18px 60px)",
              }}
            />
            <div className="relative flex min-h-[280px] sm:min-h-[360px] lg:min-h-[420px] items-center justify-center p-6 sm:p-10 lg:p-12">
              <h1 className="text-center text-[clamp(2.2rem,6vw,5.5rem)] font-bold leading-[0.85] tracking-[-0.06em] text-white drop-shadow-sm uppercase">
                OUR COMPANIES
              </h1>
            </div>
          </div>
        </section>
        <section className="flex flex-col items-center text-center rounded-[2rem] border border-slate-200 bg-white px-5 py-8 shadow-[0_20px_60px_rgba(15,23,42,0.04)] sm:px-10 lg:px-14 lg:py-12">
          <h2 className="mt-2 sm:mt-4 max-w-3xl text-2xl font-semibold tracking-[-0.05em] text-slate-900 sm:text-4xl lg:text-5xl">
            Brands built to inspire, entertain, and connect.
          </h2>
        </section>

        <section className="mt-12 sm:mt-16 lg:mt-20">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {brands.map((brand) => (
              <a
                key={brand.id}
                href={brand.href}
                target="_blank"
                rel="noreferrer"
                className="group mx-auto block w-full max-w-[380px] bg-[#f4e7e6] p-0 transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg rounded-xl overflow-hidden"
              >
                <div className="flex h-[340px] sm:h-[360px] flex-col border border-[#f1d5d1] bg-[#f9f8f7]">
                  <div className="flex flex-1 items-center justify-center p-4">
                    <div className="relative h-[220px] sm:h-[240px] w-full max-w-[340px]">
                      <Image
                        src={brand.image ?? "/logo.png"}
                        alt={`${brand.name} logo`}
                        fill
                        className="object-contain transition-transform duration-300 group-hover:scale-[1.03]"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-3 px-6 pb-5 pt-2 text-slate-800 border-t border-[#f1d5d1]/50 bg-white/60">
                    <span className="text-[1.3rem] font-medium tracking-[-0.05em] sm:text-[1.5rem]">
                      {brand.name}
                    </span>
                    <span className="text-[1.6rem] leading-none text-[#d7262d] transition-transform duration-200 group-hover:translate-x-1">›</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
