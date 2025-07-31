import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ThalorFi',
  description: 'Autonomous and transparent DeFi infrastructure powered by AI',
  keywords: 'ThalorFi, DeFi, Web3, AI, blockchain, cryptocurrency, decentralized finance',
  authors: [{ name: 'ThalorFi' }],
  robots: 'index, follow',
  openGraph: {
    title: 'ThalorFi',
    description: 'Join the future of decentralized finance with ThalorFi\'s AI-powered DeFi infrastructure.',
    type: 'website',
    url: 'https://thalorfi.com',
    siteName: 'ThalorFi',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ThalorFi',
    description: 'Join the future of decentralized finance with ThalorFi\'s AI-powered DeFi infrastructure.',
    creator: '@ThalorFi',
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