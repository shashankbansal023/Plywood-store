import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Krishna Timber and Plywood | Buy Plywood, HDHMR board , Flush Door at Best Prices - Dealers & Suppliers , Retailers',
  description: 'Krishnatimberandplywood.in is an online portal and leading supplier and dealer of plywood , HDHMR board , flush door, laminates, MDF, veneer, flush door, block board and adhesives. Buy genuine products at best prices.',
  keywords: "plywood dealers, hdhmr board delhi,hdhmr board price, plywood companies in delhi, buy laminates, mdf dealers delhi, plywood suppliers, krishna timber and plywood",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
