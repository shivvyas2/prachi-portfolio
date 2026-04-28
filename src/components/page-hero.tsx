import { RevealText } from "@/components/reveal";
import SectionLabel from "@/components/section-label";

export default function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="pt-40 pb-16 md:pt-52 md:pb-24">
      <div className="mx-auto max-w-[1320px] px-6">
        <SectionLabel>{eyebrow}</SectionLabel>
        <h1 className="mt-6 font-display text-[clamp(2.8rem,8vw,8rem)] leading-[0.9] tracking-tight">
          <RevealText as="span" text={title} />
        </h1>
        {subtitle && (
          <p className="mt-8 max-w-2xl text-lg text-muted">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
