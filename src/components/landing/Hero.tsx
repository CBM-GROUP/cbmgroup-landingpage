"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, Play } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
<<<<<<< HEAD
      <section className="-mt-[72px] mb-10 sm:-mt-[170px] sm:mb-14 lg:-mt-[185px] lg:mb-16">
        <div className="group relative isolate min-h-[440px] overflow-hidden rounded-[2rem] bg-[#36BEA3] shadow-[0_24px_80px_rgba(15,23,42,0.18)] sm:min-h-[520px] sm:rounded-[2.5rem] lg:min-h-[590px]">
=======
      <section className="mt-3 mb-10 sm:mt-4 sm:mb-14 lg:mt-5 lg:mb-16">
        <div className="group relative isolate min-h-[460px] overflow-hidden rounded-[2rem] bg-[#0bb9a0] shadow-[0_24px_80px_rgba(15,23,42,0.15)] sm:min-h-[520px] sm:rounded-[2.5rem] lg:min-h-[580px]">
          {/* Background image without color-washing overlays */}
>>>>>>> 68eb61dd707444ee5512b6deead766d886adf48f
          <Image
            src="/cvbBanner (2).jpg.jpeg"
            alt="Become one of us"
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover object-left sm:object-center transition-transform duration-700 ease-out group-hover:scale-[1.015]"
          />

<<<<<<< HEAD
          <div className="relative z-10 flex min-h-[440px] flex-col items-center justify-end px-6 pb-10 pt-32 text-center sm:min-h-[520px] sm:px-12 sm:pb-14 sm:pt-52 lg:min-h-[590px] lg:items-start lg:px-16 lg:pb-8 lg:pt-56 lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="w-full max-w-4xl text-[clamp(3.1rem,8vw,7rem)] leading-[0.88] tracking-[-0.055em] text-white drop-shadow-sm"
            >
              Become one of us
            </motion.h1>
=======
          {/* Mobile-only subtle gradient for small screen text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent lg:hidden" />
>>>>>>> 68eb61dd707444ee5512b6deead766d886adf48f

          {/* Content positioned on the right half */}
          <div className="relative z-10 flex min-h-[460px] flex-col justify-end p-6 sm:min-h-[520px] sm:p-10 lg:min-h-[580px] lg:justify-center lg:p-16">
            <div className="w-full max-w-xl text-center lg:ml-auto lg:text-left">
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="w-full text-[clamp(2.75rem,6.5vw,5.5rem)] font-extrabold leading-[0.92] tracking-[-0.055em] text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.25)]"
              >
                Become <br className="hidden sm:inline" />
                one of us
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-4 sm:mt-5 max-w-lg text-sm font-medium leading-6 text-white/95 drop-shadow-[0_2px_8px_rgba(0,0,0,0.2)] sm:text-base sm:leading-7 lg:text-lg"
              >
                We bring media, entertainment, technology, and entrepreneurship together to move Africa&apos;s creative future forward.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
              >
                <Link
                  href="/companies"
                  prefetch={false}
                  className="group inline-flex items-center gap-2.5 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#36BEA3] hover:text-white"
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
                  className="inline-flex items-center gap-2.5 rounded-full border border-white/60 bg-white/15 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/30"
                >
                  <Play size={16} fill="currentColor" />
                  Discover CBM
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}