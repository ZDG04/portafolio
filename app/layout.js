import { Cormorant_Garamond, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const serif = Cormorant_Garamond({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-cormorant" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jb" });

export const metadata = {
  title: "Zarith Gómez · Portafolio",
  description: "Desarrollador frontend. Proyectos, experiencia y contacto.",
};

export const viewport = { width: "device-width", initialScale: 1, viewportFit: "cover" };

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${serif.variable} ${mono.variable}`}>
      <body className="font-mono text-[15px] leading-7 text-tx antialiased">{children}</body>
    </html>
  );
}
