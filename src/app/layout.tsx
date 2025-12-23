import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google"; // Using Playfair for serif elegance
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"], 
  variable: '--font-jakarta' 
});

// Optional: Add a serif font for headings if desired
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: '--font-playfair'
});

export const metadata: Metadata = {
  title: "Swaminarayan Gurukul Wagasi",
  description: "A Sanctuary of Devotion & Learning",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jakarta.variable} ${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}