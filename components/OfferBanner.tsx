"use client";
import { useState } from "react";
import { brand } from "@/lib/data";

export function OfferBanner() {
  const [open, setOpen] = useState(true);
  if (!open) return null;
  return (
    <div className="border-b-2 border-vault-fg bg-vault-pink text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 font-mono text-[10px] uppercase tracking-widest md:text-xs">
        <p>
          {brand.offer.label} — <strong>{brand.offer.code}</strong>
          <span className="ml-2 opacity-80">{brand.offer.ends}</span>
        </p>
        <button type="button" onClick={() => setOpen(false)} aria-label="Dismiss">X</button>
      </div>
    </div>
  );
}
