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
        <nav className="flex w-full flex-col items-center rounded-[2rem] border border-slate-200 bg-white px-5 py-4 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur-xl">
          {/* Top Logo Container */}
          <div className="w-full flex items-center justify-between gap-4">
            <div className="flex items-center">
              <button
                onClick={() => setOpen((value) => !value)}
                className="text-slate-900 md:hidden"
                aria-label="Toggle navigation"
              >
                {open ? <X /> : <Menu />}
              </button>
            </div>

            <div className="flex flex-1 p-1 justify-center border-b border-slate-100/80 pb-3">
              <Link href="/" prefetch={false} className="inline-flex items-center">
                <img src="/logo.png" alt="CBM Group logo" className="h-13 w-auto" />
              </Link>
            </div>
          </div>

          {/* Navigation Links Row - Spaced between Companies, About Us, Purpose, Work At CBM */}
          <div className="mt-3.5 w-full hidden md:flex items-center justify-center gap-12 sm:gap-16 lg:gap-24">
            {navItems.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  prefetch={false}
                  className={`text-base font-medium tracking-tight transition ${
                    isActive ? "text-slate-950 font-semibold" : "text-slate-600 hover:text-slate-950"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-2 rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-[0_16px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl md:hidden"
            >
              <div className="flex flex-col gap-4">
                {navItems.map((item) => {
                  const isActive = pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href));
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      prefetch={false}
                      onClick={() => setOpen(false)}
                      className={`text-base font-medium transition ${
                        isActive ? "text-slate-950 font-semibold" : "text-slate-600 hover:text-slate-950"
                      }`}
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