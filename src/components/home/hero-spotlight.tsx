"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSpotlight() {
  return (
    <motion.figure
      initial={{ opacity: 0, scale: 0.96, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.35, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto w-full max-w-[300px]"
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-[20px] bg-foreground/5">
        <Image
          src="/photography/01-flatiron.jpg"
          alt="From the Building Archives, NYC"
          fill
          priority
          sizes="(min-width:768px) 25vw, 90vw"
          className="object-cover"
        />

        <div className="absolute inset-x-3 top-3 flex items-center justify-between text-[10px] uppercase tracking-[0.22em] text-white/90">
          <span className="rounded-full bg-black/45 px-2 py-1 backdrop-blur-md">
            (Frame 01)
          </span>
          <span className="rounded-full bg-black/45 px-2 py-1 backdrop-blur-md">
            Building Archives
          </span>
        </div>

        <div className="absolute inset-x-3 bottom-3 flex items-center justify-between rounded-xl bg-black/55 px-3 py-2 text-[10px] uppercase tracking-[0.22em] text-white backdrop-blur-md">
          <span>Flatiron · NYC</span>
          <span>26©</span>
        </div>
      </div>

      <figcaption className="mt-3 flex items-baseline justify-between text-[11px] uppercase tracking-[0.22em] text-muted">
        <span>(Lens 01)</span>
        <span>Shot on iPhone</span>
      </figcaption>
    </motion.figure>
  );
}
