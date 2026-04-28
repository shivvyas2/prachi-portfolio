import SectionLabel from "@/components/section-label";
import Reveal, { RevealText } from "@/components/reveal";

export default function Mission() {
  return (
    <section className="relative py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-5 md:px-[30px]">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-3">
            <SectionLabel>Approach</SectionLabel>
          </div>
          <div className="md:col-span-9">
            <h2 className="font-sans font-semibold text-[clamp(2.4rem,5.6vw,5.75rem)] leading-[1] tracking-[-0.04em]">
              <RevealText
                as="span"
                text="I design with focus, intention, and"
              />{" "}
              <span className="italic text-foreground/40">
                <RevealText as="span" text="curiosity." delay={0.5} />
              </span>
            </h2>
            <Reveal delay={0.4} className="mt-12 grid grid-cols-1 gap-10 border-t border-border pt-8 md:mt-16 md:grid-cols-3 md:pt-10">
              <p className="text-[14px] leading-[1.65] text-foreground/80">
                A student portfolio is a place to think out loud — to test
                ideas, iterate often, and let craft compound. These are mine.
              </p>
              <div className="flex flex-col gap-2">
                <span className="font-sans text-5xl font-semibold tracking-tight md:text-6xl">
                  03
                </span>
                <span className="text-[11px] uppercase tracking-[0.2em] text-muted">
                  Years studying <br /> design + code
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-sans text-5xl font-semibold tracking-tight md:text-6xl">
                  24
                </span>
                <span className="text-[11px] uppercase tracking-[0.2em] text-muted">
                  Self-initiated <br /> projects shipped
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
