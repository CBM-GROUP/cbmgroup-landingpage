import { coreValues } from "@/data/site";

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white py-20">
      <div className="mx-auto max-w-4xl px-6">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="mt-4 text-white/70">Learn more about CBM Group, our mission and what drives us.</p>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Core Values</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {coreValues.map((v) => (
              <div key={v.id} className="rounded border border-white/10 p-4">
                <div className="text-sm text-white/40">{v.number}</div>
                <div className="mt-1 text-lg font-medium">{v.title}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
