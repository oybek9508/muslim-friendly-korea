import React, { useEffect, useRef, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { FaChevronDown } from "react-icons/fa";
import { mosquesByProvince } from "../../data/mosques-by-province";

const SearchMain = () => {
  const [open, setOpen] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState("Search Mosques");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="w-full bg-white py-6 px-4 md:px-12 flex justify-center border-b-2 border-[#E5E7EB] rounded-2xl">
      <div className="w-full max-w-3xl bg-[#F3F4F6]  flex items-center px-4 py-2 space-x-4 shadow-md">
        {/* Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center space-x-2 text-[#111827] font-medium bg-white px-4 py-2 rounded-xl  transition duration-300"
          >
            <span>{selectedPlace}</span>
            <FaChevronDown size={18} />
          </button>
          {open && (
            <ul className="absolute left-0 top-full mt-2 bg-white rounded-xl shadow-lg z-10 w-64 max-h-120 overflow-y-auto">
              {mosquesByProvince.map((place) => {
                const Icon = place.icon;
                return (
                  <li
                    key={place.province}
                    onClick={() => {
                      setSelectedPlace(place.province);
                      setOpen(false);
                    }}
                    className="px-4 py-3 hover:bg-[#E5E7EB] cursor-pointer"
                  >
                    <div className="flex space-x-3 items-start">
                      <div className="pt-1">
                        {" "}
                        <Icon className={`text-[${place.iconColorCode}]`} />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-[#111827]">
                          {place.province}, South Korea
                        </div>
                        <div className="text-xs text-[#6B7280]">
                          {place.overview}
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {/* Search Input */}
        <input
          type="text"
          placeholder="Find halal food, mosques..."
          className="flex-1 outline-none text-[#1E293B] bg-white px-3 py-2 rounded-xl placeholder:text-[#6B7280]"
        />

        {/* Search Button */}
        <button className="w-10 h-10 bg-[#10B981] text-white rounded-full flex items-center justify-center hover:bg-[#0e9e6d] transition duration-300">
          <FiSearch size={18} />
        </button>
      </div>
    </div>
  );
};

export default SearchMain;
