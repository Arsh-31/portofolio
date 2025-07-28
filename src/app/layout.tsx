import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arsh",
  description: "My Portofolio",
  icons: {
    icon:
      // "/images/img.jpg",
      [
        { url: "/images/img.jpg" },
        { url: "/images/img.jpg", sizes: "32x32", type: "image/png" },
        { url: "/images/img.jpg", sizes: "16x16", type: "image/png" },
      ],
    apple: "/images/img.jpg",
    shortcut: [
      {
        url: "/images/img.jpg",
        type: "image/png",
      },
    ],
  },
  openGraph: {
    title: "Arsh",
    description: "My Portofolio",
    url: "https://portofolio-bay-eta.vercel.app",
    siteName: "Portofolio",
    images: [
      {
        url: "/images/img.jpg",
        width: 800,
        height: 600,
        alt: "Arsh's Portofolio",
      },
    ],
    locale: "en-IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
