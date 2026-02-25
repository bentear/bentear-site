import './globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ben Tear',
  description: 'I build brands and product experiences that accelerate traction for companies doing hard, important things.',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Ben Tear',
    description: 'I build brands and product experiences that accelerate traction for companies doing hard, important things.',
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
    description: 'I build brands and product experiences that accelerate traction for companies doing hard, important things.',
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
