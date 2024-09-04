"use client"; // Adicione esta linha para garantir que o layout utilize o cliente se estiver importando componentes de cliente

import { AuthProvider } from "./context/AuthContext";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
