import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../index.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Garibook - Freedom in Every Journey | Car Rental Bangladesh',
  description:
    'Experience seamless car rentals across Bangladesh. Choose your car, choose your driver, and travel with complete transparency. All 64 districts covered with verified drivers.',
  keywords: [
    'car rental',
    'Bangladesh car rental',
    'airport transfer',
    'intercity travel',
    'car rental Dhaka',
    'corporate vehicle',
    'Garibook',
  ],
  authors: [{ name: 'Garibook' }],
  openGraph: {
    title: 'Garibook - Freedom in Every Journey',
    description: 'Seamless car rentals across Bangladesh with verified drivers',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
