"use client";

import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="w-full h-screen bg-[#1B3C53] text-white flex items-center justify-center">
      <div className="text-center px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 leading-tight">
          Welcome to <span className="text-yellow-300">Listify</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl mb-10 max-w-3xl mx-auto">
          Browse items, explore details, and add your own products with secure
          login. A simple and modern application built with{" "}
          <strong>Next.js</strong> & <strong>Tailwind CSS</strong>.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/login">
            <button className="px-8 py-3 bg-yellow-400 text-[#1B3C53] font-semibold rounded shadow hover:bg-yellow-300 transition">
              Login
            </button>
          </Link>
          <Link href="/items">
            <button className="px-8 py-3 border border-white text-white rounded hover:bg-white hover:text-[#1B3C53] transition">
              View Items
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
