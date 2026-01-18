"use client";

const steps = [
  {
    step: "01",
    title: "Browse Items",
    description:
      "Visit the Items page to see all available items. You don’t need to log in for this.",
  },
  {
    step: "02",
    title: "View Details",
    description:
      "Click on any item to see full details including description, price, and other properties.",
  },
  {
    step: "03",
    title: "Login Securely",
    description:
      "Use the Login page with your credentials to access protected features like adding items.",
  },
  {
    step: "04",
    title: "Add New Items",
    description:
      "Once logged in, you can add your own items to the list with name, price, description, and image.",
  },
];

export default function HowItWorks() {
  return (
    <section className="w-full bg-[#1B3C53] py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-center text-[#D2C1B6] mb-14">
          How It Works
        </h2>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <div
              key={index}
              className="bg-[#234C6A] rounded-xl p-6 shadow-md hover:shadow-xl transition"
            >
              {/* Step Number */}
              <div className="text-3xl font-extrabold text-yellow-300 mb-4">
                {item.step}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-white mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-[#D2C1B6]">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
