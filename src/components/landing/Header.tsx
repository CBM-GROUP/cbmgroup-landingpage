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

  const leftNavItems = navItems.slice(0, 2);
  const rightNavItems = navItems.slice(2);

  return (
    <header className="sticky inset-x-0 top-0 z-[100] shrink-0 isolate">
      <div className="mx-auto w-full max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <nav className="rounded-[2rem] border border-slate-200/80 bg-white/90 px-5 py-3.5 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:px-8">
          {/* Desktop Layout: Split Navigation around Center Logo */}
          <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] md:items-center">
            {/* Left Nav Links */}
            <div className="flex items-center justify-end gap-6 lg:gap-10">
              {leftNavItems.map((item) => {
                const isActive = pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href));
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    prefetch={false}
                    className={`text-sm font-semibold tracking-tight transition-all duration-200 px-4 py-2 rounded-full ${
                      isActive
                        ? "text-slate-950 bg-slate-100 shadow-xs"
                        : "text-slate-600 hover:text-slate-950 hover:bg-slate-50"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            {/* Center Logo */}
            <div className="flex items-center justify-center px-6 lg:px-10">
              <Link href="/" prefetch={false} className="inline-flex items-center group">
                <img
                  src="/logo.png"
                  alt="CBM Group logo"
                  className="h-11 w-auto transition-transform duration-200 group-hover:scale-105"
                />
              </Link>
            </div>

            {/* Right Nav Links */}
            <div className="flex items-center justify-start gap-6 lg:gap-10">
              {rightNavItems.map((item) => {
                const isActive = pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href));
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    prefetch={false}
                    className={`text-sm font-semibold tracking-tight transition-all duration-200 px-4 py-2 rounded-full ${
                      isActive
                        ? "text-slate-950 bg-slate-100 shadow-xs"
                        : "text-slate-600 hover:text-slate-950 hover:bg-slate-50"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Mobile Header Bar */}
          <div className="flex items-center justify-between md:hidden">
            <Link href="/" prefetch={false} className="inline-flex items-center">
              <img src="/logo.png" alt="CBM Group logo" className="h-10 w-auto" />
            </Link>

            <button
              onClick={() => setOpen((value) => !value)}
              className="text-slate-900 p-2 rounded-xl hover:bg-slate-100 transition"
              aria-label="Toggle navigation"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
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
              <div className="flex flex-col gap-3">
                {navItems.map((item) => {
                  const isActive = pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href));
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      prefetch={false}
                      onClick={() => setOpen(false)}
                      className={`text-base font-semibold px-4 py-2.5 rounded-xl transition ${
                        isActive ? "text-slate-950 bg-slate-100" : "text-slate-600 hover:text-slate-950 hover:bg-slate-50"
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