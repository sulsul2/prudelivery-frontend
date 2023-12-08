import { ReactNode, createContext, useState } from "react";

interface CartContextType {
  cart: Cart[];
  setCart: React.Dispatch<React.SetStateAction<Cart[]>>;
}

const products: Cart[] = [
    {
      product: {
        id: 1,
        name: "Nasi Goreng",
        price: 10000,
        stok: 11,
        diskon: 10000,
      },
      qty: 0,
    },
    {
      product: {
        id: 2,
        name: "Mie Ayam",
        price: 8000,
        stok: 11,
        diskon: 8000,
      },
      qty: 0,
    },
    {
      product: {
        id: 3,
        name: "Soto Betawi",
        price: 12000,
        stok: 28,
        diskon: 12000,
      },
      qty: 0,
    },
    {
      product: {
        id: 4,
        name: "Es Teh Manis",
        price: 2000,
        stok: 100,
        diskon: 2000,
      },
      qty: 0,
    },
  ];

export const CartContext = createContext<CartContextType | null>(null);

const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Cart[]>(products);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
