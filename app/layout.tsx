import type { Metadata } from "next";
import { Fira_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar";

export const metadata: Metadata = {
  title: "ZEN",
  description: "Curated Travel with Ease and Be Inspired.",
};

export const fira_mono = Fira_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={fira_mono.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
