import styled from "styled-components";
import { Container, Paragraph, TwelveColumnsGrid } from "../../globalStyles";

export const StyledFooter = styled(Container)`
  background-color: ${({ theme }) => theme.palette.primary.main};
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

export const FooterDescription = styled(Paragraph)`
  color: ${({ theme }) => theme.palette.text.primary.alternate};
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
  color: ${({ theme }) => theme.palette.text.primary.alternate};
`;
