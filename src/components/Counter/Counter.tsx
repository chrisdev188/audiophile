import { useCallback, useState } from "react";
import { useCounter } from "../../hooks";
import StyledCounter from "./Counter.styles";

interface ICounterProps {
  start?: number;
  handleIncrease?: (e: React.MouseEvent) => void;
  handleDecrease?: (e: React.MouseEvent) => void;
  notAllowedLessThanOne?: boolean;
}

const Counter: React.FunctionComponent<ICounterProps> = ({
  start = 1,
  handleIncrease,
  handleDecrease,
  notAllowedLessThanOne,
  ...otherProps
}) => {
  return (
    <StyledCounter {...otherProps}>
      <button
        className="decrement-btn"
        onClick={handleDecrease}
        disabled={notAllowedLessThanOne && start <= 1}
      >
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
