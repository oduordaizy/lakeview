import type { Metadata } from 'next';
import { Manrope, Space_Grotesk } from 'next/font/google';
import './globals.css';

const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' });

export const metadata: Metadata = {
  title: 'LakeView German School | Learn German. Open Doors.',
  description: 'CEFR-aligned German language training from A1 to B2 in Kisumu and online.',
  metadataBase: new URL('https://lakeviewgerman.school'),
  applicationName: 'LakeView German School',
  keywords: ['German classes in Kisumu', 'learn German online', 'German A1 to B2', 'German exam preparation', 'German language school Kenya'],
  authors: [{ name: 'LakeView German School' }],
  creator: 'LakeView German School',
  alternates: { canonical: '/' },
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
      <body className={`${manrope.variable} ${spaceGrotesk.variable}`}>
        {children}
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
