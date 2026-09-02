import { teamMembers, pillars, coreValues, aboutUsInfo } from "@/data/site";

export default function Page() {
  return (
    <main className="min-h-screen bg-[#f5f5f1] text-slate-900">
      <div className="mx-auto max-w-7xl px-6 pb-20 pt-20 sm:px-8 lg:px-10">
        <section className="rounded-[2rem] border border-slate-200 bg-white px-6 py-8 shadow-[0_20px_60px_rgba(15,23,42,0.04)] sm:px-10 lg:px-14 lg:py-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-teal-600">About CBM Group</p>
              <h1 className="mt-4 text-4xl font-semibold tracking-[-0.06em] text-slate-900 sm:text-5xl lg:text-7xl">
                We build the stories, systems, and platforms that move culture forward.
              </h1>
            </div>

            <div className="max-w-md rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5 text-sm leading-7 text-slate-600">
              CBM Group brings together media, entertainment, technology, and entrepreneurship to create a more connected, innovative, and opportunity-rich creative economy in Africa.
            </div>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              { label: "Creative sectors", value: "6+" },
              { label: "Strategic focus", value: "Media" },
              { label: "Regional ambition", value: "Africa" },
            ].map((item) => (
              <div key={item.label} className="rounded-[1.25rem] border border-slate-200 bg-slate-50 p-5">
                <div className="text-3xl font-semibold tracking-[-0.05em] text-slate-900">{item.value}</div>
                <div className="mt-2 text-sm uppercase tracking-[0.12em] text-slate-500">{item.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-teal-600">Who we are</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-slate-900 sm:text-4xl">
              A creative ecosystem designed for long-term impact.
            </h2>
          </div>

          <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.03)]">
            <p className="text-lg leading-8 text-slate-700">{aboutUsInfo.whoWeAre}</p>
          </div>
        </section>

        <section className="mt-20">
          <div className="mb-8">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-teal-600">Our pillars</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-slate-900 sm:text-4xl">The core of our work</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {pillars.map((pillar) => (
              <article key={pillar.id} className="group rounded-[1.5rem] border border-slate-200 bg-white p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(15,23,42,0.05)]">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">{pillar.number}</div>
                <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-slate-900">{pillar.title}</h3>
                <p className="mt-4 text-base leading-7 text-slate-600">{pillar.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-20 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[1.75rem] border border-slate-200 bg-[#0f172a] p-7 text-white shadow-[0_20px_60px_rgba(15,23,42,0.15)]">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-teal-300">Vision</p>
            <h3 className="mt-4 text-3xl font-semibold tracking-[-0.05em]">To be the creative industries hub for storytelling, innovation, technology, and streaming in Africa.</h3>
            <p className="mt-5 text-base leading-7 text-slate-300">{aboutUsInfo.vision}</p>
          </div>

          <div className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-[0_18px_50px_rgba(15,23,42,0.03)]">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-teal-600">Mission</p>
            <h3 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-slate-900">To build a dynamic ecosystem at the intersection of creativity and technology.</h3>
            <p className="mt-5 text-base leading-7 text-slate-600">{aboutUsInfo.mission}</p>
          </div>
        </section>

        <section className="mt-20">
          <div className="mb-8">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-teal-600">Our values</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-slate-900 sm:text-4xl">What guides every decision we make</h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
            {coreValues.map((value) => (
              <div key={value.id} className="rounded-[1.25rem] border border-slate-200 bg-white p-5">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">{value.number}</div>
                <h3 className="mt-4 text-lg font-semibold tracking-[-0.03em] text-slate-900">{value.title}</h3>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-teal-600">Our people</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-slate-900 sm:text-4xl">The team behind the vision</h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-slate-600">Meet the creative minds and strategic operators shaping the CBM ecosystem across media, design, technology, and production.</p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {teamMembers.map((member) => (
              <article key={member.id} className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-[0_18px_50px_rgba(15,23,42,0.02)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-50 text-lg font-semibold text-teal-700">
                  {member.name
                    .split(" ")
                    .map((word) => word[0])
                    .slice(0, 2)
                    .join("")}
                </div>
                <h3 className="mt-5 text-xl font-semibold tracking-[-0.04em] text-slate-900">{member.name}</h3>
                <p className="mt-2 text-sm uppercase tracking-[0.12em] text-slate-500">{member.role}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
