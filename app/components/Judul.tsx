import React from "react";
import { Shrikhand } from "next/font/google";

const shrikhand = Shrikhand({ subsets: ["latin"], weight: "400" });

interface TitleProps {
  text: string; // Props untuk teks judul
  center?: boolean; // Opsional: Apakah teks berada di tengah
}

export default function Judul({ text, center = false }: TitleProps) {
  return (
    <h1
      className={`text-2xl md:text-4xl text-white font-bold leading-tight ${shrikhand.className} ${
        center ? "text-center" : ""
      }`}
    >
      {text}
    </h1>
  );
}
