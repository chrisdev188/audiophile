import { useState } from "react";
import { StyledCounter } from "./styles";

interface CounterProps {}

const Counter: React.FunctionComponent<CounterProps> = (props) => {
  const [count, setCount] = useState<number>(1);
  const lowestValueAllowed = 1;
  const handleCount = (direction: "decrement" | "increment") => {
    if (direction === "decrement") {
      setCount((prevCount) => prevCount - 1);
    }
    if (direction === "increment") {
      setCount((prevCount) => prevCount + 1);
    }
  };
  return (
    <StyledCounter>
      <button
        className="minus"
        disabled={count === lowestValueAllowed ? true : false}
        onClick={() => handleCount("decrement")}
      >
        {"\u002D"}
      </button>
      <div className="number">{count}</div>
      <button className="plus" onClick={() => handleCount("increment")}>
        {"\u002B"}
      </button>
    </StyledCounter>
  );
};

export default Counter;
