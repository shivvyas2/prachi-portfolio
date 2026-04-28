import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/page-hero";
import Reveal from "@/components/reveal";
import { posts } from "@/lib/posts";
import { ArrowUpRight } from "lucide-react";

export default function BlogIndexPage() {
  return (
    <>
      <PageHero
        eyebrow="Journal"
        title="Smart insights, written for builders."
        subtitle="Field notes on brand, design systems, and the messy work of shipping ambitious products."
      />
      <section className="pb-32">
        <div className="mx-auto max-w-[1320px] px-6">
          <ul className="grid grid-cols-1 gap-y-12 md:grid-cols-12 md:gap-x-6">
            {posts.map((p, i) => (
              <Reveal
                as="li"
                key={p.slug}
                delay={i * 0.05}
                className={i === 0 ? "md:col-span-12" : "md:col-span-6"}
              >
                <Link href={`/blog/${p.slug}`} className="group block">
                  <div
                    className={`relative ${
                      i === 0 ? "aspect-[16/8]" : "aspect-[16/10]"
                    } overflow-hidden rounded-2xl bg-foreground/5`}
                  >
                    <Image
                      src={p.src}
                      alt={p.title}
                      fill
                      sizes={i === 0 ? "100vw" : "50vw"}
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="mt-5 flex items-baseline justify-between gap-6">
                    <div>
                      <div className="text-[11px] uppercase tracking-[0.2em] text-muted">
                        {p.date} · {p.category}
                      </div>
                      <h3
                        className={`mt-3 font-display ${
                          i === 0 ? "text-4xl md:text-6xl" : "text-2xl md:text-3xl"
                        } leading-[1.05]`}
                      >
                        {p.title}
                      </h3>
                      <p className="mt-3 max-w-md text-sm text-muted">
                        {p.excerpt}
                      </p>
                    </div>
                    <div className="inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-border transition-transform group-hover:rotate-45">
                      <ArrowUpRight className="size-4" />
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
