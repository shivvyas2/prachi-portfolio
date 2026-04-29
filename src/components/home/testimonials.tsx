"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionLabel from "@/components/section-label";

const items = [
  {
    quote:
      "Prachi has a quiet, considered eye for typography — the kind that takes years to develop. Her layouts feel calm and intentional, never decorative.",
    author: "Prof. L. Moreau",
    role: "Faculty · Pace University",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80&auto=format&fit=crop",
  },
  {
    quote:
      "She moves between sketchbook and code without losing the idea — that's rare in someone this early. Her process is honest and her work shows it.",
    author: "T. Reyes",
    role: "Mentor · Brand Designer",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80&auto=format&fit=crop",
  },
  {
    quote:
      "Working with Prachi on the studio brief reminded me why crit matters. She listens, pushes back when it counts, and ships work she stands behind.",
    author: "M. Chen",
    role: "Classmate · Studio Partner",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80&auto=format&fit=crop",
  },
  {
    quote:
      "Her CS background shows up in the right places — systems thinking, accessibility, performance. The design never feels engineered, but it's always considered.",
    author: "A. Faure",
    role: "Mentor · Front-end Lead",
    avatar:
      "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=400&q=80&auto=format&fit=crop",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-24 md:py-36">
      <div className="mx-auto max-w-[1640px] px-5 md:px-[30px] 2xl:px-[44px]">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 md:mb-16 md:flex-row md:items-end">
          <div>
            <SectionLabel>Kind words</SectionLabel>
            <h2 className="mt-6 font-avaleigh font-bold text-[clamp(2rem,4.8vw,6.5rem)] leading-[1.05] tracking-[-0.02em]">
              From mentors, <br />
              <span className="italic text-foreground/40">faculty, and friends.</span>
            </h2>
          </div>
          <span className="text-[11px] uppercase tracking-[0.22em] text-muted">
            (Scroll for more)
          </span>
        </div>

        <div className="-mx-5 overflow-x-auto px-5 pb-2 no-scrollbar md:-mx-[30px] md:px-[30px] 2xl:px-[44px]">
          <ul className="flex w-max gap-4">
            {items.map((t, i) => (
              <motion.li
                key={t.author}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.7, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                className="flex w-[88vw] max-w-[440px] shrink-0 flex-col rounded-[24px] border border-border bg-card p-8"
              >
                <p className="font-sans text-[20px] font-medium leading-[1.45] tracking-[-0.01em] md:text-[22px]">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-8 flex items-center gap-3 border-t border-border pt-5">
                  <div className="relative size-11 overflow-hidden rounded-full bg-foreground/5">
                    <Image src={t.avatar} alt={t.author} fill sizes="44px" className="object-cover" />
                  </div>
                  <div>
                    <div className="text-sm">{t.author}</div>
                    <div className="text-[11px] uppercase tracking-[0.18em] text-muted">
                      {t.role}
                    </div>
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
