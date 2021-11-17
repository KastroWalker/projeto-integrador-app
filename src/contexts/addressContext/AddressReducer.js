import * as typesActions from "./types";

export const initialState = {
  road: "",
  number: "",
  district: "",
  city: "",
  zipCode: "",
  complement: "",
  coordinate: "",
};

export const addressReducer = (state, action) => {
  switch (action.type) {
    case typesActions.ADD_ROAD:
      return {
        ...state,
        road: action.payload,
      };
    case typesActions.ADD_NUMBER:
      return {
        ...state,
        number: action.payload,
      };
    case typesActions.ADD_DISTRICT:
      return {
        ...state,
        district: action.payload,
      };
    case typesActions.ADD_CITY:
      return {
        ...state,
        city: action.payload,
      };
    case typesActions.ADD_ZIPCODE:
      return {
        ...state,
        zipCode: action.payload,
      };
    case typesActions.ADD_COMPLEMENT:
      return {
        ...state,
        complement: action.payload,
      };
    case typesActions.ADD_COORDINATE:
      return {
        ...state,
        coordinate: action.payload,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
