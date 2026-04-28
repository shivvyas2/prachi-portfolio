import SectionLabel from "@/components/section-label";
import Reveal from "@/components/reveal";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const steps = [
  {
    n: "01",
    title: "Discover",
    desc: "I start with the brief, the references, and a long walk. Most projects begin with reading more than making.",
    deliverables: ["Research notes", "Reference board", "Brief refinement"],
  },
  {
    n: "02",
    title: "Define",
    desc: "I narrow the idea to a single confident sentence. Direction, voice, and constraints come before any pixels.",
    deliverables: ["Concept doc", "Type direction", "Visual territory"],
  },
  {
    n: "03",
    title: "Design",
    desc: "Sketchbook to Figma to printer. I look often, hold judgment lightly, and iterate until the page earns its silence.",
    deliverables: ["Layouts", "Specimens", "Production files"],
  },
  {
    n: "04",
    title: "Deliver",
    desc: "Hand-off, write-up, and a small archive of what worked and what didn't — so the next project starts further along.",
    deliverables: ["Final assets", "Case study", "Project notes"],
  },
];

export default function Process() {
  return (
    <section className="relative py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-5 md:px-[30px]">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <SectionLabel>Process</SectionLabel>
            <h2 className="mt-6 font-sans font-semibold text-[clamp(2.2rem,5.6vw,5.75rem)] leading-[1] tracking-[-0.04em]">
              How a project <br />
              <span className="italic text-foreground/40">moves through me.</span>
            </h2>
          </div>
          <p className="max-w-sm text-[14px] leading-[1.65] text-muted">
            Four short stages — small enough to remember, loose enough to
            adapt. Every project bends them a little.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-3 md:mt-20 md:grid-cols-2">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.07}>
              <div
                className={`flex h-full flex-col rounded-[24px] border p-7 md:p-9 ${
                  i === 1
                    ? "border-foreground bg-invert-bg text-invert-fg"
                    : "border-border bg-card"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`font-mono text-[11px] uppercase tracking-[0.22em] ${
                      i === 1 ? "text-white/50" : "text-muted"
                    }`}
                  >
                    Step / {s.n}
                  </span>
                  <span
                    className={`font-mono text-[11px] uppercase tracking-[0.22em] ${
                      i === 1 ? "text-white/50" : "text-muted"
                    }`}
                  >
                    (0{Number(s.n)} of 04)
                  </span>
                </div>

                <h3 className="mt-8 font-sans text-5xl font-semibold tracking-[-0.03em] md:text-6xl">
                  {s.title}
                </h3>

                <p
                  className={`mt-5 max-w-sm text-[14px] leading-[1.65] ${
                    i === 1 ? "text-white/70" : "text-muted"
                  }`}
                >
                  {s.desc}
                </p>

                <ul
                  className={`mt-8 flex flex-wrap gap-2 border-t pt-6 text-[12px] ${
                    i === 1
                      ? "border-white/15 text-white/80"
                      : "border-border text-foreground/80"
                  }`}
                >
                  {s.deliverables.map((d) => (
                    <li
                      key={d}
                      className={`rounded-full border px-3 py-1 ${
                        i === 1
                          ? "border-white/15 bg-white/[0.04]"
                          : "border-border bg-background/60"
                      }`}
                    >
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 flex items-center justify-between border-t border-border pt-8 md:mt-16">
          <span className="text-[11px] uppercase tracking-[0.22em] text-muted">
            (End of process)
          </span>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm text-background transition-transform hover:-translate-y-0.5"
          >
            Start a project
            <ArrowUpRight className="size-4 transition-transform group-hover:rotate-45" />
          </Link>
        </div>
      </div>
    </section>
  );
}
