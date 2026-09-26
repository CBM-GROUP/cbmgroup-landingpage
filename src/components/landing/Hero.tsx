"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, Play } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f5f5f1] pb-12 pt-0 sm:pb-16 lg:pb-20">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-175 w-175 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#36BEA3]/15 blur-[140px]" />
      </div>

      <div className="relative mx-auto -mt-[145px] sm:-mt-[165px] lg:-mt-[175px] w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Hero Card in Company Color Theme */}
        <div className="relative overflow-hidden rounded-[2.2rem] border border-white/20 bg-[#36BEA3] px-6 pt-44 pb-12 shadow-[0_22px_60px_rgba(0,0,0,0.12)] backdrop-blur-sm sm:px-10 sm:pt-48 sm:pb-16 lg:px-16 lg:pt-52 lg:pb-20">
          {/* Subtle Radial Gradient Overlay */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.2),transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.1),transparent_35%)]" />

          <div className="relative z-10 flex w-full flex-col items-center text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="w-full text-3xl font-bold leading-[0.95] tracking-[-0.05em] text-black sm:text-5xl lg:text-6xl"
            >
              Building the future of creativity
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-6 max-w-2xl text-center text-base leading-relaxed text-white/95 sm:text-lg"
            >
              A multinational creative media, entertainment, streaming and
              conglomerate company advancing Africa through storytelling,
              entrepreneurship, digital innovation and technology.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-8 flex flex-wrap items-center justify-center gap-4"
            >
              <Link
                href="/companies"
                prefetch={false}
                className="group flex items-center gap-3 rounded-full bg-black px-6 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:scale-105 hover:bg-slate-900"
              >
                Explore our brands
                <ArrowDownRight
                  size={18}
                  className="transition-transform duration-200 group-hover:rotate-45"
                />
              </Link>

              <Link
                href="/about"
                prefetch={false}
                className="flex items-center gap-3 rounded-full border border-white/40 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-xs transition-all duration-200 hover:scale-105 hover:bg-white/20"
              >
                <Play size={17} fill="currentColor" />
                Discover CBM
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}