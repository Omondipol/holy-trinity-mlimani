import React from 'react'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#081120]/80 backdrop-blur-xl">
      <div className="container flex items-center justify-between py-4">
        <a href="#home" className="flex items-center space-x-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-choir-gold/70 bg-white/5">
            <img src="/crest-placeholder.svg" alt="Holy Trinity Mlimani Choir crest" className="h-9 w-9" />
          </div>
          <div>
            <p className="font-semibold text-white">Holy Trinity Mlimani</p>
            <p className="text-[10px] uppercase tracking-[0.2em] text-choir-gold/80">Choir</p>
          </div>
        </a>

        <nav className="hidden items-center gap-7 text-sm text-white/80 md:flex">
          <a href="#about" className="transition hover:text-white">About</a>
          <a href="#music" className="transition hover:text-white">Music</a>
          <a href="#events" className="transition hover:text-white">Events</a>
          <a href="#gallery" className="transition hover:text-white">Gallery</a>
          <a href="#support" className="transition hover:text-white">Support</a>
        </nav>

        <a
          href="#support"
          className="rounded-full border border-choir-gold/70 bg-choir-gold px-5 py-2.5 text-sm font-semibold text-[#081120] transition hover:scale-[1.02]"
        >
          Donate
        </a>
      </div>
    </header>
  )
}