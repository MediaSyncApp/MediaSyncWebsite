import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MediaSync - Synchronisez votre musique avec votre montage",
  description:
    "Application macOS native pour synchroniser automatiquement Spotify et Apple Music avec Premiere Pro, DaVinci Resolve et After Effects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
