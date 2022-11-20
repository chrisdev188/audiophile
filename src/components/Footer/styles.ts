import styled from "styled-components";
import { Container } from "../../globalStyles";

export const StyledFooter = styled(Container)`
  background-color: ${({ theme }) => theme.colors.main};
  color: white;
`;

export const FooterNav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
