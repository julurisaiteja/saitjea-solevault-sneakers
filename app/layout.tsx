import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/lib/cart";
import { OfferBanner } from "@/components/OfferBanner";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { AIAssistant } from "@/components/AIAssistant";
import { MobileVaultBar } from "@/components/MobileVaultBar";
import { brand } from "@/lib/data";

export const metadata: Metadata = {
  title: `${brand.name} — Hype Vault`,
  description: brand.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=IBM+Plex+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-vault-bg font-body text-vault-fg antialiased">
        <CartProvider>
          <OfferBanner />
          <SiteHeader />
          <main className="min-h-[70vh] pb-16 md:pb-0">{children}</main>
          <SiteFooter />
          <AIAssistant />
          <MobileVaultBar />
        </CartProvider>
      </body>
    </html>
  );
}
