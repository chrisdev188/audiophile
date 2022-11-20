import styled from "styled-components";
import { Container, Paragraph, TwelveColumnsGrid } from "../../globalStyles";

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
  }
`;

export const FooterDescription = styled(Paragraph)`
  color: ${({ theme }) => theme.colors.textAlt};
  text-align: center;
`;

export const CopyrightText = styled.small`
  color: ${({ theme }) => theme.colors.textAlt};
`;

export const CopyrightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  gap: 3rem;
`;

export const StyledSocialList = styled.ul`
  display: flex;
  gap: 1rem;
  align-items: center;
`;
