import React, { useState } from 'react'

export default function AdminPage() {
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const handleUpload = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const fileInput = (form.elements.namedItem('file') as HTMLInputElement)
    const file = fileInput.files?.[0]
    if (!file) return setMessage('Please choose a file')

    const preset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET
    const cloud = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
    if (!preset || !cloud) return setMessage('Cloudinary not configured')

    const fd = new FormData()
    fd.append('file', file)
    fd.append('upload_preset', preset)

    setMessage('Uploading...')
    try {
      const res = await fetch(`https://api.cloudinary.com/v1_1/${cloud}/auto/upload`, {
        method: 'POST',
        body: fd
      })
      const data = await res.json()
      setMessage('Uploaded: ' + data.secure_url)
    } catch (err) {
      console.error(err)
      setMessage('Upload failed')
    }
  }

  return (
    <section className="py-16">
      <div className="container max-w-xl">
        <h2 className="font-serif text-3xl">Admin — Upload Media</h2>
        <p className="mt-2 text-sm text-gray-600">Simple upload UI. Requires NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET and NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME set in your Vercel or environment.</p>

        <form className="mt-6 space-y-4" onSubmit={handleUpload}>
          <div>
            <label className="block text-sm font-medium text-gray-700">File</label>
            <input name="file" type="file" className="mt-2" />
          </div>
          <div>
            <button className="rounded-full bg-[#d9b75d] px-6 py-2 font-semibold">Upload</button>
          </div>
        </form>

        {message && <p className="mt-4 text-sm">{message}</p>}
      </div>
    </section>
  )
}
