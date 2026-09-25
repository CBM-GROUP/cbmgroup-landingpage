"use client";

import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";

const aboutPills = [
  "Creativity",
  "Storytelling",
  "Technology",
  "Entertainment",
];

// Reusable animation variants for staggered children
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const pillVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const contentY = useTransform(scrollYProgress, [0, 1], ["30px", "-30px"]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative bg-white">
      {/* =====================================================
          INTRODUCTION
      ====================================================== */}

      <div className="relative mx-auto max-w-[1600px] px-6 pb-16 pt-24 sm:px-10 sm:pb-24 sm:pt-32 lg:px-16 lg:pb-32 lg:pt-40">
        

        {/* =================================================
            MAIN INTRO (Staggered)
        ================================================== */}

        <motion.div
          style={{ y: contentY }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr]">
          {/* Left */}
          <div>
            <motion.h2
              variants={itemVariants}
              className="
                max-w-5xl
                text-3xl
                font-medium
                leading-[0.95]
                tracking-[-0.04em]
                text-black
                sm:text-4xl
                md:text-5xl
                lg:text-[3.75rem]
              ">
              We are building
              <span className="block">Africa&apos;s</span>
              creative future.
            </motion.h2>
          </div>

          {/* Right description */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col justify-end lg:pb-3">
            <p className="max-w-md text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
              CBM Group is a multinational creative media, entertainment,
              streaming and conglomerate company advancing Africa through
              storytelling, entrepreneurship, digital innovation, technology and
              streaming platforms.
            </p>

            <a
              href="/companies"
              className="
                group
                mt-8
                inline-flex
                w-fit
                items-center
                gap-3
                border-b
                border-gray-300
                pb-2
                text-sm
                font-medium
                text-black
                transition-colors
                hover:border-teal-400
                hover:text-teal-400
              ">
              Discover what we do
              <ArrowUpRight
                size={16}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />
            </a>
          </motion.div>
        </motion.div>

        {/* =================================================
            VALUE PILLS (Staggered cascade)
        ================================================== */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          className="mt-16 flex flex-wrap items-center gap-2 border-t border-gray-200 pt-6">
          {aboutPills.map((pill) => (
            <motion.span
              key={pill}
              variants={pillVariants}
              className="
                rounded-full
                border
                border-gray-200
                bg-gray-50
                px-4
                py-2
                text-xs
                uppercase
                tracking-[0.12em]
                text-gray-600
                transition-colors
                hover:bg-gray-100
                cursor-default
              ">
              {pill}
            </motion.span>
          ))}

          <motion.span 
            variants={itemVariants}
            className="ml-auto hidden text-xs text-gray-400 sm:block">
            Creativity → Culture → Impact
          </motion.span>
        </motion.div>
      </div>

      <div className="relative mx-auto max-w-4xl lg:max-w-5xl px-4 pb-16 pt-6 sm:px-6 sm:pb-24 lg:px-8 lg:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          className="
            relative
            aspect-video
            w-full
            max-h-[60vh]
            mx-auto
            overflow-hidden
            rounded-[1.5rem]
            sm:rounded-[2rem]
            bg-black
            shadow-[0_20px_50px_rgba(0,0,0,0.12)]
            border
            border-slate-200/60
          ">
          <video
            src="/cbm advert.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}