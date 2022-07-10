import { useCallback, useEffect, useState } from "react";
import { useProperty } from "../contexts/PropertyContext";
import Property from "./Property";

const Properties = () => {
  const { filterState, properties } = useProperty();
  const { location, priceRange, propertyType, moveinDate } = filterState;

  const [filteredList, setFilteredList] = useState([]);

  const filterLocations = useCallback(
    (arr) => {
      if (location) {
        return arr.filter((property) => property.location === location);
      } else {
        return arr;
      }
    },
    [location]
  );

  const filterPrice = useCallback(
    (arr) => {
      if (priceRange) {
        const prices = priceRange.split(",");
        return arr.filter(
          (property) =>
            property.price >= prices[0] && property.price <= prices[1]
        );
      } else {
        return arr;
      }
    },
    [priceRange]
  );

  const filterTypes = useCallback(
    (arr) => {
      if (propertyType) {
        return arr.filter((property) => property.type === propertyType);
      } else {
        return arr;
      }
    },
    [propertyType]
  );

  const filterDate = useCallback(
    (arr) => {
      if (moveinDate) {
        // console.log());
        return arr.filter(
          (property) => property.moveDate <= new Date(moveinDate)
        );
      } else {
        return arr;
      }
    },
    [moveinDate]
  );

  useEffect(() => {
    let res = properties;
    res = filterLocations(res);
    res = filterPrice(res);
    res = filterTypes(res);
    res = filterDate(res);
    setFilteredList(res);
  }, [properties, filterLocations, filterPrice, filterTypes, filterDate]);

  return (
    <section>
      <h2 className="text-2xl font-bold my-6 uppercase">Properties</h2>
      <div className="flex flex-wrap">
        {filteredList?.map((property) => (
          <Property key={property.id} data={property} />
        ))}
      </div>
    </section>
  );
};

export default Properties;
