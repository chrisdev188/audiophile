import React, { ReactFragment } from "react";
import {
  StyledMenuItem,
  StyledMenuList,
  StyledNavLink,
} from "./MenuList.styles";

export interface IMenuListProps extends React.HTMLAttributes<HTMLElement> {
  hideOnSmallScreen?: boolean;
  children?: React.ReactNode;
}
export type IMenuItemProps = typeof menuList[0] & {
  children?: React.ReactNode;
};

const menuList = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "headphones",
    path: "/headphones",
  },
  {
    name: "speakers",
    path: "/speakers",
  },
  {
    name: "earphones",
    path: "/earphones",
  },
];

const MenuItem: React.FC<IMenuItemProps> = ({ name, path }) => {
  return (
    <StyledMenuItem>
      <StyledNavLink
        className={(props) => (props.isActive ? "active" : "")}
        to={path}
      >
        {name}
      </StyledNavLink>
    </StyledMenuItem>
  );
};

const MenuList: React.FunctionComponent<IMenuListProps> = ({
  hideOnSmallScreen,
  ...otherProps
}) => {
  return (
    <StyledMenuList hideOnSmallScreen={hideOnSmallScreen} {...otherProps}>
      {menuList.map((item) => {
        return (
          <MenuItem
            key={item.name}
            name={item.name}
            path={item.path}
          ></MenuItem>
        );
      })}
    </StyledMenuList>
  );
};

export default MenuList;
