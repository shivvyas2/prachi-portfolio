import Link from "next/link";

const columns = [
  {
    title: "Pages",
    links: [
      { label: "Home", href: "/" },
      { label: "Studio", href: "/about" },
      { label: "Work", href: "/work" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "patelprachi670@gmail.com", href: "mailto:patelprachi670@gmail.com" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-invert-bg text-invert-fg">
      <div className="mx-auto max-w-[1640px] px-5 pt-28 pb-12 md:px-[30px] 2xl:px-[44px]">
        <div className="grid grid-cols-1 gap-10 border-b border-white/10 pb-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="text-[11px] uppercase tracking-[0.22em] text-white/40">
              (Stay in touch)
            </div>
            <h3 className="mt-6 font-avaleigh font-bold text-4xl leading-[1.02] tracking-[-0.02em] md:text-6xl">
              New work, <br />
              <span className="italic text-white/40">straight to your inbox.</span>
            </h3>
            <form className="mt-8 flex w-full max-w-md items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] p-1.5 pl-5">
              <input
                aria-label="Email"
                placeholder="E-mail"
                type="email"
                className="flex-1 bg-transparent text-sm text-white placeholder:text-white/40 outline-none"
              />
              <button
                type="submit"
                className="rounded-full bg-white px-5 py-2.5 text-[13px] text-black transition-transform hover:-translate-y-0.5"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-3 text-xs text-white/40">
              Occasional notes — a typeface I love, a project I shipped. No noise.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 md:col-span-7 md:grid-cols-4">
            {columns.map((col) => (
              <div key={col.title}>
                <div className="text-xs uppercase tracking-[0.18em] text-white/40">
                  {col.title}
                </div>
                <ul className="mt-4 space-y-2 text-sm">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        className="text-white/80 transition-colors hover:text-white"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-6 pt-10 text-xs text-white/40 md:flex-row md:items-center">
          <div>© 2026 Prachi Patel — Crafted with care.</div>
          <div className="flex items-center gap-5">
            <Link href="#" className="hover:text-white">Instagram</Link>
            <Link href="#" className="hover:text-white">Twitter</Link>
            <Link href="#" className="hover:text-white">LinkedIn</Link>
            <Link href="#" className="hover:text-white">Contra</Link>
          </div>
        </div>
      </div>

    </footer>
  );
}
