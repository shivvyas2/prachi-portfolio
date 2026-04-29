import SectionLabel from "@/components/section-label";
import Counter from "@/components/counter";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const items = [
  {
    label: "Self-initiated projects",
    big: <><span>+</span><Counter to={24} /></>,
    desc: "Briefs I gave myself — to learn, fail, and find a voice.",
  },
  {
    label: "Typefaces studied",
    big: <Counter to={62} />,
    desc: "Specimens dissected, classifications mapped, favourites collected.",
  },
  {
    label: "Hours sketching",
    big: <><Counter to={500} /><span>+</span></>,
    desc: "Pencil before pixel. Most ideas die in the notebook — that's the point.",
  },
  {
    label: "Classes taken",
    big: <Counter to={18} />,
    desc: "Across computer science, graphic design, type, and theory.",
  },
];

export default function Stats() {
  return (
    <section className="relative py-24 md:py-36">
      <div className="mx-auto max-w-[1640px] px-5 md:px-[30px] 2xl:px-[44px]">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-5">
            <SectionLabel>By the numbers</SectionLabel>
            <h2 className="mt-6 font-avaleigh font-bold text-[clamp(2.2rem,6.2vw,8.5rem)] leading-[1] tracking-[-0.02em]">
              Small portfolio, <br />
              <span className="italic text-foreground/40">sharp practice.</span>
            </h2>
            <p className="mt-6 max-w-md text-[14px] leading-[1.65] text-muted">
              I&rsquo;m early in my career, but the reps add up. These are the
              numbers behind the work — the quiet practice that makes the loud
              moments possible.
            </p>
            <Link
              href="/contact"
              className="group mt-10 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm text-background transition-transform hover:-translate-y-0.5"
            >
              Let&rsquo;s collaborate
              <ArrowUpRight className="size-4 transition-transform group-hover:rotate-45" />
            </Link>
          </div>
          <div className="md:col-span-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {items.map((it) => (
              <div
                key={it.label}
                className="flex flex-col rounded-[20px] border border-border bg-card p-7"
              >
                <div className="font-sans text-5xl font-semibold tracking-tight md:text-6xl">
                  {it.big}
                </div>
                <div className="mt-4 text-[13px] leading-[1.6] text-muted">
                  {it.desc}
                </div>
                <div className="mt-6 text-[10px] uppercase tracking-[0.22em] text-muted">
                  ({it.label})
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
