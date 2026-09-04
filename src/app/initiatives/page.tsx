"use client";

import Image from "next/image";
import { useState } from "react";
import { initiatives } from "@/data/site";

function InitiativeCard({ initiative }: { initiative: (typeof initiatives)[number] }) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <article className="group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.03)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(15,23,42,0.06)]">
      <div className="grid min-h-[420px] lg:grid-cols-[minmax(0,1fr)_340px]">
        <div className="relative min-h-[280px] bg-slate-100 lg:min-h-0">
          <Image
            src={initiative.images[selectedImage]}
            alt={`${initiative.title} initiative`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </div>

        <div className="border-t border-slate-200 p-7 sm:p-10 lg:border-l lg:border-t-0">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">{initiative.number}</div>
          <h2 className="mt-4 text-2xl font-semibold leading-tight tracking-[-0.04em] text-slate-900 sm:text-3xl">
            {initiative.title}
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-600">{initiative.description}</p>
        </div>
      </div>

      <div className="flex gap-3 border-t border-slate-200 bg-slate-50 p-4 sm:p-5">
        {initiative.images.map((image, index) => (
          <button
            key={`${initiative.id}-${index}`}
            type="button"
            onClick={() => setSelectedImage(index)}
            aria-label={`Show image ${index + 1} for ${initiative.title}`}
            aria-pressed={selectedImage === index}
            className={`relative h-14 w-20 overflow-hidden rounded-lg border-2 transition sm:h-16 sm:w-24 ${selectedImage === index ? "border-teal-600" : "border-transparent opacity-70 hover:opacity-100"}`}
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
        <section className="rounded-[2rem] border border-slate-200 bg-white px-6 py-8 shadow-[0_20px_60px_rgba(15,23,42,0.04)] sm:px-10 lg:px-14 lg:py-12">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-teal-600">Initiatives</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.06em] text-slate-900 sm:text-5xl lg:text-7xl">
            Driving opportunity through creative innovation.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            We invest in people, ideas, and ecosystems that unlock long-term value across culture, media, and technology.
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
