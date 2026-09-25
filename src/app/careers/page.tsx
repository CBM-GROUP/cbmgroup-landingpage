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

          {/* Program selector tabs */}
          <div className="grid gap-4 md:grid-cols-3">
            {careerPrograms.map((program, index) => {
              const Icon = programIcons[index] ?? BriefcaseBusiness;
              const acc = programAccents[index] ?? programAccents[0];
              const isActive = activeProgram === program.id;
              return (
                <motion.button
                  key={program.id}
                  type="button"
                  onClick={() => chooseProgram(program.id)}
                  whileHover={{ y: isActive ? 0 : -4 }}
                  whileTap={{ scale: 0.98 }}
                  className={`relative overflow-hidden rounded-[1.75rem] border p-6 text-left transition-all duration-300 ${
                    isActive
                      ? `border-transparent bg-[#0d1f21] text-white shadow-2xl ${acc.glow}`
                      : "border-slate-200 bg-white text-slate-900 hover:border-slate-300 hover:shadow-lg"
                  }`}
                >
                  {/* Active glow blob */}
                  {isActive && (
                    <div className={`absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br ${acc.bg} opacity-20 blur-2xl`} />
                  )}

                  <div className="relative">
                    <div className="flex items-start justify-between">
                      <span className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${acc.bg} shadow-lg`}>
                        <Icon className="h-5 w-5 text-white" />
                      </span>
                      <span className={`text-xs font-bold tracking-[0.2em] ${isActive ? "text-white/40" : "text-slate-300"}`}>
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="mt-6 text-xl font-semibold tracking-[-0.04em]">
                      {program.title}
                    </h3>
                    <p className={`mt-2.5 text-sm leading-6 ${isActive ? "text-slate-300" : "text-slate-500"}`}>
                      {program.description}
                    </p>

                    <div className={`mt-6 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-bold ${isActive ? acc.badge : "border-slate-200 bg-slate-50 text-slate-500"}`}>
                      {isActive ? (
                        <>
                          <Sparkles className="h-3 w-3" />
                          Currently viewing
                        </>
                      ) : (
                        <>
                          <ChevronRight className="h-3 w-3" />
                          Explore programme
                        </>
                      )}
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </section>

        {/* ── TEAMS EXPLORER ── */}
        <AnimatePresence mode="wait">
          <motion.section
            key={activeProgram}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8"
          >
            {/* Explorer header */}
            <div className="relative overflow-hidden rounded-t-[2rem] bg-[#0d1f21] px-8 py-8 sm:px-12">
              <div className={`absolute -left-16 -top-16 h-56 w-56 rounded-full bg-gradient-to-br ${accent.bg} opacity-15 blur-3xl`} />
              <div className="relative flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-teal-400">
                    Explore teams
                  </p>
                  <h2 className="mt-2 text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">
                    {selectedProgram.title}
                  </h2>
                  <p className="mt-2 max-w-md text-sm leading-6 text-slate-400">
                    {selectedProgram.description}
                  </p>
                </div>
                <span className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-bold ${accent.badge}`}>
                  <span className="h-1.5 w-1.5 rounded-full bg-current" />
                  {selectedProgram.teams.length} teams available
                </span>
              </div>
            </div>

            {/* Department cards grid */}
            <div className="rounded-b-[2rem] border border-t-0 border-slate-200 bg-white p-6 sm:p-8">
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                {selectedProgram.teams.map((team, index) => {
                  const Icon = teamIcons[index] ?? Building2;
                  const isActive = activeDepartment === team.name;
                  return (
                    <motion.button
                      key={team.name}
                      type="button"
                      onClick={() => setActiveDepartment(isActive ? null : team.name)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                      className={`relative flex flex-col rounded-2xl border p-5 text-left transition-all duration-200 ${
                        isActive
                          ? `border-transparent bg-[#0d1f21] text-white ring-2 ${accent.ring}`
                          : "border-slate-100 bg-slate-50 text-slate-700 hover:border-slate-200 hover:bg-white hover:shadow-md"
                      }`}
                    >
                      {isActive && (
                        <div className={`absolute -right-4 -top-4 h-24 w-24 rounded-full bg-gradient-to-br ${accent.bg} opacity-20 blur-xl`} />
                      )}
                      <span className={`relative inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${accent.bg} shadow-md`}>
                        <Icon className="h-4 w-4 text-white" />
                      </span>
                      <span className="relative mt-4 block text-sm font-bold leading-tight">
                        {team.name}
                      </span>
                      <span className={`relative mt-1 block text-xs ${isActive ? "text-slate-400" : "text-slate-400"}`}>
                        {team.jobs.length} open roles
                      </span>
                      <ChevronRight className={`relative mt-3 h-3.5 w-3.5 transition-transform duration-200 ${isActive ? "rotate-90 text-teal-400" : "text-slate-300"}`} />
                    </motion.button>
                  );
                })}
              </div>

              {/* Department detail panel */}
              <AnimatePresence>
                {selectedTeam && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                    animate={{ opacity: 1, height: "auto", marginTop: 24 }}
                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className={`relative overflow-hidden rounded-[1.5rem] bg-[#0d1f21] p-6 sm:p-8`}>
                      {/* Glow blobs */}
                      <div className={`absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gradient-to-br ${accent.bg} opacity-20 blur-3xl`} />
                      <div className="absolute bottom-0 left-1/4 h-40 w-40 rounded-full bg-teal-500/10 blur-2xl" />

                      <div className="relative grid gap-8 lg:grid-cols-[1fr_auto]">
                        <div>
                          <div className="flex flex-wrap items-center gap-3">
                            <span className={`inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br ${accent.bg} shadow-md`}>
                              {(() => { const Icon = teamIcons[selectedProgram.teams.findIndex(t => t.name === activeDepartment)] ?? Building2; return <Icon className="h-4 w-4 text-white" />; })()}
                            </span>
                            <h3 className="text-xl font-semibold text-white">{selectedTeam.name}</h3>
                            <span className={`rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.15em] ${accent.badge}`}>
                              {selectedProgram.title}
                            </span>
                          </div>

                          <p className="mt-4 max-w-lg text-sm leading-7 text-slate-300">
                            {selectedTeam.description}
                          </p>

                          <div className="mt-6 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
                            {selectedTeam.jobs.map((job) => (
                              <div
                                key={job}
                                className="flex items-center gap-2.5 rounded-xl border border-white/8 bg-white/5 px-4 py-3 text-xs font-medium text-slate-200"
                              >
                                <span className={`h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br ${accent.bg}`} />
                                {job}
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* CTA */}
                        <div className="flex items-end">
                          <a
                            href={applicationMailto}
                            className={`group inline-flex shrink-0 items-center gap-2.5 rounded-2xl bg-gradient-to-br ${accent.bg} px-6 py-4 text-sm font-bold text-white shadow-xl transition hover:opacity-90 hover:shadow-2xl`}
                          >
                            Start a conversation
                            <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {!activeDepartment && (
                <p className="mt-6 text-center text-sm text-slate-400">
                  Select a team above to see open roles.
                </p>
              )}
            </div>
          </motion.section>
        </AnimatePresence>

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
