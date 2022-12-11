import { useCallback, useState } from "react";

const useNavigationActions = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

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

  return { isMenuOpen, openMenu, closeMenu, toggleMenu, setIsMenuOpen };
};

export default useNavigationActions;
