import { useState } from "react";
import TextCarousel from "./TextCarousel";

export default function Title() {
  const [carouselArray, setCarouselArray] = useState([
    "Eduard Bissell",
    "Full Stack Developer",
  ]);

  return (
    <div className="m-4 flex h-full grow flex-col pt-64 text-5xl lg:justify-center lg:pt-0">
      <h1>Hi, from Ewbi!</h1>
      <h2 className="carousel relative">
        <TextCarousel inputTextArray={carouselArray} />
      </h2>
    </div>
  );
}
