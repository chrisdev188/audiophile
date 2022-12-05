import styled from "styled-components";

export const StyledMenuList = styled.ul`
  display: none;
  a {
    letter-spacing: 2px;
    text-transform: uppercase;
    font-size: 13px;
    font-weight: bold;
    &.activeLink {
      color: ${({ theme }) => theme.palette.secondary.main};
    }
  }
  @media (min-width: 768px) {
    display: flex;
    gap: 1.5rem;
  }
`;
