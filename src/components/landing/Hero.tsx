"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, Play } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
      <section className="-mt-[175px] sm:-mt-[210px] lg:-mt-[225px] mb-12">
        {/* Main Hero Card in Company Color Theme */}
        <div className="relative overflow-hidden rounded-[2.2rem] sm:rounded-[2.5rem] border border-white/20 bg-[#36BEA3] shadow-[0_24px_80px_rgba(15,23,42,0.14)]">
          <img
            src="/assets/nature.jpg"
            alt="Hero background"
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

          <div className="relative z-10 flex min-h-[380px] sm:min-h-[440px] lg:min-h-[500px] flex-col items-center justify-center p-6 pt-48 pb-12 sm:p-10 sm:pt-56 sm:pb-16 lg:p-16 lg:pt-60 lg:pb-20 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="w-full max-w-4xl text-3xl font-bold leading-[0.95] tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl drop-shadow-sm"
            >
              Become One Of Us
            </motion.h1>

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
      </section>
    </div>
  );
}