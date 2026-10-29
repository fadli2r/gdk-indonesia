import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://generasidigitalkreatif.id"),
  title: "GDK Indonesia — Creative, Technology & Business Ecosystem",
  description: "GDK Indonesia membangun ekosistem solusi kreatif, digital, teknologi, event, hospitality, dan AI untuk membantu bisnis tumbuh, terkelola, dan berkembang.",
  openGraph: {title: "GDK Indonesia — One Ecosystem. Many Possibilities.", description: "Delapan lini bisnis kreatif, teknologi, dan layanan profesional. Satu ekosistem yang saling terhubung.", type: "website", locale: "id_ID", url: "https://generasidigitalkreatif.id", images: [{url:"/og.png",width:1730,height:909,alt:"GDK Indonesia — One Ecosystem. Many Possibilities."}]},
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
