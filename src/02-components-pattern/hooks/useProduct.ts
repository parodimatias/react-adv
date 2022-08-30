import { useState } from "react";

export const useProduct = (initialValue: number = 0) => {
  const [counter, setCounter] = useState(initialValue);

  const increaseBy = (value: number) => {
    setCounter((prev) => Math.max(prev + value, 0));
  };
  return { counter, increaseBy };
};
