"use client";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/lib/cart";
import { formatPrice } from "@/lib/data";

export default function CartPage() {
  const { items, setQty, remove, subtotal } = useCart();
  if (!items.length) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-20 text-center">
        <h1 className="font-display text-4xl uppercase">Cart empty</h1>
        <Link href="/shop" className="btn-vault mt-6 inline-flex">Browse heat</Link>
      </div>
    );
  }
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 md:px-6">
      <h1 className="font-display text-4xl uppercase">Cart</h1>
      <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_300px]">
        <ul className="space-y-4">
          {items.map((item) => (
            <li key={item.id + (item.variant || "")} className="flex gap-4 border-2 border-vault-fg bg-white p-3">
              <div className="relative h-24 w-20 shrink-0 border border-vault-fg">
                <Image src={item.image} alt={item.name} fill className="object-cover" />
              </div>
              <div className="flex-1">
                <p className="font-display text-lg uppercase">{item.name}</p>
                {item.variant && <p className="font-mono text-xs">Size {item.variant}</p>}
                <p className="font-mono">{formatPrice(item.price)}</p>
                <div className="mt-2 flex items-center gap-2">
                  <input
                    type="number"
                    min={1}
                    className="input-vault !w-20 !py-1"
                    value={item.qty}
                    onChange={(e) => setQty(item.id, Number(e.target.value) || 1)}
                  />
                  <button type="button" className="text-xs" onClick={() => remove(item.id)}>Remove</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <aside className="border-2 border-vault-fg bg-white p-6">
          <p className="font-mono text-[10px] uppercase">Subtotal</p>
          <p className="font-display text-3xl">{formatPrice(subtotal)}</p>
          <Link href="/checkout" className="btn-vault mt-6 flex w-full justify-center">Checkout</Link>
        </aside>
      </div>
    </div>
  );
}
