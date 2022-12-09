import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { getTypography } from "../../helpers/styles";
import media from "../../helpers/styles/mediaQueries";
import { IMenuListProps } from "./MenuList";

export const StyledMenuList = styled.ul<IMenuListProps>`
  display: ${({ hideOnSmallScreen }) => (hideOnSmallScreen ? "none" : "flex")};
  color: ${({ theme }) => theme.palette.primary.contrastText};
  &.footer-menu {
    flex-direction: column;
    align-items: center;
    a {
      padding: 0.5rem;
    }
  }
  ${media.up("sm")`
    display: flex;
    &.footer-menu{
      flex-direction:row;
      a{
        padding-block:0;
      }
    }
  `};
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
