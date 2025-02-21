import React from 'react'
import Button from './Button';
import Judul from './Judul';



export default function About() {
  return (
     <div id= "about" className="relative h-screen w-screen bg-[#040812] overflow-hidden flex items-center justify-center text-white px-10 md:px-20">
      {/* Circle Gradient di Pojok Kanan Atas */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-[#9759B4] to-transparent rounded-full blur-3xl opacity-90"></div>
      
      {/* Circle Gradient di Pojok Kiri Bawah */}
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tl from-[#9759B4] to-transparent rounded-full blur-3xl opacity-90"></div>
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl gap-10">
          {/* Bagian Teks */}
          <div className="flex flex-col gap-5 text-center md:text-left">
            <Judul text={'About'} />
            <p className="w-full md:w-3/4 text-lg md:text-xl">
              I am a passionate designer and developer with a love for nature.
            </p>
            <Button link='/cv'>Download CV</Button>
          </div>

          {/* Bagian Gambar */}
          <div className="flex justify-center">
            <h1>hai</h1>
          </div>
        </div>
    </div>
  )
}
