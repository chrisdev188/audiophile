import styled from "styled-components";

interface IFormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  invalid?: boolean;
  errorMessage?: string;
}

const StyledFormInput = styled.div<IFormInputProps>`
  position: relative;
  font-family: Manrope, sans-serif;
  & > input {
    padding: 1rem;
    border-radius: 8px;
    outline: none;
    font-size: 12px;
  }
  & > input::placeholder {
    font-size: 12px;
  }
  & > label {
    position: absolute;
    top: -1.5rem;
    left: 0;
    font-weight: bold;
    font-size: 13px;
    text-transform: capitalize;
  }
  & > .error-message {
    font: inherit;
    position: absolute;
    top: -1.5rem;
    right: 0;
    font-size: 12px;
    text-transform: capitalize;
  }
  & > input {
    border: 1px solid #cfcfcf;
  }
  & > input ~ .error-message {
    display: none;
  }
  & > input:focus,
  & > input.invalid:focus {
    border-color: ${({ theme }) => theme.palette.secondary.main};
  }
  & > input.invalid {
    border-color: ${({ theme }) => theme.palette.error.main};
  }
  & > input.invalid ~ * {
    color: ${({ theme }) => theme.palette.error.main};
    display: block;
  }
`;

const FormInput: React.FunctionComponent<IFormInputProps> = ({
  label,
  type = "text",
  invalid = false,
  errorMessage = "",
  ...otherProps
}) => {
  return (
    <StyledFormInput>
      <input {...otherProps} className={`${invalid ? "invalid" : ""}`} />
      <label htmlFor={otherProps.id}>{label}</label>
      <span className="error-message" aria-live="polite">
        {errorMessage}
      </span>
    </StyledFormInput>
  );
};

export default FormInput;
