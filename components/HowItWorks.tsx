"use client";

import { Hospital, Database, ShieldCheck, Pill, ArrowRight } from "lucide-react";
import { motion, Variants } from "framer-motion";

// Explicitly typing variants prevents the generic string inference error
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  },
};

export default function HowItWorks() {
  return (
    <section className="bg-slate-900 py-28 relative overflow-hidden">
      {/* Tailwind v4 Canonical scales optimized: h-150 w-150 */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-150 w-150 rounded-full bg-blue-600/10 blur-[150px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Platform Overview
          </p>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-white tracking-tight">
            One connected healthcare ecosystem.
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-400">
            Zensa captures operational data from hospitals, standardizes it and securely delivers relevant information to authorized stakeholders.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="grid gap-10 lg:grid-cols-4 items-center">
            
            {/* Hospital */}
            <motion.div variants={itemVariants} className="relative rounded-3xl border border-slate-800 bg-slate-950/50 p-8 shadow-2xl backdrop-blur-md text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10 border border-blue-500/20">
                <Hospital size={32} className="text-blue-400" />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-white">Hospitals</h3>
              <p className="mt-4 text-slate-400 leading-relaxed text-sm">
                Clinical, financial and operational workflows generate structured data.
              </p>
            </motion.div>

            {/* Animated Arrow */}
            <motion.div variants={itemVariants} className="hidden lg:flex items-center justify-center">
              <motion.div 
                animate={{ x: [0, 10, 0] }} 
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              >
                <ArrowRight size={40} className="text-slate-600" />
              </motion.div>
            </motion.div>

            {/* Data Platform (Centerpiece) - Tailwind v4 Gradient Fix applied */}
            <motion.div variants={itemVariants} className="relative rounded-3xl border border-cyan-500/30 bg-linear-to-br from-blue-900/40 to-cyan-900/40 p-8 text-center text-white shadow-[0_0_50px_-12px_rgba(6,182,212,0.25)] backdrop-blur-xl lg:col-span-2">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                <Database size={32} className="text-cyan-300" />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-cyan-50">Zensa Platform</h3>
              <p className="mt-4 leading-relaxed text-cyan-100/70 text-sm">
                Standardizes healthcare data, validates claims and coordinates information seamlessly across the entire ecosystem.
              </p>
            </motion.div>
          </div>

          {/* Bottom Row */}
          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            
            {/* Insurers */}
            <motion.div variants={itemVariants} className="group rounded-3xl border border-slate-800 bg-slate-950/50 p-8 shadow-xl backdrop-blur-md transition hover:border-green-500/30">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-500/10 border border-green-500/20 group-hover:bg-green-500/20 transition-colors">
                  <ShieldCheck size={28} className="text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Insurers</h3>
              </div>
              <p className="mt-6 leading-relaxed text-slate-400">
                Receive structured digital claims, supporting clinical information and policy validation to accelerate adjudication and reimbursement.
              </p>
            </motion.div>

            {/* Pharmaceutical */}
            <motion.div variants={itemVariants} className="group rounded-3xl border border-slate-800 bg-slate-950/50 p-8 shadow-xl backdrop-blur-md transition hover:border-purple-500/30">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-500/10 border border-purple-500/20 group-hover:bg-purple-500/20 transition-colors">
                  <Pill size={28} className="text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Pharmaceutical Industry</h3>
              </div>
              <p className="mt-6 leading-relaxed text-slate-400">
                Access anonymized and aggregated inventory and medicine consumption insights to improve forecasting, logistics and supply planning.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}