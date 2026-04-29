import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { posts, getPost } from "@/lib/posts";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export default async function BlogDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) notFound();

  const idx = posts.findIndex((x) => x.slug === slug);
  const next = posts[(idx + 1) % posts.length];

  return (
    <>
      <section className="pt-36 pb-10 md:pt-48">
        <div className="mx-auto max-w-[1040px] px-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
            All articles
          </Link>
          <div className="mt-10 text-[11px] uppercase tracking-[0.2em] text-muted">
            {p.date} · {p.category}
          </div>
          <h1 className="mt-6 font-avaleigh font-bold text-[clamp(2.4rem,6.2vw,7.5rem)] leading-[0.95]">
            {p.title}
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted">{p.excerpt}</p>
        </div>
      </section>

      <section className="pb-12">
        <div className="mx-auto max-w-[1560px] px-6">
          <div className="relative aspect-[16/9] overflow-hidden rounded-[28px] bg-foreground/5">
            <Image
              src={p.src}
              alt={p.title}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <article className="prose-mono pb-24">
        <div className="mx-auto max-w-[760px] px-6 text-[1.05rem] leading-[1.8] text-foreground/85">
          <p>
            Most of the work in design isn&rsquo;t making things — it&rsquo;s
            removing them. We start nearly every project the same way: write
            down everything that exists, then aggressively prune until what
            remains feels honest and load-bearing.
          </p>
          <h2 className="font-avaleigh font-bold text-3xl mt-12 mb-4 text-foreground">
            Decisions over options
          </h2>
          <p>
            Brands and products that age well tend to be opinionated. They
            don&rsquo;t hedge. The job of the studio is to translate strategy
            into the smallest set of decisions that the team can actually
            defend a year from now.
          </p>
          <h2 className="font-avaleigh font-bold text-3xl mt-12 mb-4 text-foreground">
            What we ship
          </h2>
          <p>
            Tokens, components, governance — and the human practices that make
            a system stick. Documentation we&rsquo;d be proud to inherit.
          </p>
        </div>
      </article>

      <section className="border-t border-border py-16">
        <div className="mx-auto max-w-[1560px] px-6">
          <Link
            href={`/blog/${next.slug}`}
            className="group flex items-center justify-between gap-6"
          >
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-muted">
                Next article
              </div>
              <div className="mt-3 font-avaleigh font-bold text-3xl md:text-5xl">
                {next.title}
              </div>
            </div>
            <div className="inline-flex size-12 items-center justify-center rounded-full border border-border transition-transform group-hover:rotate-45">
              <ArrowUpRight className="size-5" />
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}
