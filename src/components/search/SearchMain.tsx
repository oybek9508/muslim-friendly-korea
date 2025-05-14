import React, { useEffect, useRef, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { PiLineVerticalThin } from "react-icons/pi";
import { mosquesByProvince } from "../../data/mosques-by-province";

const SearchMain = () => {
  const [open, setOpen] = useState(false);
  const [clicked, setClicked] = useState("");
  const [onButtonHover, setOnButtonHover] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState("Search destinations");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
      setClicked("");
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="w-full bg-white py-6 px-4 md:px-12 flex justify-center border-b-2 border-[#E5E7EB]">
      <div
        className={`${
          clicked === "where-area" || clicked === "search-area"
            ? "bg-[#dfe0e2]"
            : "bg-white"
        } w-full max-w-3xl h-[64px] flex items-center   shadow-md border-1 border-[#E5E7EB] rounded-4xl`}
      >
        {/* Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => {
              setOpen(!open);
              setClicked("where-area");
            }}
            onMouseEnter={() => {
              setOnButtonHover(true);
            }}
            onMouseLeave={() => {
              setOnButtonHover(false);
            }}
            className={`${
              clicked === "where-area" && "border-1 border-[#E5E7EB]"
            } w-[200px] flex items-center text-[#111827] ${
              clicked !== "where-area" && "hover:bg-[#dfe0e2]"
            } rounded-4xl px-8 py-2 font-medium ${
              clicked !== "search-area" && "bg-white"
            } h-[62px] transition duration-300`}
          >
            <div className="flex flex-col justify-center items-start  ">
              <p className="font-bold text-sm">Where</p>
              <span className="text-[#888f95] text-sm">{selectedPlace}</span>
            </div>
            {/* <FaChevronDown size={18} /> */}
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

        <PiLineVerticalThin
          size={24}
          className={`text-[#888f95] ${
            onButtonHover || clicked ? "invisible" : "visible"
          }`}
        />

        <div
          className={`${
            clicked === "search-area" && "border-1 border-[#E5E7EB]"
          } ${clicked !== "search-area" && "hover:bg-[#dfe0e2]"}
          ${clicked !== "where-area" && "bg-white"}
          px-4 flex flex-1 h-[62px] items-center justify-between rounded-4xl`}
          onClick={() => {
            setClicked("search-area");
          }}
          onMouseEnter={() => {
            setOnButtonHover(true);
          }}
          onMouseLeave={() => {
            setOnButtonHover(false);
          }}
        >
          <input
            type="text"
            onFocus={() => {
              console.log("focused");
              setOpen(true);
            }}
            onBlur={() => {
              console.log("blurred");
              setOpen(false);
            }}
            placeholder="Find halal food, mosques..."
            className={` outline-none text-[#888f95]  ${
              clicked === "where-area" && "bg-[#dfe0e2]"
            } flex flex-1 px-3 py-2 rounded-xl placeholder:text-[#6B7280] group-hover:bg-[#dfe0e2]`}
          />

          {/* Search Button */}
          <button className=" min-w-10 h-10 px-4 bg-[#10B981] text-white rounded-full flex items-center justify-center hover:bg-[#0e9e6d] transition duration-300">
            <FiSearch size={18} /> {open && "Search"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchMain;
