"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-slate-950/70 backdrop-blur-lg border-b border-slate-800/60 shadow-lg shadow-black/20" 
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
          <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.4)]">
            <span className="text-white text-lg leading-none">Z</span>
          </div>
          Zensa
        </a>

        {/* Links (Hidden on Mobile for simplicity, can add a hamburger menu later) */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
          <a href="#products" className="hover:text-cyan-400 transition-colors">Platform</a>
          <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
        </div>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="rounded-xl bg-blue-600/10 border border-blue-500/30 px-5 py-2.5 text-sm font-semibold text-blue-400 transition-all hover:bg-blue-600 hover:text-white hover:border-blue-500 hover:shadow-[0_0_20px_-5px_rgba(37,99,235,0.5)]"
          >
            Book Demo
          </a>
        </div>
      </div>
    </motion.nav>
  );
}