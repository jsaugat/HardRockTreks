import "./globals.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
// import { GeistMono } from 'geist/font/mono';
import Navbar from "@/components/header/Navbar";
import { Toaster } from "@/components/ui/sonner";
import { TopLoadingBarProvider } from "@/contexts/TopLoadingBar";
import Footer from "@/components/footer";
import localFont from "next/font/local";

// const inter = Inter({ subsets: ['latin'] });
// Local Font
const neueRegrade = localFont({
  src: [
    {
      path: "../public/fonts/Neue Regrade/Neue-Regrade-Regular-BF65af35d81f2ff.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Neue Regrade/Neue-Regrade-Medium-BF65af35d843ed6.otf",
      weight: "500",
      style: "medium",
    },
    {
      path: "../public/fonts/Neue Regrade/Neue-Regrade-Semibold-BF65af35d8354a8.otf",
      weight: "600",
      style: "semibold",
    },
    {
      path: "../public/fonts/Neue Regrade/Neue-Regrade-Bold-BF65af35d84e111.otf",
      weight: "700",
      style: "bold",
    },
  ],
  variable: "--font-neueRegrade",
});

export const metadata: Metadata = {
  title: "Hard Rock Treks & Expeditions",
  description: "Discover amazing destinations around Nepal.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${GeistSans.className} ${neueRegrade.variable}`}>
        <TopLoadingBarProvider>
          <div className="min-h-screen bg-secondary relative">
            <Navbar />
            <main className="container mx-auto relative z-0">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </TopLoadingBarProvider>
      </body>
    </html>
  );
}
