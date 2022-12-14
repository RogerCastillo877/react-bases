import { useEffect, useRef, useState } from "react";
import { gsap } from 'gsap';

const MAXIMUN_COUNT = 10;

export const CounterEffect = () => {

  const [counter, setCounter] = useState(5);
  const counterElement = useRef<HTMLHeadingElement>(null);

  const handleClick = () => {

    // if (counter >= MAXIMUN_COUNT) return;
    setCounter(prev => Math.min(prev + 1, MAXIMUN_COUNT))
  }

  useEffect(() => {
    if (counter < MAXIMUN_COUNT) return;
    console.log('%cSe llego al máximo', 'color: blue; background-color:orange')

    const tl = gsap.timeline();

    tl.to(counterElement.current, { y: -10, duration: 0.2, ease: 'ease.out' })
      .to(counterElement.current, { y: 0, duration: 1, ease: 'bounce.out' })

    // gsap.to(counterElement.current, { y: -10, duration: 0.2, ease: 'ease.out' }).then(() => {
    //   gsap.to(counterElement.current, { y: 0, duration: 1, ease: 'bounce.out' })
    // })
  }, [counter])


  return (
    <>
      <h2>Counter:</h2>
      <h3 ref={counterElement}>{counter}</h3>
      <button onClick={handleClick}>+1</button>
    </>
  );
};

