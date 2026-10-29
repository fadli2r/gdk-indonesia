import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://generasidigitalkreatif.id"),
  title: "GDK Indonesia — Kreativitas, Teknologi & Momen Berarti",
  alternates: { canonical: "/" },
  description: "Temukan Famous Studio, Tapulas, Dreamslink, Smart TV, Originfamous, serta Social & Wedding+ dalam ekosistem CV Generasi Digital Kreatif Indonesia.",
  openGraph: {title: "GDK Indonesia — One Ecosystem. Many Possibilities.", description: "Foto dan video, undangan digital, NFC & QR untuk merchant, serta solusi Smart TV. Kenali layanan aktif dan ekosistem brand GDK Indonesia.", type: "website", locale: "id_ID", url: "https://generasidigitalkreatif.id", images: [{url:"/og.png",width:1730,height:909,alt:"GDK Indonesia — One Ecosystem. Many Possibilities."}]},
  twitter: {card:"summary_large_image",title:"GDK Indonesia — One Ecosystem. Many Possibilities.",description:"Ekosistem kreativitas, teknologi, dan solusi bisnis.",images:["/og.png"]},
  icons: {
    icon: "/gdk-logo.png",
    shortcut: "/gdk-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="antialiased">{children}</body>
    </html>
  );
}
