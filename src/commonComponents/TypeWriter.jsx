import { useEffect, useState } from "react";

export default function TypeWriter({ inputText }) {
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    function addToText() {
      setTypedText(typedText + inputText[typedText.length]);
    }

    if (typedText.length < inputText.length) {
      setTimeout(addToText, 60)
    }
  }, [typedText]);

  useEffect(() => {
    setTypedText("")
  }, [inputText])

  return <>{typedText}</>;
}
