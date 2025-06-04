const values = [
  { icon: "✅", title: "Verified Halal Listings" },
  { icon: "📍", title: "Localized by Province" },
  { icon: "🕌", title: "Prayer Facilities Info" },
  { icon: "🔍", title: "Multi-language Available" },
  { icon: "🛐", title: "Muslim Travelers' Needs" },
];

export default function ValueProps() {
  return (
    <section className="bg-[#F9FAFB] py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-emerald-600">
          How This Helps You
        </h2>
        <p className="mt-2 text-slate-600 text-base md:text-lg">
          Designed with the needs of Muslim travelers in mind
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
          {values.map((val, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition border border-gray-100 p-6 flex gap-4 items-center"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-2xl">
                  {val.icon}
                </div>
              </div>
              <div className="text-left">
                <p className="text-lg font-semibold text-gray-800">
                  {val.title}
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  {/* Optional subtext if needed */}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
