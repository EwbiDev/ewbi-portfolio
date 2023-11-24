import { useEffect, useState } from "react";

export default function TextCarousel({ inputTextArray }) {
  const [activeItemIndex, setActiveItem] = useState(0);
  const [glitch, setGlitch] = useState(false);
  const [glitchIndex, setGlitchIndex] = useState(0);

  const activeText = inputTextArray[activeItemIndex];

  useEffect(() => {
    function randGlitchIdx() {
      setGlitchIndex(Math.floor(Math.random() * activeText.length));
    }

    if (glitch) {
      const interval = setInterval(randGlitchIdx, 50);
      return () => {
        clearInterval(interval);
      };
    }
  }, [glitchIndex, glitch]);

  useEffect(() => {
    function nextItem() {
      setActiveItem((activeItemIndex + 1) % inputTextArray.length);
    }

    const interval = setInterval(nextItem, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [activeItemIndex, inputTextArray]);

  useEffect(() => {
    const countDown = glitch ? 1500 : 15000;
    setTimeout(() => setGlitch(!glitch), countDown);
  }, [glitch]);

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
              className={`${glitch && idx === glitchIndex && randColor()}`}
            >
              {char}
            </span>
          ))}
        </div>
      ))}
    </div>
  );

  function randColor() {
    const glitchColors = [
      "text-red-700",
      "text-blue-700",
      "text-green-700",
      "text-yellow-700",
      "text-purple-700",
      "text-pink-700",
      "text-indigo-700",
      "text-cyan-700",
      "text-gray-700",
      "text-orange-700",
    ];
    
    const randNum = Math.floor(Math.random() * glitchColors.length);
    return glitchColors[randNum];
  }
}
