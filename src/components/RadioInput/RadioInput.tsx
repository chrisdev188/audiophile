import styled from "styled-components";

interface IRadioInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const StyledRadioInput = styled.div<IRadioInputProps>`
  font-family: Manrope, sans-serif;
  position: relative;
  cursor: pointer;

  & > label {
    display: block;
    width: 100%;
    padding: 1rem 2rem 1rem 3.5rem;
    border-radius: var(--round-md);
    border: 1px solid gray;
    font-size: 14px;
    font-weight: bold;
    cursor: inherit;
  }
  input[type="radio"] {
    appearance: none;
    background-color: transparent;
    width: 1.15rem;
    height: 1.15rem;
    border-radius: 50%;
    border: 1px solid gray;
    position: absolute;
    top: 50%;
    left: 1.15rem;
    transform: translateY(-50%);
    display: grid;
    place-content: center;
    cursor: inherit;
  }
  input[type="radio"]::before {
    content: "";
    width: 0.65rem;
    height: 0.65rem;
    border-radius: 50%;
    box-shadow: inset 2rem 2rem var(--clr-secondary);
    transform: scale(0);
    transition: all 0.3s ease;
  }
  input[type="radio"]:checked::before {
    transform: scale(1);
  }
  input[type="radio"]:checked + label {
    border-color: var(--clr-secondary);
  }
`;

const RadioInput: React.FC<IRadioInputProps> = ({
  label = "default",
  ...radioProps
}) => {
  return (
    <StyledRadioInput>
      <input type="radio" {...radioProps} />
      <label htmlFor={radioProps.id}>{label}</label>
    </StyledRadioInput>
  );
};

export default RadioInput;
