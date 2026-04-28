"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/section-label";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    n: "001",
    title: "Visual Identity",
    desc: "Marks, typographic systems, and small brand worlds — built from a single confident idea.",
  },
  {
    n: "002",
    title: "Editorial & Print",
    desc: "Posters, zines, and editorial layouts that take typography seriously and make ideas legible.",
  },
  {
    n: "003",
    title: "Web Design",
    desc: "Modern, responsive sites with quiet motion and a clear hierarchy.",
  },
  {
    n: "004",
    title: "Front-End Development",
    desc: "Hand-coded React + Next.js with a meticulous eye for craft, accessibility, and performance.",
  },
  {
    n: "005",
    title: "Type Studies",
    desc: "Specimens, hand-drawn lettering, and explorations of how letters shape voice.",
  },
];

export default function Services() {
  return (
    <section className="relative py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-5 md:px-[30px]">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-4">
            <SectionLabel>What I do</SectionLabel>
            <h2 className="mt-6 font-sans font-semibold text-[clamp(2.2rem,4.6vw,4.75rem)] leading-[1.02] tracking-[-0.035em]">
              Five things <br />
              <span className="text-foreground/40">I keep coming back to.</span>
            </h2>
            <p className="mt-6 max-w-sm text-[14px] leading-[1.65] text-muted">
              Areas of practice — equally serious about the craft side and the
              system side. Each one informs the next.
            </p>
            <Link
              href="/contact"
              className="group mt-10 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm text-background transition-transform hover:-translate-y-0.5"
            >
              Get in touch
              <ArrowUpRight className="size-4 transition-transform group-hover:rotate-45" />
            </Link>
          </div>

          <ul className="md:col-span-8 divide-y divide-border border-y border-border">
            {services.map((s, i) => (
              <motion.li
                key={s.n}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.7, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="group grid grid-cols-12 items-baseline gap-4 py-7 transition-colors hover:bg-foreground/[0.02] md:gap-6"
              >
                <span className="col-span-2 font-mono text-xs text-muted md:col-span-1">
                  ({s.n})
                </span>
                <span className="col-span-10 font-sans text-2xl font-semibold tracking-tight md:col-span-3 md:text-3xl">
                  {s.title}
                </span>
                <p className="col-span-12 text-[14px] leading-[1.6] text-muted md:col-span-7 md:col-start-5">
                  {s.desc}
                </p>
                <span className="hidden md:inline-flex md:col-span-1 justify-end">
                  <ArrowUpRight className="size-5 text-muted transition-all group-hover:rotate-45 group-hover:text-foreground" />
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
