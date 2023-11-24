import { useEffect, useState } from "react";
import TypeWriter from "./TypeWriter";
import TextCarousel from "./TextCarousel";

export default function Title() {
  const [carouselArray, setCarouselArray] = useState([
    "Eduard Bissell",
    "Software Developer",
    "Work in progress",
  ]);

  return (
    <div className="flex h-full grow flex-col justify-center text-5xl">
      <h1>I am</h1>
      <h2 className="carousel relative">
        <TextCarousel inputTextArray={carouselArray} />
      </h2>
    </div>
  );
}
