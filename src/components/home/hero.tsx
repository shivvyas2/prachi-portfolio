"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  "Web Design",
  "Social Media",
  "Marketing",
  "Development",
  "SEO Optimization",
];

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden pb-12 pt-32 md:pt-40">
      <div className="mx-auto w-full max-w-[1400px] px-5 md:px-[30px]">
        {/* Top strip: services list (col 1) — empty (col 2-3) — description + button (col 4) */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-6">
          <ul className="md:col-span-1 flex flex-col gap-[6.8px] text-[16px] leading-[20px]">
            {services.map((s, i) => (
              <motion.li
                key={s}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.2 + i * 0.06,
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-foreground"
              >
                {s}
              </motion.li>
            ))}
          </ul>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-start-4 md:col-span-1 flex max-w-[300px] flex-col gap-6"
          >
            <p className="text-[15px] leading-[1.5] text-foreground">
              A student designer exploring typography, layout, and visual
              communication — currently studying in New York.
            </p>
            <Link
              href="/contact"
              className="group inline-flex w-fit items-center gap-2 rounded-full bg-foreground px-6 py-[15px] text-[15px] leading-[20px] text-background transition-transform hover:-translate-y-0.5"
            >
              Let&rsquo;s talk
            </Link>
          </motion.div>
        </div>

        {/* 4 column-anchor dots */}
        <div className="mt-12 hidden grid-cols-4 md:grid">
          {[0, 1, 2, 3].map((i) => (
            <span
              key={i}
              className="size-2 rounded-full bg-foreground"
            />
          ))}
        </div>
      </div>

      {/* Big wordmark + © line */}
      <div className="mx-auto mt-auto w-full max-w-[1400px] px-5 pt-20 md:px-[30px] md:pt-32">
        <div className="grid grid-cols-1 md:grid-cols-4">
          <div className="md:col-start-4 md:col-span-1 text-[12px] leading-[17px] text-foreground">
            © 2026 Prachi Patel
          </div>
        </div>

        <h1
          aria-label="Prachi Patel"
          className="mt-5 flex items-baseline justify-between font-sans font-bold tracking-[-0.05em] leading-[0.84]"
        >
          <Word delay={0.1}>Prachi</Word>
          <Word delay={0.22}>Patel</Word>
        </h1>
      </div>
    </section>
  );
}

function Word({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <span className="inline-block overflow-hidden align-bottom">
      <motion.span
        initial={{ y: "108%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1.1, delay, ease: [0.22, 1, 0.36, 1] }}
        className="inline-block text-[clamp(4rem,14.8vw,13.3rem)] leading-[0.84]"
      >
        {children}
      </motion.span>
    </span>
  );
}
