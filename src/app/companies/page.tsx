import { brands } from "@/data/site";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function Page() {
  return (
    <main className="min-h-screen bg-[#f5f5f1] text-slate-900">
      <div className="mx-auto max-w-7xl px-4 pb-20 pt-4 sm:px-6 sm:pb-24 lg:px-8">
<<<<<<< HEAD
        <section className="-mt-[72px] sm:-mt-[210px] lg:-mt-[225px] mb-12">
=======
        <section className="mt-3 mb-10 sm:mt-4 sm:mb-12 lg:mt-5 lg:mb-14">
>>>>>>> 68eb61dd707444ee5512b6deead766d886adf48f
          <div className="relative overflow-hidden rounded-[2.2rem] sm:rounded-[2.5rem] border border-white/20 bg-[#36BEA3] shadow-[0_24px_80px_rgba(15,23,42,0.14)]">
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
            <div className="relative flex min-h-[180px] sm:min-h-[220px] lg:min-h-[260px] items-center justify-center p-6 sm:p-10 lg:p-12">
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
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
            {brands.map((brand) => (
              <a
                key={brand.id}
                href={brand.href}
                target="_blank"
                rel="noreferrer"
                className="group flex min-h-[190px] flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-4 shadow-[0_12px_36px_rgba(15,23,42,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(15,23,42,0.1)] sm:min-h-[220px] sm:rounded-[1.5rem] sm:p-5"
              >
                <div className="relative flex h-32 items-center justify-center sm:h-40">
                  <Image
                    src={brand.image ?? "/logo.png"}
                    alt={`${brand.name} logo`}
                    fill
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 30vw, 360px"
                    className="object-contain p-1 transition-transform duration-300 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="mt-4 flex items-center justify-between gap-2 border-t border-slate-100 pt-3">
                  <span className="text-sm font-semibold tracking-tight text-slate-900 sm:text-base">
                    {brand.name}
                  </span>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-[#167765] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
              </a>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
