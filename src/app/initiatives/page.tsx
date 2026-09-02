import { initiatives } from "@/data/site";

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

        <section className="mt-20 space-y-6">
          {initiatives.map((initiative) => (
            <article key={initiative.id} className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.03)] sm:p-8">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">{initiative.number}</div>
              <h2 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-slate-900 sm:text-3xl">{initiative.title}</h2>
              <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">{initiative.description}</p>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
