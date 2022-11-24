import styled from "styled-components";
import { Container, Paragraph, TwelveColumnsGrid } from "../../styles";

export const StyledFooter = styled(Container)`
  background-color: ${({ theme }) => theme.colors.main};
  color: white;
  padding-block: 3rem;
`;

export const FooterGrid = styled(TwelveColumnsGrid)`
  gap: 3rem;
`;

export const FooterNav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  @media (min-width: 768px) {
    grid-column: span 12;
    flex-direction: row;
    justify-content: space-between;
  }
`;

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
      color: ${({ theme }) => theme.colors.accent};
    }
  }
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 1.5rem;
  }
`;

export const FooterDescription = styled(Paragraph)`
  color: ${({ theme }) => theme.colors.textAlt};
  text-align: center;
  @media (min-width: 768px) {
    grid-column: span 12;
    text-align: left;
  }
  @media (min-width: 1140px) {
    grid-column: 1 / span 7;
  }
`;

export const FooterCopyright = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  gap: 3rem;
  @media (min-width: 768px) {
    grid-column: span 12;
    flex-direction: row;
    justify-content: space-between;
    position: relative;
  }
`;

export const CopyrightText = styled.small`
  color: ${({ theme }) => theme.colors.textAlt};
`;

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
