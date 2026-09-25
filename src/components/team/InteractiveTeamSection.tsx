"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  RotateCw,
  Code2,
  Palette,
  Crown,
  Quote,
  ShieldCheck,
  Wrench,
  Sparkles,
} from "lucide-react";
import { TeamMember } from "@/types";

interface InteractiveTeamCardProps {
  member: TeamMember;
  index: number;
}

const departmentIcons: Record<string, typeof Crown> = {
  Leadership: Crown,
  Technology: Code2,
  "Creative & Media": Palette,
};

const departmentColors: Record<string, string> = {
  Leadership: "from-amber-500 to-orange-600",
  Technology: "from-cyan-500 to-blue-600",
  "Creative & Media": "from-teal-500 to-emerald-600",
};

export function InteractiveTeamCard({
  member,
  index,
}: InteractiveTeamCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setRotate({
      x: ((y - rect.height / 2) / rect.height) * -5,
      y: ((x - rect.width / 2) / rect.width) * 5,
    });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleFlip = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setIsFlipped(!isFlipped);
  };

  const DeptIcon = member.department ? departmentIcons[member.department] || Crown : Crown;
  const deptGrad = member.department ? departmentColors[member.department] || "from-teal-500 to-emerald-600" : "from-teal-500 to-emerald-600";

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative h-[490px] w-full max-w-[330px] mx-auto select-none [perspective:1200px]"
    >
      {/* 3D Flip Container */}
      <motion.div
        animate={{
          rotateY: isFlipped ? 180 : 0,
          rotateX: isHovered ? rotate.x : 0,
        }}
        transition={{
          rotateY: { duration: 0.6, ease: [0.23, 1, 0.32, 1] },
          rotateX: { duration: 0.15, ease: "easeOut" },
        }}
        className="relative h-full w-full [transform-style:preserve-3d]"
      >
        {/* ── FRONT: Vertical Full-Image Background Card ── */}
        <div
          className={`absolute inset-0 flex flex-col justify-between overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-900 p-5 shadow-2xl [backface-visibility:hidden] ${isFlipped ? "pointer-events-none select-none z-0" : "pointer-events-auto z-10"
            }`}
        >
          {/* Background Image - Clear & Bright */}
          {member.avatarImage ? (
            <img
              src={member.avatarImage}
              alt={member.name}
              className="pointer-events-none absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
            />
          ) : (
            <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${member.avatarColor || "from-teal-700 via-slate-900 to-black"}`} />
          )}

          {/* Clean Bottom Scrim - Only over the bottom 40% for text readability */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 via-35% to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/50 to-transparent" />

          {/* Top Row: Department Badge & Flip Action */}
          <div className="relative z-10 flex items-center justify-between">
            <span className={`inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-br ${deptGrad} px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-white shadow-lg backdrop-blur-md`}>
              <DeptIcon className="h-3 w-3" />
              {member.department || "Core"}
            </span>

            <button
              type="button"
              onClick={handleFlip}
              className="cursor-pointer flex items-center gap-1.5 rounded-xl border border-white/30 bg-black/60 px-3 py-1.5 text-[11px] font-semibold text-white shadow-lg backdrop-blur-md transition-all hover:border-white/60 hover:bg-black/80 active:scale-95"
            >
              <span>Profile</span>
              <RotateCw className="h-3 w-3 transition-transform duration-300 group-hover:rotate-180" />
            </button>
          </div>

          {/* Bottom Content Panel */}
          <div className="relative z-10 mt-auto pt-4">
            <h3 className="line-clamp-1 text-xl font-bold tracking-tight text-white drop-shadow-md">
              {member.name}
            </h3>

            <span className={`mt-1 block text-xs font-semibold uppercase tracking-[0.16em] bg-gradient-to-r ${deptGrad} bg-clip-text text-transparent`}>
              {member.role}
            </span>

            <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-slate-200 drop-shadow">
              {member.bio}
            </p>
          </div>
        </div>

        {/* ── BACK: Clean Executive Dossier ── */}
        <div
          className={`absolute inset-0 flex flex-col justify-between overflow-hidden rounded-[2rem] border border-slate-700/80 bg-slate-950 p-6 [backface-visibility:hidden] [transform:rotateY(180deg)] ${isFlipped ? "pointer-events-auto z-10" : "pointer-events-none select-none z-0"
            }`}
        >
          {member.avatarImage && (
            <img
              src={member.avatarImage}
              alt=""
              className="pointer-events-none absolute inset-0 h-full w-full object-cover object-top opacity-10 blur-md scale-110"
            />
          )}
          <div className="pointer-events-none absolute inset-0 bg-[#090e13]/94" />
          <div
            className="pointer-events-none absolute inset-0 opacity-10"
            style={{ backgroundImage: "radial-gradient(#14b8a6 1px, transparent 1px)", backgroundSize: "18px 18px" }}
          />

          <div className="relative z-10 flex h-full flex-col justify-between">
            {/* Header */}
            <div>
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="h-3.5 w-3.5 text-teal-400" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-teal-400">
                    MEMBER PROFILE #{String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleFlip}
                  className="cursor-pointer flex items-center gap-1 rounded-lg border border-slate-700 bg-slate-800/80 px-2.5 py-1 text-[10px] font-medium text-slate-300 transition-colors hover:bg-slate-700 hover:text-white"
                  title="Close Profile"
                >
                  <RotateCw className="h-2.5 w-2.5" />
                  <span>Close</span>
                </button>
              </div>

              {/* Name & Role */}
              <div className="mt-4">
                <h4 className="text-lg font-bold text-white">{member.name}</h4>
                <p className="text-xs font-medium text-teal-400">{member.role}</p>
              </div>

              {/* Quote / Statement */}
              <div className="mt-4 flex items-start gap-2.5 rounded-2xl bg-slate-900/80 p-3.5 border border-slate-800/80">
                <Quote className="h-4 w-4 shrink-0 rotate-180 text-teal-500/80 mt-0.5" />
                <p className="text-xs italic leading-relaxed text-slate-300">
                  {member.quote || "Pushing the boundary of African storytelling and innovation."}
                </p>
              </div>

              {/* Focus Tools / Competencies */}
              {member.tools && member.tools.length > 0 && (
                <div className="mt-4">
                  <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-2">
                    <Wrench className="h-3 w-3 text-teal-400" />
                    <span>Focus & Expertise</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {member.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-lg border border-teal-500/20 bg-teal-950/50 px-2.5 py-1 text-[11px] font-medium text-teal-200"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Back controls */}
            <div className="flex items-center justify-between border-t border-slate-800/80 pt-4">
              <span className={`rounded-md bg-gradient-to-br ${deptGrad} px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-white`}>
                {member.department || "Core"}
              </span>
              <button
                type="button"
                onClick={handleFlip}
                className="cursor-pointer flex items-center gap-1.5 rounded-xl border border-teal-500/40 bg-teal-500/15 px-4 py-2 text-xs font-semibold text-teal-300 transition-all hover:bg-teal-500/25 active:scale-95"
              >
                <span>Flip Back</span>
                <RotateCw className="h-3 w-3" />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

interface InteractiveTeamSectionProps {
  members: TeamMember[];
}

export default function InteractiveTeamSection({ members }: InteractiveTeamSectionProps) {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const departments = ["All", "Leadership", "Technology", "Creative & Media"];

  const filteredMembers = members.filter((m) =>
    activeFilter === "All" ? true : m.department === activeFilter
  );

  return (
    <div className="relative">
      {/* ── Controls Bar: Clean Filter Bar ── */}
      <div className="mb-8 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-800 bg-[#0c1218] px-5 py-4">
        {/* Filter tabs */}
        <div className="flex flex-wrap items-center gap-2">
          {departments.map((dept) => {
            const isActive = activeFilter === dept;
            const count = dept === "All" ? members.length : members.filter((m) => m.department === dept).length;
            const color = departmentColors[dept];
            return (
              <button
                key={dept}
                type="button"
                onClick={() => setActiveFilter(dept)}
                className={`flex items-center gap-2 rounded-xl px-3.5 py-1.5 text-xs font-semibold transition-all duration-200 active:scale-95 ${isActive
                    ? "bg-white text-slate-900 shadow-md"
                    : "border border-white/10 bg-white/5 text-slate-400 hover:border-white/20 hover:bg-white/10 hover:text-white"
                  }`}
              >
                <span>{dept}</span>
                <span className={`rounded-full px-1.5 py-0.5 text-[9px] font-bold ${isActive
                    ? color ? `bg-gradient-to-r ${color} text-white` : "bg-teal-500 text-white"
                    : "bg-white/10 text-slate-400"
                  }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Member count indicator */}
        <div className="text-xs text-slate-400">
          Showing <span className="font-semibold text-white">{filteredMembers.length}</span> team members
        </div>
      </div>

      {/* ── Team Cards: Vertical Portrait Grid ── */}
      <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-center">
        <AnimatePresence>
          {filteredMembers.map((member, index) => (
            <motion.div
              layout
              key={member.id}
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
            >
              <InteractiveTeamCard
                member={member}
                index={index}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* ── Subtle Helper Hint ── */}
      <div className="mt-8 flex items-center justify-center text-[11px] text-slate-400">
        <span className="flex items-center gap-1.5">
          <RotateCw className="h-3.5 w-3.5 text-teal-500" /> Click <strong className="text-slate-300">Profile</strong> on any card to view detailed background & expertise
        </span>
      </div>
    </div>
  );
}
