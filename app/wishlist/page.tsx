"use client";
import Link from "next/link";
import { useCart } from "@/lib/cart";
import { products } from "@/lib/data";
import { HeatTile } from "@/components/HeatTile";

export default function WishlistPage() {
  const { wish } = useCart();
  const list = products.filter((p) => wish.includes(p.id));
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 md:px-6">
      <h1 className="font-display text-4xl uppercase">Saved pairs</h1>
      {!list.length ? (
        <p className="mt-6 text-vault-muted">
          Empty vault shelf. <Link className="text-vault-pink" href="/shop">Browse heat</Link>
        </p>
      ) : (
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">{list.map((p) => <HeatTile key={p.id} product={p} />)}</div>
      )}
    </div>
  );
}
