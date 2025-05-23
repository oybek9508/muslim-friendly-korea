import { useEffect, useState } from "react";

const useTypewriter = (text: string, speed = 50) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    if (!text) return;

    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text[index]);
      index++;

      if (index === text.length - 1) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return displayedText;
};

export default useTypewriter;
