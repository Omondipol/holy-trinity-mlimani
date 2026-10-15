import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

function ensureRoot() {
  let root = document.getElementById('root')
  if (!root) {
    root = document.createElement('div')
    root.id = 'root'
    document.body.appendChild(root)
  }
  return root
}

function showErrorOverlay(message: string, details?: string) {
  try {
    // remove any existing overlay
    const existing = document.getElementById('dev-error-overlay')
    if (existing) existing.remove()

    const overlay = document.createElement('div')
    overlay.id = 'dev-error-overlay'
    overlay.style.position = 'fixed'
    overlay.style.left = '0'
    overlay.style.top = '0'
    overlay.style.right = '0'
    overlay.style.bottom = '0'
    overlay.style.background = 'rgba(11,18,30,0.95)'
    overlay.style.color = 'white'
    overlay.style.zIndex = '999999'
    overlay.style.padding = '28px'
    overlay.style.fontFamily = 'system-ui, -apple-system,Segoe UI, Roboto, Helvetica, Arial'
    overlay.innerHTML = `
      <h2 style="margin-top:0;color:#ffd77a">Application error</h2>
      <pre style="white-space:pre-wrap;overflow:auto;max-height:70vh">${message}\n\n${details || ''}</pre>
      <p style="opacity:0.9">Check the browser console and the dev server terminal for the full stack trace.</p>
    `

    document.body.appendChild(overlay)
  } catch (e) {
    // fallback
    // eslint-disable-next-line no-console
    console.error('Failed to show overlay', e)
  }
}

// global error handlers to show a visible overlay instead of a blank page
window.addEventListener('error', (ev) => {
  const msg = ev.message || 'Unknown error'
  const src = ev.filename ? `${ev.filename}:${ev.lineno}:${ev.colno}` : ''
  showErrorOverlay(msg, src)
})

window.addEventListener('unhandledrejection', (ev) => {
  const reason = (ev.reason && (ev.reason.stack || ev.reason.message)) || String(ev.reason)
  showErrorOverlay('Unhandled Promise Rejection', reason)
})

const rootEl = ensureRoot()

try {
  ReactDOM.createRoot(rootEl).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
} catch (err: any) {
  // If rendering fails, show the overlay with error details
  const message = err?.message || String(err) || 'Unknown render error'
  const stack = err?.stack || ''
  // eslint-disable-next-line no-console
  console.error('Render error', err)
  showErrorOverlay(message, stack)
}
