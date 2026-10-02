"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowDown,
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
    <main className="min-h-screen bg-[#f5f5f1] text-slate-900">
      <div className="mx-auto max-w-7xl px-4 pb-24 pt-4 sm:px-6 lg:px-8">

        {/* ── PAGE HEADING HERO ── */}
        <section className="mt-3 mb-10 sm:mt-4 sm:mb-12 lg:mt-5 lg:mb-14">
          <div className="relative overflow-hidden rounded-[2.2rem] sm:rounded-[2.5rem] border border-white/20 bg-[#36BEA3] shadow-[0_24px_80px_rgba(15,23,42,0.14)]">
            <img
              src="/assets/nature.jpg"
              alt="Careers background"
              className="absolute inset-0 h-full w-full object-cover opacity-45"
            />
            <div className="absolute inset-0 bg-[#36BEA3]/80" />
            <div
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 60% 30%, rgba(255,255,255,0.18) 0 18%, transparent 19%), repeating-radial-gradient(circle at 50% 50%, rgba(255,255,255,0.12) 0 18px, transparent 18px 60px)",
              }}
            />
            <div className="relative flex min-h-[180px] sm:min-h-[220px] lg:min-h-[260px] items-center justify-center p-6 sm:p-10 lg:p-12">
              <h1 className="text-center text-[clamp(2.2rem,6vw,5.5rem)] font-bold leading-[0.85] tracking-[-0.06em] text-white drop-shadow-sm uppercase">
                CAREERS
              </h1>
            </div>
          </div>
        </section>

        {/* ── HERO / TEAM BANNER ── */}
        <section className="relative mt-6 mb-12 sm:mt-8 sm:mb-14">
          <div className="group relative isolate min-h-[340px] overflow-hidden rounded-[2rem] bg-[#0bb9a0] shadow-[0_20px_60px_rgba(15,23,42,0.12)] sm:min-h-[380px] sm:rounded-[2.25rem] lg:min-h-[440px]">
            {/* Background banner image without color-washing overlays */}
            <Image
              src="/cvbBanner (3).jpg.jpeg"
              alt="Your next big Team is Here"
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover object-right sm:object-center transition-transform duration-700 ease-out group-hover:scale-[1.015]"
            />

            {/* Mobile-only subtle gradient for small screen text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent lg:hidden" />

            {/* Content positioned on the left half */}
            <div className="relative z-10 flex min-h-[340px] flex-col justify-end p-6 sm:min-h-[380px] sm:p-8 lg:min-h-[440px] lg:justify-center lg:p-12">
              <div className="w-full max-w-lg text-center lg:mr-auto lg:text-left">
                <h2
                  style={{ fontFamily: "var(--font-body)" }}
                  className="w-full text-[clamp(3rem,5.6vw,6rem)] font-extrabold leading-[1.08] tracking-[-0.035em] text-white drop-shadow-[0_3px_12px_rgba(0,0,0,0.22)]"
                >
                  Your next big Team is Here.
                </h2>

                <p className="mt-3 sm:mt-4 max-w-md text-sm font-medium leading-relaxed text-white/95 drop-shadow-[0_2px_8px_rgba(0,0,0,0.2)] sm:text-base">
                  Join a curious, creative team shaping culture through media, technology, events, and experiences made in Africa.
                </p>

                <div className="mt-5 sm:mt-6 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                  <a
                    href="#opportunities"
                    className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#36BEA3] hover:text-white"
                  >
                    Explore opportunities
                    <ArrowDown
                      size={16}
                      className="transition-transform duration-200 group-hover:translate-y-0.5"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── OPPORTUNITIES SECTION ── */}
        <section id="opportunities" className="mt-24 scroll-mt-8">

          {/* Section label */}
          <div className="mb-12 text-center">
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">
              Choose your way in.
            </h2>
            <p className="mt-4 text-base text-slate-500">
              Every path is designed to help you learn, create, and grow.
            </p>
          </div>

          {/* Two-column layout: vertical program tabs left, teams panel right */}
          <div className="flex flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.06)] lg:flex-row">

            {/* ── Mobile: Horizontal scrollable program tabs ── */}
            <div className="no-scrollbar flex w-full gap-2.5 overflow-x-auto border-b border-slate-100 p-3 sm:gap-3 sm:p-4 lg:hidden">
              {careerPrograms.map((program, index) => {
                const Icon = programIcons[index] ?? BriefcaseBusiness;
                const acc = programAccents[index] ?? programAccents[0];
                const isActive = activeProgram === program.id;
                return (
                  <button
                    key={program.id}
                    type="button"
                    onClick={() => chooseProgram(program.id)}
                    className={`flex shrink-0 items-center gap-2.5 rounded-2xl border px-3.5 py-2.5 text-left transition-all duration-200 active:scale-95 ${isActive
                      ? `border-transparent bg-gradient-to-r from-[#36bea3] to-[#1c7865] text-white shadow-md ${acc.glow}`
                      : "border-slate-200/80 bg-slate-50 text-slate-700 hover:border-slate-300 hover:bg-white"
                      }`}
                  >
                    <span className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${acc.bg} shadow-sm`}>
                      <Icon className="h-4 w-4 text-white" />
                    </span>
                    <div className="min-w-0 pr-1">
                      <p className="whitespace-nowrap text-xs font-bold leading-tight sm:text-sm">{program.title}</p>
                      <p className="mt-0.5 text-[10px] text-slate-400">
                        {program.teams.length} teams
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* ── Desktop: Vertical program sidebar ── */}
            <div className="hidden lg:flex lg:w-72 lg:shrink-0 lg:flex-col lg:border-r lg:border-slate-100 lg:p-5 lg:gap-2">
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
                    className={`relative flex flex-col overflow-hidden rounded-[1.25rem] border p-5 text-left transition-all duration-300 ${isActive
                      ? `border-transparent bg-gradient-to-r from-[#36bea3] to-[#1c7865] text-white shadow-xl ${acc.glow}`
                      : "border-slate-100 bg-slate-50 text-slate-700 hover:border-slate-200 hover:bg-white hover:shadow-md"
                      }`}
                  >
                    {isActive && (
                      <div className={`absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br ${acc.bg} opacity-20 blur-2xl`} />
                    )}
                    <div className="relative flex items-center gap-3.5">
                      <span className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${acc.bg} shadow-md`}>
                        <Icon className="h-4 w-4 text-white" />
                      </span>
                      <div className="min-w-0">
                        <p className="text-sm font-bold leading-tight">{program.title}</p>
                        <p className="mt-0.5 text-[11px] leading-none text-slate-400">
                          {program.teams.length} teams
                        </p>
                      </div>
                    </div>
                    <p className={`relative mt-3 text-xs leading-5 ${isActive ? "text-slate-300" : "text-slate-500"}`}>
                      {program.description}
                    </p>
                    {isActive && (
                      <span className={`relative mt-4 inline-flex w-fit items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-bold ${acc.badge}`}>
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
                  <div className="relative overflow-hidden bg-gradient-to-r from-[#36bea3] to-[#1c7865] px-5 py-5 sm:px-8 sm:py-6">
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
                  <div className="flex-1 p-4 sm:p-6">
                    <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 xl:grid-cols-5 [&>*:last-child:nth-child(odd)]:col-span-2 sm:[&>*:last-child:nth-child(odd)]:col-span-1">
                      {selectedProgram.teams.map((team, index) => {
                        const Icon = teamIcons[index] ?? Building2;
                        const isActive = activeDepartment === team.name;
                        return (
                          <motion.button
                            key={team.name}
                            type="button"
                            onClick={() => setActiveDepartment(isActive ? null : team.name)}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.96 }}
                            className={`relative flex flex-col overflow-hidden rounded-2xl border p-3.5 sm:p-4 text-left transition-all duration-200 ${isActive
                              ? `border-transparent bg-gradient-to-r from-[#36bea3] to-[#1c7865] text-white ring-2 ${accent.ring}`
                              : "border-slate-100 bg-slate-50 text-slate-700 hover:border-slate-200 hover:bg-white hover:shadow-md"
                              }`}
                          >
                            {isActive && (
                              <div className={`absolute -right-4 -top-4 h-20 w-20 rounded-full bg-gradient-to-br ${accent.bg} opacity-25 blur-xl`} />
                            )}
                            <span className={`relative inline-flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl bg-gradient-to-br ${accent.bg} shadow-md`}>
                              <Icon className="h-3.5 w-3.5 text-white" />
                            </span>
                            <span className="relative mt-2.5 block text-xs font-bold leading-snug">
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
                          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#36bea3] to-[#1c7865] p-5 sm:p-6">
                            <div className={`absolute -right-12 -top-12 h-44 w-44 rounded-full bg-gradient-to-br ${accent.bg} opacity-20 blur-3xl`} />
                            <div className="absolute bottom-0 left-1/3 h-32 w-32 rounded-full bg-teal-500/10 blur-2xl" />

                            <div className="relative">
                              <div className="flex flex-wrap items-center gap-2.5">
                                <span className={`inline-flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br ${accent.bg} shadow-md`}>
                                  {(() => { const Icon = teamIcons[selectedProgram.teams.findIndex(t => t.name === activeDepartment)] ?? Building2; return <Icon className="h-3.5 w-3.5 text-white" />; })()}
                                </span>
                                <p className="text-lg font-bold tracking-tight text-white font-[family-name:var(--font-manrope)]">{selectedTeam.name}</p>
                                <span className={`rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.12em] ${accent.badge}`}>
                                  {selectedProgram.title}
                                </span>
                              </div>

                              <p className="mt-3 text-sm font-medium leading-relaxed text-white/90">
                                {selectedTeam.description}
                              </p>

                              <div className="mt-5 flex flex-wrap gap-3">
                                {selectedTeam.jobs.map((job, idx) => (
                                  <motion.div
                                    key={job}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.05 }}
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    className="group relative flex cursor-default items-center justify-center rounded-full border border-white/20 bg-white/10 px-5 py-2.5 shadow-sm backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/20 hover:shadow-lg"
                                  >
                                    <span className="text-sm font-bold tracking-tight text-white">{job}</span>
                                  </motion.div>
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

