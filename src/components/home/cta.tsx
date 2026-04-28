import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { RevealText } from "@/components/reveal";

export default function CTA() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-[1400px] px-5 py-28 md:px-[30px] md:py-44">
        <div className="mb-10 flex items-center justify-between text-[11px] uppercase tracking-[0.22em] text-muted md:mb-14">
          <span>(Get in touch)</span>
          <span>2026 — New York, USA</span>
        </div>
        <Link href="/contact" className="group block">
          <h2 className="font-sans font-semibold text-[clamp(2.4rem,8.4vw,8.5rem)] leading-[0.92] tracking-[-0.045em]">
            <RevealText
              as="span"
              text="Have a brief,"
            />{" "}
            <span className="italic text-foreground/40">
              <RevealText as="span" text="a question," delay={0.25} />
            </span>
            <br />
            <RevealText as="span" text="or just want to" delay={0.5} />{" "}
            <span className="italic text-foreground/40">
              <RevealText as="span" text="say hi?" delay={0.75} />
            </span>
            <span className="ml-3 inline-flex translate-y-3 items-center align-middle">
              <span className="inline-flex size-[0.85em] items-center justify-center rounded-full bg-foreground text-background transition-transform group-hover:rotate-45">
                <ArrowUpRight className="size-[0.45em]" />
              </span>
            </span>
          </h2>
        </Link>
      </div>
    </section>
  );
}
