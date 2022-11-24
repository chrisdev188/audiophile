import { useState } from "react";
import styled from "styled-components";
import Button from "../UI/Button/Button";

const StyledCounter = styled.div`
  background-color: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.card};
  padding: 1rem;
  display: inline-flex;
  justify-content: space-between;
  gap: 1.5rem;
  .minus,
  .plus,
  .number {
    display: grid;
    place-items: center;
    font-size: 13px;
    width: 1rem;
    height: 1.125rem;
  }
  .minus,
  .plus {
    &:disabled {
      pointer-events: none;
    }
    &:hover {
      color: ${({ theme }) => theme.colors.accent};
    }
  }
`;

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
