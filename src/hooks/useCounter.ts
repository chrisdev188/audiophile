import React, { useState } from "react";

type UseCounterOutput = {
  count: number;
  handleIncrease: () => void;
  handleDecrease: () => void;
  handleReset: () => void;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

const useCounter = (initialValue?: number): UseCounterOutput => {
  const [count, setCount] = useState(initialValue || 0);
  const handleIncrease = () => {
    setCount((prev) => prev + 1);
  };
  const handleDecrease = () => {
    setCount((prev) => prev - 1);
  };
  const handleReset = () => {
    setCount(initialValue || 0);
  };
  return {
    count,
    handleIncrease,
    handleDecrease,
    handleReset,
    setCount,
  };
};
export default useCounter;
