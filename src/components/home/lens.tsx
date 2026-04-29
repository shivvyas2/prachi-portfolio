"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionLabel from "@/components/section-label";
import Reveal, { RevealText } from "@/components/reveal";

type Frame = {
  src: string;
  caption: string;
  place: string;
  /** Tailwind aspect class — varying these creates an editorial mood-board rhythm. */
  aspect: string;
};

const frames: Frame[] = [
  {
    src: "/photography/01-flatiron.jpg",
    caption: "Fuller proportions",
    place: "Flatiron, NYC",
    aspect: "aspect-[4/5]",
  },
  {
    src: "/photography/02-arches.jpg",
    caption: "Three rows of arches",
    place: "Soho, NYC",
    aspect: "aspect-[4/5]",
  },
  {
    src: "/photography/06-corner-sky.jpg",
    caption: "Corner · sky",
    place: "Tribeca, NYC",
    aspect: "aspect-[4/5]",
  },
  {
    src: "/photography/04-cast-iron.jpg",
    caption: "Cast-iron rhythm",
    place: "Soho, NYC",
    aspect: "aspect-[4/5]",
  },
  {
    src: "/photography/03-arched-facade.jpg",
    caption: "Arch · negative space",
    place: "Tribeca, NYC",
    aspect: "aspect-[4/5]",
  },
  {
    src: "/photography/10-storefront-night.jpg",
    caption: "Storefront after dark",
    place: "Soho, NYC",
    aspect: "aspect-[4/5]",
  },
];

export default function Lens() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-[1640px] px-5 md:px-[30px] 2xl:px-[44px]">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-5">
            <SectionLabel>Lens</SectionLabel>
            <h2 className="mt-6 font-avaleigh font-bold text-[clamp(2.2rem,5.6vw,7.5rem)] leading-[1] tracking-[-0.02em]">
              <RevealText as="span" text="Photography" />
              <br />
              <span className="italic text-foreground/40">
                <RevealText as="span" text="teaches the eye." delay={0.3} />
              </span>
            </h2>
          </div>
          <div className="md:col-span-7 md:pt-4">
            <p className="max-w-xl text-[15px] leading-[1.7] text-foreground/80 md:text-[16px]">
              I walk New York with a camera the same way I open a sketchbook —
              looking for the quiet grid, the carved ornament, the one moment a
              cast-iron façade decides to speak. The frames below are from an
              ongoing archive shot in Soho, Tribeca, and the Flatiron district.
            </p>
            <p className="mt-5 max-w-xl text-[14px] leading-[1.65] text-muted">
              Architecture teaches hierarchy. Repetition teaches rhythm. Both
              show up in the interfaces I design — in the negative space, the
              column rules, the patience of the scroll.
            </p>
          </div>
        </div>

        <Reveal
          delay={0.2}
          className="mt-14 grid grid-cols-2 gap-3 md:mt-20 md:grid-cols-3 md:gap-5"
        >
          {frames.map((f, i) => (
            <motion.figure
              key={f.src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{
                duration: 0.9,
                delay: i * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group flex flex-col gap-3"
            >
              <div
                className={`relative ${f.aspect} overflow-hidden rounded-[18px] bg-foreground/5 md:rounded-[22px]`}
              >
                <Image
                  src={f.src}
                  alt={f.caption}
                  fill
                  sizes="(min-width:768px) 30vw, 50vw"
                  className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                />
              </div>
              <figcaption className="flex items-baseline justify-between gap-3 text-[11px] uppercase tracking-[0.2em]">
                <span className="text-foreground/80">
                  ({String(i + 1).padStart(2, "0")}) {f.caption}
                </span>
                <span className="text-muted">{f.place}</span>
              </figcaption>
            </motion.figure>
          ))}
        </Reveal>

        <div className="mt-14 flex items-center justify-between border-t border-border pt-6 text-[11px] uppercase tracking-[0.22em] text-muted md:mt-20">
          <span>(Field notes · 2024 — 2026)</span>
          <span>Shot on iPhone &amp; X100V</span>
        </div>
      </div>
    </section>
  );
}
