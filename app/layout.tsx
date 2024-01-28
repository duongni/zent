import type { Metadata } from "next";

import "./globals.css";
import Navbar from "../components/navbar";
import Provider from "../components/Provider";

export const metadata: Metadata = {
  title: "ZEN",
  description: "Curated Travel with Ease and Be Inspired.",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <Navbar />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
