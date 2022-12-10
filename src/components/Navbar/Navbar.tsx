import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { useTheme } from "styled-components";
import { CategoryCardList } from "..";
import Container from "../Container/Container";
import CartIcon from "../icons/CartIcon";
import HamburgerIcon from "../icons/HamburgerIcon";
import Logo from "../Logo/Logo";
import MenuList from "../MenuList/MenuList";
import {
  MenuToggler,
  NavInnerBox,
  NavStyled,
  CartToggler,
  StyledMenuModal,
} from "./Navbar.styles";
import { INavbarProps } from "./Navbar.types";

const Navbar: React.FC<INavbarProps> = (props) => {
  const theme = useTheme();
  const { pathname } = useLocation();
  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);
  const navRef = useRef<HTMLElement>(null);
  const menuModalRef = useRef<HTMLDivElement>(null);

  // change nav background to main color when route is not home ("/")
  useEffect(() => {
    if (navRef.current) {
      if (pathname === "/") {
        navRef.current.style.backgroundColor = "transparent";
      } else {
        navRef.current.style.backgroundColor = theme.palette.primary.main;
      }
    }
  }, [pathname]);

  const toggleMenu = (): void => {
    setIsMenuOpened((prevValue) => !prevValue);
  };

  useEffect(() => {
    console.log(isMenuOpened);
  }, [isMenuOpened]);

  return (
    <>
      <NavStyled {...props} ref={navRef}>
        <Container fullVertical>
          <NavInnerBox>
            <MenuToggler onClick={toggleMenu}>
              <HamburgerIcon />
            </MenuToggler>
            <Logo />
            <MenuList hideOnSmallScreen />
            <CartToggler>
              <CartIcon />
            </CartToggler>
          </NavInnerBox>
        </Container>
      </NavStyled>
      {isMenuOpened && (
        <StyledMenuModal>
          <Container fullVertical full className="content">
            <CategoryCardList />
          </Container>
          <Container className="overlay" full fullVertical />
        </StyledMenuModal>
      )}
    </>
  );
};

Navbar.defaultProps = {
  color: "secondary",
};

export default Navbar;
