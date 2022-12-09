import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { getTypography } from "../../helpers/styles";
import media from "../../helpers/styles/mediaQueries";

export const StyledMenuList = styled.ul`
  display: none;
  ${media.up("md")`
    display: flex;
  `}
`;

export const MenuItem = styled.li`
  padding: 0;
`;

export const StyledNavLink = styled(NavLink)`
  ${(props) => getTypography("navLink", props.theme)}
  padding: 0.75rem;
  &.active {
    color: ${(props) => props.theme.palette.secondary.main};
  }
`;
