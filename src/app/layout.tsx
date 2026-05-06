import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://clarkemoyer.github.io/focus-on-free.com'),
  title: { default: 'Focus on Free', template: '%s | Focus on Free' },
  description: "Your Company's Independent IT Advocate",
  robots: { index: true, follow: true },
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: 'https://clarkemoyer.github.io/focus-on-free.com/',
    siteName: 'Focus on Free',
    title: 'Focus on Free',
    description: "Your Company's Independent IT Advocate",
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
