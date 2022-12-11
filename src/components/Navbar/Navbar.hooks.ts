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

export const useNavigationActions = (initialState: boolean) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(initialState);

  const openMenu = useCallback(() => {
    setIsMenuOpen(true);
  }, []);
  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);
  const toggleMenu = useCallback((e: React.MouseEvent) => {
    /*  prevent event bubble up higher on the tree, 
     we don't want click event triggered on window when click on button */
    e.stopPropagation();
    setIsMenuOpen((prev) => !prev);
  }, []);

  return { isMenuOpen, openMenu, closeMenu, toggleMenu };
};
