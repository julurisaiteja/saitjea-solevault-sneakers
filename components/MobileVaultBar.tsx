"use client";
import Link from "next/link";

export function MobileVaultBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t-4 border-white bg-black/95 backdrop-blur md:hidden">
      <div className="flex">
        <Link href="/drops" className="flex-1 py-3 text-center font-mono text-[10px] uppercase tracking-widest text-[#40f3ff]">
          Drops
        </Link>
        <Link href="/shop" className="flex-1 border-x-2 border-white py-3 text-center font-mono text-[10px] uppercase tracking-widest">
          Vault
        </Link>
        <Link href="/cart" className="flex-1 bg-[#ff4ecd] py-3 text-center font-mono text-[10px] uppercase tracking-widest text-black">
          Checkout
        </Link>
      </div>
    </div>
  );
}
