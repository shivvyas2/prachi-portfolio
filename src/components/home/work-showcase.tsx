"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { works } from "@/lib/works";

export default function WorkShowcase() {
  const featured = works.slice(0, 4);

  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-[1640px] px-5 md:px-[30px] 2xl:px-[44px]">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12">
          <aside className="md:col-span-3">
            <div className="md:sticky md:top-32">
              <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-muted">
                <span className="size-1 rounded-full bg-foreground/60" />
                (Portfolio 26©)
              </div>
              <h2 className="mt-6 font-avaleigh font-bold text-[clamp(3rem,6.2vw,8.5rem)] leading-[0.95] tracking-[-0.02em]">
                Selected
                <br />
                <span className="italic text-foreground/40">Work</span>
                <span className="ml-3 align-top font-sans text-base font-normal text-muted">
                  (0{featured.length})
                </span>
              </h2>

              <p className="mt-6 max-w-xs text-[14px] leading-[1.65] text-muted">
                A short selection of recent identities, type studies, and
                editorial pieces — each shaped end-to-end with care.
              </p>

              <Link
                href="/work"
                className="group mt-8 inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm transition-colors hover:bg-foreground hover:text-background"
              >
                View all work
                <ArrowUpRight className="size-4 transition-transform group-hover:rotate-45" />
              </Link>
            </div>
          </aside>

          <div className="md:col-span-9 flex flex-col gap-5 md:gap-6">
            {featured.map((w, i) => (
              <motion.article
                key={w.slug}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-15%" }}
                transition={{
                  duration: 1,
                  delay: i * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative"
              >
                <Link href={`/work/${w.slug}`} className="block">
                  <div
                    className={`relative overflow-hidden rounded-[24px] ${w.bg}`}
                  >
                    <div className="flex items-start justify-between gap-3 px-6 pt-6 text-[11px] uppercase tracking-[0.22em] text-foreground/70 md:px-8 md:pt-8">
                      <span>
                        ({String(i + 1).padStart(2, "0")}) — {w.role}
                      </span>
                      <span>{w.year}</span>
                    </div>

                    <div className="grid grid-cols-3 gap-3 px-6 pt-6 md:gap-5 md:px-8 md:pt-8">
                      {w.images.map((img, idx) => (
                        <div
                          key={img.src + idx}
                          className={`relative ${w.aspect} overflow-hidden rounded-[14px] bg-foreground/5 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.18)] md:rounded-[18px]`}
                        >
                          <Image
                            src={img.src}
                            alt={img.alt}
                            fill
                            sizes="(min-width:768px) 22vw, 33vw"
                            className="object-contain transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
                          />
                        </div>
                      ))}
                    </div>

                    <div className="flex items-end justify-between gap-4 px-6 pb-6 pt-7 md:px-8 md:pb-8 md:pt-9">
                      <div>
                        <h3 className="font-sans text-3xl font-semibold tracking-[-0.025em] md:text-5xl">
                          {w.title}
                        </h3>
                        <div className="mt-1 text-[11px] uppercase tracking-[0.22em] text-foreground/60">
                          {w.role}
                        </div>
                      </div>
                      <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-foreground text-background transition-transform group-hover:rotate-45 md:size-14">
                        <ArrowUpRight className="size-5" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
