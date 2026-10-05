"use client";
import Link from "next/link";
import { useCart } from "@/lib/cart";

export function SiteHeader() {
  const { count, wish } = useCart();
  return (
    <header className="sticky top-0 z-40 border-b-2 border-vault-fg bg-vault-bg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        <Link href="/" className="font-display text-lg uppercase md:text-xl">Sole Vault</Link>
        <nav className="flex items-center gap-4 font-mono text-[10px] uppercase tracking-widest md:gap-8 md:text-xs">
          <Link href="/" className="hover:text-vault-pink">Vault</Link>
          <Link href="/drops" className="hover:text-vault-pink">Drops</Link>
          <Link href="/shop" className="hover:text-vault-pink">Heat</Link>
          <Link href="/wishlist" className="hidden sm:inline hover:text-vault-pink">Save {wish.length || ""}</Link>
          <Link href="/cart" className="border-2 border-vault-fg px-3 py-1 hover:border-vault-pink hover:text-vault-pink">
            Cart{count ? ` ${count}` : ""}
          </Link>
        </nav>
      </div>
    </header>
  );
}
