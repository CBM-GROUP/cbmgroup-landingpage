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
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <nav className="flex flex-col items-center rounded-half border border-white/10 bg-white px-5 py-3 w-full backdrop-blur-xl">
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

            <div className="flex-1 flex justify-center border-b-2">
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
                  className={`text-md transition hover:black-white ${isActive ? "text-black" : "text-black"}`}
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
              className="mt-2 rounded-3xl border border-white/10 bg-black/90 p-5 backdrop-blur-xl md:hidden"
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
                      className={`text-base transition ${isActive ? "text-teal-400" : "text-white/70"} hover:text-white`}
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