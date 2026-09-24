"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Zap,
  Briefcase,
  RotateCw,
  Flame,
  Volume2,
  VolumeX,
  Shuffle,
  Coffee,
  Code2,
  Palette,
  Crown,
  Check,
  Disc3,
  Quote,
} from "lucide-react";
import { TeamMember } from "@/types";

// Safe Web Audio API sound generator for tactile feedback
function playSound(type: "pop" | "flip" | "cheer" | "swoosh", enabled: boolean) {
  if (!enabled || typeof window === "undefined") return;
  try {
    const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    if (ctx.state === "suspended") {
      ctx.resume();
    }
    const now = ctx.currentTime;

    if (type === "pop") {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(480, now);
      osc.frequency.exponentialRampToValueAtTime(800, now + 0.08);
      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.08);
    } else if (type === "flip") {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(320, now);
      osc.frequency.exponentialRampToValueAtTime(600, now + 0.12);
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.12);
    } else if (type === "cheer") {
      [523.25, 659.25, 783.99, 1046.5].forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, now + i * 0.05);
        gain.gain.setValueAtTime(0.08, now + i * 0.05);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.05 + 0.18);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + i * 0.05);
        osc.stop(now + i * 0.05 + 0.18);
      });
    } else if (type === "swoosh") {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(700, now);
      osc.frequency.exponentialRampToValueAtTime(300, now + 0.15);
      gain.gain.setValueAtTime(0.1, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.15);
    }
  } catch {
    // Audio context may be restricted by browser autoplay policy
  }
}

interface Particle {
  id: number;
  x: number;
  y: number;
  emoji: string;
}

interface InteractiveTeamCardProps {
  member: TeamMember;
  index: number;
  globalVibe: boolean;
  soundEnabled: boolean;
  isSpotlighted: boolean;
}

const departmentIcons: Record<string, typeof Crown> = {
  Leadership: Crown,
  Technology: Code2,
  "Creative & Media": Palette,
};

export function InteractiveTeamCard({
  member,
  index,
  globalVibe,
  soundEnabled,
  isSpotlighted,
}: InteractiveTeamCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [localVibe, setLocalVibe] = useState(false);
  const [kudos, setKudos] = useState(12 + (index * 7) % 23);
  const [hasCheered, setHasCheered] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Sync with global vibe state
  useEffect(() => {
    setLocalVibe(globalVibe);
  }, [globalVibe]);

  // 3D Tilt calculation
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    setRotate({ x: rotateX, y: rotateY });
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
    playSound("flip", soundEnabled);
  };

  const handleKudos = (e: React.MouseEvent) => {
    e.stopPropagation();
    setKudos((prev) => prev + 1);
    setHasCheered(true);
    playSound("cheer", soundEnabled);

    // Spawn floating particle burst
    const emojis = ["✋", "🔥", "⚡", "✨", "☕", "🚀"];
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    const newParticle: Particle = {
      id: Date.now() + Math.random(),
      x: (Math.random() - 0.5) * 60,
      y: -20 - Math.random() * 30,
      emoji: randomEmoji,
    };

    setParticles((prev) => [...prev.slice(-6), newParticle]);
    setTimeout(() => {
      setParticles((prev) => prev.filter((p) => p.id !== newParticle.id));
    }, 1200);
  };

  const isVibeActive = localVibe;
  const DeptIcon = member.department ? departmentIcons[member.department] || Crown : Crown;

  // Split initials
  const initials = member.name
    .split(" ")
    .map((w) => w[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("");

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`group relative h-[470px] w-full select-none [perspective:1200px] ${
        isSpotlighted ? "z-20 ring-4 ring-teal-400 ring-offset-4 ring-offset-[#f5f5f1] rounded-[2rem]" : ""
      }`}
    >
      {/* Floating Particles for Kudos */}
      <div className="pointer-events-none absolute inset-0 z-50 overflow-visible">
        <AnimatePresence>
          {particles.map((p) => (
            <motion.span
              key={p.id}
              initial={{ opacity: 1, scale: 0.6, x: "50%", y: "70%" }}
              animate={{
                opacity: 0,
                scale: 1.5,
                x: `calc(50% + ${p.x}px)`,
                y: `calc(30% + ${p.y}px)`,
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute text-2xl"
            >
              {p.emoji}
            </motion.span>
          ))}
        </AnimatePresence>
      </div>

      {/* The 3D Flipping Card Container */}
      <motion.div
        animate={{
          rotateY: isFlipped ? 180 : 0,
          rotateX: isHovered ? rotate.x : 0,
          rotateZ: 0,
        }}
        transition={{
          rotateY: { duration: 0.6, ease: [0.23, 1, 0.32, 1] },
          rotateX: { duration: 0.15, ease: "easeOut" },
        }}
        className="relative h-full w-full rounded-[2rem] [transform-style:preserve-3d] transition-shadow duration-300 hover:shadow-[0_24px_60px_rgba(13,148,136,0.14)]"
      >
        {/* ====================================================
            FRONT OF CARD: Executive & Studio Badge
        ==================================================== */}
        <div
          className={`absolute inset-0 flex flex-col justify-between overflow-hidden rounded-[2rem] border bg-white p-6 shadow-[0_16px_45px_rgba(15,23,42,0.04)] [backface-visibility:hidden] transition-colors duration-500 ${
            isVibeActive
              ? "border-teal-200 bg-gradient-to-b from-teal-50/70 via-white to-white"
              : "border-slate-200"
          }`}
        >
          {/* Holographic dynamic spotlight glare */}
          {isHovered && (
            <div
              className="pointer-events-none absolute -inset-full opacity-35 transition-opacity duration-300"
              style={{
                background: `radial-gradient(circle at ${50 + rotate.y * 3}% ${
                  50 - rotate.x * 3
                }%, rgba(20, 184, 166, 0.22), transparent 60%)`,
              }}
            />
          )}

          {/* Top Bar: Department & Work/Vibe Segmented Switch */}
          <div className="relative z-10 flex items-center justify-between gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200/80 bg-slate-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-slate-600 shadow-sm">
              <DeptIcon className="h-3.5 w-3.5 text-teal-600" />
              {member.department || "Core"}
            </span>

            {/* Micro Toggle: Work vs Vibe */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setLocalVibe(!localVibe);
                playSound("pop", soundEnabled);
              }}
              title="Toggle Work vs Vibe persona"
              className={`flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium transition-all duration-300 active:scale-95 ${
                isVibeActive
                  ? "border-teal-400 bg-teal-500 text-white shadow-[0_0_15px_rgba(20,184,166,0.4)]"
                  : "border-slate-200 bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {isVibeActive ? (
                <>
                  <Zap className="h-3 w-3 animate-pulse text-amber-300 fill-amber-300" />
                  <span>Vibe Mode</span>
                </>
              ) : (
                <>
                  <Briefcase className="h-3 w-3 text-slate-500" />
                  <span>Work Mode</span>
                </>
              )}
            </button>
          </div>

          {/* Center: Avatar & Persona */}
          <div className="relative z-10 mt-3 flex flex-col items-center text-center">
            {/* Interactive Avatar Container */}
            <div className="relative mb-3 flex items-center justify-center">
              {/* Outer pulsing halo */}
              <div
                className={`absolute -inset-2 rounded-full opacity-60 blur-md transition-all duration-500 ${
                  isVibeActive
                    ? "bg-gradient-to-tr from-teal-400 via-amber-300 to-rose-400 animate-spin [animation-duration:8s]"
                    : "bg-teal-100/60"
                }`}
              />

              {/* Main Avatar Circle */}
              <div
                className={`relative flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br ${
                  member.avatarColor || "from-teal-600 to-emerald-800"
                } text-2xl font-bold tracking-tight text-white shadow-lg transition-transform duration-300 group-hover:scale-105 ring-2 ring-white`}
              >
                {member.avatarImage ? (
                  <img
                    src={member.avatarImage}
                    alt={member.name}
                    className="h-full w-full object-cover object-center"
                  />
                ) : (
                  <span>{initials}</span>
                )}

                {/* Fun Vibe badge overlay */}
                {isVibeActive && (
                  <motion.div
                    initial={{ scale: 0, rotate: -20 }}
                    animate={{ scale: 1, rotate: 0 }}
                    className="absolute -bottom-1 -right-1 z-20 flex h-7 w-7 items-center justify-center rounded-full bg-slate-950 text-sm shadow-md ring-2 ring-white"
                  >
                    🕶️
                  </motion.div>
                )}
              </div>
            </div>

            {/* Member Name */}
            <h3 className="line-clamp-1 text-lg font-bold tracking-[-0.03em] text-slate-900 sm:text-xl">
              {member.name}
            </h3>

            {/* Dynamic Role / Alter Ego */}
            <AnimatePresence mode="wait">
              {isVibeActive ? (
                <motion.div
                  key="vibe-role"
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  className="mt-1 flex flex-col items-center"
                >
                  <span className="inline-flex items-center gap-1 rounded-md bg-amber-100 px-2 py-0.5 text-xs font-semibold text-amber-900">
                    ⚡ {member.vibeRole || "Secret Agent"}
                  </span>
                  <p className="mt-2 line-clamp-2 px-1 text-xs text-slate-600 italic">
                    &ldquo;{member.superpower}&rdquo;
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="work-role"
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  className="mt-1 flex flex-col items-center"
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-teal-700">
                    {member.role}
                  </span>
                  <p className="mt-2 line-clamp-2 px-1 text-xs leading-5 text-slate-500">
                    {member.bio}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Music pill in Vibe mode */}
            {isVibeActive && member.favoriteTrack && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-2.5 flex items-center gap-2 rounded-full border border-teal-200/80 bg-white/90 px-3 py-1 text-[11px] text-teal-800 shadow-sm"
              >
                <Disc3 className="h-3 w-3 animate-spin [animation-duration:4s] text-teal-600" />
                <span className="line-clamp-1 font-medium">{member.favoriteTrack}</span>
                {/* Micro equalizer animation */}
                <div className="flex items-end gap-0.5 h-2.5">
                  <span className="w-0.5 h-full bg-teal-500 rounded-full animate-pulse" />
                  <span className="w-0.5 h-2 bg-teal-400 rounded-full animate-ping" />
                  <span className="w-0.5 h-1.5 bg-teal-600 rounded-full animate-pulse" />
                </div>
              </motion.div>
            )}
          </div>

          {/* Bottom Controls: Kudos & Flip Button */}
          <div className="relative z-10 mt-3 flex items-center justify-between border-t border-slate-100 pt-3">
            {/* Give Kudos Button */}
            <button
              type="button"
              onClick={handleKudos}
              title="Give props to this team member"
              className={`flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition-all active:scale-90 ${
                hasCheered
                  ? "border-amber-300 bg-amber-50 text-amber-800"
                  : "border-slate-200 bg-white text-slate-700 hover:border-teal-300 hover:bg-teal-50"
              }`}
            >
              <span className="text-sm">✋</span>
              <span className="font-semibold text-slate-900">{kudos}</span>
              <span className="hidden text-[10px] text-slate-500 sm:inline">props</span>
            </button>

            {/* Flip Card Action */}
            <button
              type="button"
              onClick={handleFlip}
              className="flex items-center gap-1.5 rounded-full bg-slate-900 px-3.5 py-1.5 text-xs font-medium text-white shadow-sm transition-all hover:bg-teal-700 active:scale-95"
            >
              <span>Dossier</span>
              <RotateCw className="h-3 w-3 transition-transform group-hover:rotate-180" />
            </button>
          </div>
        </div>

        {/* ====================================================
            BACK OF CARD: Collectible Dossier & Creative RPG Stats
        ==================================================== */}
        <div
          className="absolute inset-0 flex flex-col justify-between overflow-hidden rounded-[2rem] border border-slate-800 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 p-6 text-white shadow-2xl [backface-visibility:hidden] [transform:rotateY(180deg)]"
        >
          {/* Subtle grid pattern */}
          <div
            className="pointer-events-none absolute inset-0 opacity-15"
            style={{
              backgroundImage:
                "radial-gradient(#14b8a6 1px, transparent 1px), radial-gradient(#14b8a6 1px, transparent 1px)",
              backgroundSize: "20px 20px",
              backgroundPosition: "0 0, 10px 10px",
            }}
          />

          {/* Dossier Header */}
          <div className="relative z-10 flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex items-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5 text-teal-400" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-teal-400">
                DOSSIER #0{index + 1}
              </span>
            </div>
            <span className="rounded bg-teal-950/80 px-2 py-0.5 font-mono text-[10px] text-teal-300 border border-teal-800/60">
              TOP SECRET
            </span>
          </div>

          {/* Dossier Quote / Motto */}
          <div className="relative z-10 my-2">
            <div className="flex items-start gap-2">
              <Quote className="h-4 w-4 shrink-0 text-teal-400 rotate-180 opacity-60" />
              <p className="text-xs italic text-slate-300 leading-relaxed">
                {member.quote || "Pushing the boundary of African storytelling."}
              </p>
            </div>
          </div>

          {/* Creative Stat Bars */}
          <div className="relative z-10 space-y-2.5">
            <span className="block font-mono text-[10px] uppercase tracking-wider text-slate-400">
              RPG VIBE STATS
            </span>

            {/* Creativity */}
            <div>
              <div className="flex justify-between text-[11px] font-medium text-slate-300">
                <span className="flex items-center gap-1">
                  <Palette className="h-3 w-3 text-amber-400" /> Creativity
                </span>
                <span className="font-mono text-teal-400">{member.stats?.creativity || 95}%</span>
              </div>
              <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${member.stats?.creativity || 95}%` }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="h-full rounded-full bg-gradient-to-r from-amber-400 to-teal-400"
                />
              </div>
            </div>

            {/* Caffeine Dependency */}
            <div>
              <div className="flex justify-between text-[11px] font-medium text-slate-300">
                <span className="flex items-center gap-1">
                  <Coffee className="h-3 w-3 text-amber-600" /> Caffeine Drive
                </span>
                <span className="font-mono text-teal-400">{member.stats?.caffeine || 92}%</span>
              </div>
              <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${member.stats?.caffeine || 92}%` }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="h-full rounded-full bg-gradient-to-r from-amber-600 to-orange-400"
                />
              </div>
            </div>

            {/* Tech / Craft Sorcery */}
            <div>
              <div className="flex justify-between text-[11px] font-medium text-slate-300">
                <span className="flex items-center gap-1">
                  <Code2 className="h-3 w-3 text-cyan-400" /> Craft Sorcery
                </span>
                <span className="font-mono text-teal-400">{member.stats?.tech || 90}%</span>
              </div>
              <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${member.stats?.tech || 90}%` }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                />
              </div>
            </div>

            {/* Vibe Check */}
            <div>
              <div className="flex justify-between text-[11px] font-medium text-slate-300">
                <span className="flex items-center gap-1">
                  <Flame className="h-3 w-3 text-rose-400" /> Vibe Check
                </span>
                <span className="font-mono text-teal-400">{member.stats?.vibe || 100}%</span>
              </div>
              <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${member.stats?.vibe || 100}%` }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="h-full rounded-full bg-gradient-to-r from-rose-500 to-teal-400"
                />
              </div>
            </div>
          </div>

          {/* Tools of the trade */}
          <div className="relative z-10 mt-2">
            <span className="block font-mono text-[10px] uppercase tracking-wider text-slate-400 mb-1.5">
              WEAPONS OF CHOICE
            </span>
            <div className="flex flex-wrap gap-1.5">
              {member.tools?.map((tool) => (
                <span
                  key={tool}
                  className="rounded-md border border-slate-800 bg-slate-900/90 px-2 py-0.5 font-mono text-[10px] text-teal-300"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Back Controls */}
          <div className="relative z-10 flex items-center justify-between border-t border-slate-800 pt-3">
            <a
              href={`mailto:careers@cbmgroup.africa?subject=Hello%20${encodeURIComponent(
                member.name
              )}%20via%20CBM%20Website`}
              className="text-xs text-teal-400 hover:text-teal-300 font-medium underline underline-offset-4 transition-colors"
            >
              Say hello →
            </a>

            <button
              type="button"
              onClick={handleFlip}
              className="flex items-center gap-1.5 rounded-full border border-teal-500/40 bg-teal-500/10 px-3.5 py-1.5 text-xs font-medium text-teal-300 transition-all hover:bg-teal-500/20 active:scale-95"
            >
              <span>Flip Back</span>
              <RotateCw className="h-3 w-3" />
            </button>
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
  const [globalVibe, setGlobalVibe] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [spotlightedId, setSpotlightedId] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const departments = ["All", "Leadership", "Technology", "Creative & Media"];

  const filteredMembers = members.filter((m) => {
    if (activeFilter === "All") return true;
    return m.department === activeFilter;
  });

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const handleGlobalVibeToggle = () => {
    const nextState = !globalVibe;
    setGlobalVibe(nextState);
    playSound(nextState ? "cheer" : "pop", soundEnabled);
    triggerToast(
      nextState
        ? "⚡ Vibe Mode Activated for all team members!"
        : "💼 Switched back to Professional Mode"
    );
  };

  const handleSurpriseMe = () => {
    playSound("swoosh", soundEnabled);
    const randomIndex = Math.floor(Math.random() * members.length);
    const luckyMember = members[randomIndex];
    setSpotlightedId(luckyMember.id);
    triggerToast(`🎲 Spotlight on ${luckyMember.name.split(" ")[0]}!`);

    setTimeout(() => {
      setSpotlightedId(null);
    }, 3500);
  };

  return (
    <div className="relative">
      {/* Interactive Controls Bar */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between rounded-2xl border border-slate-200/90 bg-white/80 p-4 backdrop-blur-md shadow-sm">
        {/* Department Filter Tabs */}
        <div className="flex flex-wrap items-center gap-1.5">
          {departments.map((dept) => {
            const isActive = activeFilter === dept;
            const count =
              dept === "All"
                ? members.length
                : members.filter((m) => m.department === dept).length;

            return (
              <button
                key={dept}
                type="button"
                onClick={() => {
                  setActiveFilter(dept);
                  playSound("pop", soundEnabled);
                }}
                className={`flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all duration-200 active:scale-95 ${
                  isActive
                    ? "bg-slate-900 text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                }`}
              >
                <span>{dept}</span>
                <span
                  className={`rounded-full px-1.5 py-0.2 text-[10px] ${
                    isActive ? "bg-teal-500 text-slate-950 font-bold" : "bg-slate-200 text-slate-500"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Fun Action Buttons */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Surprise Me / Roulette Button */}
          <button
            type="button"
            onClick={handleSurpriseMe}
            title="Pick a random team member"
            className="flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm transition-all hover:border-teal-400 hover:bg-teal-50/50 active:scale-95"
          >
            <Shuffle className="h-3.5 w-3.5 text-teal-600" />
            <span>Surprise Me</span>
          </button>

          {/* Global Vibe Mode Switch */}
          <button
            type="button"
            onClick={handleGlobalVibeToggle}
            className={`flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-medium transition-all duration-300 active:scale-95 ${
              globalVibe
                ? "border-teal-400 bg-teal-600 text-white shadow-[0_0_15px_rgba(20,184,166,0.35)]"
                : "border-slate-200 bg-white text-slate-700 hover:border-teal-300"
            }`}
          >
            <Zap className={`h-3.5 w-3.5 ${globalVibe ? "text-amber-300 fill-amber-300 animate-bounce" : "text-amber-500"}`} />
            <span>{globalVibe ? "Party Mode ON" : "Vibe Mode"}</span>
          </button>

          {/* Sound FX Toggle */}
          <button
            type="button"
            onClick={() => {
              const next = !soundEnabled;
              setSoundEnabled(next);
              playSound("pop", next);
            }}
            title={soundEnabled ? "Mute interactive audio feedback" : "Enable sound FX"}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition-all hover:bg-slate-50 active:scale-95"
          >
            {soundEnabled ? (
              <Volume2 className="h-3.5 w-3.5 text-teal-600" />
            ) : (
              <VolumeX className="h-3.5 w-3.5 text-slate-400" />
            )}
          </button>
        </div>
      </div>

      {/* Floating Action Toast */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.95 }}
            className="pointer-events-none fixed top-6 left-1/2 z-50 -translate-x-1/2 rounded-full border border-teal-200 bg-slate-900/90 px-4 py-2 text-xs font-medium text-white shadow-xl backdrop-blur-md"
          >
            <span className="flex items-center gap-2">
              <Sparkles className="h-3.5 w-3.5 text-amber-400" />
              {toastMessage}
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Team Cards Grid */}
      <motion.div
        layout
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
      >
        <AnimatePresence>
          {filteredMembers.map((member, index) => (
            <motion.div
              layout
              key={member.id}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <InteractiveTeamCard
                member={member}
                index={index}
                globalVibe={globalVibe}
                soundEnabled={soundEnabled}
                isSpotlighted={spotlightedId === member.id}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Interactive Helper Hint */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
        <span className="flex items-center gap-1.5">
          <RotateCw className="h-3.5 w-3.5 text-teal-600" /> Click <strong>Dossier</strong> to flip card
        </span>
        <span className="flex items-center gap-1.5">
          <span>✋</span> Click <strong>Props</strong> to cheer
        </span>
        <span className="flex items-center gap-1.5">
          <Zap className="h-3.5 w-3.5 text-amber-500" /> Toggle <strong>Vibe Mode</strong> for alter egos
        </span>
      </div>
    </div>
  );
}
