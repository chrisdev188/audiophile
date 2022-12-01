import { useState } from "react";

const useCounterCrement = (initialValue: number) => {
  const [count, setCount] = useState(initialValue);
  const handleIncrease = () => {
    setCount((prev) => prev + 1);
  };
  const handleDecrease = () => {
    setCount((prev) => prev - 1);
  };
  const handleUpdate = (newValue: number) => {
    setCount(newValue);
  };
  return [count, handleIncrease, handleDecrease, handleUpdate];
};
export default useCounterCrement;
