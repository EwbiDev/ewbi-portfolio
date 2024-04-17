import { createRef, useEffect } from "react";

export default function OutSideClickHandler({
  onOutSideClick,
  childSelector,
  children,
}) {
  const ref = createRef();

  useEffect(() => {
    const elements = document.querySelectorAll(childSelector);

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };

    function handleOutsideClick(event) {
      const elementArray = Array.from(elements);
      if (elementArray.every((element) => !element.contains(event.target))) {
        onOutSideClick();
      }
    }
  });

  return (
    <div className="hello h-min w-min" ref={ref}>
      {children}
    </div>
  );
}
