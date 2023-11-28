import { Inter } from 'next/font/google'
import './globals.css'
import ProfileNav from './_components/navs/profileNav'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'VBReddy',
  description: 'Veera Bhargava Reddy.Obulareddy',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ProfileNav></ProfileNav>
        {children}
      </body>
    </html>
  )
}
