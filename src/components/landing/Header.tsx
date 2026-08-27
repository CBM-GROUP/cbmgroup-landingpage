"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { navItems } from "@/data/site";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <nav className="flex h-16 items-center justify-between rounded-full border border-white/10 bg-black/60 px-5 backdrop-blur-xl">
          <Link href="/" className="text-xl font-black tracking-tight text-white">
            CBM<span className="text-cyan-400">.</span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-white/60 transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-cyan-300 md:block"
          >
            Connect
          </a>

          <button
            onClick={() => setOpen((value) => !value)}
            className="text-white md:hidden"
            aria-label="Toggle navigation"
          >
            {open ? <X /> : <Menu />}
          </button>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-2 rounded-3xl border border-white/10 bg-black/90 p-5 backdrop-blur-xl md:hidden"
            >
              <div className="flex flex-col gap-5">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="text-white/70 hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}

                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="rounded-full bg-white px-5 py-3 text-center font-semibold text-black"
                >
                  Connect
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}