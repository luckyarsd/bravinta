import '@fontsource-variable/inter';
import './globals.css';
import { site } from '../lib/data';

const title = 'Brivanta Energy | Solar-powered EV charging, solar and wind in India';
const description =
  'Brivanta Energy designs and builds solar-powered EV charging stations, solar systems, wind energy, batteries and chargers for homes, hotels, malls and highways across India.';
export const metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: '%s | Brivanta Energy' },
  description,
  alternates: { canonical: '/' },
  openGraph: {
    title,
    description,
    url: '/',
    siteName: 'Brivanta Energy',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Brivanta Energy: Power the sun. Charge the road. Own your energy.',
      },
    ],
  },
  twitter: { card: 'summary_large_image', title, description, images: ['/og.png'] },
};
export const viewport = { themeColor: '#061746', width: 'device-width', initialScale: 1 };
export default function Root({ children }) {
  return (
    <html lang="en-IN">
      <body>{children}</body>
    </html>
  );
}
