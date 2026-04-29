"use client";

import { useEffect, useState } from "react";

const fmt = new Intl.DateTimeFormat("en-US", {
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
  timeZone: "America/New_York",
});

const wkday = new Intl.DateTimeFormat("en-US", {
  weekday: "short",
  timeZone: "America/New_York",
});

export default function NowStrip() {
  const [now, setNow] = useState<string>("--:--");
  const [day, setDay] = useState<string>("---");

  useEffect(() => {
    const tick = () => {
      const d = new Date();
      setNow(fmt.format(d));
      setDay(wkday.format(d));
    };
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="grid grid-cols-2 items-center gap-4 border-y border-border py-3 text-[11px] uppercase tracking-[0.22em] text-muted md:grid-cols-4">
      <div className="inline-flex items-center gap-2 text-foreground">
        <span className="relative inline-flex size-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500/60" />
          <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
        </span>
        Open for collaborations
      </div>
      <div className="hidden md:block">Based · New York City</div>
      <div className="hidden md:block">Studying · Pace University</div>
      <div className="text-right tabular-nums text-foreground">
        {day} · {now} <span className="text-muted">EST</span>
      </div>
    </div>
  );
}
