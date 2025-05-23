// components/TopDestinationsSection.tsx
import Link from "next/link";
import ItemCard from "../card/ItemCard";

type Data = {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
};

type TopDestinationsSectionProps = {
  data: Data[];
};

export default function TopDestinationsSection({
  data,
}: TopDestinationsSectionProps) {
  return (
    <section className="px-6 md:px-12 py-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Top Destinations</h2>
        <Link
          href="/destinations"
          className="text-emerald-600 hover:underline flex items-center gap-1"
        >
          View All <span className="text-xl">→</span>
        </Link>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data.map((item: Data) => (
          <ItemCard
            key={item.id}
            name={item.name}
            imageUrl={item.imageUrl}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
}
