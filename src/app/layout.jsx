import { Inter_Tight, Onest } from 'next/font/google'
import './globals.css';
import Header from './components/header/Header';

const nunito = Onest({ subsets: ['latin'] })

export const metadata = {
  title: 'Luis | Personal Portfolio',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}</body>
    </html>
  )
}
