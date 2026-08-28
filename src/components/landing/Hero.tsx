"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, Play } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-black">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-175 w-175 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />

        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.4, 0.65, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[-10%] top-[15%] h-125 w-125 rounded-full bg-blue-600/10 blur-[120px]"
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-32 lg:px-8">
        <div className="max-w-5xl">

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-6xl font-semibold leading-[0.95] tracking-tighter text-white sm:text-7xl lg:text-9xl"
          >
            Building the
            <span className="block text-white/30">future of</span>
            creativity.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-8 max-w-2xl text-lg leading-8 text-white/60"
          >
            A multinational creative media, entertainment, streaming and
            conglomerate company advancing Africa through storytelling,
            entrepreneurship, digital innovation and technology.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              href="/companies"
              prefetch={false}
              className="group flex items-center gap-3 rounded-full bg-white px-6 py-3.5 font-semibold text-black transition hover:bg-cyan-300"
            >
              Explore our brands
              <ArrowDownRight
                size={18}
                className="transition-transform group-hover:rotate-45"
              />
            </Link>

            <Link
              href="/about"
              prefetch={false}
              className="flex items-center gap-3 rounded-full border border-white/15 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
            >
              <Play size={17} fill="currentColor" />
              Discover CBM
            </Link>
          </motion.div>
        </div>

      </div>
    </section>
  );
}