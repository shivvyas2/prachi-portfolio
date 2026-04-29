"use client";

import { useState } from "react";
import { Download } from "lucide-react";
import html2canvas from "html2canvas-pro";
import jsPDF from "jspdf";

async function waitForReady() {
  // Wait for web fonts + all images on the page to load.
  if (document.fonts && document.fonts.ready) {
    try {
      await document.fonts.ready;
    } catch {}
  }
  const imgs = Array.from(document.images);
  await Promise.all(
    imgs.map((img) =>
      img.complete && img.naturalWidth > 0
        ? Promise.resolve()
        : new Promise<void>((res) => {
            img.addEventListener("load", () => res(), { once: true });
            img.addEventListener("error", () => res(), { once: true });
          })
    )
  );
}

export default function PrintControls() {
  const [busy, setBusy] = useState(false);
  const [stage, setStage] = useState<string>("");

  const onDownload = async () => {
    setBusy(true);
    setStage("Preparing…");
    try {
      await waitForReady();

      const pages = Array.from(
        document.querySelectorAll<HTMLElement>(".pdf-page")
      );
      if (pages.length === 0) {
        setStage("No content to capture");
        return;
      }

      const pdf = new jsPDF({
        unit: "mm",
        format: "a4",
        orientation: "portrait",
        compress: true,
      });
      const pageW = pdf.internal.pageSize.getWidth();
      const pageH = pdf.internal.pageSize.getHeight();

      for (let i = 0; i < pages.length; i++) {
        setStage(`Rendering ${i + 1} / ${pages.length}…`);
        const node = pages[i];
        const canvas = await html2canvas(node, {
          scale: 2,
          useCORS: true,
          backgroundColor: "#ffffff",
          logging: false,
          // Allow images served from /_next/image
          allowTaint: false,
        });

        // Fit canvas into A4 while preserving aspect.
        const ratio = canvas.width / canvas.height;
        let drawW = pageW;
        let drawH = drawW / ratio;
        if (drawH > pageH) {
          drawH = pageH;
          drawW = drawH * ratio;
        }
        const x = (pageW - drawW) / 2;
        const y = (pageH - drawH) / 2;

        if (i > 0) pdf.addPage();
        pdf.addImage(
          canvas.toDataURL("image/jpeg", 0.92),
          "JPEG",
          x,
          y,
          drawW,
          drawH,
          undefined,
          "FAST"
        );
      }

      setStage("Saving…");
      pdf.save("Prachi-Patel-Portfolio.pdf");
      setStage("Downloaded");
      setTimeout(() => setStage(""), 1500);
    } catch (err) {
      console.error("PDF generation failed", err);
      setStage("Failed — check console");
      setTimeout(() => setStage(""), 2500);
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="print-controls fixed left-1/2 top-5 z-40 flex -translate-x-1/2 items-center gap-3 rounded-full border border-border bg-background/95 px-3 py-2 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.18)] backdrop-blur-md">
      <span className="ml-2 text-[11px] uppercase tracking-[0.22em] text-muted">
        {stage || "PDF preview"}
      </span>
      <button
        type="button"
        onClick={onDownload}
        disabled={busy}
        className="inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-[13px] text-background transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
      >
        <Download className="size-3.5" />
        {busy ? "Generating…" : "Download PDF"}
      </button>
      <a
        href="/"
        className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-[13px] text-foreground hover:bg-foreground/5"
      >
        Back to site
      </a>
    </div>
  );
}
