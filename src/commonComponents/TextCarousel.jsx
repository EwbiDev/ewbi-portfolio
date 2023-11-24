import { useEffect, useState } from "react";

export default function TextCarousel({ inputTextArray }) {
  const [activeItemIndex, setActiveItem] = useState(0);
  const [glitch, setGlitch] = useState(false);
  const [glitchIndex, setGlitchIndex] = useState(0);

  const activeText = inputTextArray[activeItemIndex];
  const glitchColors = ["text-red-400"];

  useEffect(() => {
    function randGlitchIdx() {
      setGlitchIndex(Math.floor(Math.random() * activeText.length));
    }

    if (glitch) {
      setTimeout(randGlitchIdx, 50);
    }
  }, [glitchIndex, glitch]);

  useEffect(() => {
    function nextItem() {
      setActiveItem((activeItemIndex + 1) % inputTextArray.length);

      const glitchChance = Math.random() * 10;
      setGlitch(glitchChance < 10);
    }

    setTimeout(nextItem, 5000);
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
              className={`${glitch && idx === glitchIndex && glitchColors[0]}`}
            >
              {char}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}
