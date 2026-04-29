import { ArrowDown, Camera, MapPin } from "lucide-react";
import SectionLabel from "@/components/section-label";
import { RevealText } from "@/components/reveal";
import PhotographyGrid from "@/components/photography/grid";
import { series } from "@/lib/photography";

export const metadata = {
  title: `${series.title} — Photography · Prachi Patel`,
  description: series.description,
};

export default function PhotographyPage() {
  return (
    <>
      <section className="pt-32 pb-12 md:pt-44 md:pb-20">
        <div className="mx-auto max-w-[1640px] px-5 md:px-[30px] 2xl:px-[44px]">
          <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.22em] text-muted">
            <SectionLabel>Photography</SectionLabel>
            <span>(Series 01 · 2026)</span>
          </div>

          <h1 className="mt-8 font-avaleigh font-bold text-[clamp(2.6rem,8.6vw,12rem)] leading-[0.92] tracking-[-0.02em]">
            <RevealText as="span" text={series.title} />
            <span className="text-foreground/40">.</span>
          </h1>

          <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-12">
            <p className="md:col-span-7 text-[17px] leading-[1.55] text-foreground md:text-[19px]">
              {series.description}
            </p>
            <dl className="md:col-span-5 md:col-start-8 grid grid-cols-2 gap-y-4 self-end border-t border-border pt-6 text-sm">
              <Fact icon={<MapPin className="size-3.5" />} k="Location" v="New York City" />
              <Fact icon={<Camera className="size-3.5" />} k="Captured" v="iPhone · 2025–26" />
              <Fact k="Frames" v={`${series.photos.length} selected`} />
              <Fact k="Series" v={series.subtitle} />
            </dl>
          </div>

          <div className="mt-14 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-muted">
            <ArrowDown className="size-3.5" />
            Scroll the archive
          </div>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-[1640px] px-5 md:px-[30px] 2xl:px-[44px]">
          <PhotographyGrid photos={series.photos} />
        </div>
      </section>

      <section className="border-t border-border pb-28 pt-16 md:pb-40">
        <div className="mx-auto max-w-[1640px] px-5 md:px-[30px] 2xl:px-[44px]">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <SectionLabel>Note</SectionLabel>
            </div>
            <p className="md:col-span-8 font-sans text-[clamp(1.4rem,2.5vw,2.75rem)] leading-[1.3] tracking-[-0.015em] text-foreground/85">
              I started this archive on an ordinary walk home. Most of the
              buildings I shoot are from the late 1800s — cast-iron Soho,
              terracotta Tribeca, the brick blocks above 14th Street. I&rsquo;m
              looking for the small ornaments that survived a hundred years of
              weather and indifference.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

function Fact({
  icon,
  k,
  v,
}: {
  icon?: React.ReactNode;
  k: string;
  v: string;
}) {
  return (
    <div>
      <dt className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.2em] text-muted">
        {icon}
        {k}
      </dt>
      <dd className="mt-1 text-foreground">{v}</dd>
    </div>
  );
}
