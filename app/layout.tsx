import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'Spade — Confidence in every authorization',
  description:
    'Real-time merchant intelligence. A reference recreation built with Next.js and TypeScript.',
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
