import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import {Poppins} from 'next/font/google'
import "./globals.css";
import ResponsiveNav from "@/componets/Home/NavBar/ResponsiveNav";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const font = Poppins ({
weight: ['100', '200', '300',
'400', '500', '600', '700', '800', '900'],
subsets: ['latin']})

export const metadata: Metadata = {
  title: "Travel For you | nextjs 15",
  description: "Travel landing page for you",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased`}
      >
        <ResponsiveNav />
        {children}
      </body>
    </html>
  );
}
