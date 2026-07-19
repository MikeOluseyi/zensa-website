import {
  Stethoscope, ClipboardCheck, Boxes, Receipt,
  Shield, Activity, Brain, BarChart4,
} from "lucide-react";

const capabilities = [
  { icon: Stethoscope, title: "Clinical Operations", text: "Outpatient, inpatient, admissions, nursing workflows and patient management." },
  { icon: Receipt, title: "Billing & Claims", text: "Billing, invoices, insurer claims, validation and reimbursement workflows." },
  { icon: Boxes, title: "Inventory", text: "Pharmacy inventory, stock movements, procurement and supply monitoring." },
  { icon: ClipboardCheck, title: "Laboratory", text: "Lab requests, results, workflows and reporting." },
  { icon: Shield, title: "Audit & Compliance", text: "Every operational action is securely logged for accountability." },
  { icon: Activity, title: "Operational Reporting", text: "Dashboards and performance analytics across departments." },
  { icon: Brain, title: "AI Ready", text: "Built to power automation, summarization and intelligent healthcare workflows." },
  { icon: BarChart4, title: "Data Intelligence", text: "Structured operational data for insurers and pharmaceutical organizations." },
];

export default function Capabilities() {
  return (
    <section className="relative py-28 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        
        <div className="text-center md:text-left md:flex md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Platform Capabilities
            </p>
            <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-white tracking-tight">
              Everything needed to operate modern healthcare.
            </h2>
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {capabilities.map((item) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/50 p-8 backdrop-blur-sm transition-all hover:-translate-y-1 hover:bg-slate-800/80 hover:border-slate-700"
            >
              {/* Subtle top gradient line on hover */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 transition-opacity group-hover:opacity-100" />
              
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors">
                <item.icon size={28} className="text-cyan-400" />
              </div>

              <h3 className="mt-6 text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                {item.title}
              </h3>

              <p className="mt-4 leading-relaxed text-slate-400">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}