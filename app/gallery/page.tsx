import React from 'react'

const images = [
  '/photos/photo1.jpg',
  '/photos/photo2.jpg',
  '/photos/photo3.jpg'
]

export default function Gallery() {
  return (
    <section className="py-16">
      <div className="container">
        <h2 className="font-serif text-4xl">Gallery</h2>
        <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src) => (
            <div key={src} className="rounded-xl overflow-hidden bg-gray-100">
              <img src={src} alt="gallery" className="w-full h-60 object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
