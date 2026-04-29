import Image from "next/image";
import Link from "next/link";
import SectionLabel from "@/components/section-label";
import Reveal, { RevealText } from "@/components/reveal";
import { ArrowDown, ArrowUpRight } from "lucide-react";

const principles = [
  {
    n: "01",
    t: "Curiosity first",
    d: "I treat every brief as a chance to learn — about a topic, a tool, or myself. Good design starts with honest questions.",
  },
  {
    n: "02",
    t: "Clarity over cleverness",
    d: "Typography, spacing, and hierarchy do most of the work. I reach for simple, confident decisions before flourish.",
  },
  {
    n: "03",
    t: "Code informs craft",
    d: "Computer science taught me to think in systems. I use that mindset to make design that's consistent, scalable, and kind to its future.",
  },
  {
    n: "04",
    t: "Slow down to ship",
    d: "Iteration is invisible work. I build small, look often, and keep what feels right.",
  },
];

const timeline = [
  {
    year: "2024 — Now",
    title: "Pace University · New York",
    detail: "B.A. Computer Science, minor in Graphic Design.",
  },
  {
    year: "2023",
    title: "Moved to New York",
    detail:
      "Relocated from India to study, surrounded by typography, museums, and the city's pace.",
  },
  {
    year: "2022",
    title: "Found design through code",
    detail:
      "Started exploring the visual side of technology — interfaces, posters, layouts — and never looked back.",
  },
  {
    year: "Earlier",
    title: "Curious kid, India",
    detail:
      "Drawing, sketching, and rearranging the family computer. The roots of everything I make today.",
  },
];

const stack = [
  { group: "Design", items: ["Figma", "InDesign", "Illustrator", "Photoshop"] },
  { group: "Code", items: ["HTML / CSS", "JavaScript", "React", "Python"] },
  { group: "Interests", items: ["Typography", "Editorial layout", "Brand systems", "Motion"] },
];

const learning = [
  "Variable fonts and OpenType features",
  "Editorial systems for the web",
  "Hand-lettering & type drawing",
  "Front-end performance and accessibility",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-44 md:pb-24">
        <div className="mx-auto max-w-[1640px] px-5 md:px-[30px] 2xl:px-[44px]">
          <SectionLabel>About</SectionLabel>
          <h1 className="mt-6 font-avaleigh text-[clamp(2.6rem,8.5vw,11rem)] font-bold leading-[0.92] tracking-[-0.02em]">
            <RevealText as="span" text="Hi, I'm Prachi —" />
            <br />
            <span className="text-foreground/40">
              <RevealText
                as="span"
                text="a designer learning out loud."
                delay={0.35}
              />
            </span>
          </h1>

          <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-12">
            <p className="md:col-span-7 text-[17px] leading-[1.55] text-foreground md:text-[19px]">
              I&rsquo;m a student at Pace University pursuing a Bachelor of
              Arts in Computer Science with a minor in Graphic Design.
              Originally from India and now studying in New York, I developed
              an interest in design while exploring the creative side of
              technology — and have been chasing it ever since.
            </p>
            <div className="md:col-span-5 md:col-start-8 flex flex-col gap-5 self-end">
              <dl className="grid grid-cols-2 gap-y-4 border-t border-border pt-6 text-sm">
                <Fact k="Based in" v="New York, USA" />
                <Fact k="From" v="India" />
                <Fact k="Studying" v="Pace University" />
                <Fact k="Focus" v="Type · Layout · Code" />
              </dl>
              <Link
                href="/contact"
                className="group inline-flex w-fit items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm text-background transition-transform hover:-translate-y-0.5"
              >
                Say hello
                <ArrowUpRight className="size-4 transition-transform group-hover:rotate-45" />
              </Link>
            </div>
          </div>

          <div className="mt-16 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-muted">
            <ArrowDown className="size-3.5" />
            More below
          </div>
        </div>
      </section>

      {/* Portrait + body paragraph */}
      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-[1640px] px-5 md:px-[30px] 2xl:px-[44px]">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-10">
            <Reveal className="md:col-span-7 md:order-2">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] bg-foreground/5">
                <Image
                  src="/profile.jpg"
                  alt="Portrait of Prachi Patel"
                  fill
                  sizes="(min-width:768px) 60vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-2xl bg-black/55 px-4 py-3 text-[11px] uppercase tracking-[0.2em] text-white backdrop-blur-md">
                  <span>(Studio · 2026)</span>
                  <span>NYC</span>
                </div>
              </div>
            </Reveal>

            <div className="md:col-span-5 md:order-1 md:sticky md:top-32 md:self-start">
              <SectionLabel>The longer version</SectionLabel>
              <div className="mt-8 space-y-6 text-[15px] leading-[1.7] text-foreground/80">
                <p>
                  My academic background lets me combine analytical thinking
                  from computer science with visual creativity from graphic
                  design. I&rsquo;m most curious about typography, layout, and
                  visual communication — how a page can carry rhythm, voice,
                  and intent.
                </p>
                <p>
                  Through my work, I aim to develop thoughtful and engaging
                  visual solutions while continuing to grow as a designer.
                  Every project is a small experiment in saying more with
                  less.
                </p>
                <p>
                  When I&rsquo;m not at my desk, I&rsquo;m collecting type
                  specimens, walking the avenues of New York, or sketching
                  posters that may never leave my notebook.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Toolkit + currently learning */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1640px] px-5 md:px-[30px] 2xl:px-[44px]">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <SectionLabel>Toolkit</SectionLabel>
              <h2 className="mt-6 font-avaleigh font-bold text-[clamp(2rem,4.8vw,6.5rem)] leading-[1.02] tracking-[-0.02em]">
                Tools <br />
                <span className="text-foreground/40">in rotation.</span>
              </h2>
            </div>
            <div className="md:col-span-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
              {stack.map((s) => (
                <div key={s.group}>
                  <div className="text-[11px] uppercase tracking-[0.2em] text-muted">
                    {s.group}
                  </div>
                  <ul className="mt-4 space-y-2 text-[15px]">
                    {s.items.map((it) => (
                      <li key={it} className="flex items-center gap-2">
                        <span className="size-1 rounded-full bg-foreground/50" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-10 rounded-[28px] bg-invert-bg p-8 text-invert-fg md:grid-cols-12 md:p-12">
            <div className="md:col-span-4">
              <div className="text-[11px] uppercase tracking-[0.22em] text-white/50">
                (Currently)
              </div>
              <h3 className="mt-6 font-sans text-3xl font-semibold leading-tight md:text-4xl">
                Things I&rsquo;m
                <br />
                <span className="italic text-white/50">learning right now.</span>
              </h3>
            </div>
            <ul className="md:col-span-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {learning.map((l, i) => (
                <li
                  key={l}
                  className="flex items-baseline gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-5"
                >
                  <span className="font-mono text-[11px] text-white/40">
                    0{i + 1}
                  </span>
                  <span className="text-[15px] text-white/85">{l}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1640px] px-5 md:px-[30px] 2xl:px-[44px]">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <SectionLabel>Principles</SectionLabel>
              <h2 className="mt-6 font-avaleigh font-bold text-[clamp(2rem,4.8vw,6.5rem)] leading-[1.02] tracking-[-0.02em]">
                How I work, <br />
                <span className="text-foreground/40">most days.</span>
              </h2>
            </div>
            <ul className="md:col-span-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {principles.map((v) => (
                <li
                  key={v.n}
                  className="flex flex-col rounded-3xl border border-border bg-card p-7"
                >
                  <div className="flex items-baseline justify-between">
                    <span className="font-sans text-2xl font-semibold tracking-tight">
                      {v.t}
                    </span>
                    <span className="font-mono text-xs text-muted">
                      ({v.n})
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    {v.d}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1640px] px-5 md:px-[30px] 2xl:px-[44px]">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <SectionLabel>Path</SectionLabel>
              <h2 className="mt-6 font-avaleigh font-bold text-[clamp(2rem,4.8vw,6.5rem)] leading-[1.02] tracking-[-0.02em]">
                A short <br />
                <span className="text-foreground/40">trajectory.</span>
              </h2>
              <p className="mt-6 max-w-sm text-sm text-muted">
                Some of the moments that pointed me toward the work I make
                today.
              </p>
            </div>
            <ol className="md:col-span-8 divide-y divide-border border-y border-border">
              {timeline.map((t, i) => (
                <Reveal
                  as="li"
                  key={t.year}
                  delay={i * 0.05}
                  className="grid grid-cols-1 items-baseline gap-4 py-7 md:grid-cols-12"
                >
                  <span className="md:col-span-3 font-mono text-xs uppercase tracking-[0.18em] text-muted">
                    {t.year}
                  </span>
                  <div className="md:col-span-9">
                    <div className="font-sans text-2xl font-semibold tracking-tight md:text-3xl">
                      {t.title}
                    </div>
                    <p className="mt-2 max-w-xl text-sm text-muted">
                      {t.detail}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="pb-28 md:pb-40 pt-10">
        <div className="mx-auto max-w-[1640px] px-5 md:px-[30px] 2xl:px-[44px]">
          <Link href="/contact" className="group block">
            <h2 className="font-avaleigh text-[clamp(2.4rem,8vw,8rem)] font-bold leading-[0.9] tracking-[-0.02em]">
              <RevealText as="span" text="Have a brief," />{" "}
              <span className="text-foreground/40">
                <RevealText as="span" text="a question," delay={0.25} />
              </span>{" "}
              <RevealText as="span" text="or just want" delay={0.45} />{" "}
              <span className="text-foreground/40">
                <RevealText as="span" text="to chat?" delay={0.65} />
              </span>
              <span className="ml-3 inline-flex translate-y-3 items-center align-middle">
                <span className="inline-flex size-[0.9em] items-center justify-center rounded-full bg-foreground text-background transition-transform group-hover:rotate-45">
                  <ArrowUpRight className="size-[0.5em]" />
                </span>
              </span>
            </h2>
          </Link>
        </div>
      </section>
    </>
  );
}

function Fact({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <dt className="text-[11px] uppercase tracking-[0.2em] text-muted">
        {k}
      </dt>
      <dd className="mt-1 text-foreground">{v}</dd>
    </div>
  );
}
