import './globals.css'
import type { Metadata } from 'next'
import { Inter, Ubuntu } from 'next/font/google'
import Navbar from './components/Navbar/Navbar'
import ClientOnly from './components/ClientOnly'
import Modal from './components/Modals/Modal'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'App',
  description: 'Airbnb clone',
}

const font = Ubuntu({
  subsets: ["latin"],
  weight: '300'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <Modal isOpen title="helloworld"/>
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  )
}
