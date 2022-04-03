import { createContext, useContext, useReducer } from "react";

const FilterVideos = createContext();

const filterReducer = (state, action) => {
  switch (action.type) {
    case "CATEGORY":
      return { ...state, category: action.payload };
    case "SET_ACTIVE_BUTTON":
      return { ...state, activeBtn: action.payload };
    case "SET_CATEGORIES":
      return { ...state, categories: action.payload };
    default:
      return state;
  }
};
const initialState = {
  categories: [],
  category: "All",
  activeBtn: "",
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
