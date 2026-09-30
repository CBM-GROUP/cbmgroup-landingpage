"use client";

import { motion, Variants } from "framer-motion";
import { Users } from "lucide-react";
import { teamMembers, pillars, coreValues, aboutUsInfo } from "@/data/site";
import InteractiveTeamSection from "@/components/team/InteractiveTeamSection";

const revealVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-[#f5f5f1] text-slate-900">
      <div className="mx-auto max-w-7xl px-4 pb-20 pt-4 sm:px-6 sm:pb-24 lg:px-8">
        <section className="-mt-[175px] sm:-mt-[210px] lg:-mt-[225px] mb-12">
          <div className="relative overflow-hidden rounded-[2.2rem] sm:rounded-[2.5rem] border border-white/20 bg-[#36BEA3] shadow-[0_24px_80px_rgba(15,23,42,0.14)]">
            <img
              src="/assets/nature.jpg"
              alt="About Us background"
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
            <div className="relative flex min-h-[280px] sm:min-h-[360px] lg:min-h-[420px] items-center justify-center p-6 pt-48 sm:p-10 sm:pt-56 lg:p-12 lg:pt-60">
              <h1 className="text-center text-[clamp(2.2rem,6vw,5.5rem)] font-bold leading-[0.85] tracking-[-0.06em] text-white drop-shadow-sm uppercase">
                ABOUT US
              </h1>
            </div>
          </div>
        </section>
        <motion.section
          initial="hidden"
          animate="visible"
          variants={revealVariants}
          className="flex flex-col items-center text-center rounded-[2rem] border border-slate-200 bg-white px-6 py-8 shadow-[0_20px_60px_rgba(15,23,42,0.04)] sm:px-10 lg:px-14 lg:py-12"
        >
          <p className="max-w-4xl text-base sm:text-lg lg:text-xl font-bold leading-relaxed text-slate-600">
            We build the stories, systems, and platforms that move culture forward.
          </p>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerVariants}
          className="mt-20"
        >
          <div>
            <motion.h2 variants={revealVariants} className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-slate-900 sm:text-4xl">
              Who we are
            </motion.h2>
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">

            <motion.div variants={revealVariants} className="rounded-[1.75rem] border border-slate-200 bg-[#0f172a] p-7 text-white shadow-[0_20px_60px_rgba(15,23,42,0.15)]">
              <p className="text-lg leading-7 text-slate-300">{aboutUsInfo.whoWeAre}</p>
            </motion.div>

            <motion.div variants={revealVariants} className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-[0_18px_50px_rgba(15,23,42,0.03)]">
              <p className="text-base font-bold leading-7 text-[#167765]">
                CBM Group brings together media, entertainment, technology, and entrepreneurship to create a more connected, innovative, and opportunity-rich creative economy in Africa.
              </p>
            </motion.div>
          </div>
        </motion.section>

        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={staggerVariants} className="mt-20">
          <motion.div variants={revealVariants} className="mb-8">
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-slate-900 sm:text-4xl">Our pillars</h2>
          </motion.div>

          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {pillars.map((pillar) => (
              <motion.article key={pillar.id} variants={revealVariants} className="group rounded-[1.5rem] border border-[#2fa88f] bg-[#36bea3] p-4 transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(15,23,42,0.08)] sm:p-6">
                <h3 className="break-words text-base font-bold tracking-[-0.04em] text-black sm:text-2xl">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/95 sm:mt-4 sm:text-base sm:leading-7">{pillar.description}</p>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={staggerVariants} className="mt-20 grid gap-6 lg:grid-cols-2">
          <motion.div variants={revealVariants} className="rounded-[1.75rem] border border-slate-200 bg-[#0f172a] p-7 text-white shadow-[0_20px_60px_rgba(15,23,42,0.15)]">
            <h3 className="mt-4 text-2xl font-semibold tracking-[-0.05em] text-teal-400">Vision</h3>
            <p className="mt-5 text-lg leading-7 text-slate-300">{aboutUsInfo.vision}</p>
          </motion.div>

          <motion.div variants={revealVariants} className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-[0_18px_50px_rgba(15,23,42,0.03)]">
            <h3 className="mt-4 text-2xl font-semibold tracking-[-0.05em] text-teal-600">Mission</h3>
            <p className="mt-5 text-base leading-7 text-slate-600">{aboutUsInfo.mission}</p>
          </motion.div>
        </motion.section>

        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={staggerVariants} className="mt-20">
          <motion.div variants={revealVariants} className="mb-8">
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-slate-900 sm:text-4xl">
              Our Values
            </h2>
          </motion.div>

          <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
            {coreValues.map((value) => (
              <motion.div
                key={value.id}
                variants={revealVariants}
                className="aspect-square flex flex-col items-center justify-center p-5 text-center rounded-2xl border border-[#2fa88f] bg-[#36bea3] transition-transform duration-300 hover:-translate-y-1 shadow-sm"
              >
                <p className="text-base sm:text-lg font-bold text-white leading-snug">
                  {value.title}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={staggerVariants} className="mt-24">
          <motion.div
            variants={revealVariants}
            className="mb-8 rounded-[2rem] border border-slate-200 bg-white p-7 sm:p-9 shadow-[0_18px_50px_rgba(15,23,42,0.03)]"
          >
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-teal-500/25 bg-teal-50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-teal-800">
                  <Users className="h-3.5 w-3.5 text-teal-600" />
                  The People Behind The Vision
                </div>
                <h2 className="mt-3 text-3xl font-bold tracking-[-0.04em] text-slate-900 sm:text-4xl lg:text-5xl">
                  Our Team
                </h2>
              </div>

              <div className="max-w-lg lg:border-l lg:border-slate-200 lg:pl-8">
                <p className="text-sm sm:text-base leading-relaxed text-slate-600">
                  Meet the creative minds and strategic operators shaping the CBM ecosystem across media, design, technology, and production.
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-2 text-xs font-medium">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-amber-800">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-500" /> Leadership
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-cyan-800">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" /> Technology
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-teal-800">
                    <span className="h-1.5 w-1.5 rounded-full bg-teal-500" /> Creative & Media
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          <InteractiveTeamSection members={teamMembers} />
        </motion.section>
      </div>
    </main>
  );
}
