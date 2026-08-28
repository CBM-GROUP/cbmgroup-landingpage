import { initiatives } from "@/data/site";

export default function Page() {
  return (
    <main className="min-h-screen bg-white py-20 text-black">
      <div className="mx-auto max-w-4xl px-6">
        <h1 className="text-4xl font-bold">Initiatives</h1>
        <p className="mt-4 text-gray-600">Discover our initiatives and programs.</p>

        <div className="mt-8 space-y-6">
          {initiatives.map((it) => (
            <article key={it.id} className="rounded border border-gray-200 p-4">
              <div className="text-sm text-brand-text">{it.number}</div>
              <h3 className="mt-1 text-lg font-medium">{it.title}</h3>
              <p className="mt-2 text-gray-600">{it.description}</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
