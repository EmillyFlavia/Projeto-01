import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Página Financeiro',
  description: 'Dashboard de controle financeiro',
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
