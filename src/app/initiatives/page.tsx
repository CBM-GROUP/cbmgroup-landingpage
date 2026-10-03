"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { initiatives } from "@/data/site";

import Link from "next/link";

function InitiativeCard({ initiative }: { initiative: (typeof initiatives)[number] }) {
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    const shuffleImages = window.setInterval(() => {
      setSelectedImage((currentImage) => (currentImage + 1) % initiative.images.length);
    }, 4500);

    return () => window.clearInterval(shuffleImages);
  }, [initiative.images.length]);

  return (
    <article className="group mx-auto w-full max-w-3xl overflow-hidden rounded-2xl border border-[#2fa88f] bg-[#36bea3] shadow-xs transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-md">
      <div className="grid min-h-[220px] sm:min-h-[240px] lg:grid-cols-[minmax(0,1fr)_260px]">
        <div className="relative min-h-[160px] sm:min-h-[180px] bg-[#2aa88d] lg:min-h-0">
          <Image
            key={initiative.images[selectedImage]}
            src={initiative.images[selectedImage]}
            alt={`${initiative.title} initiative`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 60vw, 500px"
            className="animate-[fadeIn_0.7s_ease-out] object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </div>

        <div className="flex flex-col justify-center border-t border-[#2fa88f] bg-[#36bea3] p-4 sm:p-5 lg:border-l lg:border-t-0 lg:p-6">
          <h2 className="text-base font-bold leading-snug tracking-[-0.03em] text-black sm:text-lg">
            {initiative.title}
          </h2>
          <p className="mt-2 text-xs leading-relaxed text-white/95 sm:text-sm sm:leading-normal">{initiative.description}</p>
          {initiative.href && (
            <div className="mt-3">
              <Link
                href={initiative.href}
                className="inline-flex items-center gap-1.5 rounded-lg bg-black/15 px-3 py-1 text-xs font-semibold text-white transition-all hover:bg-black/25 active:scale-95"
              >
                <span>Explore Careers & Opportunities</span>
                <span>→</span>
              </Link>
            </div>
          )}
        </div>
      </div>

      <div className="flex gap-2 border-t border-[#2fa88f] bg-[#2aa88d] p-2 sm:p-2.5 overflow-x-auto no-scrollbar">
        {initiative.images.map((image, index) => (
          <button
            key={`${initiative.id}-${index}`}
            type="button"
            onClick={() => setSelectedImage(index)}
            aria-label={`Show image ${index + 1} for ${initiative.title}`}
            aria-pressed={selectedImage === index}
            className={`relative h-9 w-12 sm:h-10 sm:w-14 shrink-0 overflow-hidden rounded-md border-2 transition ${selectedImage === index ? "border-teal-700 opacity-100" : "border-transparent opacity-60 hover:opacity-100"}`}
          >
            <Image src={image} alt="" fill sizes="56px" className="object-cover" />
          </button>
        ))}
      </div>
    </article>
  );
}

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
              alt="Initiatives background"
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
                INITIATIVES
              </h1>
            </div>
          </div>
        </section>
        <section className="flex flex-col items-center text-center rounded-[2rem] border border-slate-200 bg-white px-6 py-8 shadow-[0_20px_60px_rgba(15,23,42,0.04)] sm:px-10 lg:px-14 lg:py-12">
          <p className="max-w-4xl text-base sm:text-lg lg:text-xl font-bold leading-relaxed text-slate-600">
            We invest in people, ideas, and ecosystems that unlock long-term value across culture, media, entertainment, entrepreneurship and technology.
          </p>
        </section>

        <section className="mt-20 space-y-8">
          {initiatives.map((initiative) => (
            <InitiativeCard key={initiative.id} initiative={initiative} />
          ))}
        </section>
      </div>
    </main>
  );
}
