import React from 'react'

const images = [
  '/crest.svg',
  '/crest.svg',
  '/crest.svg'
]

export default function Gallery() {
  return (
    <section className="py-16">
      <div className="container">
        <h2 className="font-serif text-4xl">Gallery</h2>
        <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, i) => (
            <div key={i} className="rounded-xl overflow-hidden bg-gray-100">
              <img src={src} alt={`gallery ${i + 1}`} className="w-full h-60 object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
