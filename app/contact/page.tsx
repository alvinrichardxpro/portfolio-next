"use client";

import Link from "next/link";

export default function Contact() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-950 to-black text-white px-6 py-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
          Contact <span className="text-blue-400">Me</span>
        </h1>

        <p className="text-slate-400 text-center mb-12">
          Interested in working together or have any questions?  
          Feel free to send me a message.
        </p>

        {/* FORM */}
        <form className="space-y-6 bg-slate-900/60 border border-slate-800 rounded-2xl p-8 mb-16">
          <div>
            <label className="block text-sm mb-2 text-slate-300">
              Your Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-400 transition"
            />
          </div>

          <div>
            <label className="block text-sm mb-2 text-slate-300">
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@email.com"
              className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-400 transition"
            />
          </div>

          <div>
            <label className="block text-sm mb-2 text-slate-300">
              Message
            </label>
            <textarea
              rows={4}
              placeholder="Write your message..."
              className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-400 transition"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 transition rounded-xl py-3 font-medium"
          >
            Send Message
          </button>
        </form>

        {/* BACK TO HOME */}
        <div className="text-center">
          <Link
            href="/"
            className="inline-block border border-slate-700 hover:border-blue-400
            px-6 py-3 rounded-xl transition"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}