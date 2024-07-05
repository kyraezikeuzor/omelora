
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Animate from '@/components/ui/Animate'

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Omelora | Shaping tomorrow with youth-driven social good.",
  description: "Based in Houston, Texas, Omelora hopes to provide support for youth through health and educational kits. Our wellness initiatives aim to enrich lives across West Africa, with a goal of distributing 1,000 kits.",
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
        <link href="https://api.fontshare.com/v2/css?f[]=zodiak@401&display=swap" rel="stylesheet"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
      </head>
      <body className={inter.className}>
        <Navbar/>
        <main className=' m-auto px-2 py-[5vh] sm:px-[3vw] md:px-[6vw] lg:px-[12vw]'>
          <Animate>
            {children}
          </Animate>
        </main>
        <Footer/>
      </body>
    </html>
  );
}
