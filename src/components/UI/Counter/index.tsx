import { StyledCounter } from "./styles";

interface CounterProps {
  number: number;
  handleIncrease: () => void;
  handleDecrease: () => void;
}

const Counter: React.FunctionComponent<CounterProps> = ({
  number,
  handleIncrease,
  handleDecrease,
}) => {
  return (
    <StyledCounter>
      <button
        className="minus"
        onClick={handleDecrease}
        disabled={number <= 1 ? true : false}
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
