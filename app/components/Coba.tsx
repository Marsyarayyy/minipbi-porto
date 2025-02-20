import React from 'react'

export default function Coba() {
  return (
    <div className="relative h-screen w-screen bg-[#040812] overflow-hidden">
      {/* Circle Gradient di Pojok Kanan Atas */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-[#9759B4] to-transparent rounded-full blur-3xl opacity-90"></div>
      
      {/* Circle Gradient di Pojok Kiri Bawah */}
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tl from-[#9759B4] to-transparent rounded-full blur-3xl opacity-90"></div>

      <div className="flex justify-center items-center h-full text-white text-2xl">
        Contact Me
      </div>
    </div>
  )
}
