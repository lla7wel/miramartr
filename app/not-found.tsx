import Link from "next/link";

export default function NotFound() {
  return (
    <div className="blueprint-bg border-b border-steel-800">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <p className="eyebrow">404</p>
        <h1 className="mt-4 text-4xl font-semibold text-cream">Page not found</h1>
        <p className="mt-4 max-w-xl text-steel-300">
          The requested Miramar page could not be found. Return to the main site structure.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-md bg-brand-red px-4 py-2.5 text-sm font-bold text-white"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
