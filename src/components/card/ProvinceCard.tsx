// components/ProvinceCard.tsx
type ProvinceCardProps = {
  name: string;
  imageUrl: string;
  description: string;
};

export default function ProvinceCard({
  name,
  imageUrl,
  description,
}: ProvinceCardProps) {
  return (
    <div className="rounded-2xl overflow-hidden shadow-md bg-white transition-transform hover:scale-[1.02] cursor-pointer">
      <div
        className="h-48 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-sm text-gray-600 mt-1">{description}</p>
        <button className="mt-3 text-emerald-600 font-medium hover:underline">
          Explore →
        </button>
      </div>
    </div>
  );
}
