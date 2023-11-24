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
    const countDown = glitch ? 1500 : 13500;
    const timeout = setTimeout(() => setGlitch(!glitch), countDown);

    return () => {
      clearTimeout(timeout)
    }
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
      "text-slate-400",
      "text-red-400",
      "text-orange-400",
      "text-amber-400",
      "text-yellow-400",
      "text-lime-400",
      "text-green-400",
      "text-emerald-400",
      "text-teal-400",
      "text-cyan-400",
      "text-sky-400",
      "text-blue-400",
      "text-indigo-400",
      "text-violet-400",
      "text-purple-400",
      "text-fuchsia-400",
      "text-pink-400",
      "text-rose-400",
    ];

    const randNum = Math.floor(Math.random() * glitchColors.length);
    return glitchColors[randNum];
  }
}
