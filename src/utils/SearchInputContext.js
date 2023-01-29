import { createContext } from "react";

const SearchInputContext = createContext({
  searchText: "",
});

// will be useful when debugging the app in react dev tools
SearchInputContext.displayName = "SearchInputContext";

export default SearchInputContext;
