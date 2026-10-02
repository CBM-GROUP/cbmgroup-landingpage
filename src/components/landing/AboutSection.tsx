"use client";

import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";

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

      <div className="relative mx-auto max-w-[1600px] px-6 pb-10 pt-24 sm:px-10 sm:pb-16 sm:pt-32 lg:px-16 lg:pb-20 lg:pt-40">
        

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
            <p className="max-w-md text-base font-bold leading-7 text-gray-700 sm:text-lg sm:leading-8">
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
                rounded-full
                border
                border-[#36BEA3]
                bg-[#36BEA3]
                px-5
                py-2.5
                text-sm
                font-semibold
                text-white
                shadow-[0_12px_30px_rgba(54,190,163,0.28)]
                transition-all
                duration-200
                hover:-translate-y-0.5
                hover:bg-[#2aa58f]
                hover:border-[#2aa58f]
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

      </div>

      <div className="relative mx-auto max-w-4xl px-4 pb-16 pt-0 sm:px-6 sm:pb-24 lg:max-w-5xl lg:px-8 lg:pb-32">
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