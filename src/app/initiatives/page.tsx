"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { initiatives } from "@/data/site";

function InitiativeCard({ initiative }: { initiative: (typeof initiatives)[number] }) {
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    const shuffleImages = window.setInterval(() => {
      setSelectedImage((currentImage) => (currentImage + 1) % initiative.images.length);
    }, 4500);

    return () => window.clearInterval(shuffleImages);
  }, [initiative.images.length]);

  return (
    <article className="group mx-auto w-full max-w-4xl overflow-hidden rounded-[1.75rem] border border-[#2fa88f] bg-[#36bea3] shadow-[0_18px_50px_rgba(15,23,42,0.03)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(15,23,42,0.06)]">
      <div className="grid min-h-[320px] sm:min-h-[357px] lg:grid-cols-[minmax(0,1fr)_289px]">
        <div className="relative min-h-[220px] sm:min-h-[238px] bg-[#2aa88d] lg:min-h-0">
          <Image
            key={initiative.images[selectedImage]}
            src={initiative.images[selectedImage]}
            alt={`${initiative.title} initiative`}
            fill
            className="animate-[fadeIn_0.7s_ease-out] object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </div>

        <div className="border-t border-[#2fa88f] bg-[#36bea3] p-5 sm:p-8 lg:border-l lg:border-t-0 lg:p-9">
          <h2 className="text-[1.35rem] font-semibold leading-tight tracking-[-0.04em] text-[#0b1f1e] sm:text-[1.85rem]">
            {initiative.title}
          </h2>
          <p className="mt-3 sm:mt-4 text-sm leading-6 text-[#0f2d2d] sm:text-base sm:leading-7">{initiative.description}</p>
        </div>
      </div>

      <div className="flex gap-2 sm:gap-3 border-t border-[#2fa88f] bg-[#2aa88d] p-3 sm:p-4 overflow-x-auto no-scrollbar">
        {initiative.images.map((image, index) => (
          <button
            key={`${initiative.id}-${index}`}
            type="button"
            onClick={() => setSelectedImage(index)}
            aria-label={`Show image ${index + 1} for ${initiative.title}`}
            aria-pressed={selectedImage === index}
            className={`relative h-11 w-14 sm:h-14 sm:w-20 shrink-0 overflow-hidden rounded-lg border-2 transition ${selectedImage === index ? "border-teal-600" : "border-transparent opacity-70 hover:opacity-100"}`}
          >
            <Image src={image} alt="" fill className="object-cover" />
          </button>
        ))}
      </div>
    </article>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#f5f5f1] text-slate-900">
      <div className="mx-auto max-w-7xl px-6 pb-20 pt-20 sm:px-8 lg:px-10">
        <h1 className="mb-10 text-center text-4xl font-bold tracking-[-0.02em] text-slate-900 sm:text-5xl">
          Initiatives
        </h1>
        <section className="flex flex-col items-center text-center rounded-[2rem] border border-slate-200 bg-white px-6 py-8 shadow-[0_20px_60px_rgba(15,23,42,0.04)] sm:px-10 lg:px-14 lg:py-12">
          <h2 className="max-w-4xl text-2xl font-semibold tracking-[-0.04em] text-slate-900 sm:text-3xl lg:text-4xl leading-snug sm:leading-relaxed">
            We invest in people, ideas, and ecosystems that unlock long-term value across culture, media, entertainment, entrepreneurship and technology.
          </h2>
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
