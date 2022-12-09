import styled from "styled-components";
import { centerElement } from "../../helpers/styles";

export const StyledSocialList = styled.ul`
  display: flex;
  gap: 1rem;
  align-items: center;
  a {
    ${centerElement}
    svg path {
      transition: all 0.3s ease;
    }
    &:hover {
      svg path {
        fill: ${({ theme }) => theme.palette.secondary.main};
      }
    }
  }
`;
