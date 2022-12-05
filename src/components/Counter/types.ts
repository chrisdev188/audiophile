export interface CounterProps {
  number?: number;
  handleIncrease?: () => void;
  handleDecrease?: () => void;
  allowDecrement?: boolean;
}
