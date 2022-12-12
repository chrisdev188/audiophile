import styled from "styled-components";
import { centerElement } from "../../helpers/styles";
import media from "../../helpers/styles/mediaQueries";

const StyledCounter = styled.div`
  background-color: ${({ theme }) => theme.palette.card};
  width: 6rem;
  padding: 0.5rem 0.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  ${media.up("sm")`
    width:7rem;
  `}
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
