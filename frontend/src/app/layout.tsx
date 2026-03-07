import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vitamina Movimiento | Coach de Movilidad y Longevidad",
  description: "Recupera tu libertad de movimiento con Stephanie Madriz. Especialista en movilidad, prevención de lesiones y longevidad activa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${inter.variable} antialiased font-sans`}
        style={{ fontFamily: 'var(--font-poppins)' }}
      >
        {children}
      </body>
    </html>
  );
}
