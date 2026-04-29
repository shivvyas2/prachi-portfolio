"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Expand } from "lucide-react";
import Lightbox from "./lightbox";
import type { Photo } from "@/lib/photography";

// 5-photo editorial layout:
// Row 1 — 7 / 5 (heights aligned via custom aspect ratios in lib/photography.ts).
// Row 2 — 4 / 4 / 4 (same aspect — matching heights).
const layout = [
  "md:col-span-7",
  "md:col-span-5",
  "md:col-span-4",
  "md:col-span-4",
  "md:col-span-4",
];

export default function PhotographyGrid({ photos }: { photos: Photo[] }) {
  const [active, setActive] = useState<number | null>(null);

  const open = (i: number) => setActive(i);
  const close = () => setActive(null);
  const prev = () =>
    setActive((i) => (i === null ? null : (i - 1 + photos.length) % photos.length));
  const next = () =>
    setActive((i) => (i === null ? null : (i + 1) % photos.length));

  return (
    <>
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-6">
        {photos.map((p, i) => (
          <motion.li
            key={p.src}
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{
              duration: 0.9,
              delay: (i % 4) * 0.06,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={`${layout[i] ?? "md:col-span-6"}`}
          >
            <button
              type="button"
              onClick={() => open(i)}
              aria-label={`Open ${p.caption}`}
              className="group relative block w-full overflow-hidden rounded-[20px] bg-foreground/5 text-left"
            >
              <div className={`relative ${p.aspect} w-full`}>
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes="(min-width:768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                />
              </div>

              <div className="pointer-events-none absolute inset-x-3 bottom-3 flex items-center justify-between rounded-xl bg-black/55 px-3 py-2 text-[11px] uppercase tracking-[0.2em] text-white opacity-0 backdrop-blur-md transition-opacity group-hover:opacity-100">
                <span>{p.caption}</span>
                <span className="inline-flex size-6 items-center justify-center rounded-full bg-white/15">
                  <Expand className="size-3" />
                </span>
              </div>

              <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-black/55 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-white backdrop-blur-md">
                {String(i + 1).padStart(2, "0")}
              </span>
            </button>
          </motion.li>
        ))}
      </ul>

      <Lightbox
        photos={photos}
        index={active}
        onClose={close}
        onPrev={prev}
        onNext={next}
      />
    </>
  );
}
