import React from "react";

const CV = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-[#040812] text-white px-5 md:px-20">
      {/* Circle Gradient di Pojok Kanan Atas */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-[#9759B4] to-transparent rounded-full blur-3xl opacity-90"></div>

      {/* Circle Gradient di Pojok Kiri Bawah */}
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tl from-[#9759B4] to-transparent rounded-full blur-3xl opacity-90"></div>

      <h1 className="text-3xl md:text-4xl font-bold mb-6">My CV</h1>
      
      {/* Tampilan CV */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-3xl p-5">
        <iframe
          src="/cv.pdf"
          className="w-full h-[500px]"
          title="CV Preview"
        ></iframe>
      </div>

      {/* Tombol Download CV
      <a
        href="/cv.pdf"
        download="My_CV.pdf"
        className="mt-6 px-6 py-3 text-white font-bold bg-gradient-to-r from-black to-purple-500 rounded-md 
                   transition duration-300 ease-in-out hover:from-gray-900 hover:to-purple-700"
      >
        Download CV
      </a> */}
    </div>
  );
};

export default CV;
