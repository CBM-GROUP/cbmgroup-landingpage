"use client";

import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
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
  const textX = useTransform(scrollYProgress, [0, 1], ["5%", "-15%"]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative overflow-hidden bg-black">
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
                text-5xl
                font-medium
                leading-[0.92]
                tracking-[-0.055em]
                text-white
                sm:text-6xl
                md:text-7xl
                lg:text-[7.5rem]
              ">
              We are building
              <span className="block text-white/25">Africa&apos;s</span>
              creative future.
            </motion.h2>
          </div>

          {/* Right description */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col justify-end lg:pb-3">
            <p className="max-w-md text-base leading-7 text-white/55 sm:text-lg sm:leading-8">
              CBM Group is a multinational creative media, entertainment,
              streaming and conglomerate company advancing Africa through
              storytelling, entrepreneurship, digital innovation, technology and
              streaming platforms.
            </p>

            <a
              href="#pillars"
              className="
                group
                mt-8
                inline-flex
                w-fit
                items-center
                gap-3
                border-b
                border-white/20
                pb-2
                text-sm
                font-medium
                text-white
                transition-colors
                hover:border-cyan-400
                hover:text-cyan-400
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
          className="mt-16 flex flex-wrap items-center gap-2 border-t border-white/10 pt-6">
          {aboutPills.map((pill) => (
            <motion.span
              key={pill}
              variants={pillVariants}
              className="
                rounded-full
                border
                border-white/10
                bg-white/[0.03]
                px-4
                py-2
                text-xs
                uppercase
                tracking-[0.12em]
                text-white/45
                transition-colors
                hover:bg-white/10
                cursor-default
              ">
              {pill}
            </motion.span>
          ))}

          <motion.span 
            variants={itemVariants}
            className="ml-auto hidden text-xs text-white/25 sm:block">
            Creativity → Culture → Impact
          </motion.span>
        </motion.div>
      </div>

      <div className="relative mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
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

      <div className="relative overflow-hidden py-24 sm:py-32 lg:py-44">
        {/* Oversized moving background text */}
        <motion.div
          style={{ x: textX }}
          className="
            pointer-events-none
            absolute
            left-0
            top-1/2
            -translate-y-1/2
            whitespace-nowrap
            text-[18vw]
            font-bold
            uppercase
            leading-none
            tracking-[-0.08em]
            text-white/[0.02]
          ">
          CBM GROUP CBM GROUP
        </motion.div>

        <div className="relative mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-16">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="grid gap-12 lg:grid-cols-[0.35fr_1fr]">
            {/* Number */}
            <motion.div
              variants={itemVariants}
              className="text-sm text-white/25">
              <span className="text-cyan-400">01</span>
              <span className="mx-2">/</span>
              About
            </motion.div>

            {/* Statement */}
            <motion.div variants={itemVariants}>
              <p
                className="
                  max-w-5xl
                  text-3xl
                  font-medium
                  leading-[1.15]
                  tracking-tight
                  text-white/80
                  sm:text-4xl
                  lg:text-5xl
                ">
                At CBM, we believe creativity is more than content. It is a
                force for connection, opportunity, innovation and meaningful
                change.
              </p>

              <div className="mt-10 flex items-center gap-3 text-sm text-white/40">
                <motion.span 
                  initial={{ width: 0 }}
                  whileInView={{ width: "2.5rem" }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
                  className="h-px bg-cyan-400" 
                />
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  Creativity with purpose
                </motion.span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* =====================================================
          SCROLL INDICATOR
      ====================================================== */}

      <div className="flex justify-center pb-16">
        <motion.a
          href="#pillars"
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            flex
            flex-col
            items-center
            gap-3
            text-xs
            uppercase
            tracking-[0.2em]
            text-white/25
            transition
            hover:text-cyan-400
          ">
          <span>Scroll to explore</span>

          <ArrowDownRight size={18} className="rotate-45" />
        </motion.a>
      </div>
    </section>
  );
}