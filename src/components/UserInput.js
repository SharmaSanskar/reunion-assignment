import { useProperty } from "../contexts/PropertyContext";

const UserInput = () => {
  const { locations, propertyTypes, priceRange, filterDispatch } =
    useProperty();
  return (
    <section className="flex items-center justify-evenly">
      {/* PROPERTY LOCATION */}
      <div className="flex flex-col">
        <label className="mb-2 font-bold text-gray-600 uppercase">
          Location
        </label>
        <select
          className="px-4 py-1 rounded-md"
          name="locations"
          defaultValue={"default"}
          onChange={(e) =>
            filterDispatch({
              type: "CHANGE_LOCATION",
              payload: { location: e.target.value },
            })
          }
        >
          <option disabled value="default">
            Select location
          </option>
          <option value="">All</option>
          {locations.map((location, i) => (
            <option value={location} key={i}>
              {location}
            </option>
          ))}
        </select>
      </div>

      {/* PROPERTY DATE */}
      <div className="flex flex-col">
        <label className="mb-2 font-bold text-gray-600 uppercase">
          Move Date
        </label>
        <input
          className="px-4 py-1 rounded-md"
          type="date"
          min={new Date().toISOString().split("T")[0]}
          onChange={(e) =>
            filterDispatch({
              type: "CHANGE_DATE",
              payload: { date: e.target.value },
            })
          }
        />
      </div>

      {/* PROPERTY PRICE */}
      <div className="flex flex-col">
        <label className="mb-2 font-bold text-gray-600 uppercase">Price</label>
        <select
          className="px-4 py-1 rounded-md"
          name="priceRange"
          defaultValue={"default"}
          onChange={(e) =>
            filterDispatch({
              type: "CHANGE_PRICE",
              payload: { price: e.target.value },
            })
          }
        >
          <option disabled value="default">
            Select price range
          </option>
          <option value="">All</option>
          {priceRange.map((price, i) => (
            <option value={price} key={i}>
              {price[0]} - {price[1]}
            </option>
          ))}
        </select>
      </div>

      {/* PROPERTY TYPES */}
      <div className="flex flex-col">
        <label className="mb-2 font-bold text-gray-600 uppercase">
          Property Type
        </label>
        <select
          className="px-4 py-1 rounded-md"
          name="propertyTypes"
          defaultValue={"default"}
          onChange={(e) =>
            filterDispatch({
              type: "CHANGE_TYPE",
              payload: { type: e.target.value },
            })
          }
        >
          <option disabled value="default">
            Select type
          </option>
          <option value="">All</option>
          {propertyTypes.map((type, i) => (
            <option value={type} key={i}>
              {type}
            </option>
          ))}
        </select>
      </div>
    </section>
  );
};

export default UserInput;
