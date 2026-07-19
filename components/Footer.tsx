import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative border-t border-slate-800/60 bg-slate-950 overflow-hidden py-16 text-slate-400">
      
      {/* Subtle ambient glow at the bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[200px] w-[500px] rounded-full bg-blue-900/10 blur-[100px] pointer-events-none" />

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 px-6 lg:flex-row relative z-10">
        
        {/* Brand */}
        <div className="text-center lg:text-left">
          <h3 className="text-2xl font-bold text-white flex items-center justify-center lg:justify-start gap-2">
            {/* Logo */}
           <a href="#" className="flex items-center gap-2 text-2xl font-bold tracking-tight text-white">
             <Image 
               src="/zensalogo.png" 
               alt="Zensa Icon" 
               width={32} 
               height={32} 
               className="object-contain w-auto"
             />
           </a>
            Zensa
          </h3>
          <p className="mt-4 max-w-sm text-slate-500 leading-relaxed">
            Healthcare coordination platform for emerging markets.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-wrap justify-center gap-8 font-medium">
          <a href="#about" className="hover:text-cyan-400 transition-colors">
            About
          </a>
          <a href="#products" className="hover:text-cyan-400 transition-colors">
            Platform
          </a>
          <a href="#contact" className="hover:text-cyan-400 transition-colors">
            Contact
          </a>
        </div>

      </div>

      <div className="mx-auto mt-16 max-w-7xl border-t border-slate-800/50 pt-8 px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm relative z-10 text-slate-600">
        <p>© 2026 Zensa Technologies Ltd. All rights reserved.</p> {/*[cite: 7] */}
        <div className="flex gap-4">
          <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
        </div>
      </div>

    </footer>
  );
}