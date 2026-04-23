import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

// Display serif with warmth — for headlines
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

// Clean sans for body
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vitamina Movimiento | Stephanie Madriz · Coach de Movilidad",
  description: "El movimiento es tu vitamina diaria. Mapeá tu cuerpo y seguí haciendo lo que amás —sin lesiones— a los 40, 60 o 90 años. Con Stephanie Madriz en Cartago, Costa Rica.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${fraunces.variable} ${inter.variable} antialiased`}
        style={{ fontFamily: 'var(--font-inter)' }}
      >
        {children}
      </body>
    </html>
  );
}
