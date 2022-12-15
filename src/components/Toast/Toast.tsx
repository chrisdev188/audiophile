import styled, { css, keyframes } from "styled-components";

interface IToastProps {
  type?: "success" | "warning" | "error";
  message?: string;
  show?: boolean;
}

const ToastWrapper = styled.div<IToastProps>`
  background-color: green;
  color: white;
  padding: 1rem;
  border-radius: var(--round-md);
  min-width: min-content;
  position: fixed;
  z-index: 1500;
  left: 50%;
  bottom: 2rem;
  transform: translateX(-50%);
  visibility: hidden;
  ${({ show }) =>
    show &&
    css`
      animation: ${FadeIn} 500ms;
      visibility: visible;
    `}
`;

const FadeIn = keyframes`
  from {bottom:0; opacity:0}
  to{bottom:2rem; opacity:1}
`;

const Toast: React.FunctionComponent<IToastProps> = ({
  message = "default message",
  type = "success",
  show = false,
}) => {
  return (
    <ToastWrapper type={type} show={show}>
      💯 {message}
    </ToastWrapper>
  );
};

export default Toast;
