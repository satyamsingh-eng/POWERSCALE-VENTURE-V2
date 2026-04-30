import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Powerscale Ventures — Operator-led venture capital",
  description: "An India-native partnership investing in energy transition, deeptech infrastructure, consumer, and AI — primarily at Series A and B, where execution complexity decides who scales.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
