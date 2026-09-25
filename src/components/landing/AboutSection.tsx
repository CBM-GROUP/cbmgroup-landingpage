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

  // Increased Parallax movement for a more dramatic effect
  const imageY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["30px", "-30px"]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative overflow-hidden bg-white">
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

      <div className="relative mx-auto max-w-[1600px] px-4 pb-20 sm:px-6 sm:pb-28 lg:px-8 lg:pb-36">
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
            filter: "blur(10px)",
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 1.2,
            ease: [0.25, 1, 0.5, 1],
          }}
          className="
            relative
            h-[55vh]
            min-h-[420px]
            max-h-[760px]
            overflow-hidden
            rounded-[1.5rem]
            sm:rounded-[2rem]
          ">
          {/* Image with increased Parallax */}
          <motion.div style={{ y: imageY }} className="absolute -inset-[12%]">
            <div
              className="
                h-full
                w-full
                bg-cover
                bg-center
              "
              style={{
                backgroundImage: "url('/images/about/cbm-about.jpg')",
              }}
            />
          </motion.div>

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/25" />

          {/* Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" />

          {/* Image label */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="absolute bottom-6 left-6 right-6 flex items-end justify-between sm:bottom-8 sm:left-8 sm:right-8">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                CBM Group
              </p>

              <p className="mt-2 text-sm text-white/80">
                Stories that move Africa forward.
              </p>
            </div>

            <span className="hidden text-xs text-white/40 sm:block">2026</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}