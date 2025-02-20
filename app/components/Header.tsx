"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Shrikhand } from "next/font/google";
import Button from "./Button";
import Icons from "./Icons";

const shrikhand = Shrikhand({ subsets: ["latin"], weight: "400" });

const Header = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/finisher-header.es5.min.js"; // Pastikan path ini sesuai
    script.async = true;
    script.onload = () => {
      if (window.FinisherHeader) {
        new window.FinisherHeader({
          count: 8,
          size: {
            min: 1300,
            max: 1500,
            pulse: 0.1,
          },
          speed: {
            x: { min: 1, max: 3 },
            y: { min: 0.7, max: 3 },
          },
          colors: {
            background: "#040812",
            particles: ["#5f4381", "#453e64", "#040812", "#9759b4"],
          },
          blending: "lighten",
          opacity: { center: 0.6, edge: 0 },
          skew: 0,
          shapes: ["c"],
        });
      } else {
        console.error("FinisherHeader tidak ditemukan di window.");
      }
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Bersihkan saat komponen di-unmount
    };
  }, []);

  return (
    <div className="finisher-header h-[80vh] flex items-center justify-center text-white px-10 md:px-20">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl gap-10">
        {/* Bagian Teks */}
        <div className="flex flex-col gap-5 text-center md:text-left ">
          
          <h1 className={`text-4xl md:text-6xl font-bold leading-tight ${shrikhand.className}`}>
            Marsya Rayani <br />
            <span className="text-[#040812] font-bold"></span>
          </h1>
          <p className="w-full md:w-3/4 text-lg md:text-xl">
            Student with web design athusiast dvnsdjvbsdjvdv jvnsdnvsdkvdnss vjskd vvv sbj
          </p>
          <Button link='/about'>Get To Know Me</Button>
          <Icons></Icons>
        </div>

        {/* Bagian Gambar */}
        <div className="flex justify-center">
          <Image
            src="/profile.png"
            alt="hero"
            width={400}
            height={400}
            className="w-[250px] md:w-[400px] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
