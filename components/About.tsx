export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-7xl px-6 py-28"
    >
      <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
        About Zensa
      </p>

      <h2 className="mt-4 text-5xl font-bold text-white-900">
        The healthcare coordination platform.
      </h2>

      <div className="mt-10 grid gap-12 lg:grid-cols-2">

        <p className="text-lg leading-9 text-white-600">

          Zensa provides hospitals with a full-spectrum operational
          platform and transforms routine healthcare operations into
          standardized, structured information that securely connects
          hospitals, insurers and pharmaceutical distributors.

        </p>

        <p className="text-lg leading-9 text-white-600">

          By improving interoperability, accelerating insurance
          reimbursements and enabling data-driven supply chains,
          Zensa helps healthcare organizations operate more
          efficiently while creating the digital infrastructure
          for future AI-powered healthcare.

        </p>

      </div>
    </section>
  );
}