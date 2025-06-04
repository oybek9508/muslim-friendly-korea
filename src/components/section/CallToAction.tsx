import Link from "next/link";
import React from "react";

const CallToAction = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-20 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">
          🙋 Share Your Favorite Halal Place
        </h2>
        <p className="text-lg md:text-xl text-[#6B7280] mb-8">
          Know a great halal restaurant or prayer space? Help others by sharing
          it with the community.
        </p>
        <Link
          href="/submit-location"
          className="inline-block bg-[#10B981] text-white font-semibold text-lg px-6 py-3 rounded-full shadow-md hover:bg-[#0e9e6d] transition"
        >
          Submit a Location
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;
