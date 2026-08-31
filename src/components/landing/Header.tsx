"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { navItems } from "@/data/site";
import { usePathname } from "next/navigation";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky inset-x-0 top-0 z-[100] shrink-0 isolate">
      <div className="mx-auto w-full max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <nav className="flex w-full flex-col items-center rounded-[2rem] border border-white/20 bg-[#36BEA3] px-5 py-4 shadow-[0_18px_50px_rgba(5,80,76,0.18)] backdrop-blur-xl">
          <div className="w-full flex items-center justify-between gap-4">
            <div className="flex items-center">
              <button
                onClick={() => setOpen((value) => !value)}
                className="text-white md:hidden"
                aria-label="Toggle navigation"
              >
                {open ? <X /> : <Menu />}
              </button>
            </div>

            <div className="flex flex-1 justify-center">
              <Link href="/" prefetch={false} className="inline-flex items-center rounded-full border border-white/20 bg-white/95 p-2.5 shadow-[inset_0_0_18px_rgba(255,255,255,0.12)]">
                <img src="/logo.png" alt="CBM Group logo" className="h-12 w-auto md:h-14" />
              </Link>
            </div>
          </div>

          <div className="mt-3 w-full hidden md:flex justify-center items-center gap-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href || pathname?.startsWith(item.href + "/");
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  prefetch={false}
                  className={`text-md font-medium transition ${isActive ? "text-white" : "text-white/80 hover:text-white"}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-2 rounded-[1.5rem] border border-white/20 bg-[#0d9a95]/95 p-5 shadow-[0_16px_40px_rgba(5,80,76,0.2)] backdrop-blur-xl md:hidden"
            >
              <div className="flex flex-col gap-5">
                {navItems.map((item) => {
                  const isActive = pathname === item.href || pathname?.startsWith(item.href + "/");
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      prefetch={false}
                      onClick={() => setOpen(false)}
                      className={`text-base font-medium transition ${isActive ? "text-white" : "text-white/75 hover:text-white"}`}
                    >
                      {item.label}
                    </Link>
                  );
                })}

                
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}