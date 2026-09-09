"use client";

import { motion, Variants } from "framer-motion";
import { teamMembers, pillars, coreValues, aboutUsInfo } from "@/data/site";

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
      <div className="mx-auto max-w-7xl px-6 pb-20 pt-20 sm:px-8 lg:px-10">
        <motion.section
          initial="hidden"
          animate="visible"
          variants={revealVariants}
          className="rounded-[2rem] border border-slate-200 bg-white px-6 py-8 shadow-[0_20px_60px_rgba(15,23,42,0.04)] sm:px-10 lg:px-14 lg:py-12"
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
<h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-slate-900 sm:text-4xl">
              About CBM Group
            </h2>              <h1 className="mt-4 text-4xl font-semibold tracking-[-0.06em] text-slate-900 sm:text-5xl lg:text-7xl">
                We build the stories, systems, and platforms that move culture forward.
              </h1>
            </div>

            
          </div>

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
            <motion.p variants={revealVariants} className="text-xs font-medium uppercase tracking-[0.2em] text-teal-600">
              A creative ecosystem designed for long-term impact.
            </motion.p>
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <motion.div variants={revealVariants} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5 text-sm leading-7 text-slate-600">
              <p className="text-lg leading-8 text-slate-700">
              CBM Group brings together media, entertainment, technology, and entrepreneurship to create a more connected, innovative, and opportunity-rich creative economy in Africa.
              </p>
            </motion.div>
            <motion.div variants={revealVariants} className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.03)]">
              <p className="text-lg leading-8 text-slate-700">{aboutUsInfo.whoWeAre}</p>
            </motion.div>
          </div>
        </motion.section>

        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={staggerVariants} className="mt-20">
          <motion.div variants={revealVariants} className="mb-8">
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-slate-900 sm:text-4xl">Our pillars</h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {pillars.map((pillar) => (
              <motion.article key={pillar.id} variants={revealVariants} className="group rounded-[1.5rem] border border-slate-200 bg-white p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(15,23,42,0.05)]">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">{pillar.number}</div>
                <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-slate-900">{pillar.title}</h3>
                <p className="mt-4 text-base leading-7 text-slate-600">{pillar.description}</p>
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

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
            {coreValues.map((value) => (
              <motion.div key={value.id} variants={revealVariants} className="rounded-[1.25rem] border border-slate-200 bg-white p-5 transition-transform duration-300 hover:-translate-y-1">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">{value.number}</div>
                <h3 className="mt-4 text-lg font-semibold tracking-[-0.03em] text-slate-900">{value.title}</h3>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={staggerVariants} className="mt-20">
          <motion.div variants={revealVariants} className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-slate-900 sm:text-4xl">Our Team</h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-slate-600">Meet the creative minds and strategic operators shaping the CBM ecosystem across media, design, technology, and production.</p>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {teamMembers.map((member) => (
              <motion.article key={member.id} variants={revealVariants} className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-[0_18px_50px_rgba(15,23,42,0.02)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-50 text-lg font-semibold text-teal-700">
                  {member.name
                    .split(" ")
                    .map((word) => word[0])
                    .slice(0, 2)
                    .join("")}
                </div>
                <h3 className="mt-5 text-xl font-semibold tracking-[-0.04em] text-slate-900">{member.name}</h3>
                <p className="mt-2 text-sm uppercase tracking-[0.12em] text-slate-500">{member.role}</p>
              </motion.article>
            ))}
          </div>
        </motion.section>
      </div>
    </main>
  );
}
