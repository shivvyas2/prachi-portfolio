import Image from "next/image";
import Link from "next/link";
import SectionLabel from "@/components/section-label";
import Reveal from "@/components/reveal";
import { ArrowUpRight } from "lucide-react";

const paragraphs = [
  "Hi, I'm Prachi Patel, a student at Pace University currently pursuing a Bachelor of Arts in Computer Science with a minor in Graphic Design. Originally from India and now studying in New York, I developed an interest in design while exploring the creative side of technology.",
  "My academic background allows me to combine analytical thinking from computer science with visual creativity from graphic design. I am particularly interested in typography, layout, and visual communication, and I enjoy exploring how design can effectively communicate ideas and stories.",
  "Through my work, I aim to develop thoughtful and engaging visual solutions while continuing to grow as a designer.",
];

const facts = [
  { k: "Studying at", v: "Pace University, NYC" },
  { k: "Major", v: "B.A. Computer Science" },
  { k: "Minor", v: "Graphic Design" },
  { k: "From", v: "India → New York" },
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
  { n: "01", label: "Variable fonts" },
  { n: "02", label: "Editorial systems for the web" },
  { n: "03", label: "Hand-lettering & type drawing" },
];

export default function Intro() {
  return (
    <section className="relative flex h-[100svh] min-h-[640px] flex-col overflow-hidden border-y border-border py-10 md:py-14">
      <div className="mx-auto w-full max-w-[1640px] px-5 md:px-[30px] 2xl:px-[44px]">
        <div className="flex items-center justify-between gap-4 text-[11px] uppercase tracking-[0.22em] text-muted">
          <SectionLabel>About</SectionLabel>
          <span>2026 — Pace University</span>
        </div>
      </div>

      <div className="mx-auto mt-8 grid w-full max-w-[1640px] flex-1 grid-cols-1 gap-8 px-5 md:mt-10 md:grid-cols-12 md:gap-10 md:px-[30px] 2xl:px-[44px]">
        <div className="md:col-span-8 flex flex-col">
          <h5 className="font-avaleigh text-[clamp(1.4rem,2.5vw,3rem)] font-bold leading-[1.25] tracking-[-0.015em] text-foreground/90">
            Designer,{" "}
            <span className="text-foreground/45">computer-scientist,</span> and
            lifelong{" "}
            <span className="italic text-foreground/45">student of craft.</span>
          </h5>

          <Reveal
            delay={0.15}
            className="mt-8 grid grid-cols-1 gap-6 border-t border-border pt-6 md:mt-10 md:grid-cols-3 md:gap-6 md:pt-8"
          >
            {paragraphs.map((p, i) => (
              <div key={i} className="flex flex-col gap-2">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                  (0{i + 1})
                </span>
                <p className="text-[13px] leading-[1.55] text-foreground/80">
                  {p}
                </p>
              </div>
            ))}
          </Reveal>

          <Reveal
            delay={0.25}
            className="mt-6 grid grid-cols-1 gap-6 border-t border-border pt-5 md:mt-10 md:grid-cols-12 md:gap-8 md:pt-8"
          >
            <ul className="md:col-span-8 flex flex-wrap items-center gap-x-2 gap-y-2">
              {tools.map((t) => (
                <li
                  key={t}
                  className="inline-flex items-center rounded-full border border-border bg-background/60 px-3 py-1 text-[12px] text-foreground/80"
                >
                  {t}
                </li>
              ))}
            </ul>

            <ul className="md:col-span-4 flex flex-col gap-1.5 text-[12px] text-foreground/80">
              <li className="text-[10px] uppercase tracking-[0.22em] text-muted">
                Currently exploring
              </li>
              {exploring.map((e) => (
                <li key={e.n} className="flex items-baseline gap-2">
                  <span className="font-mono text-[10px] text-muted">
                    ({e.n})
                  </span>
                  {e.label}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="md:col-span-4 flex flex-col gap-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[20px] bg-foreground/5">
            <Image
              src="/profile.jpg"
              alt="Portrait of Prachi Patel"
              fill
              sizes="(min-width:768px) 33vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-x-3 bottom-3 flex items-center justify-between rounded-xl bg-black/55 px-3 py-2 text-[10px] uppercase tracking-[0.2em] text-white backdrop-blur-md">
              <span>(Prachi · NYC)</span>
              <span>26©</span>
            </div>
          </div>

          <dl className="grid grid-cols-2 gap-x-4 gap-y-3 border-t border-border pt-4">
            {facts.map((f) => (
              <div key={f.k}>
                <dt className="text-[10px] uppercase tracking-[0.2em] text-muted">
                  {f.k}
                </dt>
                <dd className="mt-0.5 text-[13px] text-foreground">{f.v}</dd>
              </div>
            ))}
          </dl>

          <Link
            href="/about"
            className="group inline-flex w-fit items-center gap-2 rounded-full bg-foreground px-4 py-2.5 text-[13px] text-background transition-transform hover:-translate-y-0.5"
          >
            More about me
            <ArrowUpRight className="size-3.5 transition-transform group-hover:rotate-45" />
          </Link>
        </Reveal>
      </div>

    </section>
  );
}
