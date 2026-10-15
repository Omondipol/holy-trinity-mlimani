import React from 'react'

const highlights = [
  { value: '12+', label: 'Years of ministry' },
  { value: '50+', label: 'Sacred songs' },
  { value: '1000+', label: 'Listeners reached' }
]

const tracks = [
  {
    title: 'A Song of Praise',
    tag: 'Featured',
    time: '3:42',
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    desc: 'Liturgical anthem for joyful worship.'
  },
  {
    title: 'Bless the Lord, My Soul',
    tag: 'Popular',
    time: '4:21',
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    desc: 'A warm and reflective choral offering.'
  },
  {
    title: 'O Come Let Us Adore Him',
    tag: 'Seasonal',
    time: '4:08',
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    desc: 'A celebratory gathering of harmony and prayer.'
  }
]

const events = [
  {
    date: 'Dec 15, 2026',
    title: 'Advent Reflection Evening',
    detail: 'A prayerful candlelit evening of music and meditation.'
  },
  {
    date: 'Every Saturday',
    title: 'Choir Rehearsal',
    detail: 'Open rehearsal, vocal formation, and spiritual fellowship.'
  },
  {
    date: 'Dec 24, 2026',
    title: 'Christmas Concert',
    detail: 'A joyful celebration of the Nativity through song and prayer.'
  }
]

const gallery = [
  'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1515169064368-0b5fe4c0b7e8?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=900&q=80'
]

function App() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <div className="container nav-row">
          <a href="#home" className="brand" aria-label="Holy Trinity Mlimani Choir home">
            <span className="brand-mark">
              <span>HT</span>
            </span>
            <span className="brand-copy">
              <span className="brand-name">Holy Trinity Mlimani</span>
              <span className="brand-subtitle">Choir</span>
            </span>
          </a>

          <nav className="main-nav" aria-label="Main navigation">
            <a href="#about">About</a>
            <a href="#music">Music</a>
            <a href="#events">Events</a>
            <a href="#gallery">Gallery</a>
            <a href="#support">Support</a>
          </nav>

          <a href="#support" className="donate-btn">Donate</a>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-overlay" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Sacred Music • Prayer • Unity</p>
              <h1>Holy Trinity Mlimani</h1>
              <div className="divider" />
              <p className="lead">
                A vibrant liturgical choir inspiring hearts through worship, sacred music, devotion,
                and community. We gather to praise God through harmony, prayer, and a rich tradition
                of choral excellence.
              </p>

              <div className="cta-row">
                <a href="#music" className="primary-btn">Listen now</a>
                <a href="#events" className="secondary-btn">View events</a>
              </div>

              <div className="stats-grid">
                {highlights.map((item) => (
                  <div className="stat-card" key={item.label}>
                    <strong>{item.value}</strong>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="hero-art">
              <div className="art-panel">
                <div className="panel-top">
                  <span>Featured</span>
                  <span className="pill">Live</span>
                </div>

                <div className="crest-box">
                  <div className="crest-mark">HT</div>
                </div>

                <div className="art-meta">
                  <p>A Song of Praise</p>
                  <span>Liturgical anthem • sacred reflection</span>
                </div>

                <div className="progress-bar">
                  <span />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section container">
          <div className="section-head">
            <p className="kicker">About us</p>
            <h2>A choir rooted in faith, harmony, and service</h2>
            <div className="divider gold-divider" />
          </div>

          <div className="feature-grid">
            <article className="feature-card">
              <span className="feature-tag">Worship</span>
              <h3>Liturgical excellence</h3>
              <p>
                We lead the faithful in prayer through music, sacred harmony, and a spirit of reverence.
              </p>
            </article>

            <article className="feature-card">
              <span className="feature-tag">Community</span>
              <h3>Unity in mission</h3>
              <p>
                Through rehearsals, outreach, and celebration, we nurture faith-filled unity in Christ.
              </p>
            </article>

            <article className="feature-card">
              <span className="feature-tag">Service</span>
              <h3>Giving glory to God</h3>
              <p>
                Every performance is an offering—a ministry that breathes hope, devotion, and joy into worship.
              </p>
            </article>
          </div>
        </section>

        <section id="music" className="music-section">
          <div className="container">
            <div className="section-head light">
              <p className="kicker">Music</p>
              <h2>Audio that lifts the soul</h2>
              <div className="divider gold-divider" />
            </div>

            <div className="track-grid">
              {tracks.map((track) => (
                <article className="track-card" key={track.title}>
                  <div className="track-head">
                    <span className="tag">{track.tag}</span>
                    <span className="time">{track.time}</span>
                  </div>

                  <div className="wave-box" aria-hidden="true">
                    {[...Array(18)].map((_, i) => (
                      <span key={i} style={{ height: `${(i % 5) * 16 + 30}%` }} />
                    ))}
                  </div>

                  <h3>{track.title}</h3>
                  <p>{track.desc}</p>
                  <audio controls preload="none" src={track.src} className="audio-player" />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="events" className="section container">
          <div className="section-head">
            <p className="kicker">Events</p>
            <h2>Moments of worship and fellowship</h2>
            <div className="divider gold-divider" />
          </div>

          <div className="event-grid">
            {events.map((event) => (
              <article className="event-card" key={event.title}>
                <span className="event-date">{event.date}</span>
                <h3>{event.title}</h3>
                <p>{event.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="gallery" className="gallery-section">
          <div className="container">
            <div className="section-head">
              <p className="kicker">Gallery</p>
              <h2>Moments of prayer, harmony, and joy</h2>
              <div className="divider gold-divider" />
            </div>

            <div className="gallery-grid">
              {gallery.map((src, index) => (
                <div className={`gallery-card card-${index + 1}`} key={src}>
                  <img src={src} alt={`Choir gallery ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="support" className="section container">
          <div className="support-box">
            <div>
              <p className="kicker alt">Support</p>
              <h2>Partner with us in worship and service</h2>
              <p>
                Your generosity helps sustain music ministry, worship programs, and community outreach.
              </p>
            </div>

            <div className="support-card">
              <p>Ways to give</p>
              <ul>
                <li>Choir support and music ministry</li>
                <li>Event preparation and logistics</li>
                <li>Outreach and community worship</li>
              </ul>
              <a href="#" className="primary-btn dark-btn">Donate now</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div className="brand footer-brand">
            <span className="brand-mark small">
              <span>HT</span>
            </span>
            <span className="brand-copy">
              <span className="brand-name dark-text">Holy Trinity Mlimani</span>
              <span className="brand-subtitle dark-subtitle">Choir</span>
            </span>
          </div>

          <p>© 2026 Holy Trinity Mlimani Choir. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
