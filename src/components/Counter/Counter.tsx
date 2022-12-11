import { useCallback, useState } from "react";
import { useCounter } from "../../hooks";
import StyledCounter from "./Counter.styles";

interface ICounterProps {
  start?: number;
  handleIncrease?: () => void;
  handleDecrease?: () => void;
}

const Counter: React.FunctionComponent<ICounterProps> = ({
  start,
  handleIncrease,
  handleDecrease,
  ...otherProps
}) => {
  return (
    <StyledCounter {...otherProps}>
      <button className="decrement-btn" onClick={handleDecrease}>
        -
      </button>
      <div className="number">{start}</div>
      <button className="increment-btn" onClick={handleIncrease}>
        +
      </button>
    </StyledCounter>
  );
};

export default Counter;
