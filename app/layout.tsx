import type { Metadata } from 'next';
import { Inter, Sora } from 'next/font/google';
import './globals.css';
import { WhatsAppFloat } from '../components/whatsapp-float';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const sora = Sora({ subsets: ['latin'], variable: '--font-sora' });

export const metadata: Metadata = {
  title: 'LakeView German School | Learn German. Open Doors.',
  description: 'CEFR-aligned German language training from A1 to B2 in Kisumu and online.',
  metadataBase: new URL('https://lakeviewgerman.school'),
  applicationName: 'LakeView German School',
  keywords: ['German classes in Kisumu', 'learn German online', 'German A1 to B2', 'German exam preparation', 'German language school Kenya'],
  authors: [{ name: 'LakeView German School' }],
  creator: 'LakeView German School',
  alternates: { canonical: '/' },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_KE',
    url: '/',
    siteName: 'LakeView German School',
    title: 'LakeView German School | Learn German. Open Doors.',
    description: 'Practical, CEFR-aligned German training for work, study, and your next opportunity.',
  },
  twitter: {
    card: 'summary',
    title: 'LakeView German School | Learn German. Open Doors.',
    description: 'Learn German from A1 to B2 in Kisumu and online.',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${sora.variable}`}>
        {children}
        <WhatsAppFloat />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'EducationalOrganization',
              name: 'LakeView German School',
              url: 'https://lakeviewgerman.school',
              description: 'CEFR-aligned German language training from A1 to B2 in Kisumu and online.',
              email: 'hello@lakeviewgerman.school',
              telephone: '+254103390866',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Kisumu',
                addressCountry: 'KE',
              },
              areaServed: ['Kisumu', 'Kenya'],
              sameAs: ['https://wa.me/254702562730'],
            }),
          }}
        />
      </body>
    </html>
  );
}
