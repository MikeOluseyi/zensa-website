import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-slate-950 pt-32 pb-20">
      
      {/* Ambient Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-blue-600/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[100px] pointer-events-none" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 text-center z-10">
        
        {/* Animated Pill Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300 backdrop-blur-md">
          <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-pulse"></span>
          Healthcare Coordination Platform
        </div>

        {/* High-Impact Headline */}
        <h1 className="max-w-4xl text-5xl font-extrabold tracking-tight text-white sm:text-7xl">
          Coordinating <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Healthcare</span> <br className="hidden sm:block" /> Across Emerging Markets.
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-400">
          Zensa connects hospitals, insurers and pharmaceutical distributors through a shared operational platform, enabling faster claims, clearer data and better healthcare decisions.
        </p>

        {/* Enhanced Call-to-Actions */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-6">
          <a
            href="#contact"
            className="rounded-2xl bg-blue-600 px-8 py-4 font-semibold text-white shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)] transition-all hover:bg-blue-500 hover:shadow-[0_0_60px_-15px_rgba(37,99,235,0.7)] hover:-translate-y-1"
          >
            Book a Demo
          </a>
          <a
            href="#about"
            className="rounded-2xl border border-slate-700 bg-slate-800/50 px-8 py-4 font-semibold text-white backdrop-blur-md transition-all hover:bg-slate-700 hover:text-blue-300"
          >
            Explore the Platform
          </a>
        </div>
      </div>
    </section>
  );
}