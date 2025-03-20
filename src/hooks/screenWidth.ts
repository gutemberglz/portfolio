import { useEffect, useState } from 'react';

export function useScreenWidth() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  function handleResize() {
    setScreenWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    screenWidth,
  };
}
