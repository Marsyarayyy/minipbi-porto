"use client";

import { useState } from "react";
import Judul from "./Judul";

const ContactMe = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you, ${form.name}! Your message has been sent.`);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div id= "contact" className="relative h-screen w-screen bg-[#040812] overflow-hidden flex flex-col justify-center items-center text-white">
      {/* Circle Gradient di Pojok Kanan Atas */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-[#9759B4] to-transparent rounded-full blur-3xl opacity-90"></div>

      {/* Circle Gradient di Pojok Kiri Bawah */}
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tl from-[#9759B4] to-transparent rounded-full blur-3xl opacity-90"></div>

      <div className="relative z-10 max-w-4xl text-center">
        <Judul text={"Contact Me"}center></Judul>
        <p className="text-lg mb-10">Feel free to reach out for collaborations or just a chat!</p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-lg text-gray-800 max-w-2xl mx-auto">
          <div className="mb-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9759B4]"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9759B4]"
            />
          </div>
          <div className="mb-6">
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9759B4]"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-[#9759B4] text-white py-3 rounded-lg text-lg font-semibold hover:bg-[#7D3A9E] transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
