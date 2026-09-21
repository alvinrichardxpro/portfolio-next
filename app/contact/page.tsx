"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const phoneNumber = "6282122972829";
    const message =
      `Halo Alvin,\n\n` +
      `Nama: ${formData.name}\n` +
      `Email: ${formData.email}\n\n` +
      `Pesan:\n${formData.message}`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <main className="min-h-screen bg-[#0b0f19] text-white pt-24 pb-12 px-4">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2 text-center sm:text-left">
          Contact Me
        </h1>
        <p className="text-gray-400 mb-8 text-center sm:text-left">
          Interested in working together or have any questions? Feel free to send
          me a message.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-[#111827] border border-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-[#111827] border border-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="w-full p-3 rounded-lg bg-[#111827] border border-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition resize-none"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition duration-200 mt-2"
          >
            Kirim ke WhatsApp
          </button>
        </form>
      </div>
    </main>
  );
}