import {
  Network,
  Database,
  ShieldCheck,
  BrainCircuit,
  WifiOff,
  BarChart3,
} from "lucide-react";

const features = [
  {
    icon: Network,
    title: "Interoperability by Design",
    description:
      "Connect hospitals, insurers and pharmaceutical organizations through one coordinated platform instead of disconnected systems.",
  },
  {
    icon: Database,
    title: "Standardized Healthcare Data",
    description:
      "Transform day-to-day hospital operations into structured, reliable and shareable information for authorized stakeholders.",
  },
  {
    icon: ShieldCheck,
    title: "Faster Claims & Reimbursements",
    description:
      "Generate structured digital claims with supporting operational data to simplify adjudication and reduce administrative delays.",
  },
  {
    icon: WifiOff,
    title: "Built for Challenging Environments",
    description:
      "Offline-capable architecture keeps hospitals operational even when internet connectivity is unreliable.",
  },
  {
    icon: BarChart3,
    title: "Operational Intelligence",
    description:
      "Enable better planning through real-time operational insights, reporting and ecosystem-wide visibility.",
  },
  {
    icon: BrainCircuit,
    title: "AI-Ready Platform",
    description:
      "Our standardized data infrastructure prepares healthcare organizations for future AI-powered automation and decision support.",
  },
];

export default function WhyZensa() {
  return (
    <section
      id="why"
      className="py-28 bg-white"
    >
      <div className="mx-auto max-w-7xl px-6">

        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
          Why Zensa
        </p>

        <h2 className="mt-4 text-5xl font-bold text-slate-900">
          Purpose-built for healthcare coordination.
        </h2>

        <p className="mt-6 max-w-3xl text-lg leading-9 text-slate-600">
          Zensa goes beyond digitizing hospitals. We create the
          infrastructure that allows healthcare organizations to
          work together more efficiently.
        </p>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-8 transition duration-300 hover:border-blue-500 hover:shadow-xl"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100">
                <feature.icon
                  className="text-blue-600"
                  size={28}
                />
              </div>

              <h3 className="mt-6 text-xl font-bold text-blue-600">
                {feature.title}
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                {feature.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}