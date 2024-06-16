'use client';

import React from 'react';

type TypewriterProps = {
  texts: string[];
  speed: number;
};

const Typewriter = ({ texts, speed }: TypewriterProps) => {
  const [currentTextIndex, setCurrentTextIndex] = React.useState<number>(0);
  const [displayText, setDisplayText] = React.useState<string>('');
  const [currentIndex, setCurrentIndex] = React.useState<number>(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (texts)
        if (currentIndex < texts[currentTextIndex].length) {
          setDisplayText(
            (prevText) => prevText + texts[currentTextIndex][currentIndex],
          );
          setCurrentIndex((prevIndex) => prevIndex + 1);
        } else {
          setCurrentIndex(0);
          if (currentTextIndex === texts.length - 1) setCurrentTextIndex(0);
          else setCurrentTextIndex((prevIndex) => prevIndex + 1);

          setDisplayText('');
        }
    }, speed);

    return () => clearInterval(interval);
  }, [currentIndex, currentTextIndex, speed, texts]);

  return (
    <span>
      {displayText}
      <span className="text-[#ff014f]">|</span>
    </span>
  );
};

export default Typewriter;
