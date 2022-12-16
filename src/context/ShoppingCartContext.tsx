import { createContext, useCallback, useContext, useState } from "react";
import { useProductListContext } from "./ProductListContext";

interface IShoppingCartProviderProps {
  children?: React.ReactNode;
}
interface IShoppingCartContext {
  cart: ICartItem[];
  fullDetailsCart: IDetailCartItem[];
  total: number;
  vat: number;
  grandTotal: number;
  shipping: number;
  getNumberOfItems: () => number;
  getItemQuantity: (id: number) => number;
  increaseItemQuantity: (id: number, quantity: number) => void;
  decreaseItemQuantity: (id: number) => void;
  clearCart: () => void;
  closeCartModal: () => void;
  openCartModal: () => void;
  toggleCartModal: (e: React.MouseEvent) => void;
  isCartModalOpen: boolean;
}
interface ICartItem {
  id: number;
  quantity: number;
}

export interface IDetailCartItem extends ICartItem {
  name: string;
  price: number;
  image: string;
}

const ShoppingCartContext = createContext({} as IShoppingCartContext);

export const ShoppingCartProvider: React.FC<IShoppingCartProviderProps> = ({
  children,
}) => {
  const [cart, setCart] = useState([] as ICartItem[]);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const { getProductList } = useProductListContext();

  const getNumberOfItems = () => {
    return cart.length;
  };
  const getItemQuantity = (id: number) => {
    const item = cart.find((item) => item.id === id);
    if (item) return item.quantity;
    return 0;
  };
  const increaseItemQuantity = (id: number, quantity: number = 1) => {
    setCart((currentCart) => {
      const item = currentCart.find((item) => item.id === id);
      if (!item) {
        return [...currentCart, { id, quantity }];
      }
      return currentCart.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + quantity };
        }
        return item;
      });
    });
  };
  const decreaseItemQuantity = (id: number) => {
    setCart((currentCart) => {
      const item = currentCart.find((item) => item.id === id);
      if (item?.quantity === 1) {
        return currentCart.filter((item) => item.id !== id);
      }
      return currentCart.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
    });
  };
  const fullDetailsCart = cart.map((item) => {
    const product = getProductList().find((p) => p.id === item.id);
    if (product) {
      return {
        ...item,
        name: product.shortenName,
        price: product.price,
        image: product.image.mobile,
      };
    }
    return item;
  }) as IDetailCartItem[];
  const clearCart = () => {
    setCart([]);
  };
  const openCartModal = () => {
    setIsCartModalOpen(true);
  };
  const closeCartModal = () => {
    setIsCartModalOpen(false);
  };
  const toggleCartModal = () => {
    setIsCartModalOpen((prev) => !prev);
  };

  const total = fullDetailsCart.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );
  const shipping = 50;
  const vat = total * 0.2;
  let grandTotal = 0;
  if (total > 0) {
    grandTotal = total + shipping + vat;
  } else {
    grandTotal = 0;
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        cart,
        fullDetailsCart,
        shipping,
        total,
        vat,
        grandTotal,
        isCartModalOpen,
        getNumberOfItems,
        getItemQuantity,
        increaseItemQuantity,
        decreaseItemQuantity,
        clearCart,
        closeCartModal,
        openCartModal,
        toggleCartModal,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export const useShoppingCartContext = () => {
  return useContext(ShoppingCartContext);
};
