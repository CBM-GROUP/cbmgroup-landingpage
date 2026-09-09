"use client";

import { useMemo, useState } from "react";
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
          <div className="border-b border-slate-200 px-6 py-7 sm:px-10">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">Opportunities</p>
                <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-slate-900">Find your place at CBM</h2>
              </div>
              <p className="max-w-md text-sm leading-6 text-slate-500">Choose a programme, then explore the teams and roles where you can make an impact.</p>
            </div>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {careerPaths.map((path, index) => (
                <button
                  key={path.id}
                  type="button"
                  onClick={() => {
                    setActiveProgram(path.id);
                    const nextProgram = careerPrograms.find((program) => program.id === path.id) ?? careerPrograms[0];
                    setActiveDepartment(nextProgram.teams[0].name);
                  }}
                  className={`flex items-center gap-4 border-b-2 px-1 pb-3 text-left transition-colors ${
                    activeProgram === path.id ? "border-teal-600 text-slate-900" : "border-slate-200 text-slate-500 hover:border-slate-300 hover:text-slate-900"
                  }`}
                >
                  <span className="text-xs font-semibold tracking-[0.16em] text-teal-600">0{index + 1}</span>
                  <span className="text-base font-semibold">{path.title}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
            <div className="border-b border-slate-200 p-6 sm:p-10 lg:border-b-0 lg:border-r">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Teams</p>
              <h3 className="mt-3 text-xl font-semibold tracking-[-0.04em] text-slate-900">{selectedProgram.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{selectedProgram.description}</p>

              <div className="mt-8 border-t border-slate-200">
                {selectedProgram.teams.map((team, index) => (
                  <button
                    key={team.name}
                    type="button"
                    onClick={() => setActiveDepartment(team.name)}
                    className={`flex w-full items-center justify-between gap-4 border-b border-slate-200 py-4 text-left transition-colors ${
                      activeDepartment === team.name ? "text-teal-700" : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    <span className="flex items-center gap-4">
                      <span className="text-xs font-semibold text-slate-400">0{index + 1}</span>
                      <span className="text-sm font-semibold">{team.name}</span>
                    </span>
                    <span className="text-lg">{activeDepartment === team.name ? "↗" : "→"}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-[#0f172a] p-6 text-white sm:p-10">
              <div className="flex items-center justify-between gap-3">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-300">Team profile</p>
                <span className="text-xs text-slate-400">{selectedProgram.teams.length} areas</span>
              </div>
              <div className="mt-12 max-w-xl animate-[fadeIn_0.25s_ease-out]">
                <h3 className="text-3xl font-semibold tracking-[-0.05em] text-white">{selectedTeam.name}</h3>
                <p className="mt-4 text-base leading-7 text-slate-300">{selectedTeam.description}</p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {selectedTeam.jobs.map((job) => (
                    <div key={job} className="border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-100">
                      {job}
                    </div>
                  ))}
                </div>

                <a href={applicationMailto} className="mt-8 inline-flex items-center border border-teal-300 bg-teal-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-teal-200">
                  Apply for this team <span className="ml-3 text-base">↗</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
