"use client";

import Link from "next/link";

export default function CTASection() {
  return (
    <section className="w-full  bg-[#1B3C53] py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-[#D2C1B6] mb-6">
          Ready to Explore Listify?
        </h2>

        {/* Subheading */}
        <p className="text-gray-200 mb-10">
          Login now to manage your items or browse available listings. Start
          using Listify today!
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/login">
            <button className="px-8 py-3 bg-yellow-300 text-[#1B3C53] font-semibold rounded shadow hover:bg-yellow-400 transition">
              Login
            </button>
          </Link>
          <Link href="/items">
            <button className="px-8 py-3 border border-white text-white rounded hover:bg-white hover:text-[#1B3C53] transition">
              Browse Items
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
