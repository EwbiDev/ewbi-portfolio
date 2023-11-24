import { useEffect, useState } from "react";

export default function TextCarousel({ inputTextArray }) {
  const [activeItem, setActiveItem] = useState(0);

  useEffect(() => {
    function nextItem() {
      setActiveItem((activeItem + 1) % inputTextArray.length);
    }

    setTimeout(nextItem, 5000);
  }, [activeItem, inputTextArray]);

  return (
    <div className="text-carousel flex overflow-hidden">
      {inputTextArray.map((input, index) => (
        <div
          key={`carousel-${index}`}
          className={`absolute w-full transition duration-1000 ease-in-out ${
            activeItem === index ? "opacity-100" : "translate-x-1/4 opacity-0"
          }`}
        >
          {input}
        </div>
      ))}
    </div>
  );
}
