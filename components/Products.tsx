"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  Building2,
  ShieldCheck,
  Pill,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut" } 
  },
};

const editions = [
  {
    title: "Zensa Provider",
    subtitle: "Hospitals & Clinics",
    icon: Building2,
    borderHover: "hover:border-blue-500/40",
    iconBg: "bg-blue-500/10 border-blue-500/20 text-blue-400 group-hover:bg-blue-500/20",
    titleColor: "text-blue-400",
    hoverTitleColor: "group-hover:text-blue-300",
    description: "The complete operational platform covering clinical, financial, and administrative workflows for modern healthcare facilities.",
    benefits: [
      "Standardized clinical workflows",
      "Automated billing & invoicing",
      "Unified department operations",
    ],
    subEditionsTitle: "View Provider Editions",
    subEditions: [
      { name: "Zensa Standard", desc: "For independent private hospitals and clinics." },
      { name: "Zensa Public", desc: "For government healthcare and Ministries of Health." },
      { name: "Zensa Franchise", desc: "For hospital chains requiring centralized oversight." },
      { name: "Zensa Enterprise", desc: "For large health networks needing complex integrations." },
    ]
  },
  {
    title: "Zensa Payer",
    subtitle: "Health Insurers (HMOs)",
    icon: ShieldCheck,
    borderHover: "hover:border-green-500/40",
    iconBg: "bg-green-500/10 border-green-500/20 text-green-400 group-hover:bg-green-500/20",
    titleColor: "text-green-400",
    hoverTitleColor: "group-hover:text-green-300",
    description: "A dedicated portal for health insurers to securely receive structured claims, validate policies, and accelerate adjudication.",
    benefits: [
      "Real-time policy validation",
      "Structured digital claims",
      "AI-ready fraud detection",
    ],
  },
  {
    title: "Zensa Pharma",
    subtitle: "Pharmaceutical Industry",
    icon: Pill,
    borderHover: "hover:border-purple-500/40",
    iconBg: "bg-purple-500/10 border-purple-500/20 text-purple-400 group-hover:bg-purple-500/20",
    titleColor: "text-purple-400",
    hoverTitleColor: "group-hover:text-purple-300",
    description: "Actionable intelligence and visibility for pharmaceutical manufacturers and distributors to optimize healthcare supply chains.",
    benefits: [
      "Aggregated consumption insights",
      "Supply chain tracking",
      "Data-driven demand forecasting",
    ],
  },
];

function EditionCard({ edition }: { edition: any }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`group flex h-full flex-col rounded-3xl border border-slate-800 bg-slate-900/50 p-10 backdrop-blur-md transition-all duration-300 hover:shadow-2xl hover:bg-slate-900/80 ${edition.borderHover}`}>
      <div className={`flex h-16 w-16 items-center justify-center rounded-2xl border transition-colors ${edition.iconBg}`}>
        <edition.icon size={32} />
      </div>

      <h3 className={`mt-8 text-3xl font-bold transition-colors ${edition.titleColor} ${edition.hoverTitleColor}`}>
        {edition.title}
      </h3>

      <p className="mt-2 font-medium text-slate-300">
        {edition.subtitle}
      </p>

      <p className="mt-6 leading-relaxed text-slate-400">
        {edition.description}
      </p>

      {/* Benefits List - Changed flex-grow to grow per Tailwind v4 standards */}
      <div className="mt-8 space-y-3 grow">
        {edition.benefits.map((benefit: string, index: number) => (
          <div key={index} className="flex items-center gap-3">
            <CheckCircle2 size={18} className={edition.titleColor} />
            <span className="text-sm font-medium text-slate-300">{benefit}</span>
          </div>
        ))}
      </div>

      {/* Interactive Dropdown for Provider Tiers */}
      {edition.subEditions && (
        <div className="mt-8 pt-6 border-t border-slate-800/60">
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex w-full items-center justify-between font-semibold text-slate-400 hover:text-white transition-colors"
          >
            <span className="text-xs font-bold uppercase tracking-wider">{edition.subEditionsTitle}</span>
            <ChevronDown 
              size={18} 
              className={`transition-transform duration-300 ${isExpanded ? "rotate-180 text-blue-400" : ""}`} 
            />
          </button>
          
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="mt-4 space-y-3">
                  {edition.subEditions.map((sub: any) => (
                    <div 
                      key={sub.name} 
                      className="rounded-xl bg-slate-950/50 p-4 border border-slate-800/40 hover:border-blue-500/20 transition-colors"
                    >
                      <h5 className={`text-sm font-bold ${edition.titleColor}`}>{sub.name}</h5>
                      <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">{sub.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}

      {/* Primary Action Button */}
      <button className={`mt-10 flex w-fit items-center gap-2 font-semibold transition-colors ${edition.titleColor} ${edition.hoverTitleColor}`}>
        Learn More
        <ArrowRight
          size={18}
          className="transition-transform group-hover:translate-x-2"
        />
      </button>
    </div>
  );
}

export default function Products() {
  return (
    <section id="products" className="relative py-28 bg-slate-950 overflow-hidden">
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-150 w-150 rounded-full bg-blue-900/10 blur-[150px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Platform Editions
          </p>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-white tracking-tight">
            One platform. A connected ecosystem.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-400">
            Tailored capabilities for the three pillars of modern healthcare, built on a unified, interoperable data foundation.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-16 grid gap-8 lg:grid-cols-3"
        >
          {/* Removed the breaking JSX comment from here */}
          {editions.map((edition) => (
            <motion.div key={edition.title} variants={itemVariants}>
              <EditionCard edition={edition} />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}