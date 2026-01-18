"use client";

import { useParams } from "next/navigation";
import Link from "next/link";

const items = [
  {
    id: "1",
    name: "Laptop Stand",
    description:
      "Ergonomic stand designed to improve posture and reduce neck strain during long work sessions.",
    price: "$25",
    details:
      "Made from durable aluminum with adjustable height. Ideal for home and office setups.",
  },
  {
    id: "2",
    name: "Wireless Keyboard",
    description:
      "Smooth typing experience with quiet keys and long-lasting battery.",
    price: "$40",
    details:
      "Bluetooth connectivity, compact layout, and compatible with multiple devices.",
  },
];

export default function ItemDetailsPage() {
  const { id } = useParams();
  const item = items.find((i) => i.id === id);

  if (!item) {
    return (
      <div className="min-h-screen bg-[#1B3C53] flex items-center justify-center text-[#D2C1B6]">
        Item not found
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-[#1B3C53] py-20">
      <div className="max-w-5xl mx-auto px-6 sm:px-12">
        {/* Back link */}
        <Link
          href="/items"
          className="text-sm text-[#D2C1B6] hover:text-white mb-8 inline-block"
        >
          ← Back to Items
        </Link>

        {/* Content Card */}
        <div className="bg-[#234C6A] rounded-2xl p-8 shadow-lg">
          {/* Fake Image */}
          <div className="h-64 mb-6 rounded-lg bg-[#1B3C53] flex items-center justify-center text-[#D2C1B6]">
            Item Preview
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold text-white mb-3">{item.name}</h1>

          {/* Price */}
          <p className="text-xl font-semibold text-yellow-300 mb-4">
            {item.price}
          </p>

          {/* Description */}
          <p className="text-[#D2C1B6] mb-6 leading-relaxed">
            {item.description}
          </p>

          {/* Extra Details */}
          <div className="border-t border-[#1B3C53] pt-6">
            <h3 className="text-lg font-semibold text-white mb-2">Details</h3>
            <p className="text-[#D2C1B6] text-sm leading-relaxed">
              {item.details}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
