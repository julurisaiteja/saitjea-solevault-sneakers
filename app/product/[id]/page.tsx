"use client";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import { getProduct, formatPrice, relatedProducts, brand } from "@/lib/data";
import { useCart } from "@/lib/cart";
import { HeatTile } from "@/components/HeatTile";

const SIZES = ["7", "8", "9", "10", "11", "12"];

export default function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const product = getProduct(id);
  const { add, toggleWish, wish } = useCart();
  const [size, setSize] = useState("10");
  const [img, setImg] = useState(0);
  const [tab, setTab] = useState<"specs" | "faq" | "auth">("specs");
  if (!product)
    return (
      <div className="mx-auto max-w-7xl px-4 py-20">
        Not found. <Link href="/shop">Back</Link>
      </div>
    );
  const related = relatedProducts(product);
  const heat = Number(product.heat || 0);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 md:px-6">
      <div className="mb-4 inline-flex items-center gap-2 border-2 border-vault-pink bg-vault-pink/10 px-3 py-1 font-mono text-[10px] uppercase">
        Vault authenticated
      </div>
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <div className="relative aspect-square border-2 border-vault-fg">
            <Image src={product.images[img] || product.image} alt={product.name} fill className="object-cover" sizes="50vw" />
          </div>
          <div className="mt-3 flex gap-2">
            {product.images.map((src, i) => (
              <button
                key={src + i}
                type="button"
                onClick={() => setImg(i)}
                className={`relative h-16 w-16 border-2 ${img === i ? "border-vault-pink" : "border-vault-fg"}`}
              >
                <Image src={src} alt="" fill className="object-cover" />
              </button>
            ))}
          </div>
        </div>
        <div>
          <p className="font-mono text-[10px] uppercase text-vault-muted">{product.category}</p>
          <h1 className="mt-2 font-display text-3xl uppercase md:text-4xl">{product.name}</h1>
          <div className="mt-3 heat-bar max-w-xs">
            <div className="heat-fill" style={{ width: `${heat}%` }} />
          </div>
          <p className="mt-2 font-mono text-xs">Heat index {heat} · {product.rating.toFixed(1)} rating</p>
          <p className="mt-4 font-mono text-3xl">{formatPrice(product.price)}</p>
          <p className="mt-4 text-sm text-vault-muted">{product.description}</p>

          <div className="mt-6">
            <p className="font-mono text-[10px] uppercase">Size matrix</p>
            <div className="mt-2 grid grid-cols-6 gap-1">
              {SIZES.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setSize(s)}
                  className={`border-2 py-2 font-mono text-sm ${size === s ? "border-vault-pink bg-vault-pink text-white" : "border-vault-fg"}`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <button type="button" className="btn-vault" onClick={() => add(product, 1, size)}>Add to cart</button>
            <button type="button" className="btn-outline-vault" onClick={() => toggleWish(product.id)}>
              {wish.includes(product.id) ? "Saved" : "Wishlist"}
            </button>
          </div>
          <p className="mt-4 font-mono text-[10px] text-vault-muted">Code {brand.offer.code} · {brand.checkoutNote}</p>

          <div className="mt-8 border-2 border-vault-fg">
            <div className="flex border-b-2 border-vault-fg font-mono text-[10px] uppercase">
              {(["specs", "faq", "auth"] as const).map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTab(t)}
                  className={`flex-1 py-3 ${tab === t ? "bg-vault-fg text-white" : ""}`}
                >
                  {t}
                </button>
              ))}
            </div>
            <div className="p-4 text-sm">
              {tab === "specs" && (
                <dl className="space-y-2 font-mono text-xs">
                  {Object.entries(product.specs).map(([k, v]) => (
                    <div key={k} className="flex justify-between border-b border-vault-border py-2">
                      <dt className="text-vault-muted">{k}</dt>
                      <dd>{v}</dd>
                    </div>
                  ))}
                </dl>
              )}
              {tab === "faq" && (
                <div className="space-y-4">
                  {product.faq.map(([q, a]) => (
                    <div key={q}>
                      <p className="font-semibold">{q}</p>
                      <p className="mt-1 text-vault-muted">{a}</p>
                    </div>
                  ))}
                </div>
              )}
              {tab === "auth" && (
                <p className="text-vault-muted">
                  Inspected in Vault NYC/LA. Certificate, lace check, and insole UV pass documented before ship.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      <section className="mt-16">
        <h2 className="font-display text-xl uppercase">Related heat</h2>
        <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3">
          {related.map((p) => (
            <HeatTile key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
