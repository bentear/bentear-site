import './globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ben Tear',
  description: 'I build brands and experiences that turn product velocity into market momentum.',
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'Ben Tear',
    description: 'I build brands and experiences that turn product velocity into market momentum.',
    url: 'https://bentear.info',
    siteName: 'Ben Tear',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ben Tear',
    description: 'I build brands and experiences that turn product velocity into market momentum.',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
