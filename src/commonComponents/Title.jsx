import { useEffect, useState } from "react";

export default function Title() {
  const [carouselArray, setCarouselArray] = useState([
    "Eduard Bissell",
    "Software Developer",
  ]);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const carouselText = carouselArray[carouselIndex];

  useEffect(() => {
    function pickCarouselItem() {
      setCarouselIndex((carouselIndex + 1) % carouselArray.length);
    }

    setTimeout(pickCarouselItem, 5000);
  }, [carouselIndex, carouselArray]);

  return (
    <div>
      <h1>I am</h1>
      <h2 className="carousel">{carouselText}</h2>
    </div>
  );
}
