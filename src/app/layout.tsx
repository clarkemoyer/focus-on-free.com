import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://focus-on-free.com'),
  title: {
    default: 'Focus on Free | Coming Soon',
    template: '%s | Focus on Free',
  },
  description: 'A future guide to free and low-cost resources is being assembled.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: 'https://focus-on-free.com/',
    siteName: 'Focus on Free',
    title: 'Focus on Free | Coming Soon',
    description: 'A future guide to free and low-cost resources is being assembled.',
  },
  twitter: {
    card: 'summary',
    title: 'Focus on Free | Coming Soon',
    description: 'A future guide to free and low-cost resources is being assembled.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
