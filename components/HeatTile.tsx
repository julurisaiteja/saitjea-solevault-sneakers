"use client";
import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/data";
import { formatPrice } from "@/lib/data";
import { useCart } from "@/lib/cart";

export function HeatTile({ product }: { product: Product }) {
  const heat = Number(product.heat || product.specs?.Heat || 50);
  const { add, toggleWish, wish } = useCart();
  return (
    <article className="flex flex-col border-2 border-vault-fg bg-white animate-rise">
      <div className="relative aspect-square border-b-2 border-vault-fg">
        <Link href={`/product/${product.id}`}>
          <Image src={product.image} alt={product.name} fill className="object-cover" sizes="25vw" />
        </Link>
        <span className="absolute left-2 top-2 bg-vault-fg px-2 py-0.5 font-mono text-[9px] text-white">AUTH</span>
      </div>
      <div className="p-3">
        <div className="heat-bar">
          <div className="heat-fill" style={{ width: `${heat}%` }} />
        </div>
        <p className="mt-2 font-mono text-[9px] uppercase text-vault-muted">Heat {heat}</p>
        <Link href={`/product/${product.id}`} className="mt-1 block font-display text-sm uppercase leading-tight hover:text-vault-pink">
          {product.name}
        </Link>
        <div className="mt-2 flex items-center justify-between">
          <span className="font-mono text-sm">{formatPrice(product.price)}</span>
          <div className="flex gap-1">
            <button type="button" className="font-mono text-[9px] uppercase" onClick={() => toggleWish(product.id)}>
              {wish.includes(product.id) ? "Saved" : "Save"}
            </button>
            <button type="button" className="border border-vault-fg px-2 py-0.5 font-mono text-[9px]" onClick={() => add(product)}>
              Add
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
