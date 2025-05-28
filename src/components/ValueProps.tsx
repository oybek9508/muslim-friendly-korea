const values = [
  { icon: "✅", title: "Verified Halal Listings" },
  { icon: "📍", title: "Localized by Province" },
  { icon: "🕌", title: "Prayer Facilities Info" },
  { icon: "🔍", title: "Multi-language Available" },
  { icon: "🛐", title: "Muslim Travelers' Needs" },
];

export default function ValueProps() {
  return (
    <section className="bg-white py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
          How This Helps You
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          {values.map((val, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 bg-gray-50 p-5 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <div className="text-2xl">{val.icon}</div>
              <div className="text-left">
                <p className="text-gray-800 font-medium">{val.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
