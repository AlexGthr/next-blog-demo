import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";


export const metadata: Metadata = {
  title: "Blog NextJS",
  description: "Exercice création de blog avec NextJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <main className="bg-slate-800 min-h-screen p-6 text-white">
          {children}
        </main>
      </body>
    </html>
  );
}
