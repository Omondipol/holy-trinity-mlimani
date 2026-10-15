import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-[#081120]/90 sticky top-0 z-50">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-4">
          <img src="/crest.svg" alt="crest" className="w-12 h-12 rounded-full" />
          <div>
            <div className="text-white font-semibold">Holy Trinity Mlimani</div>
            <div className="text-xs text-[#d9b75d] uppercase tracking-widest">Choir</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-white/90">
          <Link href="/about">About</Link>
          <Link href="/music">Music</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/admin">Admin</Link>
        </nav>

        <Link href="/admin" className="rounded-full bg-[#d9b75d] px-4 py-2 text-[#081120] font-semibold">Donate</Link>
      </div>
    </header>
  )
}
