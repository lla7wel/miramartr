import InteractiveImage from "../../components/InteractiveImage";

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 text-slate-50">
      <div className="grid gap-10 md:grid-cols-[1.05fr,0.95fr] md:items-start">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-300">
            Contact
          </p>
          <h1 className="text-3xl font-semibold sm:text-4xl">
            Share your RFQ, equipment list, or upcoming program.
          </h1>
          <p className="text-sm text-slate-200 sm:text-base">
            Miramar responds to institutional enquiries from energy and industrial clients. Outline
            your scope, timelines, and key equipment families; we will align classification,
            documentation, and supply.
          </p>
          <InteractiveImage
            src="/miramar-contact-office.png"
            alt="Miramar contact office"
            width={480}
            height={320}
            className="object-cover"
            containerClassName="rounded-3xl"
            priority
          />
          <div className="space-y-1">
            <p className="text-sm font-semibold text-white">What we typically receive</p>
            <ul className="space-y-1.5 text-sm text-slate-200">
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-400" />
                <span>Project packages for oil &amp; gas, power, or industrial plants.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-400" />
                <span>Line pipe, steel, valves, rotating, and electrical packages.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-400" />
                <span>Long-term supply programs and framework agreements.</span>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <form className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/80 p-5 shadow-lg shadow-black/40 sm:p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="text-xs font-medium text-slate-200">
                  Full name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="mt-1 block w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-50 outline-none ring-0 transition focus:border-[#B8202A] focus:ring-1 focus:ring-[#B8202A]"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-xs font-medium text-slate-200">
                  Work email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="name@company.com"
                  className="mt-1 block w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-50 outline-none ring-0 transition focus:border-[#B8202A] focus:ring-1 focus:ring-[#B8202A]"
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="company" className="text-xs font-medium text-slate-200">
                  Company / entity
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  className="mt-1 block w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-50 outline-none ring-0 transition focus:border-[#B8202A] focus:ring-1 focus:ring-[#B8202A]"
                />
              </div>
              <div>
                <label htmlFor="country" className="text-xs font-medium text-slate-200">
                  Country / region
                </label>
                <input
                  id="country"
                  name="country"
                  type="text"
                  className="mt-1 block w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-50 outline-none ring-0 transition focus:border-[#B8202A] focus:ring-1 focus:ring-[#B8202A]"
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="text-xs font-medium text-slate-200">
                Phone (optional)
              </label>
              <input
                id="phone"
                name="phone"
                type="text"
                className="mt-1 block w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-50 outline-none ring-0 transition focus:border-[#B8202A] focus:ring-1 focus:ring-[#B8202A]"
              />
            </div>

            <div>
              <label htmlFor="topic" className="text-xs font-medium text-slate-200">
                I&apos;d like to discuss
              </label>
              <select
                id="topic"
                name="topic"
                className="mt-1 block w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-50 outline-none ring-0 transition focus:border-[#B8202A] focus:ring-1 focus:ring-[#B8202A]"
              >
                <option value="">Select an option</option>
                <option value="package">Project equipment package / RFQ</option>
                <option value="program">Long-term supply program / framework</option>
                <option value="steel">Steel, pipe, and line pipe program</option>
                <option value="other">Other institutional enquiry</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="text-xs font-medium text-slate-200">
                Briefly describe your mandate
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 block w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-50 outline-none ring-0 transition focus:border-[#B8202A] focus:ring-1 focus:ring-[#B8202A]"
                placeholder="Project type, timelines, approximate scope, key equipment families (e.g., valves, rotating, transformers, line pipe)."
              />
            </div>

            <div className="flex items-start gap-2">
              <input
                id="consent"
                name="consent"
                type="checkbox"
                className="mt-[2px] h-3.5 w-3.5 rounded border-slate-700 bg-slate-950 text-[#B8202A] focus:ring-[#B8202A]"
              />
              <label htmlFor="consent" className="text-[11px] text-slate-300">
                I confirm this enquiry relates to energy, industrial, or infrastructure equipment on
                behalf of an organization.
              </label>
            </div>

            <button
              type="submit"
              className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-[#B8202A] px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-white shadow-lg shadow-[#B8202A]/40 transition hover:bg-[#9c1b24]"
            >
              Submit enquiry
            </button>

            <p className="pt-2 text-[10px] text-slate-400">
              This form is for institutional procurement, engineering, and project teams. A backend
              connection can be added later.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
