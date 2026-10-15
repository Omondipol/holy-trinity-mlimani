import React from 'react'

export default function Player(){
  return (
    <div className="fixed right-6 bottom-6 bg-[#0c1a2d]/90 text-white rounded-2xl p-3 shadow-lg z-50">
      <div className="flex items-center gap-3">
        <button className="w-12 h-12 rounded-full bg-[#d9b75d] text-[#081120] font-bold">▶</button>
        <div>
          <div className="text-sm font-semibold">Featured preview</div>
          <div className="text-xs text-gray-300">Holy Trinity Mlimani</div>
        </div>
      </div>
    </div>
  )
}
