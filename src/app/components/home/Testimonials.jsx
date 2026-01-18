"use client";

const testimonials = [
  {
    name: "Rahim",
    role: "Verified User",
    feedback:
      "I can easily browse items and check details without any hassle. The login system is simple and secure!",
  },
  {
    name: "Fatema",
    role: "Regular User",
    feedback:
      "Adding my own items was super easy. The interface is clean and very intuitive.",
  },
  {
    name: "Sabbir",
    role: "Active User",
    feedback:
      "I love the way items are displayed. It’s fast, smooth, and really professional-looking.",
  },
];

export default function Testimonials() {
  return (
    <section className="w-full bg-[#1B3C53] py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 text-center">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-[#D2C1B6] mb-14">
          What Users Say
        </h2>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-[#234C6A] rounded-xl p-6 shadow-md hover:shadow-xl transition"
            >
              <p className="text-gray-200 mb-4">"{t.feedback}"</p>
              <h3 className="text-xl font-semibold text-white">{t.name}</h3>
              <p className="text-yellow-300 text-sm">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
