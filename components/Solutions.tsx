import {
  Building2,
  ShieldCheck,
  Pill,
  ArrowRight,
} from "lucide-react";

export default function Solutions() {
  return (
    <section
      id="solutions"
      className="bg-slate-50 py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
          Solutions
        </p>

        <h2 className="mt-4 text-5xl font-bold text-slate-900">
          Built for every major healthcare stakeholder.
        </h2>

        <p className="mt-6 max-w-3xl text-lg leading-9 text-slate-600">
          Zensa connects hospitals, insurers and pharmaceutical
          organizations on one platform, creating a coordinated,
          interoperable healthcare ecosystem.
        </p>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">

          {/* Hospital */}

          <div className="group rounded-3xl bg-white p-10 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100">

              <Building2
                className="text-blue-600"
                size={32}
              />

            </div>

            <h3 className="mt-8 text-2xl font-bold">
              Hospitals
            </h3>

            <p className="mt-5 leading-8 text-slate-600">

              Full-spectrum operational platform covering
              patient management, pharmacy, laboratory,
              billing, inventory, admissions, claims,
              reporting and administration.

            </p>

            <div className="mt-8 flex items-center gap-2 font-semibold text-blue-600">

              Learn More

              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-2"
              />

            </div>

          </div>

          {/* Insurer */}

          <div className="group rounded-3xl bg-white p-10 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100">

              <ShieldCheck
                className="text-green-600"
                size={32}
              />

            </div>

            <h3 className="mt-8 text-2xl font-bold">
              Insurers
            </h3>

            <p className="mt-5 leading-8 text-slate-600">

              Receive structured digital claims with
              supporting operational data, enabling
              faster adjudication, improved visibility
              and more efficient reimbursement.

            </p>

            <div className="mt-8 flex items-center gap-2 font-semibold text-green-600">

              Learn More

              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-2"
              />

            </div>

          </div>

          {/* Pharma */}

          <div className="group rounded-3xl bg-white p-10 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-100">

              <Pill
                className="text-cyan-600"
                size={32}
              />

            </div>

            <h3 className="mt-8 text-2xl font-bold">
              Pharmaceutical Industry
            </h3>

            <p className="mt-5 leading-8 text-slate-600">

              Access anonymized and aggregated medicine
              consumption and inventory insights for
              improved forecasting, supply chain
              optimization and distribution planning.

            </p>

            <div className="mt-8 flex items-center gap-2 font-semibold text-cyan-600">

              Learn More

              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-2"
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}