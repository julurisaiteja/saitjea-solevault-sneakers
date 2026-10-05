import { brand } from "@/lib/data";

export function VaultAuthStrip() {
  return (
    <section className="border-y-2 border-vault-fg bg-white">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-10 md:grid-cols-2 md:px-6">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-widest text-vault-pink">Authentication</p>
          <h2 className="mt-2 font-display text-2xl uppercase">Inspected before it ships</h2>
          <p className="mt-3 text-sm text-vault-muted">
            Midsole, stitching, box label, and smell check. Certificate included. {brand.checkoutNote}
          </p>
        </div>
        <ul className="space-y-2 font-mono text-xs uppercase tracking-wide">
          <li className="border-l-4 border-vault-pink pl-3">No marketplace mystery pairs</li>
          <li className="border-l-4 border-vault-fg pl-3">Deadstock or clearly graded wear</li>
          <li className="border-l-4 border-vault-pink pl-3">Returns if auth fails — demo policy</li>
          <li className="border-l-4 border-vault-fg pl-3">Collab numbers verified in-box</li>
        </ul>
      </div>
    </section>
  );
}
