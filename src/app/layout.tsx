import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
  title: "Simran | Portfolio",
  description: "Welcome to my cozy corner of the internet! I craft digital experiences that are as delightful as your favorite coffee shop visit.",
  keywords: "full-stack developer, portfolio, react, next.js, web development, coffee, cafe",
  authors: [{ name: "Simarn" }],
  openGraph: {
    title: "Simran | Portfolio",
    description: "Welcome to my cozy corner of the internet! I craft digital experiences that are as delightful as your favorite coffee shop visit.",
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
