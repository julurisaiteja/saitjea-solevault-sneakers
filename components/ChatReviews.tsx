"use client";
import { brand } from "@/lib/data";

export function ChatReviews() {
  const colors = ["#f4f4f4", "#ffffff", "#f4f4f4"];
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 md:px-6">
      <h2 className="font-display text-2xl uppercase">Vault channel</h2>
      <p className="mt-1 font-mono text-xs text-vault-muted">Verified buyers — styled thread</p>
      <div className="mt-8 space-y-4">
        {brand.reviews.map(([name, stars, text], i) => (
          <div key={name} className={`flex ${i % 2 === 1 ? "justify-end" : ""}`}>
            <div
              className="max-w-md border-2 border-vault-fg px-4 py-3"
              style={{ background: colors[i % colors.length] }}
            >
              <div className="flex items-center justify-between gap-4 font-mono text-[10px] uppercase">
                <span className="text-vault-pink">{name}</span>
                <span>{stars}/5</span>
              </div>
              <p className="mt-2 text-sm leading-relaxed">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
