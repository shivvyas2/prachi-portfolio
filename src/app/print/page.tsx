import Image from "next/image";
import { works } from "@/lib/works";
import { series as photoSeries } from "@/lib/photography";
import PrintControls from "./auto-print";

export const metadata = {
  title: "Prachi Patel — Portfolio (PDF)",
  description: "Print-ready version of Prachi Patel's portfolio.",
};

const facts = [
  { k: "Based in", v: "New York, USA" },
  { k: "From", v: "India → New York" },
  { k: "Studying", v: "Pace University · B.A. Computer Science" },
  { k: "Focus", v: "Type · Layout · Code" },
  { k: "Email", v: "patelprachi670@gmail.com" },
  { k: "Site", v: "prachipatel.studio" },
];

const tools = [
  "Figma",
  "Illustrator",
  "InDesign",
  "Photoshop",
  "React",
  "HTML / CSS",
  "Type design",
  "Editorial layout",
];

const exploring = [
  "Variable fonts & OpenType features",
  "Editorial systems for the web",
  "Hand-lettering & type drawing",
  "Front-end performance & accessibility",
];

export default function PrintPage() {
  const photos = photoSeries.photos.slice(0, 5);

  return (
    <>
      {/* Hide site chrome (nav + footer) on this route only, both on screen and in print. */}
      <style>{`
        body > header, body > footer { display: none !important; }
        body { background: #ffffff !important; }
        main { padding-top: 0 !important; }
        .print-controls { display: flex; }
        @media print {
          .print-controls { display: none !important; }
          @page { size: A4; margin: 16mm 14mm; }
          .pdf-page { break-after: page; page-break-after: always; }
          .pdf-page:last-child { break-after: auto; page-break-after: auto; }
          html, body { background: white !important; }
        }
      `}</style>

      <PrintControls />

      <div className="mx-auto max-w-[820px] bg-white px-10 pt-24 pb-10 text-foreground print:pt-0">
        {/* PAGE 1 — COVER */}
        <section className="pdf-page flex min-h-[260mm] flex-col justify-between">
          <header className="flex items-start justify-between">
            <div className="text-[10px] uppercase tracking-[0.22em] text-muted">
              (Portfolio 26©)
            </div>
            <div className="text-[10px] uppercase tracking-[0.22em] text-muted">
              Prachi Patel · 2026
            </div>
          </header>

          <div className="my-12">
            <div className="text-[11px] uppercase tracking-[0.22em] text-muted">
              Designer · Computer-Science Student · NYC
            </div>
            <h1
              aria-label="Prachi Patel"
              className="mt-6 font-avaleigh text-[112px] font-bold leading-[0.86] tracking-[-0.02em]"
            >
              Prachi
              <br />
              Patel
            </h1>
            <p className="mt-8 max-w-md text-[15px] leading-[1.6] text-foreground/85">
              A student designer at Pace University exploring typography,
              layout, and visual communication. Originally from India, currently
              studying and shooting in New York.
            </p>
          </div>

          <dl className="grid grid-cols-2 gap-x-6 gap-y-3 border-t border-border pt-6 text-[12px]">
            {facts.map((f) => (
              <div key={f.k}>
                <dt className="text-[10px] uppercase tracking-[0.2em] text-muted">
                  {f.k}
                </dt>
                <dd className="mt-1 text-foreground">{f.v}</dd>
              </div>
            ))}
          </dl>

          <footer className="mt-10 flex items-center justify-between border-t border-border pt-4 text-[10px] uppercase tracking-[0.22em] text-muted">
            <span>Cover · 01</span>
            <span>© 2026 Prachi Patel</span>
          </footer>
        </section>

        {/* PAGE 2 — ABOUT + SKILLS */}
        <section className="pdf-page mt-16 print:mt-0">
          <SectionHead n="02" label="About" />
          <h2 className="mt-4 font-avaleigh text-[44px] font-bold leading-[1] tracking-[-0.02em]">
            Designer,{" "}
            <span className="text-foreground/45">computer-scientist,</span> and
            lifelong{" "}
            <span className="italic text-foreground/45">student of craft.</span>
          </h2>

          <div className="mt-8 grid grid-cols-3 gap-6 border-t border-border pt-6">
            <p className="text-[11.5px] leading-[1.55] text-foreground/85">
              <span className="block font-mono text-[9px] uppercase tracking-[0.22em] text-muted">
                (01)
              </span>
              I&rsquo;m a student at Pace University pursuing a B.A. in
              Computer Science with a minor in Graphic Design. Originally from
              India and now studying in New York.
            </p>
            <p className="text-[11.5px] leading-[1.55] text-foreground/85">
              <span className="block font-mono text-[9px] uppercase tracking-[0.22em] text-muted">
                (02)
              </span>
              My academic background lets me combine analytical thinking from
              computer science with visual creativity from graphic design.
            </p>
            <p className="text-[11.5px] leading-[1.55] text-foreground/85">
              <span className="block font-mono text-[9px] uppercase tracking-[0.22em] text-muted">
                (03)
              </span>
              Through my work, I aim to develop thoughtful and engaging visual
              solutions while continuing to grow as a designer.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-12 gap-6 border-t border-border pt-6">
            <div className="col-span-7">
              <div className="text-[10px] uppercase tracking-[0.22em] text-muted">
                Toolkit
              </div>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {tools.map((t) => (
                  <li
                    key={t}
                    className="inline-flex items-center rounded-full border border-border px-2.5 py-1 text-[11px] text-foreground/85"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-5">
              <div className="text-[10px] uppercase tracking-[0.22em] text-muted">
                Currently exploring
              </div>
              <ul className="mt-3 space-y-1.5 text-[11.5px] text-foreground/85">
                {exploring.map((e, i) => (
                  <li key={e} className="flex items-baseline gap-2">
                    <span className="font-mono text-[9px] text-muted">
                      ({String(i + 1).padStart(2, "0")})
                    </span>
                    {e}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 border-t border-border pt-6">
            <div className="text-[10px] uppercase tracking-[0.22em] text-muted">
              Path
            </div>
            <ul className="mt-3 divide-y divide-border">
              {[
                {
                  year: "2024 — Now",
                  t: "Pace University · New York",
                  d: "B.A. Computer Science, minor in Graphic Design.",
                },
                {
                  year: "2023",
                  t: "Moved to New York",
                  d: "Relocated from India to study, surrounded by typography and museums.",
                },
                {
                  year: "2022",
                  t: "Found design through code",
                  d: "Started exploring the visual side of technology and never looked back.",
                },
              ].map((row) => (
                <li
                  key={row.t}
                  className="grid grid-cols-12 items-baseline gap-3 py-3 text-[11.5px]"
                >
                  <span className="col-span-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                    {row.year}
                  </span>
                  <span className="col-span-9">
                    <span className="font-medium">{row.t}</span>
                    <span className="text-muted"> · {row.d}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <PageFoot n="02" />
        </section>

        {/* PAGE 3 — SELECTED WORK */}
        <section className="pdf-page mt-16 print:mt-0">
          <SectionHead n="03" label="Selected Work" />
          <h2 className="mt-4 font-avaleigh text-[44px] font-bold leading-[1] tracking-[-0.02em]">
            Selected{" "}
            <span className="italic text-foreground/40">work,</span>
            <br />
            2024 — 2026.
          </h2>

          <div className="mt-8 grid grid-cols-2 gap-5 border-t border-border pt-6">
            {works.slice(0, 4).map((w, i) => (
              <article
                key={w.slug}
                className={`rounded-2xl ${w.bg} p-4`}
              >
                <div className="flex items-baseline justify-between text-[10px] uppercase tracking-[0.22em] text-foreground/60">
                  <span>
                    ({String(i + 1).padStart(2, "0")}) — {w.role}
                  </span>
                  <span>{w.year}</span>
                </div>
                <div className="mt-3 grid grid-cols-3 gap-2">
                  {w.images.slice(0, 3).map((img, idx) => (
                    <div
                      key={img.src + idx}
                      className={`relative ${w.aspect} overflow-hidden rounded-md bg-foreground/5`}
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        sizes="120px"
                        className="object-contain"
                      />
                    </div>
                  ))}
                </div>
                <div className="mt-3">
                  <div className="font-avaleigh text-[26px] font-bold leading-[0.95] tracking-[-0.015em]">
                    {w.title}
                  </div>
                  <p className="mt-1 text-[11px] leading-[1.5] text-foreground/80">
                    {w.summary}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <PageFoot n="03" />
        </section>

        {/* PAGE 4 — PHOTOGRAPHY */}
        <section className="pdf-page mt-16 print:mt-0">
          <SectionHead n="04" label="Photography" />
          <h2 className="mt-4 font-avaleigh text-[44px] font-bold leading-[1] tracking-[-0.02em]">
            Building Archives.
          </h2>
          <p className="mt-3 max-w-md text-[12px] leading-[1.55] text-muted">
            {photoSeries.description}
          </p>

          <div className="mt-8 grid grid-cols-12 gap-3 border-t border-border pt-6">
            {photos.map((p, i) => {
              const span =
                i === 0
                  ? "col-span-7"
                  : i === 1
                  ? "col-span-5"
                  : "col-span-4";
              const aspect = i < 2 ? "aspect-[4/5]" : "aspect-[4/5]";
              return (
                <figure key={p.src} className={`${span} flex flex-col gap-1`}>
                  <div
                    className={`relative ${aspect} overflow-hidden rounded-md bg-foreground/5`}
                  >
                    <Image
                      src={p.src}
                      alt={p.alt}
                      fill
                      sizes="320px"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="flex items-baseline justify-between text-[9px] uppercase tracking-[0.2em] text-muted">
                    <span>
                      ({String(i + 1).padStart(2, "0")}) {p.caption}
                    </span>
                    <span>NYC</span>
                  </figcaption>
                </figure>
              );
            })}
          </div>

          <PageFoot n="04" />
        </section>

        {/* PAGE 5 — CONTACT / CLOSING */}
        <section className="pdf-page mt-16 print:mt-0">
          <SectionHead n="05" label="Contact" />
          <h2 className="mt-4 font-avaleigh text-[64px] font-bold leading-[0.95] tracking-[-0.02em]">
            Have a brief, <br />
            <span className="italic text-foreground/40">a question,</span>{" "}
            or just want
            <br />
            to <span className="italic text-foreground/40">say hi?</span>
          </h2>
          <div className="mt-10 grid grid-cols-2 gap-6 border-t border-border pt-6 text-[12px]">
            <div>
              <div className="text-[10px] uppercase tracking-[0.22em] text-muted">
                Email
              </div>
              <a
                href="mailto:patelprachi670@gmail.com"
                className="mt-2 inline-block underline"
              >
                patelprachi670@gmail.com
              </a>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-[0.22em] text-muted">
                Site
              </div>
              <a href="/" className="mt-2 inline-block underline">
                prachipatel.studio
              </a>
            </div>
          </div>
          <PageFoot n="05" />
        </section>
      </div>
    </>
  );
}

function SectionHead({ n, label }: { n: string; label: string }) {
  return (
    <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.22em] text-muted">
      <span className="inline-flex items-center gap-2">
        <span className="size-1 rounded-full bg-foreground/60" />
        {label}
      </span>
      <span>(Page {n})</span>
    </div>
  );
}

function PageFoot({ n }: { n: string }) {
  return (
    <footer className="mt-10 flex items-center justify-between border-t border-border pt-4 text-[10px] uppercase tracking-[0.22em] text-muted">
      <span>Prachi Patel · 2026</span>
      <span>{n} / 05</span>
    </footer>
  );
}
