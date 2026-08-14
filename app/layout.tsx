import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ecosistema de Inteligencia Artificial | Medicina UPE",
  description: "Presentación institucional de los avances del Área de Innovación Tecnológica Educativa de la Facultad de Ciencias Médicas de la UPE.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/media/upe-logo.png",
    shortcut: "/media/upe-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        {children}
        <script id="respondio__widget" src="https://cdn.respond.io/webchat/widget/widget.js?cId=169a0624cea6e8f69c70278b7c9b694" async />
      </body>
    </html>
  );
}
