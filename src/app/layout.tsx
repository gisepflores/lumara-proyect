import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Lumara | Espiritualidad consciente",
    template: "%s | Lumara"
  },
  description:
    "Un espacio para explorar, aprender y acompañar tu camino de autoconocimiento.",
  applicationName: "Lumara",
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
