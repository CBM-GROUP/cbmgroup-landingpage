import { careerPaths, careerDepartments } from "@/data/site";

export default function Page() {
  return (
    <main className="min-h-screen bg-[#f5f5f1] text-slate-900">
      <div className="mx-auto max-w-7xl px-6 pb-20 pt-20 sm:px-8 lg:px-10">
        <section className="rounded-[2rem] border border-slate-200 bg-white px-6 py-8 shadow-[0_20px_60px_rgba(15,23,42,0.04)] sm:px-10 lg:px-14 lg:py-12">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-teal-600">Work with us</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.06em] text-slate-900 sm:text-5xl lg:text-7xl">
            Build the next chapter of African creativity.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            We are building a team of bold thinkers, creators, and operators who care deeply about culture, technology, and impact.
          </p>
        </section>

        <section className="mt-20 grid gap-8 lg:grid-cols-2">
          <div className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-[0_18px_50px_rgba(15,23,42,0.03)]">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-teal-600">Programs</p>
            <div className="mt-6 space-y-4">
              {careerPaths.map((path) => (
                <div key={path.id} className="rounded-[1.25rem] border border-slate-200 bg-slate-50 p-5">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Opportunity</div>
                  <h3 className="mt-2 text-xl font-semibold tracking-[-0.04em] text-slate-900">{path.title}</h3>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-slate-200 bg-[#0f172a] p-7 text-white shadow-[0_20px_60px_rgba(15,23,42,0.15)]">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-teal-300">Departments</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {careerDepartments.map((department) => (
                <span key={department} className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-slate-100">
                  {department}
                </span>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
