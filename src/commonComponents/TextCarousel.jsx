import { useEffect, useState } from "react";

export default function TextCarousel({ inputTextArray }) {
  const [activeItemIndex, setActiveItem] = useState(0);

  const activeText = inputTextArray[activeItemIndex];

  useEffect(() => {
    function nextItem() {
      setActiveItem((activeItemIndex + 1) % inputTextArray.length);
    }

    const interval = setInterval(nextItem, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [activeItemIndex, inputTextArray]);

  return (
    <div className="text-carousel flex overflow-hidden">
      {inputTextArray.map((input, index) => (
        <div
          key={`carousel-${index}`}
          className={`absolute w-full transition duration-1000 ease-in-out ${
            activeItemIndex === index
              ? "opacity-100"
              : "translate-x-1/4 opacity-0"
          }`}
        >
          {input.split("").map((char, idx) => (
            <span
              key={`${activeText}-${idx}`}
            >
              {char}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}
