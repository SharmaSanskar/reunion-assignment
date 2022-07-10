export const filterReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_LOCATION":
      return { ...state, location: action.payload.location };
    case "CHANGE_TYPE":
      return { ...state, propertyType: action.payload.type };
    case "CHANGE_PRICE":
      return { ...state, priceRange: action.payload.price };
    case "CHANGE_DATE":
      return { ...state, moveinDate: action.payload.date };
    default:
      return state;
  }
};
