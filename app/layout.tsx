import type {Metadata} from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
});

export const metadata: Metadata = {
  title: 'Clínica Vida | Your Family Health Center',
  description: 'Comprehensive healthcare for you and your family. Human-inspired design, family insurance plans, and professional medical services.',
  openGraph: {
    title: 'Clínica Vida | Your Family Health Center',
    description: 'Comprehensive healthcare for you and your family.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clínica Vida | Your Family Health Center',
    description: 'Comprehensive healthcare for you and your family.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} font-sans`}>
      <body suppressHydrationWarning className="antialiased">{children}</body>
    </html>
  );
}
