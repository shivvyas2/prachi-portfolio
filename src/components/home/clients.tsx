import Marquee from "@/components/marquee";

const inspirations = [
  "Robert Wilson",
  "Michael Lantz",
  "Christelle Schraff",
  "Nicole Cohen",
  "Haik Sahakian",
];

export default function Clients() {
  return (
    <section className="border-y border-border bg-background py-8 md:py-10">
      <div className="mx-auto mb-6 flex max-w-[1640px] items-center justify-between gap-4 px-5 text-[11px] uppercase tracking-[0.22em] text-muted md:px-[30px] 2xl:px-[44px]">
        <span className="inline-flex items-center gap-2">
          <span className="size-1 rounded-full bg-foreground/60" />
          Currently inspired by
        </span>
        <span>(Professors)</span>
      </div>
      <Marquee>
        {inspirations.map((c) => (
          <div
            key={c}
            className="flex shrink-0 items-center gap-3 px-8 font-sans text-[26px] font-semibold tracking-[-0.02em] text-foreground/55"
          >
            <span className="size-1.5 rounded-full bg-foreground/30" />
            {c}
          </div>
        ))}
      </Marquee>
    </section>
  );
}
