import type { Metadata } from "next";

import "./globals.css";
import Navbar from "../components/navbar";
import Provider from "../components/Provider";

export const metadata: Metadata = {
  title: "ZEN",
  description: "Curated Travel with Ease and Be Inspired.",
};

// Define the props interface
export interface RootLayoutProps {
  children: React.ReactNode;
  session?: any; // Make session optional if it's not always provided
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
