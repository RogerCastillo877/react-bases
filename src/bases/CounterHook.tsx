import { useEffect, useRef, useState } from "react";
import { useCounter } from '../hooks/useCounter';


const MAXIMUN_COUNT = 10;

export const CounterHook = () => {

  const { counter, counterElement, handleClick } = useCounter();

  return (
    <>
      <h2>Counter Hook:</h2>
      <h3 ref={counterElement}>{counter}</h3>
      <button onClick={handleClick}>+1</button>
    </>
  );
};

