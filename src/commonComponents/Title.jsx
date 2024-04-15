import { useState } from "react";
import TextCarousel from "./TextCarousel";

export default function Title() {
  const [carouselArray, setCarouselArray] = useState([
    "Eduard Bissell",
    "Full Stack Developer",
  ]);

  return (
    <div className="m-4 flex h-full grow flex-col justify-center text-5xl">
      <h1>Hi, from Ewbi!</h1>
      <h2 className="carousel relative">
        <TextCarousel inputTextArray={carouselArray} />
      </h2>
    </div>
  );
}
