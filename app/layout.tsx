import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import AuthContext from '@/providers/auth-provider'
import { ModalProvider } from '@/components/modal-provider'
import { ToasterProvider } from '@/providers/toaster-provider'
import { CrispProvider } from '@/providers/crisp-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Genius AI',
  description: 'AI Platform for everyone.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <CrispProvider/>
      <body className={inter.className}>
        <AuthContext>
         <ModalProvider/>
         <ToasterProvider/>
        {children}
        </AuthContext>
      </body>
    </html>
  )
}
