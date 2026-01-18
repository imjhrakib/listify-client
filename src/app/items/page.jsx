import ItemCard from "../components/itemCard/ItemCard";

export default async function ItemsPage() {
  const res = await fetch("http://localhost:5000/items", {
    cache: "no-store",
  });

  const items = await res.json();

  return (
    <section className="min-h-screen bg-[#1B3C53] py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
        <div className="mb-14 text-center">
          <h1 className="text-4xl font-bold text-[#D2C1B6] mb-4">All Items</h1>
          <p className="text-[#D2C1B6]/80 max-w-2xl mx-auto text-sm">
            Browse all available list items. Click any item to view full
            details.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
