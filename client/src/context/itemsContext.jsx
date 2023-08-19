import { createContext, useState } from "react";

export const itemsContext = createContext({
  items: [],
  setItems: () => {},
});

export const ItemsProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  return (
    <itemsContext.Provider value={{ items, setItems }}>
      {children}
    </itemsContext.Provider>
  );
};

export default ItemsProvider;
