import InteractiveImage from "../../components/InteractiveImage";

const sectors = [
  {
    title: "Upstream oil & gas",
    body: "Field development, gathering systems, surface facilities, and early production infrastructure.",
    image: "/miramar-sector-upstream.png",
  },
  {
    title: "Midstream & downstream",
    body: "Pipelines, terminals, storage farms, and refinery or petrochemical units.",
    image: "/miramar-sector-midstream.png",
  },
  {
    title: "Power generation & utilities",
    body: "Thermal and gas-fired plants, substations, grid support, and backup systems.",
    image: "/miramar-sector-power.png",
  },
  {
    title: "Industrial plants",
    body: "Steel, cement, process plants, and other energy-intensive industrial sites.",
    image: "/miramar-sector-industrial.png",
  },
  {
    title: "Infrastructure & logistics",
    body: "Ports, logistics hubs, storage terminals, and fuel distribution networks.",
    image: "/miramar-sector-infrastructure.png",
  },
  {
    title: "Government & programs",
    body: "Projects sponsored by ministries, NOCs, and public entities with high documentation requirements.",
    image: "/miramar-sector-government.png",
  },
];

export default function SectorsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 text-slate-50">
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-300">
          Sectors
        </p>
        <h1 className="text-3xl font-semibold sm:text-4xl">Where Miramar operates.</h1>
        <p className="max-w-3xl text-sm text-slate-200 sm:text-base">
          Reliability, uptime, and compliance drive our work. We tailor equipment packages and
          documentation to the demands of each sector.
        </p>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {sectors.map((sector) => (
          <div
            key={sector.title}
            className="flex flex-col gap-3 rounded-2xl border border-slate-800 bg-slate-900/70 p-4 shadow-lg shadow-black/30"
          >
            <InteractiveImage
              src={sector.image}
              alt={sector.title}
              width={320}
              height={160}
              className="object-cover"
              containerClassName="mb-3 h-28 w-full"
            />
            <h2 className="text-[1.05rem] font-semibold text-white">{sector.title}</h2>
            <p className="text-sm text-slate-200">{sector.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
