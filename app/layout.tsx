import type { Metadata } from "next";
import { Fira_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar";
import Provider from "../components/Provider";

export const metadata: Metadata = {
  title: "ZEN",
  description: "Curated Travel with Ease and Be Inspired.",
};

interface RootLayoutProps {
  children: React.ReactNode;
  session: any; // Add the session prop here
}

export default function RootLayout({ children, session }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <Provider session={session}>
          <div className="overflow-hidden h-screen overflow-y-auto ">
            <Navbar />
            {children}
          </div>
        </Provider>
      </body>
    </html>
  );
}
