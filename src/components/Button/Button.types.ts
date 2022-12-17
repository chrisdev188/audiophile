import React from "react";
import { LinkProps, To } from "react-router-dom";

export type TButtonColor = "primary" | "secondary";

export type TButtonVariant = "contained" | "outlined" | "text";

export type BaseProps = {
  $variant?: TButtonVariant;
  $color?: TButtonColor;
  children?: React.ReactNode;
  as?:
    | "button"
    | (React.ForwardRefExoticComponent<LinkProps> &
        React.RefAttributes<HTMLAnchorElement>);
};

type ButtonAsButton = BaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps>;

type ButtonAsRouterLink = BaseProps & Omit<LinkProps, keyof BaseProps>;

export type ButtonProps = ButtonAsButton | ButtonAsRouterLink;
