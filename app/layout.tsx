
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Animate from '@/components/ui/Animate'

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Omelora | Shaping tomorrow with youth-driven social good.",
  description: "Based in Houston, Texas, Omelora hopes to provide support for kids in need through health and educational kits. Our wellness initiatives aim to enrich lives across West Africa, with the goal of distributing 1,000 school supply kits.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta property="og:image" content="/img/dwo-img1.jpg" />
        <link rel="preload" href="/fonts/editorial/EditorialNew-Ultralight.woff2" as="font" type="font/woff2" crossOrigin="anonymous"/>
      </head>
      <body className={inter.className}>
        <Navbar/>
        <main className='max-w-screen-xl mx-auto py-[5vh] px-4'>
          <Animate>
            {children}
          </Animate>
        </main>
        <Footer/>
      </body>
    </html>
  );
}
