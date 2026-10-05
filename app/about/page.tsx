import { brand } from "@/lib/data";
import { VaultAuthStrip } from "@/components/VaultAuthStrip";

export default function AboutPage() {
  return (
    <>
      <div className="mx-auto max-w-3xl px-4 py-16 md:px-6">
        <h1 className="font-display text-4xl uppercase">About the vault</h1>
        <p className="mt-6 text-lg leading-relaxed text-vault-muted">{brand.description}</p>
        <p className="mt-4 font-mono text-sm">{brand.loyalty}</p>
      </div>
      <VaultAuthStrip />
    </>
  );
}
