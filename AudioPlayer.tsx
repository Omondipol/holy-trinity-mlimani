import React, { useRef, useState } from 'react'

export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [playing, setPlaying] = useState(false)

  const togglePlayback = async () => {
    if (!audioRef.current) return

    try {
      if (audioRef.current.paused) {
        await audioRef.current.play()
        setPlaying(true)
      } else {
        audioRef.current.pause()
        setPlaying(false)
      }
    } catch (error) {
      console.error('Playback error:', error)
    }
  }

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-3xl rounded-2xl border border-white/10 bg-[#0c1a2d]/90 p-3 shadow-soft backdrop-blur-xl md:left-auto md:right-8">
      <div className="flex items-center gap-4">
        <button
          onClick={togglePlayback}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-choir-gold text-xl font-bold text-[#081120] shadow-glow transition hover:scale-105"
          aria-label={playing ? 'Pause preview' : 'Play preview'}
        >
          {playing ? '❚❚' : '▶'}
        </button>

        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold text-white">Featured Choir Preview</p>
          <p className="text-xs text-slate-300">Sacred Anthem • 40s sample</p>
        </div>

        <div className="hidden min-w-[180px] items-center gap-2 md:flex">
          <div className="h-1.5 flex-1 rounded-full bg-white/10">
            <div className="h-full w-1/3 rounded-full bg-choir-gold"></div>
          </div>
          <span className="text-[10px] uppercase tracking-[0.2em] text-slate-300">0:40</span>
        </div>
      </div>

      <audio
        ref={audioRef}
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
        preload="none"
      />
    </div>
  )
}