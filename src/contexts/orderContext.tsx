import { ReactNode, createContext, useContext, useState } from 'react';

// Definisikan tipe data untuk Order
interface Order {
  id: number;
  name: number;
  jumlah: number;
  total: number;
}

// Buat context untuk Orders
interface OrdersContextProps {
  orders: Order[];
  addOrder: (newOrder: Order) => void;
}

const OrdersContext = createContext<OrdersContextProps | undefined>(undefined);

// Buat provider untuk OrdersContext
export const OrdersProvider = ({ children }: { children: ReactNode }) => {
  const [orders, setOrders] = useState<Order[]>([]);

  const addOrder = (newOrder: Order) => {
    setOrders([...orders, newOrder]);
  };

  return (
    <OrdersContext.Provider value={{ orders, addOrder }}>
      {children}
    </OrdersContext.Provider>
  );
};

// Buat custom hook untuk menggunakan OrdersContext
export const useOrders = () => {
  const context = useContext(OrdersContext);
  if (!context) {
    throw new Error('useOrders must be used within an OrdersProvider');
  }
  return context;
};
