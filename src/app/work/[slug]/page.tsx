import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { works, getWork } from "@/lib/works";
import SectionLabel from "@/components/section-label";

export function generateStaticParams() {
  return works.map((w) => ({ slug: w.slug }));
}

export default async function WorkDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const w = getWork(slug);
  if (!w) notFound();

  const idx = works.findIndex((x) => x.slug === slug);
  const next = works[(idx + 1) % works.length];
  const gallery = w.gallery ?? w.images;

  return (
    <>
      <section className="pt-32 pb-12 md:pt-40">
        <div className="mx-auto max-w-[1400px] px-5 md:px-[30px]">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-[13px] text-muted hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
            All projects
          </Link>

          <div className="mt-10 flex items-center justify-between text-[11px] uppercase tracking-[0.22em] text-muted">
            <SectionLabel>Case study</SectionLabel>
            <span>
              ({String(idx + 1).padStart(2, "0")} of {String(works.length).padStart(2, "0")})
            </span>
          </div>

          <h1 className="mt-6 font-sans font-semibold text-[clamp(2.8rem,8vw,8.5rem)] leading-[0.92] tracking-[-0.045em]">
            {w.title}
          </h1>

          <div className="mt-12 grid grid-cols-2 gap-y-6 gap-x-4 border-t border-border pt-8 text-sm md:grid-cols-4">
            <Meta label="Client" value={w.client} />
            <Meta label="Role" value={w.role} />
            <Meta label="Year" value={w.year} />
            <Meta label="Status" value="Live" />
          </div>
        </div>
      </section>

      {/* Hero image board */}
      <section className="pb-16 md:pb-24">
        <div className="mx-auto max-w-[1400px] px-5 md:px-[30px]">
          <div
            className={`relative overflow-hidden rounded-[24px] ${w.bg} px-6 py-10 md:px-12 md:py-14`}
          >
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
              {gallery.slice(0, 3).map((img, idx) => (
                <div
                  key={img.src + idx}
                  className={`relative ${w.aspect} overflow-hidden rounded-[14px] bg-foreground/5 shadow-[0_12px_32px_-16px_rgba(0,0,0,0.22)] md:rounded-[18px]`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    priority={idx === 0}
                    sizes="(min-width:768px) 30vw, 90vw"
                    className="object-cover object-top"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1400px] px-5 md:px-[30px]">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-3">
              <SectionLabel>Overview</SectionLabel>
              {w.tags && (
                <ul className="mt-8 flex flex-wrap gap-2">
                  {w.tags.map((t) => (
                    <li
                      key={t}
                      className="inline-flex items-center rounded-full border border-border bg-background/60 px-3 py-1 text-[12px] text-foreground/80"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="md:col-span-9">
              <p className="font-sans text-[clamp(1.6rem,3vw,2.6rem)] font-medium leading-[1.2] tracking-[-0.02em]">
                {w.intro}
              </p>
              <p className="mt-8 max-w-2xl text-[15px] leading-[1.7] text-muted">
                {w.summary}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sections / chapters */}
      {w.sections && w.sections.length > 0 && (
        <section className="pb-24 md:pb-32">
          <div className="mx-auto max-w-[1400px] px-5 md:px-[30px]">
            <ol className="divide-y divide-border border-y border-border">
              {w.sections.map((s) => (
                <li
                  key={s.label}
                  className="grid grid-cols-1 gap-6 py-12 md:grid-cols-12 md:gap-12 md:py-16"
                >
                  <div className="md:col-span-3 font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
                    {s.label}
                  </div>
                  <div className="md:col-span-9">
                    <h3 className="font-sans font-semibold text-[clamp(1.8rem,3.6vw,3.25rem)] leading-[1.05] tracking-[-0.03em]">
                      {s.heading}
                    </h3>
                    <p className="mt-6 max-w-2xl text-[15px] leading-[1.7] text-foreground/80">
                      {s.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {/* Extended gallery (when more than 3 images) */}
      {gallery.length > 3 && (
        <section className="pb-24">
          <div className="mx-auto max-w-[1400px] px-5 md:px-[30px]">
            <SectionLabel>Gallery</SectionLabel>
            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
              {gallery.slice(3).map((img, idx) => (
                <div
                  key={img.src + idx}
                  className={`relative ${w.aspect} overflow-hidden rounded-[20px] bg-foreground/5`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(min-width:768px) 45vw, 90vw"
                    className="object-cover object-top"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Next project */}
      <section className="border-t border-border py-16 md:py-20">
        <div className="mx-auto max-w-[1400px] px-5 md:px-[30px]">
          <Link
            href={`/work/${next.slug}`}
            className="group flex items-center justify-between gap-6"
          >
            <div>
              <div className="text-[11px] uppercase tracking-[0.22em] text-muted">
                Next project
              </div>
              <div className="mt-3 font-sans text-4xl font-semibold tracking-[-0.03em] md:text-6xl">
                {next.title}
              </div>
              <div className="mt-2 text-[12px] uppercase tracking-[0.22em] text-muted">
                {next.role} · {next.year}
              </div>
            </div>
            <div className="inline-flex size-12 items-center justify-center rounded-full bg-foreground text-background transition-transform group-hover:rotate-45 md:size-14">
              <ArrowUpRight className="size-5" />
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[11px] uppercase tracking-[0.22em] text-muted">
        ({label})
      </div>
      <div className="mt-2 text-[14px]">{value}</div>
    </div>
  );
}
