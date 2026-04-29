import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionLabel from "@/components/section-label";
import Reveal, { RevealText } from "@/components/reveal";
import { works } from "@/lib/works";

export default function WorkIndexPage() {
  return (
    <>
      <section className="pt-32 pb-12 md:pt-44">
        <div className="mx-auto max-w-[1640px] px-5 md:px-[30px] 2xl:px-[44px]">
          <SectionLabel>Work</SectionLabel>
          <h1 className="mt-6 font-avaleigh font-bold text-[clamp(2.6rem,8.5vw,11rem)] leading-[0.92] tracking-[-0.02em]">
            <RevealText as="span" text="Selected work," />
            <br />
            <span className="text-foreground/40">
              <RevealText as="span" text="2024 — 2026." delay={0.3} />
            </span>
          </h1>
          <p className="mt-8 max-w-xl text-[16px] leading-[1.6] text-muted">
            A short selection of recent identities, mobile products, and
            editorial systems. Each project is self-initiated, end-to-end —
            from research to launch.
          </p>
        </div>
      </section>

      <section className="pb-32">
        <div className="mx-auto max-w-[1640px] px-5 md:px-[30px] 2xl:px-[44px]">
          <ul className="flex flex-col gap-6 md:gap-8">
            {works.map((w, i) => (
              <Reveal as="li" key={w.slug} delay={i * 0.05}>
                <Link href={`/work/${w.slug}`} className="group block">
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

                    <div className="grid grid-cols-1 items-end gap-4 px-6 pb-6 pt-7 md:grid-cols-12 md:gap-6 md:px-8 md:pb-8 md:pt-9">
                      <div className="md:col-span-7">
                        <h2 className="font-sans text-3xl font-semibold tracking-[-0.025em] md:text-5xl">
                          {w.title}
                        </h2>
                        <div className="mt-1 text-[11px] uppercase tracking-[0.22em] text-foreground/60">
                          {w.role}
                        </div>
                      </div>
                      <p className="md:col-span-4 max-w-md text-[14px] leading-[1.6] text-foreground/75">
                        {w.summary}
                      </p>
                      <span className="md:col-span-1 md:justify-self-end inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-foreground text-background transition-transform group-hover:rotate-45 md:size-14">
                        <ArrowUpRight className="size-5" />
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
