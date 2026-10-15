import React from 'react'

const tracks = [
  { id: 1, title: 'A Song of Praise', subtitle: 'Liturgical anthem', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' },
  { id: 2, title: 'Bless the Lord', subtitle: 'Choral worship', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3' }
]

export default function Music() {
  return (
    <section className="py-16 bg-[#0b1420] text-white">
      <div className="container">
        <h2 className="font-serif text-4xl">Music</h2>
        <p className="mt-3 text-gray-300">Explore our recordings. Click a track to preview.</p>

        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {tracks.map((t) => (
            <article key={t.id} className="p-6 rounded-xl bg-white/5">
              <h3 className="text-xl font-semibold">{t.title}</h3>
              <p className="text-sm text-gray-300">{t.subtitle}</p>
              <audio controls className="mt-4 w-full" src={t.src} preload="none" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
