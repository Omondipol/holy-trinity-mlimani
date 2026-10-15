import React from 'react'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-[#081120] text-white">
      <div className="dark-pattern absolute inset-0 opacity-50"></div>
      <div className="container relative grid gap-10 py-16 md:grid-cols-[1.3fr_0.7fr] md:items-center md:py-24">
        <div>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-choir-gold">
            Sacred Music • Prayer • Unity
          </p>

          <h1 className="section-title text-5xl leading-none md:text-7xl">
            Holy Trinity Mlimani
          </h1>

          <div className="gold-divider"></div>

          <p className="max-w-xl text-base text-slate-200 md:text-lg">
            A vibrant liturgical choir inspiring hearts through worship, sacred music,
            devotion, and community. We gather to praise God through harmony, prayer,
            and a rich tradition of choral excellence.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#music"
              className="rounded-full bg-choir-gold px-6 py-3 font-semibold text-[#081120] shadow-glow transition hover:-translate-y-0.5"
            >
              Listen Now
            </a>

            <a
              href="#events"
              className="rounded-full border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white transition hover:border-white/40"
            >
              View Events
            </a>
          </div>

          <div className="mt-10 grid max-w-lg grid-cols-3 gap-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="text-2xl font-bold text-choir-gold">12+</div>
              <div className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-300">Years</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="text-2xl font-bold text-choir-gold">50+</div>
              <div className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-300">Songs</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="text-2xl font-bold text-choir-gold">1000+</div>
              <div className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-300">Listeners</div>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center md:justify-end">
          <div className="absolute inset-0 -z-10 scale-125 rounded-full bg-choir-gold/10 blur-3xl"></div>

          <div className="relative w-full max-w-[420px] rounded-[32px] border border-white/10 bg-white/5 p-5 shadow-soft">
            <div className="rounded-[28px] bg-gradient-to-br from-[#10213b] via-[#081120] to-[#0c1f32] p-5">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.2em] text-choir-gold">Featured</span>
                <span className="rounded-full border border-white/10 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-white/70">
                  Live
                </span>
              </div>

              <div className="flex items-center justify-center">
                <img
                  src="/crest-placeholder.svg"
                  alt="Holy Trinity coat of arms"
                  className="h-44 w-44 rounded-full border border-choir-gold/30 bg-[#081120]/50 p-3"
                />
              </div>

              <div className="mt-6 space-y-3 text-center">
                <p className="text-xl font-medium text-white">A Song of Praise</p>
                <p className="text-sm text-slate-300">Liturgical Anthem • Sacred Reflection</p>
                <div className="mx-auto h-1.5 w-full rounded-full bg-white/10">
                  <div className="h-full w-2/3 rounded-full bg-choir-gold"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}