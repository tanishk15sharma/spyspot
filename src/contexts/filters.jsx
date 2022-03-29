import { createContext, useContext, useReducer } from "react";

const FilterVideos = createContext();

const filterReducer = () => {};
const initialState = {
  category: "",
};
const FilterContextProvider = ({ children }) => {
  const [filterState, filterDispatch] = useReducer(filterReducer, initialState);
  return (
    <FilterVideos.Provider value={{ filterState, filterDispatch }}>
      {children}
    </FilterVideos.Provider>
  );
};

const useFilters = () => useContext(FilterVideos);

export { FilterContextProvider, useFilters };
