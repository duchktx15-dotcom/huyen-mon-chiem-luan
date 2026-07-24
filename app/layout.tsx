import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/home/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HUYỀN MÔN CHIÊM LUẬN",
  description: "Hệ thống lập lá số và luận giải tử vi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body
        className="min-h-full text-white"
        style={{
          backgroundImage:
"linear-gradient(rgba(8,8,8,0.58), rgba(8,8,8,0.58)), url('/nen.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Header dùng chung */}
        <Header />

        {/* Nội dung các trang */}
        <main className="min-h-screen pt-20">
          {children}
        </main>

        {/* Footer dùng chung */}
        <Footer />
      </body>
    </html>
  );
}