import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";






export const metadata: Metadata = {
  title: "MotorWord",
  description: "Discover Best Car Deals In Malawi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="relative"
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
