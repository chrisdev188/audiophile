import styled from "styled-components";
import { Container, HeadingXL } from "../../../globalStyles";

export const StyledHeader = styled(Container)`
  background-color: ${({ theme }) => theme.colors.main};
  padding-top: 5.5rem;
  color: white;
`;

export const HeaderText = styled(HeadingXL)`
  padding-block: 5rem;
  text-align: center;
`;
