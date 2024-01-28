import type { Metadata } from "next";
import { Fira_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar";
import Provider from "../components/Provider";

export const metadata: Metadata = {
  title: "ZEN",
  description: "Curated Travel with Ease and Be Inspired.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="overflow-hidden h-screen overflow-y-auto ">
            <Navbar />
            {children}
          </div>
        </Provider>
      </body>
    </html>
  );
}
