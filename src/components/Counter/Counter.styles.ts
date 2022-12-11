import styled from "styled-components";
import { centerElement } from "../../helpers/styles";

const StyledCounter = styled.div`
  background-color: ${({ theme }) => theme.palette.card};
  width: 8rem;
  padding: 0.75rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  .increment-btn,
  .decrement-btn {
    ${centerElement}
    width: 1.5rem;
    height: 1.5rem;
    transition: all 0.3s ease;
    &:hover {
      color: ${({ theme }) => theme.palette.text.accent};
    }
  }
`;
export default StyledCounter;
