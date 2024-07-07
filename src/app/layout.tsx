import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://asteroidejs.com'),
  title: 'Asteroide.js - A Next-Gen Node.js Framework',
  description:
    'Built for the future, Asteroide.js is a Next-Gen Node.js Framework for building server-side applications that is designed to be fast, secure, and easy to use.',
  openGraph: {
    title: 'Asteroide.js - Built for the future',
    description:
      'Asteroide.js is a Next-Gen Node.js Framework for building server-side applications that is designed to be fast, secure, and easy to use.',
    images: '/images/og.png',
    type: 'website',
    url: new URL('https://asteroidejs.com'),
  },
  authors: [
    {
      name: 'Lucas Larangeira',
      url: 'https://lucaslarangeira.com',
    },
  ],
  keywords: [
    'Asteroide.js',
    'Node.js',
    'Framework',
    'Next-Gen',
    'Fast',
    'Secure',
    'Easy',
    'Server-Side',
    'Applications',
    'Backend',
    'Tech',
    'JavaScript',
    'TypeScript',
    'Web Development',
    'Software Development',
    'Open Source',
    'Lucas Larangeira',
  ],
  robots: 'index, follow',
  category: 'Software Development',
  twitter: {
    site: '@asteroidejs',
    card: 'summary_large_image',
    images: '/images/og.png',
    title: 'Asteroide.js - Built for the future',
    description:
      'Asteroide.js is a Next-Gen Node.js Framework for building server-side applications that is designed to be fast, secure, and easy to use.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
