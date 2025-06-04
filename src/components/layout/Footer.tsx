import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#111827] text-gray-300 pt-12 pb-8 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo & Description */}
        <div>
          <h3 className="text-2xl font-bold text-emerald-400">HalalKorea</h3>
          <p className="mt-4 text-sm text-gray-400">
            Discover verified halal places, prayer spaces, and Muslim-friendly
            cultural spots all across South Korea.
          </p>
        </div>

        {/* Quick Navigation */}
        <div>
          <h4 className="text-lg font-semibold text-gray-100 mb-4">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-emerald-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/explore"
                className="hover:text-emerald-400 transition"
              >
                Explore
              </Link>
            </li>
            <li>
              <Link
                href="/submit-location"
                className="hover:text-emerald-400 transition"
              >
                Submit a Location
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-emerald-400 transition">
                About Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact + Socials */}
        <div>
          <h4 className="text-lg font-semibold text-gray-100 mb-4">
            Connect with Us
          </h4>
          <div className="flex space-x-4 mb-4">
            <a href="#" className="hover:text-emerald-400 transition">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="#" className="hover:text-emerald-400 transition">
              <i className="fab fa-instagram" />
            </a>
            <a href="#" className="hover:text-emerald-400 transition">
              <i className="fab fa-twitter" />
            </a>
          </div>
          <p className="text-sm text-gray-400">📧 contact@halalkorea.kr</p>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} HalalKorea. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
