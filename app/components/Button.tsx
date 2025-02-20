import { NextPage } from "next";
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  buttonColor?: string;
  link: string;
}

const Button: NextPage<ButtonProps> = ({ link, children }) => {
  return (
    <div className="relative text-center px-6 py-2 text-white font-bold rounded-md w-fit overflow-hidden 
            bg-gradient-to-r from-black to-purple-500 transition duration-300 ease-in-out
            hover:from-gray-900 hover:to-purple-700 active:from-gray-800 active:to-purple-800 
            before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-500 before:to-black 
            before:-z-10 before:animate-[borderAnimation_2s_linear_infinite] before:bg-[length:100%_100%] before:rounded-lg 
            hover:before:opacity-100 before:opacity-50">
      <a href={link}>{children}</a>
    </div>
  );
};

export default Button;