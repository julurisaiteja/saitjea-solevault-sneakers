import Link from "next/link";
import Image from "next/image";
import { products } from "@/lib/data";

export function DropBoard({ compact }: { compact?: boolean }) {
  const cells = products.map((p, i) => ({ ...p, day: i % 7 }));
  const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

  return (
    <section className={compact ? "py-8" : "mx-auto max-w-7xl px-4 py-14 md:px-6"}>
      {!compact && (
        <div className="mb-6 flex items-end justify-between">
          <h2 className="font-display text-3xl uppercase">Drop board</h2>
          <Link href="/drops" className="font-mono text-xs uppercase hover:text-vault-pink">Full calendar</Link>
        </div>
      )}
      <div className="grid grid-cols-7 gap-1 border-2 border-vault-fg bg-vault-fg p-1 md:gap-2">
        {days.map((d) => (
          <div key={d} className="bg-vault-bg p-1 text-center font-mono text-[8px] uppercase md:text-[10px]">{d}</div>
        ))}
        {days.map((_, col) => {
          const item = cells.find((c) => c.day === col);
          if (!item)
            return <div key={col} className="min-h-[80px] bg-white/50 md:min-h-[120px]" />;
          return (
            <Link
              key={item.id}
              href={`/product/${item.id}`}
              className="group relative min-h-[80px] overflow-hidden border border-vault-border bg-white md:min-h-[120px]"
            >
              <Image src={item.image} alt="" fill className="object-cover opacity-80 group-hover:opacity-100" sizes="120px" />
              <div className="absolute inset-x-0 bottom-0 bg-vault-fg/90 p-1">
                <p className="truncate font-mono text-[7px] text-white md:text-[9px]">{item.name}</p>
                <div className="heat-bar mt-1">
                  <div className="heat-fill" style={{ width: `${item.heat}%` }} />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      {!compact && (
        <p className="mt-4 font-mono text-xs text-vault-muted">Heat bars show demand — not a generic featured grid.</p>
      )}
    </section>
  );
}
