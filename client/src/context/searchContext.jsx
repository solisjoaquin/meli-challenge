import { createContext, useState } from "react";

export const searchContext = createContext({
  search: "",
  setSearch: () => {},
  categories: [],
  setCategories: () => {},
});

export const SearchProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [categories, setCategories] = useState([]);

  return (
    <searchContext.Provider
      value={{ search, setSearch, categories, setCategories }}
    >
      {children}
    </searchContext.Provider>
  );
};

export default SearchProvider;
