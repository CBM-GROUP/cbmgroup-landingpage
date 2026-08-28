import { careerPaths, careerDepartments } from "@/data/site";

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white py-20">
      <div className="mx-auto max-w-4xl px-6">
        <h1 className="text-4xl font-bold">Careers</h1>
        <p className="mt-4 text-white/70">See open roles and career opportunities at CBM Group.</p>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold">Programs</h2>
          <div className="mt-4 flex flex-col gap-3">
            {careerPaths.map((c) => (
              <div key={c.id} className="rounded border border-white/10 p-3">
                {c.title}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold">Departments</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {careerDepartments.map((d) => (
              <span key={d} className="rounded-full bg-white/5 px-3 py-1 text-sm">
                {d}
              </span>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
