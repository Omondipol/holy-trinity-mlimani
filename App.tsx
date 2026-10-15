import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import AudioPlayer from './components/AudioPlayer'

const tracks = [
  {
    title: 'A Song of Praise',
    subtitle: 'Liturgical anthem',
    tag: 'Featured'
  },
  {
    title: 'O Come Let Us Adore Him',
    subtitle: 'Traditional Christmas hymn',
    tag: 'Seasonal'
  },
  {
    title: 'Bless the Lord, My Soul',
    subtitle: 'Choral worship',
    tag: 'Popular'
  }
]

const events = [
  {
    title: 'Advent Reflection Evening',
    date: 'Dec 15, 2026',
    detail: 'Prayerful music and message of hope.'
  },
  {
    title: 'Choir Rehearsal',
    date: 'Every Saturday',
    detail: 'Open practice and vocal formation.'
  },
  {
    title: 'Christmas Concert',
    date: 'Dec 24, 2026',
    detail: 'Celebrating the birth of Christ through song.'
  }
]

const gallery = [
  'Choir worship',
  'Modern harmony',
  'Liturgical celebration',
  'Church gathering',
  'Young voices',
  'Prayer and reflection'
]

export default function App() {
  return (
    <div className="min-h-screen bg-[#f7f5f1] text-[#081120]">
      <Header />

      <main>
        <Hero />

        <section id="about" className="container py-20">
          <div className="mb-10 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-choir-auburn">
              About us
            </p>
            <h2 className="section-title mt-3 text-5xl text-[#081120]">
              A choir rooted in faith, harmony, and service
            </h2>
            <div className="gold-divider"></div>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-soft">
              <span className="inline-flex rounded-full bg-choir-gold/15 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-[#081120]">
                Worship
              </span>
              <h3 className="mt-4 text-2xl font-semibold">Liturgical excellence</h3>
              <p className="mt-3 text-slate-600">
                We lead the faithful in prayer through music, sacred harmony, and a spirit of reverence.
              </p>
            </div>

            <div className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-soft">
              <span className="inline-flex rounded-full bg-choir-gold/15 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-[#081120]">
                Community
              </span>
              <h3 className="mt-4 text-2xl font-semibold">Unity in mission</h3>
              <p className="mt-3 text-slate-600">
                Through rehearsals, outreach, and celebration, we nurture faith-filled unity in Christ.
              </p>
            </div>

            <div className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-soft">
              <span className="inline-flex rounded-full bg-choir-gold/15 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-[#081120]">
                Service
              </span>
              <h3 className="mt-4 text-2xl font-semibold">Giving glory to God</h3>
              <p className="mt-3 text-slate-600">
                Every performance is an offering—a ministry that breathes hope, devotion, and joy into worship.
              </p>
            </div>
          </div>
        </section>

        <section id="music" className="bg-[#0b1320] py-20 text-white">
          <div className="container">
            <div className="mb-12 max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-choir-gold">
                Music
              </p>
              <h2 className="section-title mt-3 text-5xl text-white">
                Sacred recordings and uplifting worship
              </h2>
              <div className="gold-divider"></div>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {tracks.map((track) => (
                <article
                  key={track.title}
                  className="rounded-[28px] border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-choir-gold/40"
                >
                  <div className="mb-5 flex items-center justify-between">
                    <span className="rounded-full border border-choir-gold/30 bg-choir-gold/10 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-choir-gold">
                      {track.tag}
                    </span>
                    <span className="text-sm text-slate-300">3:42</span>
                  </div>

                  <div className="mb-5 h-40 rounded-[20px] bg-gradient-to-br from-[#143352] via-[#0d233d] to-[#061426]">
                    <div className="flex h-full items-end gap-1 p-5">
                      {[10, 22, 17, 26, 18, 33, 26, 18, 10, 25, 12, 28, 20, 18, 14].map((height, index) => (
                        <span
                          key={index}
                          className="w-full rounded-t-md bg-gradient-to-t from-choir-gold to-[#f6d778]"
                          style={{ height: `${height}%` }}
                        />
                      ))}
                    </div>
                  </div>

                  <h3 className="text-2xl font-semibold">{track.title}</h3>
                  <p className="mt-2 text-slate-300">{track.subtitle}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="events" className="container py-20">
          <div className="mb-12 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-choir-auburn">
              Events
            </p>
            <h2 className="section-title mt-3 text-5xl text-[#081120]">
              Upcoming moments of worship and fellowship
            </h2>
            <div className="gold-divider"></div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {events.map((event) => (
              <div key={event.title} className="rounded-[28px] bg-white p-7 shadow-soft ring-1 ring-slate-200">
                <p className="text-sm uppercase tracking-[0.18em] text-choir-auburn">{event.date}</p>
                <h3 className="mt-4 text-2xl font-semibold">{event.title}</h3>
                <p className="mt-3 text-slate-600">{event.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="gallery" className="bg-[#f3eee7] py-20">
          <div className="container">
            <div className="mb-12 max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-choir-auburn">
                Gallery
              </p>
              <h2 className="section-title mt-3 text-5xl text-[#081120]">
                Moments of prayer, harmony, and joy
              </h2>
              <div className="gold-divider"></div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {gallery.map((item, index) => (
                <div
                  key={item}
                  className={`rounded-[28px] bg-gradient-to-br ${
                    index % 3 === 0
                      ? 'from-[#d9b75d]/30 via-[#f9f5ef] to-[#d9b75d]/20'
                      : index % 3 === 1
                      ? 'from-[#a65d4b]/20 via-[#f9f5ef] to-[#d9b75d]/20'
                      : 'from-[#10213b]/15 via-[#f9f5ef] to-[#d9b75d]/20'
                  } p-6 shadow-soft ring-1 ring-slate-200`}
                >
                  <div className="mb-5 h-52 rounded-[22px] bg-[radial-gradient(circle_at_top,_rgba(217,183,93,0.38),_transparent_30%),linear-gradient(135deg,#10213b,#0d1f33,#122d4d)]" />
                  <p className="text-xl font-semibold text-[#081120]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="support" className="container py-20">
          <div className="rounded-[32px] bg-[#081120] px-7 py-10 text-white shadow-soft md:px-10">
            <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-choir-gold">
                  Support
                </p>
                <h2 className="section-title mt-3 text-5xl text-white">
                  Partner with us in worship and service
                </h2>
                <p className="mt-4 max-w-xl text-slate-300">
                  Your generosity helps sustain music ministry, worship programs, and community outreach.
                </p>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
                <p className="text-sm uppercase tracking-[0.2em] text-choir-gold">Ways to give</p>
                <ul className="mt-5 space-y-3 text-slate-200">
                  <li>• Choir support and music ministry</li>
                  <li>• Event preparation and logistics</li>
                  <li>• Outreach and community worship</li>
                </ul>

                <a
                  href="#"
                  className="mt-6 inline-block rounded-full bg-choir-gold px-6 py-3 font-semibold text-[#081120]"
                >
                  Donate Now
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-[#f7f5f1]">
        <div className="container flex flex-col gap-5 py-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <img src="/crest-placeholder.svg" alt="Choir crest" className="h-10 w-10" />
            <div>
              <p className="font-semibold text-[#081120]">Holy Trinity Mlimani Choir</p>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Worship • Music • Community</p>
            </div>
          </div>

          <p className="text-sm text-slate-600">© 2026 Holy Trinity Mlimani Choir. All rights reserved.</p>
        </div>
      </footer>

      <AudioPlayer />
    </div>
  )
}