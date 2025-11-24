import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
// @ts-ignore
import './globals.css';
// @ts-ignore
import 'leaflet/dist/leaflet.css';

const rubik = Rubik({ 
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'IP Address Tracker',
  description: 'Track any IP address or domain location',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={rubik.className}>{children}</body>
    </html>
  );
}