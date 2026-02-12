import './globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ben Tear',
  description: 'I build brands and product experiences that accelerate traction for companies doing hard, important things.',
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
