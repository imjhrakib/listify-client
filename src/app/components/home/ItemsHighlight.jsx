"use client";

import Link from "next/link";
import ItemCard from "../itemCard/ItemCard";

const items = [
  {
    id: "1",
    name: "Laptop Stand",
    description: "Ergonomic stand for better workspace setup.",
    price: "$25",
  },
  {
    id: "2",
    name: "Wireless Keyboard",
    description: "Smooth typing with long battery life.",
    price: "$40",
  },
  {
    id: "3",
    name: "Bluetooth Speaker",
    description: "Portable speaker with clear sound.",
    price: "$55",
  },
  {
    id: "4",
    name: "Smart Watch",
    description: "Track health and daily activities.",
    price: "$90",
  },
];

export default function ItemsHighlights() {
  return (
    <section className="w-full bg-[#1B3C53] py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center text-[#D2C1B6] mb-12">
          Highlighted Items
        </h2>

        {/* Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => (
            // <div
            //   key={index}
            //   className="bg-[#234C6A] rounded-xl p-6 shadow-md hover:shadow-xl transition"
            // >
            //   {/* Fake Image Box */}
            //   <div className="h-40 mb-4 rounded bg-[#1B3C53] flex items-center justify-center text-[#D2C1B6]">
            //     Item Image
            //   </div>

            //   <h3 className="text-xl font-semibold text-white mb-2">
            //     {item.name}
            //   </h3>

            //   <p className="text-sm text-[#D2C1B6] mb-4">{item.description}</p>

            //   <p className="font-bold text-yellow-300">{item.price}</p>
            // </div>
            <ItemCard key={index} item={item}></ItemCard>
          ))}
        </div>
      </div>
      <Link
        href="/items"
        className="mt-14 mx-auto block w-fit rounded-full border border-[#D2C1B6] px-8 py-3 text-sm font-medium text-[#D2C1B6] transition hover:bg-[#D2C1B6] hover:text-[#1B3C53]"
      >
        View All Items →
      </Link>
    </section>
  );
}
