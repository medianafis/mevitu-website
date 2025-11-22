import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mevitu Nusa Persada - Sistem Informasi Amil Zakat",
  description: "Software Development specialist dalam sistem informasi amil zakat. Solusi teknologi terpercaya untuk lembaga zakat di Indonesia.",
  keywords: "sistem informasi zakat, software zakat, amil zakat, teknologi zakat, manajemen zakat, Gresik, Mevitu Nusa Persada",
  authors: [{ name: "Mevitu Nusa Persada" }],
  openGraph: {
    title: "Mevitu Nusa Persada - Sistem Informasi Amil Zakat",
    description: "Software Development specialist dalam sistem informasi amil zakat",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} bg-white text-gray-900 antialiased`}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}