import { useState } from "react";

const useCounter = (defaultValue = 0) => {
  const [counter, setCounter] = useState(defaultValue);

  // increment counter
  const increment = () => {
    setCounter((prevState) => prevState + 1);
  };

  // decrement counter
  const decrement = () => {
    setCounter((prevState) => prevState - 1);
  };

  return { counter, increment, decrement };
};

export default useCounter;
