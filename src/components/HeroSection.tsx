import React from "react"; // adjust the path as needed
import SearchMain from "./search/SearchMain";
import useTypewriter from "../hooks/useTypewriter";
import { getImageProps } from "next/image";

function getBackgroundImage(srcSet = "") {
  const imageSet = srcSet
    .split(", ")
    .map((str) => {
      const [url, dpi] = str.split(" ");
      return `url("${url}") ${dpi}`;
    })
    .join(", ");
  return `image-set(${imageSet})`;
}

const HeroSection = () => {
  const {
    props: { srcSet },
  } = getImageProps({
    alt: "",
    width: 128,
    height: 128,
    src: "/halal-background.jpg",
  });
  const backgroundImage = getBackgroundImage(srcSet);
  const style = { backgroundImage };

  const subtitle =
    "Moosques, Halal Restaurants, and Cultural Sites — Verified and Updated";
  const typedSubtitle = useTypewriter(subtitle, 60);

  return (
    <div
      className="relative h-[600px] w-full bg-cover bg-center bg-no-repeat"
      style={style}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#10B981] bg-opacity-50 z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-white px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Find Halal Places Across South Korea
        </h1>
        <p className="text-md md:text-lg mb-8">{typedSubtitle}</p>

        <div className="w-full max-w-4xl">
          <SearchMain />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
