import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import ContactHeader from "./components/ContactHeader";
import { headers } from "next/headers";
import ContactFooter from "./components/ContactFooter";

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});

export const metadata: Metadata = {
  title: "Home - ArtistryLab",
  description: "ArtistryLab BrandTech Studio",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const headersList = headers();
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-dark`}>
      {headersList.get("x-pathname") === "/contact" ? (
      <>
        <ContactHeader />
        {children}
        <ContactFooter />
      </>
    ) : (
      <>
        <Header />
        {children}
        <Footer />
      </>
    )}
        
      </body>
    </html>
  );
}
