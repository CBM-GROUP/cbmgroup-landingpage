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

        <section className="mt-20">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {brands.map((brand) => (
              <a
                key={brand.id}
                href={brand.href}
                target="_blank"
                rel="noreferrer"
                className="group overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.02)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <Image
                    src={brand.image ?? "/logo.png"}
                    alt={`${brand.name} logo`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center justify-between gap-4 p-5">
                  <span className="text-lg font-semibold tracking-[-0.04em] text-slate-900">{brand.name}</span>
                  <span className="text-sm font-medium text-teal-600">Visit</span>
                </div>
              </a>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
