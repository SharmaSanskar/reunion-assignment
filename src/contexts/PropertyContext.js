import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import {
  getAllProperties,
  getLocations,
  getPriceRange,
  getPropertyTypes,
} from "../data/propertyData";
import { filterReducer } from "./PropertyReducers";

const PropertyContext = createContext();

export const useProperty = () => {
  return useContext(PropertyContext);
};

export const PropertyProvider = ({ children }) => {
  const [properties, setProperties] = useState([]);
  const [propertyTypes, setPropertyTypes] = useState([]);
  const [locations, setLocations] = useState([]);
  const [priceRange, setPriceRange] = useState([]);

  const [filterState, filterDispatch] = useReducer(filterReducer, {
    location: "",
    moveinDate: null,
    priceRange: "",
    propertyType: "",
  });

  useEffect(() => {
    setProperties(getAllProperties());
    setPropertyTypes(getPropertyTypes());
    setLocations(getLocations());
    setPriceRange(getPriceRange());
  }, []);

  const value = {
    properties,
    propertyTypes,
    locations,
    priceRange,
    filterDispatch,
    filterState,
  };
  return (
    <PropertyContext.Provider value={value}>
      {children}
    </PropertyContext.Provider>
  );
};
