import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Nahuel Basterretche',
  description: 'Interspecies Entanglements',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en h-full bg-gray-100">
      <body className= {"h-full" + inter.className}>{children}</body>
    </html>
  )
}
