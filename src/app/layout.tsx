import type { Metadata } from 'next'
import '@/app/globals.css'
import { cn } from '@/lib/utils'
import { Inter as FontSans } from 'next/font/google'
import { Toaster } from "@/components/ui/sonner"

const fontSans = FontSans({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-sans'
})

export const metadata: Metadata = {
  title: 'CZR - Project Marketplace',
  description: 'Demo challenge for CZR',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable
      )}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
