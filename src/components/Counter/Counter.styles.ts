import styled from "styled-components";
import { centerElement } from "../../helpers/styles";
import media from "../../helpers/styles/mediaQueries";

const StyledCounter = styled.div`
  background-color: ${({ theme }) => theme.palette.card};
  font-size: 13px;
  width: 6rem;
  padding: 0.5rem 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${media.up("sm")`
    width:7rem;
  `}
  .increment-btn,
  .decrement-btn {
    ${centerElement}
    width: 1.5rem;
    height: 1.5rem;
    transition: all 0.3s ease;
    color: rgba(0, 0, 0, 0.25);
    &:hover {
      color: ${({ theme }) => theme.palette.text.accent};
    }
  }
  .number {
    font-family: Manrope, sans-serif;
    font-weight: bold;
  }
`;
export default StyledCounter;
