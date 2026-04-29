"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import NowStrip from "./now-strip";
import HeroSpotlight from "./hero-spotlight";
import DisciplineTicker from "./discipline-ticker";

const services = [
  "Web Design",
  "Social Media",
  "Marketing",
  "Development",
  "SEO Optimization",
];

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden pb-6 pt-28 md:pt-32">
      <div className="mx-auto w-full max-w-[1640px] px-5 md:px-[30px] 2xl:px-[44px]">
        {/* Live "now" strip — replaces the bare dotted row */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <NowStrip />
        </motion.div>

        {/* Main grid: services (col 1) — spotlight image (col 2-3) — description + button (col 4) */}
        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-6">
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

          {/* Vertical photo spotlight in the previously-empty middle */}
          <div className="md:col-span-2 md:col-start-2">
            <HeroSpotlight />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-start-4 md:col-span-1 flex max-w-[300px] flex-col gap-6 md:self-end"
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
      </div>

      {/* Big wordmark, then © line directly below it */}
      <div className="mx-auto mt-auto w-full max-w-[1640px] px-5 pt-16 md:px-[30px] 2xl:px-[44px] md:pt-24">
        <h1
          aria-label="Prachi Patel"
          className="flex items-baseline justify-between font-avaleigh font-bold tracking-[-0.02em] leading-[0.84]"
        >
          <Word delay={0.1}>Prachi</Word>
          <Word delay={0.22}>Patel</Word>
        </h1>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-4 md:mt-8">
          <div className="md:col-span-1 text-[12px] leading-[17px] text-foreground">
            © 2026 Prachi Patel
          </div>
        </div>
      </div>

      {/* Subtle marquee — runs after the © line, gives the hero a final beat */}
      <div className="mt-8 md:mt-10">
        <DisciplineTicker />
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
        className="inline-block text-[clamp(4rem,15.5vw,18rem)] leading-[0.84]"
      >
        {children}
      </motion.span>
    </span>
  );
}
