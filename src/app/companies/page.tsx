import { brands } from "@/data/site";
import Image from "next/image";

export default function Page() {
  return (
    <main className="min-h-screen bg-[#f5f5f1] text-slate-900">
      <div className="mx-auto max-w-7xl px-6 pb-20 pt-20 sm:px-8 lg:px-10">
        <section className="rounded-[2rem] border border-slate-200 bg-white px-6 py-8 shadow-[0_20px_60px_rgba(15,23,42,0.04)] sm:px-10 lg:px-14 lg:py-12">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-teal-600">Our companies</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.06em] text-slate-900 sm:text-5xl lg:text-7xl">
            Brands built to inspire, entertain, and connect.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            CBM Group brings together media, creative production, digital storytelling, and platform-based experiences across Africa and beyond.
          </p>
        </section>

        <section className="mt-20 p-10">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-1 lg:grid-cols-3">
            {brands.map((brand) => (
              <a
                key={brand.id}
                href={brand.href}
                target="_blank"
                rel="noreferrer"
                className="group mx-auto block w-full max-w-[380px] bg-[#f4e7e6] p-0 transition-transform duration-200 hover:-translate-y-0.5"
              >
                <div className="flex h-[360px] flex-col border border-[#f1d5d1] bg-[#f9f8f7]">
                  <div className="flex flex-1 items-center justify-center p-4">
                    <div className="relative h-[240px] w-full max-w-[340px]">
                      <Image
                        src={brand.image ?? "/logo.png"}
                        alt={`${brand.name} logo`}
                        fill
                        className="object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-3 px-6 pb-6 pt-2 text-slate-800">
                    <span className="text-[1.4rem] font-medium tracking-[-0.06em] sm:text-[1.7rem]">
                      {brand.name}
                    </span>
                    <span className="text-[1.8rem] leading-none text-[#d7262d]">›</span>
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
