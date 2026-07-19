"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-slate-950 py-28 text-white"
    >
      {/* Ambient background styling */}
      <div className="absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-blue-600/10 blur-[150px] pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="grid gap-16 lg:grid-cols-2 items-center">
          
          {/* Left Side: Text & Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Contact Us
            </p>
            <h2 className="mt-5 text-4xl sm:text-5xl font-bold leading-tight tracking-tight">
              Modernize your healthcare operations.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400">
              Whether you're a hospital, insurer or pharmaceutical organization, we'd love to show you how Zensa can improve coordination, interoperability and operational efficiency.
            </p>

            <div className="mt-12 space-y-6">
              <div className="flex flex-col gap-1">
                <p className="font-semibold text-slate-300">General</p>
                <p className="text-blue-400 hover:text-blue-300 transition-colors cursor-pointer w-fit">info@zensahq.com.ng</p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-semibold text-slate-300">Corporate</p>
                <p className="text-blue-400 hover:text-blue-300 transition-colors cursor-pointer w-fit">corporate@zensahq.com.ng</p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-semibold text-slate-300">Telephone</p>
                <p className="text-blue-400">+234 701 701 6692</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Animated Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8 sm:p-10 shadow-2xl backdrop-blur-xl"
          >
            <h3 className="text-3xl font-bold text-white">Book a Demo</h3>
            <p className="mt-3 text-slate-400">Tell us about your organization.</p>

            <form className="mt-8 space-y-5">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full rounded-xl border border-slate-800 bg-slate-950/50 p-4 text-white placeholder-slate-500 outline-none transition focus:border-blue-500 focus:bg-slate-900"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl border border-slate-800 bg-slate-950/50 p-4 text-white placeholder-slate-500 outline-none transition focus:border-blue-500 focus:bg-slate-900"
              />
              <input
                type="text"
                placeholder="Organization"
                className="w-full rounded-xl border border-slate-800 bg-slate-950/50 p-4 text-white placeholder-slate-500 outline-none transition focus:border-blue-500 focus:bg-slate-900"
              />

              <div>
                <label htmlFor="organizationType" className="mb-2 block text-sm font-medium text-slate-400">
                  Organization Type
                </label>
                <select
                  id="organizationType"
                  name="organizationType"
                  className="w-full rounded-xl border border-slate-800 bg-slate-950/50 p-4 text-white outline-none transition focus:border-blue-500 focus:bg-slate-900 appearance-none"
                >
                  <option value="" className="bg-slate-900 text-slate-400">Select organization type</option>
                  <option value="hospital" className="bg-slate-900">Hospital</option>
                  <option value="insurer" className="bg-slate-900">Insurer</option>
                  <option value="pharmaceutical" className="bg-slate-900">Pharmaceutical</option>
                  <option value="government" className="bg-slate-900">Government</option>
                  <option value="other" className="bg-slate-900">Other</option>
                </select>
              </div>

              <textarea
                rows={4}
                placeholder="How can we help?"
                className="w-full rounded-xl border border-slate-800 bg-slate-950/50 p-4 text-white placeholder-slate-500 outline-none transition focus:border-blue-500 focus:bg-slate-900 resize-none"
              />

              <button
                type="button"
                className="w-full rounded-xl bg-blue-600 py-4 font-semibold text-white shadow-[0_0_30px_-10px_rgba(37,99,235,0.4)] transition-all hover:bg-blue-500 hover:shadow-[0_0_40px_-10px_rgba(37,99,235,0.6)] hover:-translate-y-0.5"
              >
                Request Demo
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}