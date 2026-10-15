import React from 'react'
import Link from 'next/link'
import Player from '../components/Player'

export default function Home() {
  return (
    <main>
      <section className="bg-[#081120] text-white py-20">
        <div className="container grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="uppercase text-sm tracking-widest text-[#d9b75d]">Sacred Music • Prayer • Unity</p>
            <h1 className="mt-4 text-5xl font-serif">Holy Trinity Mlimani Choir</h1>
            <p className="mt-6 max-w-xl text-gray-200">A vibrant liturgical choir inspiring hearts through worship, sacred music, devotion, and community.</p>
            <div className="mt-8 flex gap-4">
              <Link href="/music" className="rounded-full bg-[#d9b75d] px-6 py-3 font-semibold text-[#081120]">Listen</Link>
              <Link href="/events" className="rounded-full border border-white/10 px-5 py-3">Events</Link>
            </div>
          </div>
          <div className="flex justify-end">
            <img src="/crest.svg" alt="crest" className="w-56 h-56 rounded-full border border-[#d9b75d]/30 p-3 bg-[#081120]/60" />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <h2 className="font-serif text-3xl">Featured recordings</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <article className="p-4 border rounded-xl">
              <div className="h-40 bg-gradient-to-br from-[#10213b] to-[#081120] rounded-lg" />
              <h3 className="mt-3 font-semibold">A Song of Praise</h3>
              <p className="text-sm text-gray-500">Liturgical anthem</p>
            </article>

            <article className="p-4 border rounded-xl">Placeholder</article>
            <article className="p-4 border rounded-xl">Placeholder</article>
          </div>
        </div>
      </section>

      <Player />
    </main>
  )
}
