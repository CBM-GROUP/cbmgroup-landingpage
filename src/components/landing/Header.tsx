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
        <nav className="flex w-full flex-col items-center rounded-3xl border border-gray-200 bg-white px-5 py-3 shadow-lg shadow-black/10 backdrop-blur-xl">
          <div className="w-full flex items-center justify-between">
            <div className="flex items-center">
              <button
                onClick={() => setOpen((value) => !value)}
                className="text-black md:hidden"
                aria-label="Toggle navigation"
              >
                {open ? <X /> : <Menu />}
              </button>
            </div>

            <div className="flex flex-1 justify-center border-b-2 border-brand">
              <Link href="/" prefetch={false} className="inline-flex items-center">
                <img src="/logo.png" alt="CBM" className="h-15 w-auto" />
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
                  className={`text-md transition hover:text-brand-text ${isActive ? "text-brand-text" : "text-black"}`}
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
              className="mt-2 rounded-3xl border border-gray-700 bg-gray-900 p-5 shadow-xl shadow-black/20 backdrop-blur-xl md:hidden"
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
                      className={`text-base transition ${isActive ? "text-teal-300" : "text-white/70"} hover:text-teal-100`}
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