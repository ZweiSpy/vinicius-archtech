"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  featured?: boolean;
}

export function GlassCard({
  children,
  className = "",
  featured = false,
}: GlassCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`
        group relative overflow-hidden rounded-2xl
        border border-white/10 bg-white/[0.03] backdrop-blur-md
        p-6 transition-all duration-300
        hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/10
        ${featured ? "md:col-span-2 lg:col-span-2" : ""}
        ${className}
      `}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-indigo-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
