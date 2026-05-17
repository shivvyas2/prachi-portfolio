import Marquee from "@/components/marquee";

const disciplines = [
  "Type",
  "Layout",
  "Code",
  "Photography",
  "Brand",
  "Print",
  "Web",
  "Sketch",
  "Specimen",
];

export default function DisciplineTicker() {
  return (
    <Marquee className="border-y border-border py-4">
      {disciplines.map((d, i) => (
        <div
          key={`${d}-${i}`}
          className="flex shrink-0 items-center gap-3 px-7 text-[12px] uppercase tracking-[0.22em] text-muted"
        >
          <span className="size-1 rounded-full bg-foreground/50" />
          {d}
        </div>
      ))}
    </Marquee>
  );
}
