import type { Metadata, Viewport } from 'next';
import { Inter, Sora } from 'next/font/google';
import './globals.css';
import { WhatsAppFloat } from '../components/whatsapp-float';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const sora = Sora({ subsets: ['latin'], variable: '--font-sora', display: 'swap' });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1, // Prevents auto-zoom on form inputs on mobile
  themeColor: '#0D2752',
};

export const metadata: Metadata = {
  title: 'Lakeview German School | Learn German Online & in Kisumu',
  description: 'Lakeview German School offers premium CEFR-aligned German language training from A1 to B2. Join us for physical classes in Kisumu or flexible online sessions globally. We prepare you for jobs, Ausbildung, and universities in Germany.',
  metadataBase: new URL('https://lakeviewgerman.school'),
  applicationName: 'Lakeview German School',
  keywords: ['German classes in Kisumu', 'learn German online', 'German A1 to B2', 'German exam preparation', 'German language school Kenya', 'Ausbildung support Kenya', 'Goethe Institut preparation'],
  authors: [{ name: 'Lakeview German School' }],
  creator: 'Lakeview German School',
  publisher: 'Lakeview German School',
  alternates: { canonical: '/' },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_KE',
    url: '/',
    siteName: 'Lakeview German School',
    title: 'Lakeview German School | Learn German. Open Doors.',
    description: 'Practical, CEFR-aligned German training for work, study, and your next opportunity. Explore our A1-B2 courses today.',
    images: [
      {
        url: '/hero3.png',
        width: 1200,
        height: 630,
        alt: 'Lakeview German School Students',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lakeview German School | Learn German',
    description: 'Learn German from A1 to B2 in Kisumu and online. We guide you beyond the classroom to Ausbildung and job opportunities.',
    images: ['/hero3.png'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth overflow-x-hidden">
      <body className={`${inter.variable} ${sora.variable} antialiased bg-slate-50 text-slate-900 selection:bg-[#0367B4] selection:text-white overflow-x-hidden flex flex-col min-h-screen`}>
        {children}
        <WhatsAppFloat />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'EducationalOrganization',
              name: 'Lakeview German School',
              url: 'https://lakeviewgerman.school',
              logo: 'https://lakeviewgerman.school/logo.jpg',
              description: 'CEFR-aligned German language training from A1 to B2 in Kisumu and online.',
              email: 'lakeviewgermanschool@gmail.com',
              telephone: '+254103390866',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Oginga Odinga Street',
                addressLocality: 'Kisumu',
                addressCountry: 'KE',
              },
              areaServed: ['Kisumu', 'Kenya', 'Global'],
              sameAs: ['https://wa.me/254702562730'],
              offers: [
                {
                  '@type': 'Offer',
                  name: 'Online German Classes',
                  price: '15000',
                  priceCurrency: 'KES',
                  description: 'Interactive online German classes from A1 to B2'
                },
                {
                  '@type': 'Offer',
                  name: 'Physical German Classes',
                  price: '18000',
                  priceCurrency: 'KES',
                  description: 'In-person German classes in Kisumu from A1 to B2'
                }
              ]
            }),
          }}
        />
      </body>
    </html>
  );
}
