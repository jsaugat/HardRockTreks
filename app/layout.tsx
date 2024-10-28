import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import Navbar from '@/components/header/navbar';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Hard Rock Treks & Expeditions',
  description: 'Discover amazing destinations around Nepal.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <div className="min-h-screen bg-background relative">
          <Navbar />
          <main className="container mx-auto relative z-0">
            {children}
          </main>
        </div>
        <Toaster />
      </body>
    </html>
  );
}