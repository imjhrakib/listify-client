"use client";

export default function AboutSection() {
  return (
    <section className="w-full bg-[#1B3C53] py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 flex justify-center">
        {/* Card */}
        <div className="bg-[#234C6A] rounded-2xl p-10 shadow-lg max-w-3xl text-center">
          {/* Heading */}
          <h2 className="text-4xl font-bold text-[#D2C1B6] mb-6">
            About Listify
          </h2>

          {/* Description */}
          <p className="text-gray-200 mb-8">
            Listify is a modern web application that allows users to browse
            items, view details, and add their own products securely. Built with{" "}
            <span className="text-yellow-300 font-semibold">Next.js</span> and{" "}
            <span className="text-yellow-300 font-semibold">Tailwind CSS</span>,
            it provides a clean, responsive, and user-friendly experience.
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-[#234D8D] text-white rounded-full shadow">
              Next.js
            </span>
            <span className="px-4 py-2 bg-[#234D8D] text-white rounded-full shadow">
              Tailwind CSS
            </span>
            <span className="px-4 py-2 bg-[#234D8D] text-white rounded-full shadow">
              React
            </span>
            <span className="px-4 py-2 bg-[#234D8D] text-white rounded-full shadow">
              Express.js
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
