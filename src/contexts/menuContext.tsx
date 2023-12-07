import React, { ReactNode, createContext, useContext, useState } from 'react';

// Definisikan tipe data untuk MenuOrder
interface MenuOrder {
  Id: number;
  MenuId: number;
  Jumlah: number;
}

// Buat context untuk MenuOrders
interface MenuOrdersContextProps {
  menuOrders: MenuOrder[];
  setMenuOrders: React.Dispatch<React.SetStateAction<MenuOrder[]>>;
}

const MenuOrdersContext = createContext<MenuOrdersContextProps | undefined>(undefined);

// Buat provider untuk MenuOrdersContext
export const MenuOrdersProvider = ({ children }: { children: ReactNode }) => {
  const [menuOrders, setMenuOrders] = useState<MenuOrder[]>([
    {
      Id: 0,
      MenuId: 0,
      Jumlah: 0,
    },
  ]);

  return (
    <MenuOrdersContext.Provider value={{ menuOrders, setMenuOrders }}>
      {children}
    </MenuOrdersContext.Provider>
  );
};

// Buat custom hook untuk menggunakan MenuOrdersContext
export const useMenuOrders = () => {
  const context = useContext(MenuOrdersContext);
  if (!context) {
    throw new Error('useMenuOrders must be used within a MenuOrdersProvider');
  }
  return context;
};
