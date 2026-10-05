import Link from "next/link";
import Image from "next/image";
import { brand, products, formatPrice } from "@/lib/data";
import { DropCountdown } from "@/components/DropCountdown";
import { DropBoard } from "@/components/DropBoard";
import { ChatReviews } from "@/components/ChatReviews";
import { VaultAuthStrip } from "@/components/VaultAuthStrip";
import { DropBillboard } from "@/components/DropBillboard";

export default function HomePage() {
  const heat = products.slice(0, 6);
  return (
    <>
      <section className="relative overflow-hidden border-b-4 border-white y2k-grid">
        <div className="ticket-notch" />
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 md:grid-cols-2 md:px-6 md:py-16">
          <div className="relative z-10 animate-rise">
            <span className="sticker inline-block px-4 py-2 text-sm animate-stamp">★ Limited ★</span>
            <h1 className="mt-6 font-display text-6xl uppercase leading-[0.85] md:text-8xl">
              <span className="chrome-text">Sole</span><br />
              <span className="text-[#40f3ff]">Vault</span>
            </h1>
            <p className="mt-4 max-w-md text-sm text-white/70 animate-rise-d1">{brand.tagline}</p>
            <p className="mt-2 max-w-md text-xs uppercase tracking-widest text-[#ff4ecd] animate-rise-d1">{brand.description}</p>
            <div className="mt-8 flex flex-wrap items-center gap-6 animate-rise-d1">
              <DropCountdown />
              <Link href="/drops" className="btn-vault">Enter drops</Link>
            </div>
          </div>
          <DropBillboard className="border-4 border-white shadow-[10px_10px_0_#ff4ecd] animate-rise-d1" />
        </div>
        <div className="ticket-notch rotate-180" />
      </section>
      <section className="mx-auto max-w-7xl px-4 py-10 md:px-6">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {brand.stats.map(([n, l]) => (
            <div key={l} className="soft-scale border-4 border-white bg-black p-4 shadow-[6px_6px_0_#40f3ff]">
              <p className="font-display text-2xl md:text-3xl">{n}</p>
              <p className="mt-1 font-mono text-[9px] uppercase text-white/50">{l}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 md:px-6">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#40f3ff]">Heat rack</p>
            <h2 className="mt-2 font-display text-3xl uppercase md:text-4xl">Featured pairs</h2>
          </div>
          <Link href="/shop" className="font-mono text-xs uppercase tracking-widest text-[#ff4ecd] hover:text-white">
            Shop vault →
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {heat.map((p) => (
            <Link
              key={p.id}
              href={`/product/${p.id}`}
              className="soft-scale group border-4 border-white bg-black shadow-[8px_8px_0_#ff4ecd]"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image src={p.image} alt={p.name} fill className="object-cover transition duration-500 group-hover:scale-[1.04]" sizes="360px" />
              </div>
              <div className="flex items-center justify-between gap-2 border-t-4 border-white p-3">
                <div>
                  <p className="font-display text-lg uppercase leading-none">{p.name}</p>
                  <p className="mt-1 font-mono text-[9px] uppercase text-white/50">{p.category}</p>
                </div>
                <p className="font-mono text-sm text-[#40f3ff]">{formatPrice(p.price)}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y-4 border-white bg-black py-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 md:flex-row md:items-end md:justify-between md:px-6">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#40f3ff]">Signature tool</p>
            <h2 className="mt-2 font-display text-3xl uppercase md:text-4xl">DropBillboard</h2>
            <p className="mt-3 max-w-xl text-sm text-white/60">
              Cinema behind the pair, heat calendar ahead — inspect the drop without a WebGL turntable.
            </p>
          </div>
          <Link href="/drops" className="btn-vault">Open drop board</Link>
        </div>
      </section>

      <DropBoard />
      <VaultAuthStrip />
      <ChatReviews />
    </>
  );
}
