import { Inter } from 'next/font/google';
import './globals.css';
import { site } from '../lib/data';
const inter = Inter({ subsets: ['latin'], variable: '--f', display: 'swap' });
export const metadata = {
  metadataBase: new URL(site.url),
  title: { default: 'Brivanta Energy | EV Battery Charging, Swapping & Sales', template: '%s | Brivanta Energy' },
  description: 'Brivanta Energy delivers sustainable EV energy solutions: battery recharge and swapping, EV battery sales, charging infrastructure and fleet energy plans across India.',
  alternates: { canonical: '/' },
  openGraph: { title: 'Brivanta Energy | Sustainable EV Energy Solutions', description: 'Battery recharge, swapping, sales and fleet energy plans.', url: '/', siteName: 'Brivanta Energy', type: 'website', locale: 'en_IN' },
  twitter: { card: 'summary_large_image' },
};
export const viewport = { themeColor: '#0b74b0', width: 'device-width', initialScale: 1 };
export default function Root({ children }) {
  return (<html lang="en-IN" className={inter.variable}><body>{children}</body></html>);
}
