"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const phrases = [
  "with curiosity.",
  "with care.",
  "with type.",
  "out loud.",
];

const labels = ["Design", "Sketch", "Code", "Iterate"];

export default function BuiltDifferent() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % phrases.length), 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative bg-invert-bg text-invert-fg overflow-hidden">
      <div className="mx-auto max-w-[1640px] px-5 py-24 md:px-[30px] 2xl:px-[44px] md:py-36">
        <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.22em] text-white/40">
          <span>(How I work)</span>
          <span>Process · 2026</span>
        </div>

        <h2 className="mt-12 font-avaleigh font-bold text-[clamp(2.6rem,8vw,8rem)] leading-[0.95] tracking-[-0.02em] md:mt-16">
          <span className="block">
            <span className="relative inline-block overflow-hidden align-baseline">
              <motion.span
                key={labels[i]}
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                exit={{ y: "-100%" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block"
              >
                {labels[i]}
              </motion.span>
            </span>{" "}
            <span className="italic text-white/45">
              <motion.span
                key={phrases[i]}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block"
              >
                {phrases[i]}
              </motion.span>
            </span>
          </span>
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-10 border-t border-white/10 pt-10 md:grid-cols-12 md:gap-12">
          <p className="md:col-span-5 max-w-md text-[15px] leading-[1.65] text-white/70">
            I move between sketchbook, Figma, and code — looking for the moment
            an idea earns its keep. The process is calm, opinionated, and
            mostly invisible.
          </p>
          <ul className="md:col-span-7 grid grid-cols-2 gap-x-8 gap-y-4 text-[15px] text-white/85 md:grid-cols-4">
            {labels.map((l, idx) => (
              <li key={l} className="flex items-baseline gap-3">
                <span className="font-mono text-[11px] text-white/40">
                  0{idx + 1}
                </span>
                {l}
              </li>
            ))}
          </ul>
        </div>
      </div>

    </section>
  );
}
