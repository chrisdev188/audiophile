import { useRef } from "react";
import { Button, CategoryCardList, Counter, Flex } from "..";
import { useNavigationContext } from "../../context/NavigationContext";
import { useProductListContext } from "../../context/ProductListContext";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";
import usdCurrencyFormatter from "../../helpers/usdCurrencyFormatter";
import { useClickOutside } from "../../hooks";
import Container from "../Container/Container";
import CartIcon from "../icons/CartIcon";
import HamburgerIcon from "../icons/HamburgerIcon";
import Logo from "../Logo/Logo";
import MenuList from "../MenuList/MenuList";
import { useNavBackgroundChange } from "./Navbar.hooks";
import {
  MenuToggler,
  NavInnerBox,
  NavStyled,
  CartToggler,
  StyledMenuModal,
  StyledCartModal,
} from "./Navbar.styles";
import { INavbarProps } from "./Navbar.types";

type FullDetailsCart = Array<{
  id: number;
  name: string;
  price: number;
  quantity: number;
}>;

const Navbar: React.FC<INavbarProps> = (props) => {
  const {
    cart,
    isCartModalOpen,
    getNumberOfItems,
    toggleCartModal,
    closeCartModal,
    clearCart,
    increaseItemQuantity,
    decreaseItemQuantity,
  } = useShoppingCartContext();
  const { isOpen, closeMenu, toggleMenu } = useNavigationContext();
  const { getProductList } = useProductListContext();

  const navRef = useRef<HTMLElement>(null);
  const menuModalRef = useRef<HTMLElement>(null);
  const cartModalRef = useRef<HTMLDivElement>(null);

  const cartQuantity = getNumberOfItems();
  const productList = getProductList();

  const fullDetailsCart = cart.map((item) => {
    const product = productList.find((p) => p.id === item.id);
    if (product) {
      return { ...item, name: product.name, price: product.price };
    }
    return item;
  }) as FullDetailsCart;

  // handle close modals when click outside
  useClickOutside(menuModalRef, closeMenu);
  useClickOutside(cartModalRef, closeCartModal);

  // change nav background when current page is not home ("/")
  useNavBackgroundChange(navRef);

  return (
    <>
      <NavStyled {...props} ref={navRef}>
        <Container fullVertical>
          <NavInnerBox>
            <MenuToggler onClick={(e) => toggleMenu(e)}>
              <HamburgerIcon />
            </MenuToggler>
            <Logo />
            <MenuList hideOnSmallScreen />
            <CartToggler onClick={(e) => toggleCartModal(e)}>
              <CartIcon />
              {cartQuantity > 0 && (
                <span className="badge">{cartQuantity}</span>
              )}
            </CartToggler>
          </NavInnerBox>
        </Container>
      </NavStyled>

      {isOpen && (
        // show hide Menu modal
        <StyledMenuModal>
          <nav className="content" ref={menuModalRef}>
            <CategoryCardList />
          </nav>
          <div className="overlay" />
        </StyledMenuModal>
      )}

      {isCartModalOpen && (
        // show hide Cart modal
        <StyledCartModal>
          <Container fullVertical className="content-container">
            <Flex xs={{ content: "flex-end" }}>
              <div className="content" ref={cartModalRef}>
                <Flex xs={{ content: "space-between" }} className="cart-header">
                  <span>Cart ({cartQuantity})</span>
                  <button className="remove-btn" onClick={clearCart}>
                    remove all
                  </button>
                </Flex>
                <Flex component="ul" xs={{ direction: "column", gap: 1 }}>
                  {fullDetailsCart.map((item) => (
                    <li key={item.id}>
                      <Flex xs={{ content: "space-between", items: "center" }}>
                        <p>{item.name}</p>
                        <Counter
                          start={item.quantity}
                          handleIncrease={(e) => {
                            e.stopPropagation();
                            increaseItemQuantity(item.id, 1);
                          }}
                          handleDecrease={(e) => {
                            e.stopPropagation();
                            decreaseItemQuantity(item.id);
                          }}
                        />
                      </Flex>
                    </li>
                  ))}
                </Flex>
                <Flex xs={{ content: "space-between" }} className="cart-total">
                  <div className="total-label">total</div>
                  <div className="total-price">
                    {usdCurrencyFormatter.format(
                      fullDetailsCart.reduce(
                        (acc, item) => acc + item.price * item.quantity,
                        0
                      )
                    )}
                  </div>
                </Flex>
                <div className="cart-footer">
                  <Button color="secondary" className="btn-full">
                    checkout
                  </Button>
                </div>
              </div>
            </Flex>
          </Container>
          <div className="overlay" />
        </StyledCartModal>
      )}
    </>
  );
};

Navbar.defaultProps = {
  color: "secondary",
};

export default Navbar;
