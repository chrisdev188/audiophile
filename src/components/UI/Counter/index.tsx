import { StyledCounter } from "./styles";
import { CounterProps } from "./types";

const Counter: React.FC<CounterProps> = ({
  number,
  handleIncrease,
  handleDecrease,
  allowDecrement = true,
}) => {
  return (
    <StyledCounter>
      <button
        className="minus"
        onClick={handleDecrease}
        disabled={!allowDecrement}
      >
        {"\u002D"}
      </button>
      <div className="number">{number}</div>
      <button className="plus" onClick={handleIncrease}>
        {"\u002B"}
      </button>
    </StyledCounter>
  );
};

export default Counter;
