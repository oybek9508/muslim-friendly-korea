"use client";
import { useState, useEffect } from "react";
import { FiGlobe } from "react-icons/fi";
import {
  FaHome,
  FaMosque,
  FaUtensils,
  FaHeart,
  FaInfoCircle,
  FaQuestionCircle,
  FaSignInAlt,
  FaUserPlus,
} from "react-icons/fa";
import Link from "next/link";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`h-[72px] w-full bg-white shadow flex items-center px-6 justify-between fixed transition-all duration-500 ease-in-out ${
        isVisible ? "top-0" : "-top-[72px]" // hide the header when scrolling down
      }`}
    >
      {/* Left: Logo */}
      <div className="text-2xl font-extrabold text-emerald-600 tracking-tight">
        Ummah<span className="text-yellow-500">Korea</span>
      </div>

      {/* Right: Nav Links */}
      <nav className="space-x-6 text-gray-700 font-medium flex items-center">
        <Link
          href="/"
          className="flex items-center gap-1 hover:text-emerald-600"
        >
          <FaHome className="text-emerald-500" /> Home
        </Link>
        <Link
          href="/mosques"
          className="flex items-center gap-1 hover:text-emerald-600"
        >
          <FaMosque className="text-yellow-400" /> Nearby Mosques
        </Link>
        <Link
          href="/eat_halal"
          className="flex items-center gap-1 hover:text-emerald-600"
        >
          <FaUtensils className="text-orange-400" /> Eat Halal
        </Link>
        <Link
          href="/favorites"
          className="flex items-center gap-1 hover:text-emerald-600"
        >
          <FaHeart className="text-pink-500" /> Favorites
        </Link>
        <Link
          href="/mission"
          className="flex items-center gap-1 hover:text-emerald-600"
        >
          <FaInfoCircle className="text-blue-500" /> Our Mission
        </Link>
        <Link
          href="/help"
          className="flex items-center gap-1 hover:text-emerald-600"
        >
          <FaQuestionCircle className="text-indigo-500" /> Help / Contact
        </Link>
        <Link
          href="/login"
          className="flex items-center gap-1 hover:text-emerald-600"
        >
          <FaSignInAlt className="text-gray-600" /> Log In
        </Link>
        <Link
          href="/signup"
          className="flex items-center gap-1 hover:text-emerald-600"
        >
          <FaUserPlus className="text-gray-600" /> Sign Up
        </Link>
        <div className="w-[30px] h-[30px]  rounded-full bg-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-300 transition-colors">
          <FiGlobe size={20} className="text-gray-700" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
