import styled from "styled-components";

export const StyledSocialList = styled.ul`
  display: flex;
  gap: 1rem;
  align-items: center;
  a {
    svg > path {
      transition: all 300ms ease;
    }
    &:hover {
      svg > path {
        fill: ${({ theme }) => theme.colors.accent};
      }
    }
  }
  @media (min-width: 1140px) {
    position: absolute;
    top: -5rem;
    right: 0;
  }
`;
