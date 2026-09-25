"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  Code2,
  Megaphone,
  Palette,
  Users,
  Zap,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import { careerPrograms } from "@/data/site";

const programIcons = [CalendarDays, Users, BriefcaseBusiness];
const teamIcons = [Building2, Palette, Megaphone, Code2, Zap];

const programAccents = [
  {
    bg: "from-teal-500 to-emerald-600",
    glow: "shadow-teal-500/40",
    badge: "bg-teal-500/15 text-teal-300 border-teal-500/30",
    ring: "ring-teal-400",
  },
  {
    bg: "from-violet-500 to-purple-600",
    glow: "shadow-violet-500/40",
    badge: "bg-violet-500/15 text-violet-300 border-violet-500/30",
    ring: "ring-violet-400",
  },
  {
    bg: "from-orange-500 to-rose-600",
    glow: "shadow-orange-500/40",
    badge: "bg-orange-500/15 text-orange-300 border-orange-500/30",
    ring: "ring-orange-400",
  },
];

export default function Page() {
  const [activeProgram, setActiveProgram] = useState(careerPrograms[0].id);
  const [activeDepartment, setActiveDepartment] = useState<string | null>(null);

  const activeProgramIndex = careerPrograms.findIndex((p) => p.id === activeProgram);
  const accent = programAccents[activeProgramIndex] ?? programAccents[0];

  const selectedProgram = useMemo(
    () => careerPrograms.find((p) => p.id === activeProgram) ?? careerPrograms[0],
    [activeProgram],
  );

  const selectedTeam = selectedProgram.teams.find((t) => t.name === activeDepartment);

  const applicationMailto = selectedTeam
    ? `mailto:cbmgroup02@gmail.com?subject=${encodeURIComponent(
        `Application for ${selectedProgram.title} - ${selectedTeam.name}`,
      )}&body=${encodeURIComponent(
        `Hello CBM Team,\n\nI am interested in the ${selectedProgram.title} opportunity for the ${selectedTeam.name} team.\n\nPlease share the next steps for my application.\n\nBest regards,\n[Your Name]`,
      )}`
    : "#";

  const chooseProgram = (programId: string) => {
    if (programId === activeProgram) return;
    setActiveProgram(programId);
    setActiveDepartment(null);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#f5f5f1] text-slate-900">
      <div className="mx-auto max-w-7xl px-4 pb-24 pt-20 sm:px-6 lg:px-8">

        {/* ── PAGE HEADING ── */}
        <h1 className="mb-10 text-center text-5xl font-bold tracking-[-0.02em] text-slate-900">
          Careers
        </h1>

        {/* ── HERO ── */}
        <section className="relative overflow-hidden rounded-[2.5rem] bg-[#102b2d] px-6 py-12 text-white shadow-[0_24px_70px_rgba(15,23,42,0.14)] sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          <div className="absolute -right-24 -top-32 h-80 w-80 rounded-full bg-[#36bea3]/30 blur-3xl" />
          <div className="absolute -bottom-40 left-1/3 h-80 w-80 rounded-full bg-[#f6b85c]/15 blur-3xl" />
          <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#8ce5d3]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#8ce5d3]" />
              Build with CBM
            </div>
            <h2 className="mt-6 max-w-2xl text-4xl font-semibold leading-[1.05] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
              Your next big idea belongs here.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
              Join a curious, creative team shaping culture through media, technology, events, and experiences made in Africa.
            </p>
            <a href="#opportunities" className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#8ce5d3] px-5 py-3 text-sm font-bold text-[#102b2d] transition hover:bg-white">
              Explore opportunities <span aria-hidden="true">↓</span>
            </a>
          </div>
          <div className="relative mx-auto mt-12 grid max-w-2xl grid-cols-3 gap-2 border-t border-white/15 pt-6 text-center sm:gap-8">
            <Stat value="03" label="ways to join" />
            <Stat value="05" label="creative teams" />
            <Stat value="15+" label="open roles" />
          </div>
        </section>

        {/* ── OPPORTUNITIES SECTION ── */}
        <section id="opportunities" className="mt-24 scroll-mt-8">

          {/* Section label */}
          <div className="mb-12 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-teal-600">Find your fit</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
              Choose your way in.
            </h2>
            <p className="mt-4 text-base text-slate-500">
              Every path is designed to help you learn, create, and grow.
            </p>
          </div>

          {/* Two-column layout: vertical program tabs left, teams panel right */}
          <div className="flex flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.06)] lg:flex-row">

            {/* ── LEFT: Vertical program tabs ── */}
            <div className="flex flex-row gap-2 border-b border-slate-100 p-4 lg:w-72 lg:shrink-0 lg:flex-col lg:border-b-0 lg:border-r lg:p-5">
              {careerPrograms.map((program, index) => {
                const Icon = programIcons[index] ?? BriefcaseBusiness;
                const acc = programAccents[index] ?? programAccents[0];
                const isActive = activeProgram === program.id;
                return (
                  <motion.button
                    key={program.id}
                    type="button"
                    onClick={() => chooseProgram(program.id)}
                    whileTap={{ scale: 0.97 }}
                    className={`relative flex flex-1 flex-col overflow-hidden rounded-[1.25rem] border p-4 text-left transition-all duration-300 lg:flex-none lg:p-5 ${
                      isActive
                        ? `border-transparent bg-[#0d1f21] text-white shadow-xl ${acc.glow}`
                        : "border-slate-100 bg-slate-50 text-slate-700 hover:border-slate-200 hover:bg-white hover:shadow-md"
                    }`}
                  >
                    {isActive && (
                      <div className={`absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br ${acc.bg} opacity-20 blur-2xl`} />
                    )}
                    <div className="relative flex items-center gap-3 lg:gap-3.5">
                      <span className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${acc.bg} shadow-md`}>
                        <Icon className="h-4 w-4 text-white" />
                      </span>
                      <div className="min-w-0">
                        <p className="truncate text-sm font-bold leading-tight">{program.title}</p>
                        <p className={`mt-0.5 text-[11px] leading-none ${isActive ? "text-slate-400" : "text-slate-400"}`}>
                          {program.teams.length} teams
                        </p>
                      </div>
                    </div>
                    <p className={`relative mt-3 hidden text-xs leading-5 lg:block ${isActive ? "text-slate-300" : "text-slate-500"}`}>
                      {program.description}
                    </p>
                    {isActive && (
                      <span className={`relative mt-4 hidden w-fit items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-bold lg:inline-flex ${acc.badge}`}>
                        <Sparkles className="h-2.5 w-2.5" />
                        Viewing
                      </span>
                    )}
                  </motion.button>
                );
              })}
            </div>

            {/* ── RIGHT: Teams panel (animates on program change) ── */}
            <div className="relative min-w-0 flex-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProgram}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -16 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="flex h-full flex-col"
                >
                  {/* Right header */}
                  <div className="relative overflow-hidden bg-[#0d1f21] px-6 py-6 sm:px-8">
                    <div className={`absolute -right-12 -top-12 h-48 w-48 rounded-full bg-gradient-to-br ${accent.bg} opacity-20 blur-3xl`} />
                    <div className="relative flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-teal-400">Explore teams</p>
                        <h3 className="mt-1 text-xl font-semibold tracking-[-0.04em] text-white sm:text-2xl">
                          {selectedProgram.title}
                        </h3>
                      </div>
                      <span className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-bold ${accent.badge}`}>
                        <span className="h-1.5 w-1.5 rounded-full bg-current" />
                        {selectedProgram.teams.length} teams
                      </span>
                    </div>
                  </div>

                  {/* Department tiles */}
                  <div className="flex-1 p-5 sm:p-6">
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-5">
                      {selectedProgram.teams.map((team, index) => {
                        const Icon = teamIcons[index] ?? Building2;
                        const isActive = activeDepartment === team.name;
                        return (
                          <motion.button
                            key={team.name}
                            type="button"
                            onClick={() => setActiveDepartment(isActive ? null : team.name)}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.96 }}
                            className={`relative flex flex-col overflow-hidden rounded-2xl border p-4 text-left transition-all duration-200 ${
                              isActive
                                ? `border-transparent bg-[#0d1f21] text-white ring-2 ${accent.ring}`
                                : "border-slate-100 bg-slate-50 text-slate-700 hover:border-slate-200 hover:bg-white hover:shadow-md"
                            }`}
                          >
                            {isActive && (
                              <div className={`absolute -right-4 -top-4 h-20 w-20 rounded-full bg-gradient-to-br ${accent.bg} opacity-25 blur-xl`} />
                            )}
                            <span className={`relative inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br ${accent.bg} shadow-md`}>
                              <Icon className="h-3.5 w-3.5 text-white" />
                            </span>
                            <span className="relative mt-3 block text-xs font-bold leading-snug">
                              {team.name}
                            </span>
                            <span className="relative mt-0.5 block text-[10px] text-slate-400">
                              {team.jobs.length} roles
                            </span>
                            <ChevronRight className={`relative mt-2 h-3 w-3 transition-transform duration-200 ${isActive ? "rotate-90 text-teal-400" : "text-slate-300"}`} />
                          </motion.button>
                        );
                      })}
                    </div>

                    {/* Detail panel */}
                    <AnimatePresence>
                      {selectedTeam && (
                        <motion.div
                          initial={{ opacity: 0, height: 0, marginTop: 0 }}
                          animate={{ opacity: 1, height: "auto", marginTop: 16 }}
                          exit={{ opacity: 0, height: 0, marginTop: 0 }}
                          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="relative overflow-hidden rounded-2xl bg-[#0d1f21] p-5 sm:p-6">
                            <div className={`absolute -right-12 -top-12 h-44 w-44 rounded-full bg-gradient-to-br ${accent.bg} opacity-20 blur-3xl`} />
                            <div className="absolute bottom-0 left-1/3 h-32 w-32 rounded-full bg-teal-500/10 blur-2xl" />

                            <div className="relative">
                              <div className="flex flex-wrap items-center gap-2.5">
                                <span className={`inline-flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br ${accent.bg} shadow-md`}>
                                  {(() => { const Icon = teamIcons[selectedProgram.teams.findIndex(t => t.name === activeDepartment)] ?? Building2; return <Icon className="h-3.5 w-3.5 text-white" />; })()}
                                </span>
                                <h4 className="text-base font-semibold text-white">{selectedTeam.name}</h4>
                                <span className={`rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.12em] ${accent.badge}`}>
                                  {selectedProgram.title}
                                </span>
                              </div>

                              <p className="mt-3 text-xs leading-6 text-slate-300">
                                {selectedTeam.description}
                              </p>

                              <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                                {selectedTeam.jobs.map((job) => (
                                  <div
                                    key={job}
                                    className="flex items-center gap-2 rounded-xl border border-white/8 bg-white/5 px-3 py-2.5 text-xs font-medium text-slate-200"
                                  >
                                    <span className={`h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br ${accent.bg}`} />
                                    {job}
                                  </div>
                                ))}
                              </div>

                              <div className="mt-5 flex justify-end">
                                <a
                                  href={applicationMailto}
                                  className={`group inline-flex items-center gap-2 rounded-xl bg-gradient-to-br ${accent.bg} px-5 py-3 text-xs font-bold text-white shadow-lg transition hover:opacity-90 hover:shadow-xl`}
                                >
                                  Start a conversation
                                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {!activeDepartment && (
                      <p className="mt-5 text-center text-xs text-slate-400">
                        Select a team above to see open roles.
                      </p>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
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
