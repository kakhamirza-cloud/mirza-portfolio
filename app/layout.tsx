import type { Metadata } from 'next';
import { DM_Sans, Manrope } from 'next/font/google';
import './globals.css';

const bodyFont = DM_Sans({
  variable: '--font-body',
  subsets: ['latin'],
});

const headingFont = Manrope({
  variable: '--font-heading',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://mirzauo.site'),
  title: 'Mirza Upa Orvala | Web3 Community & Collaboration',
  description:
    'Portfolio of Mirza Upa Orvala, a Web3 community manager, collaboration specialist, and project advisor.',
  openGraph: {
    title: 'Mirza Upa Orvala | Web3 Community & Collaboration',
    description:
      'Community strategy, collaboration management, project advising, and Web3 experience.',
    url: 'https://mirzauo.site',
    siteName: 'Mirza Upa Orvala',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Mirza Upa Orvala | Web3 Community & Collaboration',
    description:
      'Community strategy, collaboration management, project advising, and Web3 experience.',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${bodyFont.variable} ${headingFont.variable}`}>{children}</body>
    </html>
  );
}
