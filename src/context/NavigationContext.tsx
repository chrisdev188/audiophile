import React, { createContext, useContext, useState } from "react";

interface INavigationContext {
  isOpen: boolean;
  openMenu: () => void;
  closeMenu: () => void;
  toggleMenu: (e: React.MouseEvent) => void;
}
interface NavigationProviderProps {
  children?: React.ReactNode;
}

const NavigationContext = createContext({} as INavigationContext);

export const NavContextProvider = ({ children }: NavigationProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(true);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };
  const toggleMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  return (
    <NavigationContext.Provider
      value={{ isOpen, openMenu, closeMenu, toggleMenu }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigationContext = () => {
  return useContext(NavigationContext);
};
