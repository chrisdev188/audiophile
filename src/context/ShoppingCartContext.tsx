import { createContext, useCallback, useContext, useState } from "react";

interface IShoppingCartProviderProps {
  children?: React.ReactNode;
}
interface IShoppingCartContext {
  cart: ICartItem[];
  getNumberOfItems: () => number;
  getItemQuantity: (id: number) => number;
  increaseItemQuantity: (id: number, quantity: number) => void;
  decreaseItemQuantity: (id: number) => void;
  clearCart: () => void;
}
interface ICartItem {
  id: number;
  quantity: number;
}

const ShoppingCartContext = createContext({} as IShoppingCartContext);

export const ShoppingCartProvider: React.FC<IShoppingCartProviderProps> = ({
  children,
}) => {
  const [cart, setCart] = useState([] as ICartItem[]);

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
  const clearCart = () => {
    setCart([]);
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        cart,
        getNumberOfItems,
        getItemQuantity,
        increaseItemQuantity,
        decreaseItemQuantity,
        clearCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export const useShoppingCartContext = () => {
  return useContext(ShoppingCartContext);
};
