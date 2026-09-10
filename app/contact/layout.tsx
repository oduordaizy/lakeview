import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact LakeView German School | Start Learning German',
  description: 'Contact LakeView German School in Kisumu or online to choose your German level, class schedule, and learning pathway.',
  alternates: { canonical: '/contact' },
};

export default function ContactLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}