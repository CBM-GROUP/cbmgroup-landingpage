import { teamMembers } from "@/data/site";

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white py-20">
      <div className="mx-auto max-w-4xl px-6">
        <h1 className="text-4xl font-bold">Team</h1>
        <p className="mt-4 text-white/70">Meet the people behind CBM Group.</p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {teamMembers.map((m) => (
            <div key={m.id} className="rounded border border-white/10 p-4">
              <div className="text-lg font-medium">{m.name}</div>
              <div className="mt-1 text-sm text-white/60">{m.role}</div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
