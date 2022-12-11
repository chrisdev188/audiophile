import { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useTheme } from "styled-components";

export const useNavBackgroundChange = <T extends HTMLElement = HTMLElement>(
  ref: React.RefObject<T>
) => {
  const { pathname } = useLocation();
  const theme = useTheme();
  useEffect(() => {
    if (ref.current) {
      if (pathname === "/") {
        ref.current.style.backgroundColor = "transparent";
      } else {
        ref.current.style.backgroundColor = theme.palette.primary.main;
      }
    }
  }, [pathname]);
};
