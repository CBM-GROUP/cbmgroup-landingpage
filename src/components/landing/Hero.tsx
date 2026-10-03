"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, Play } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
      <section className="-mt-[72px] mb-10 sm:-mt-[170px] sm:mb-14 lg:-mt-[185px] lg:mb-16">
        <div className="group relative isolate min-h-[440px] overflow-hidden rounded-[2rem] bg-[#36BEA3] shadow-[0_24px_80px_rgba(15,23,42,0.18)] sm:min-h-[520px] sm:rounded-[2.5rem] lg:min-h-[590px]">
          <Image
            src="/assets/nature.jpg"
            alt=""
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover transition-transform duration-1000 group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-[#36BEA3]/75" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#126b5b]/65 via-transparent to-[#126b5b]/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e5146]/55 via-transparent to-[#126b5b]/10" />

          <div className="relative z-10 flex min-h-[440px] flex-col items-center justify-end px-6 pb-10 pt-32 text-center sm:min-h-[520px] sm:px-12 sm:pb-14 sm:pt-52 lg:min-h-[590px] lg:items-start lg:px-16 lg:pb-8 lg:pt-56 lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="w-full max-w-4xl text-[clamp(3.1rem,8vw,7rem)] leading-[0.88] tracking-[-0.055em] text-white drop-shadow-sm"
            >
              Become one of us
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-5 max-w-xl text-sm leading-6 text-white/85 sm:text-base sm:leading-7 lg:text-lg"
            >
              We bring media, entertainment, technology, and entrepreneurship together to move Africa&apos;s creative future forward.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-7 flex flex-wrap items-center justify-center gap-3 sm:mt-8 lg:justify-start"
            >
              <Link
                href="/companies"
                prefetch={false}
                className="group flex items-center gap-3 rounded-full bg-[#36BEA3] px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-white"
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
                className="flex items-center gap-3 rounded-full border border-white/60 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/20"
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