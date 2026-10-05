"use client";
import { useState } from "react";
import { brand } from "@/lib/data";

export function Newsletter() {
  const [done, setDone] = useState(false);
  return (
    <section className="border-b-2 border-vault-fg bg-vault-fg px-4 py-12 text-white md:px-6">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-widest text-vault-pink">Vault pass</p>
          <h2 className="mt-2 font-display text-2xl uppercase">Early drop access</h2>
          <p className="mt-2 text-sm text-white/70">{brand.loyalty}</p>
        </div>
        {done ? (
          <p className="font-mono text-xs uppercase">On the list — demo</p>
        ) : (
          <form
            className="flex w-full max-w-md gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              setDone(true);
            }}
          >
            <input required type="email" className="input-vault flex-1" placeholder="you@email.com" />
            <button className="btn-vault !bg-vault-pink shrink-0" type="submit">Join</button>
          </form>
        )}
      </div>
    </section>
  );
}
