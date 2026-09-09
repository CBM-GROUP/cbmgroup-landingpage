"use client";

import { Fragment, useMemo, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  CheckCircle2,
  Code2,
  Megaphone,
  Palette,
  Users,
  Zap,
} from "lucide-react";
import { careerPrograms } from "@/data/site";

const programIcons = [CalendarDays, Users, BriefcaseBusiness];
const teamIcons = [Building2, Palette, Megaphone, Code2, Zap];

export default function Page() {
  const [activeProgram, setActiveProgram] = useState(careerPrograms[0].id);
  const [activeDepartment, setActiveDepartment] = useState<string | null>(null);

  const selectedProgram = useMemo(
    () => careerPrograms.find((program) => program.id === activeProgram) ?? careerPrograms[0],
    [activeProgram],
  );

  const selectedTeam = selectedProgram.teams.find((team) => team.name === activeDepartment);

  const applicationMailto = selectedTeam
    ? `mailto:cbmgroup02@gmail.com?subject=${encodeURIComponent(
        `Application for ${selectedProgram.title} - ${selectedTeam.name}`,
      )}&body=${encodeURIComponent(
        `Hello CBM Team,\n\nI am interested in the ${selectedProgram.title} opportunity for the ${selectedTeam.name} team.\n\nPlease share the next steps for my application.\n\nBest regards,\n[Your Name]`,
      )}`
    : "#";

  const chooseProgram = (programId: string) => {
    const nextProgram = careerPrograms.find((program) => program.id === programId) ?? careerPrograms[0];
    setActiveProgram(nextProgram.id);
    setActiveDepartment(null);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#f5f5f1] text-slate-900">
      <div className="mx-auto max-w-7xl px-4 pb-24 pt-10 sm:px-6 sm:pt-16 lg:px-8">
        <section className="relative overflow-hidden rounded-[2.5rem] bg-[#102b2d] px-6 py-12 text-white shadow-[0_24px_70px_rgba(15,23,42,0.14)] sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          <div className="absolute -right-24 -top-32 h-80 w-80 rounded-full bg-[#36bea3]/30 blur-3xl" />
          <div className="absolute -bottom-40 left-1/3 h-80 w-80 rounded-full bg-[#f6b85c]/15 blur-3xl" />
          <div className="relative max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#8ce5d3]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#8ce5d3]" />
              Build with CBM
            </div>
            <h1 className="mt-6 max-w-2xl text-4xl font-semibold leading-[1.05] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
              Your next big idea belongs here.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
              Join a curious, creative team shaping culture through media, technology, events, and experiences made in Africa.
            </p>
            <a href="#opportunities" className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#8ce5d3] px-5 py-3 text-sm font-bold text-[#102b2d] transition hover:bg-white">
              Explore opportunities <ArrowDownIcon />
            </a>
          </div>
          <div className="relative mt-12 grid max-w-2xl grid-cols-3 gap-2 border-t border-white/15 pt-6 sm:gap-8">
            <Stat value="03" label="ways to join" />
            <Stat value="05" label="creative teams" />
            <Stat value="15+" label="open roles" />
          </div>
        </section>

        <section id="opportunities" className="mt-20 scroll-mt-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-700">Find your fit</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">Choose your way in.</h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-slate-500">Every programme is designed to help you learn, contribute, and grow alongside a team that cares.</p>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {careerPrograms.map((program, index) => {
              const Icon = programIcons[index] ?? BriefcaseBusiness;
              const isActive = activeProgram === program.id;
              return (
                <button
                  key={program.id}
                  type="button"
                  onClick={() => chooseProgram(program.id)}
                  className={`group relative overflow-hidden rounded-3xl border p-6 text-left transition duration-300 ${
                    isActive
                      ? "border-[#36bea3] bg-[#102b2d] text-white shadow-[0_18px_40px_rgba(16,43,45,0.18)]"
                      : "border-slate-200 bg-white text-slate-900 hover:-translate-y-1 hover:border-teal-200 hover:shadow-[0_18px_40px_rgba(15,23,42,0.08)]"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <span className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl ${isActive ? "bg-[#36bea3] text-[#102b2d]" : "bg-teal-50 text-teal-700"}`}>
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className={`text-xs font-bold tracking-[0.18em] ${isActive ? "text-[#8ce5d3]" : "text-slate-400"}`}>0{index + 1}</span>
                  </div>
                  <h3 className="mt-8 text-xl font-semibold tracking-[-0.04em]">{program.title}</h3>
                  <p className={`mt-3 min-h-14 text-sm leading-6 ${isActive ? "text-slate-300" : "text-slate-500"}`}>{program.description}</p>
                  <span className={`mt-7 inline-flex items-center gap-2 text-sm font-bold ${isActive ? "text-[#8ce5d3]" : "text-teal-700"}`}>
                    {isActive ? "Selected" : "Explore programme"} <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        <section className="mt-20 overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.06)]">
          <div className="border-b border-slate-200 px-6 py-8 sm:px-10 lg:px-12">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-700">Explore teams</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em]">{selectedProgram.title}</h2>
              </div>
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-500">
                <span className="h-1.5 w-1.5 rounded-full bg-teal-500" /> {selectedProgram.teams.length} teams to explore
              </span>
            </div>
          </div>

          <div>
            <div className="p-6 sm:p-10 lg:p-12">
              <p className="max-w-md text-sm leading-6 text-slate-500">{selectedProgram.description}</p>
              <div className="mt-8 grid gap-3">
                {selectedProgram.teams.map((team, index) => {
                  const Icon = teamIcons[index] ?? Building2;
                  const isActive = activeDepartment === team.name;
                  return (
                    <Fragment key={team.name}>
                      <button
                        type="button"
                        onClick={() => setActiveDepartment(isActive ? null : team.name)}
                        aria-expanded={isActive}
                        className={`flex w-full items-center gap-4 rounded-2xl border p-4 text-left transition ${
                          isActive ? "rounded-b-none border-teal-200 bg-teal-50 text-teal-900" : "border-transparent bg-slate-50 text-slate-600 hover:border-slate-200 hover:bg-white"
                        }`}
                      >
                        <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${isActive ? "bg-[#36bea3] text-[#102b2d]" : "bg-white text-slate-400"}`}>
                          <Icon className="h-4 w-4" />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block text-sm font-bold">{team.name}</span>
                          <span className={`mt-0.5 block text-xs ${isActive ? "text-teal-700" : "text-slate-400"}`}>{team.jobs.length} roles</span>
                        </span>
                        <ArrowRight className={`h-4 w-4 transition-transform ${isActive ? "rotate-90 text-teal-700" : "text-slate-300"}`} />
                      </button>
                      {isActive && (
                        <div className="mb-1 rounded-b-2xl border border-t-0 border-teal-200 bg-[#102b2d] p-5 text-white shadow-[0_12px_24px_rgba(16,43,45,0.12)] animate-[fadeIn_0.2s_ease-out]">
                          <p className="text-sm leading-6 text-slate-300">{team.description}</p>
                          <div className="mt-4 space-y-2.5">
                            {team.jobs.map((job) => (
                              <div key={job} className="flex items-center gap-2.5 text-xs text-slate-200">
                                <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-[#8ce5d3]" /> {job}
                              </div>
                            ))}
                          </div>
                          <a href={applicationMailto} className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#8ce5d3] px-4 py-2.5 text-xs font-bold text-[#102b2d] transition hover:bg-white">
                            Start a conversation <ArrowUpRight className="h-3.5 w-3.5" />
                          </a>
                        </div>
                      )}
                    </Fragment>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="text-2xl font-semibold tracking-[-0.05em] text-white sm:text-3xl">{value}</p>
      <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-400 sm:text-xs">{label}</p>
    </div>
  );
}

function ArrowDownIcon() {
  return <span aria-hidden="true" className="text-base">↓</span>;
}
