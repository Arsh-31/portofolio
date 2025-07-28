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
    icon: [
      { url: "./images/img.png" },
      { url: "./images/img.png", sizes: "32x32", type: "image/png" },
      { url: "./images/img.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/images/img.png",
    shortcut: [
      {
        url: "./images/img.png",
        type: "image/png",
      },
    ],
  },
  openGraph: {
    title: "Arsh",
    description: "My Portofolio",
    url: "https://portofolio-bay-eta.vercel.app",
    siteName: "Portofolio",
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
