import { createContext, useContext, useReducer } from "react";

const FilterVideos = createContext();

const filterReducer = (state, action) => {
  switch (action.type) {
    case "CATEGORY":
      return { ...state, category: action.payload };
    default:
      return state;
  }
};
const initialState = {
  category: "All",
};
console.log(initialState);
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
