import Link from "next/link";

export default function ItemCard({ item }) {
  return (
    <div className="bg-[#234C6A] rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      {/* Fixed-size professional image */}
      <div className="w-full h-40 mb-4 rounded-lg overflow-hidden bg-[#1B3C53]">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-white mb-2">{item.name}</h3>

      {/* Description */}
      <p className="text-sm text-[#D2C1B6] mb-4 line-clamp-3">
        {item.description}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <span className="font-semibold text-yellow-300">৳ {item.price}</span>
        <Link
          href={`/items/${item.id}`}
          className="text-sm font-medium text-[#D2C1B6] hover:text-white transition"
        >
          View Details →
        </Link>
      </div>
    </div>
  );
}
