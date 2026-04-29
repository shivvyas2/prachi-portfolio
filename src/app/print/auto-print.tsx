"use client";

import { useState } from "react";
import { Download, FileDown } from "lucide-react";

export default function PrintControls() {
  const [busy, setBusy] = useState(false);

  const onDownload = () => {
    setBusy(true);
    // Give the print dialog a tick to mount.
    setTimeout(() => {
      window.print();
      setBusy(false);
    }, 100);
  };

  return (
    <div className="print-controls fixed left-1/2 top-5 z-40 flex -translate-x-1/2 items-center gap-3 rounded-full border border-border bg-background/95 px-3 py-2 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.18)] backdrop-blur-md">
      <span className="ml-2 text-[11px] uppercase tracking-[0.22em] text-muted">
        Print preview
      </span>
      <button
        type="button"
        onClick={onDownload}
        disabled={busy}
        className="inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-[13px] text-background transition-transform hover:-translate-y-0.5 disabled:opacity-60"
      >
        <Download className="size-3.5" />
        {busy ? "Opening dialog…" : "Save as PDF"}
      </button>
      <a
        href="/"
        className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-[13px] text-foreground hover:bg-foreground/5"
      >
        Back to site
      </a>
      <span className="hidden items-center gap-1 pr-2 text-[11px] text-muted md:inline-flex">
        <FileDown className="size-3.5" />
        Tip: choose &ldquo;Save as PDF&rdquo; in the print dialog
      </span>
    </div>
  );
}
