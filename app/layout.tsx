import './globals.css'
import React from 'react'
import Header from '../components/Header'

export const metadata = {
  title: 'Holy Trinity Mlimani Choir',
  description: 'Holy Trinity Mlimani Choir — sacred music, worship, community.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <footer className="mt-16 bg-[#f7f5f1] border-t border-gray-100 py-8">
          <div className="container text-center text-sm text-gray-600">© {new Date().getFullYear()} Holy Trinity Mlimani Choir</div>
        </footer>
      </body>
    </html>
  )
}
