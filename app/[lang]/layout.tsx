import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | App Car',
    default: 'App Car',
  },
  description: 'The Next.js Demo, built based on App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  return (
    <html lang="{lang}">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
