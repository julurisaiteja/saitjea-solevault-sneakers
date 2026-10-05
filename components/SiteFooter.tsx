import Link from "next/link";
import { brand } from "@/lib/data";
import { Newsletter } from "./Newsletter";

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t-2 border-vault-fg bg-white">
      <Newsletter />
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-3 md:px-6">
        <div>
          <p className="font-display text-xl uppercase">Vault rules</p>
          <p className="mt-2 text-sm text-vault-muted">Every pair inspected. Certificate in-box. No fakes, no shortcuts.</p>
        </div>
        <div className="font-mono text-xs uppercase tracking-widest">
          <Link href="/drops">Drop board</Link>
          <Link href="/shop" className="mt-2 block">Heat catalog</Link>
          <Link href="/about" className="mt-2 block">About</Link>
        </div>
        <div className="font-mono text-xs text-vault-muted">
          {brand.stores.map((s) => (
            <p key={s}>{s}</p>
          ))}
        </div>
      </div>
      <p className="border-t-2 border-vault-fg py-4 text-center font-mono text-[10px] uppercase">{brand.loyalty}</p>
    </footer>
  );
}
