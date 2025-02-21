"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import Judul from "./Judul";

const projects = [
  {
    title: "OpticScan",
    description: "A medical application for managing patient data and diagnoses.",
    image: "/opticscan.png",
  },
  {
    title: "Relawanin",
    description: "Relawanin is a platform for joining and creating activities dedicated to loving and caring for the Earth.",
    image: "/relawanin.png",
  },
  {
    title: "FokusIN",
    description: "A Pomodoro-based productivity app to enhance focus and efficiency.",
    image: "/fokusin.png",
  },
];

const Projects = () => {
  return (
    <div id= "project"className="py-10 px-5 md:px-20 min-h-screen bg-[#040812] relative">
      {/* Radial Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,_#57356D_0%,_#040812_70%)]"></div>

      {/* Konten di atas gradient */}
      <div className="relative z-10">
        <div className="mb-8">
          <Judul text={"My Project"} center />
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          navigation={true}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="max-w-5xl mx-auto"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <div className="bg-white shadow-lg rounded-2xl overflow-hidden w-[300px]">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                  <p className="text-gray-600 text-sm mt-2">{project.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};


export default Projects;
