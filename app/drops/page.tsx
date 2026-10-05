"use client";
import Link from "next/link";
import { DropBoard } from "@/components/DropBoard";
import { DropBillboard } from "@/components/DropBillboard";

export default function DropsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 md:px-6">
      <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-[#ff4ecd]">Y2K drop board</p>
      <h1 className="mt-2 font-display text-5xl uppercase md:text-6xl"><span className="chrome-text">Heat</span> list</h1>
      <p className="mt-2 text-sm text-white/60">Sticker energy and countdown chaos — no sneaker turntable.</p>
      <div className="mt-8"><DropBillboard /></div>
      <div className="mt-10"><DropBoard /></div>
      <Link href="/shop" className="btn-vault mt-10 inline-block">Shop vault</Link>
    </div>
  );
}
