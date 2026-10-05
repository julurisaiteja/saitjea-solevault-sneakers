"use client";
import Image from "next/image";
import { brand, products } from "@/lib/data";
import { HeroCinema } from "@/components/HeroCinema";

export function DropBillboard({ className = "" }: { className?: string }) {
  const hero = products[0];
  return (
    <div
      className={`relative min-h-[280px] overflow-hidden border-2 border-vault-fg bg-black md:min-h-[380px] ${className}`}
      role="img"
      aria-label="Drop billboard"
    >
      <HeroCinema video={brand.heroVideo} image={brand.heroImage} />
      <div className="absolute inset-0 bg-black/35" />
      <div className="absolute inset-[12%] overflow-hidden border-2 border-white/80">
        <Image
          src={hero?.image || brand.heroImage}
          alt=""
          fill
          className="object-cover opacity-95"
          sizes="640px"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-tr from-vault-pink/35 via-transparent to-black/40" />
      <div className="absolute inset-0 flex flex-col justify-between p-5">
        <p className="inline-block w-fit border-2 border-vault-fg bg-white px-3 py-1 font-mono text-[10px] uppercase tracking-[0.3em] text-black">
          Heat drop
        </p>
        <div>
          <p className="font-display text-4xl uppercase leading-none text-white md:text-5xl">
            {hero?.name || "Vault pair"}
          </p>
          <p className="mt-2 font-mono text-xs uppercase tracking-widest text-white/80">Film still · no turntable</p>
        </div>
      </div>
    </div>
  );
}
