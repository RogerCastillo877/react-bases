import { useReducer } from "react";



export const CounterReducerComponent = () => {

  const [state, dispatch] = useReducer(first, second, third)

  const handleClick = () => {
    setCounter(prev => prev + 1)
  }

  return (
    <>
      <h2>Counter Reducer: {counter}</h2>
      <button onClick={handleClick}>+1</button>
    </>
  );
};

