"use client";

const features = [
  {
    name: "Easy Browsing",
    description: "Browse all available items quickly and efficiently.",
    icon: "🛒",
  },
  {
    name: "Secure Login",
    description: "Login safely with cookies and protect your account.",
    icon: "🔒",
  },
  {
    name: "Quick Details",
    description: "View full item details before making decisions.",
    icon: "📄",
  },
  {
    name: "Add Your Items",
    description: "Easily add new items if you are logged in.",
    icon: "➕",
  },
];

export default function Features() {
  return (
    <section className="bg-[#1B3C53] text-white py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 text-center">
        {/* Section Title */}
        <h2 className="text-4xl font-extrabold mb-12">Features</h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <div
              key={i}
              className="p-6 bg-[#234C6A] rounded-xl shadow-lg hover:scale-105 transition-transform"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{feature.name}</h3>
              <p className="text-gray-200">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
