import styled from "styled-components";

export const StyledMenuList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  li {
    text-align: center;
  }
  a {
    text-transform: uppercase;
    font-size: 13px;
    letter-spacing: 1px;
    font-weight: bold;
    transition: all 0.3s ease;
    &:hover {
      color: ${({ theme }) => theme.palette.secondary.main};
    }
  }
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 1.5rem;
  }
`;
