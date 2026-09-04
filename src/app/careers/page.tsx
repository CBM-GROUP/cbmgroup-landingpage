"use client";

import { useEffect, useMemo, useState } from "react";
import { careerPaths, careerPrograms } from "@/data/site";

export default function Page() {
  const [activeProgram, setActiveProgram] = useState(careerPrograms[0].id);
  const [activeDepartment, setActiveDepartment] = useState(careerPrograms[0].teams[0].name);

  const selectedProgram = useMemo(
    () => careerPrograms.find((program) => program.id === activeProgram) ?? careerPrograms[0],
    [activeProgram],
  );

  const selectedTeam = useMemo(
    () => selectedProgram.teams.find((team) => team.name === activeDepartment) ?? selectedProgram.teams[0],
    [activeDepartment, selectedProgram],
  );

  useEffect(() => {
    if (!selectedProgram.teams.some((team) => team.name === activeDepartment)) {
      setActiveDepartment(selectedProgram.teams[0].name);
    }
  }, [activeDepartment, selectedProgram]);

  const applicationMailto = `mailto:cbmgroup02@gmail.com?subject=${encodeURIComponent(
    `Application for ${selectedProgram.title} - ${selectedTeam.name}`,
  )}&body=${encodeURIComponent(
    `Hello CBM Team,\n\nI am interested in the ${selectedProgram.title} opportunity for the ${selectedTeam.name} team.\n\nPlease share the next steps for my application.\n\nBest regards,\n[Your Name]`,
  )}`;

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

        <section className="mt-20 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.04)]">
          <div className="grid gap-0 lg:grid-cols-[1.05fr_1.35fr]">
            <div className="border-b border-slate-200 bg-slate-50 p-6 sm:p-8 lg:border-b-0 lg:border-r">
              <div className="flex items-center justify-between gap-3">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-teal-600">Programs</p>
              </div>

              <div className="mt-6 space-y-3">
                {careerPaths.map((path) => (
                  <button
                    key={path.id}
                    type="button"
                    onClick={() => setActiveProgram(path.id)}
                    className={`w-full rounded-[1.15rem] border p-4 text-left transition-all duration-200 ${
                      activeProgram === path.id
                        ? "border-teal-600 bg-white shadow-[0_12px_30px_rgba(13,148,136,0.12)]"
                        : "border-slate-200 bg-slate-100/70 hover:border-slate-300 hover:bg-white"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">Opportunity</div>
                        <h3 className="mt-2 text-lg font-semibold tracking-[-0.04em] text-slate-900">{path.title}</h3>
                      </div>
                      <span
                        className={`inline-flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold ${
                          activeProgram === path.id ? "bg-teal-600 text-white" : "bg-slate-200 text-slate-600"
                        }`}
                      >
                        {activeProgram === path.id ? "✓" : "→"}
                      </span>
                    </div>
                  </button>
                ))}
              </div>

              <div className="mt-6 rounded-[1.25rem] border border-slate-200 bg-white p-5 shadow-[0_12px_30px_rgba(15,23,42,0.04)]">
                <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">Selected opportunity</div>
                <h3 className="mt-2 text-xl font-semibold tracking-[-0.04em] text-slate-900">{selectedProgram.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{selectedProgram.description}</p>
              </div>
            </div>

            <div className="bg-[#0f172a] p-6 text-white sm:p-8">
              <div className="flex items-center justify-between gap-3">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-teal-300">Teams</p>
                <span className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-200">
                  {selectedProgram.teams.length} teams
                </span>
              </div>

              <div className="mt-6 flex flex-wrap gap-2.5">
                {selectedProgram.teams.map((team) => (
                  <button
                    key={team.name}
                    type="button"
                    onClick={() => setActiveDepartment(team.name)}
                    className={`rounded-full border px-3.5 py-2 text-sm font-medium transition-all duration-200 ${
                      activeDepartment === team.name
                        ? "border-teal-300 bg-teal-300/15 text-white shadow-[0_10px_25px_rgba(94,234,212,0.12)]"
                        : "border-white/15 bg-white/5 text-slate-200 hover:border-white/25 hover:bg-white/10"
                    }`}
                  >
                    {team.name}
                  </button>
                ))}
              </div>

              <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-white/5 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-all duration-300 ease-out animate-[fadeIn_0.25s_ease-out]">
                <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-teal-200">Focused team</div>
                <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white">{selectedTeam.name}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-200">{selectedTeam.description}</p>

                <div className="mt-5 space-y-2.5">
                  {selectedTeam.jobs.map((job) => (
                    <div
                      key={job}
                      className="rounded-xl border border-white/10 bg-slate-900/40 px-3 py-2.5 text-sm text-slate-100 transition duration-200 hover:border-teal-300/40 hover:bg-slate-900/60"
                    >
                      {job}
                    </div>
                  ))}
                </div>

                <a
                  href={applicationMailto}
                  className="mt-5 inline-flex items-center rounded-full bg-teal-400 px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-teal-300"
                >
                  Apply for this team
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
