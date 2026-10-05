"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { brand } from "@/lib/data";

export default function SuccessPage() {
  const [order, setOrder] = useState("SV-······");
  useEffect(() => {
    setOrder("SV-" + Math.floor(100000 + Math.random() * 900000));
  }, []);
  return (
    <div className="mx-auto max-w-xl px-4 py-20 text-center">
      <p className="font-mono text-[10px] uppercase text-vault-pink">Vault sealed</p>
      <h1 className="mt-2 font-display text-4xl uppercase">Order in</h1>
      <p className="mt-4 text-vault-muted">{order} · {brand.checkoutNote}</p>
      <Link href="/drops" className="btn-vault mt-8 inline-flex">Back to drops</Link>
    </div>
  );
}
