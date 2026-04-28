"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/cn";

const links = [
  { label: "Home", href: "/" },
  { label: "Studio", href: "/about" },
  { label: "Work", href: "/work", badge: "(4)" },
  { label: "News", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "py-3" : "py-6"
      )}
    >
      <div className="mx-auto flex max-w-[1380px] items-center justify-between gap-6 px-5 md:px-8">
        <Link
          href="/"
          aria-label="Prachi Patel"
          className="group inline-flex items-center gap-2.5"
        >
          <Image
            src="/logo.png"
            alt=""
            width={36}
            height={36}
            priority
            className="size-9 object-contain"
          />
          <span className="font-sans text-[18px] font-semibold leading-none tracking-tight">
            Prachi Patel
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-[14px] md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group inline-flex items-center gap-2 transition-colors"
            >
              <span className="size-1.5 rounded-full bg-foreground transition-transform group-hover:scale-125" />
              <span className="border-b border-transparent pb-0.5 group-hover:border-foreground">
                {link.label}
                {link.badge ? (
                  <span className="ml-1 text-muted">{link.badge}</span>
                ) : null}
              </span>
            </Link>
          ))}
        </nav>

        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="relative inline-flex size-9 items-center justify-center rounded-full bg-foreground text-background transition-transform hover:scale-105"
        >
          <span
            className={cn(
              "block size-2 rounded-full bg-background transition-transform",
              open && "scale-125"
            )}
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="md:mx-8 mx-5 mt-3 rounded-3xl border border-border bg-background/95 p-4 backdrop-blur-md md:absolute md:right-8 md:top-full md:w-[280px]"
          >
            <div className="flex flex-col">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center gap-2 rounded-2xl px-4 py-3 text-base hover:bg-foreground/5"
                >
                  <span className="size-1.5 rounded-full bg-foreground" />
                  {link.label}
                  {link.badge ? (
                    <span className="ml-1 text-muted text-sm">{link.badge}</span>
                  ) : null}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-full bg-foreground px-5 py-3 text-sm text-background"
              >
                Let&rsquo;s talk
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
