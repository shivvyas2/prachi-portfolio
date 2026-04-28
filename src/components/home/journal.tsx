"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionLabel from "@/components/section-label";
import { ArrowUpRight } from "lucide-react";

const posts = [
  {
    date: "March 18, 2026",
    title: "On reading typography before designing it",
    src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=900&q=80&auto=format&fit=crop",
    href: "/blog/one",
  },
  {
    date: "February 4, 2026",
    title: "Notes from the Pace design library",
    src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=900&q=80&auto=format&fit=crop",
    href: "/blog/two",
  },
  {
    date: "January 21, 2026",
    title: "Why I sketch before I open Figma",
    src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&q=80&auto=format&fit=crop",
    href: "/blog/three",
  },
  {
    date: "December 9, 2025",
    title: "Three things New York taught me about layout",
    src: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=900&q=80&auto=format&fit=crop",
    href: "/blog",
  },
];

export default function Journal() {
  return (
    <section className="relative py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-5 md:px-[30px]">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:mb-16 md:flex-row md:items-end">
          <div>
            <SectionLabel>Journal</SectionLabel>
            <h2 className="mt-5 font-sans font-semibold text-[clamp(2.2rem,5.6vw,5.75rem)] leading-[1] tracking-[-0.04em]">
              Notes from <br />
              <span className="italic text-foreground/40">the studio.</span>
            </h2>
          </div>
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm transition-colors hover:bg-foreground hover:text-background"
          >
            See all entries
            <ArrowUpRight className="size-4 transition-transform group-hover:rotate-45" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4">
          {posts.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className="group flex h-full flex-col"
            >
              <Link href={p.href} className="flex h-full flex-col">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[20px] bg-foreground/5">
                  <Image
                    src={p.src}
                    alt={p.title}
                    fill
                    sizes="(min-width:768px) 25vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                  />
                </div>
                <div className="mt-5 flex flex-1 flex-col">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-muted">
                    {p.date}
                  </div>
                  <h3 className="mt-3 font-sans text-[18px] font-semibold leading-[1.3] tracking-[-0.015em]">
                    {p.title}
                  </h3>
                  <div className="mt-auto flex items-center gap-2 pt-6 text-[13px] text-muted">
                    Read note
                    <ArrowUpRight className="size-4 transition-transform group-hover:rotate-45" />
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
