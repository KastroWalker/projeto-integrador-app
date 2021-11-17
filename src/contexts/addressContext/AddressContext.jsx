import { createContext, useContext, useReducer } from "react";
import { addressReducer, initialState } from "./AddressReducer";
import * as typesActions from "./types";

export const AddressContext = createContext();

export const AddressContextProvider = ({ children }) => {
  const [addressContextState, dispatch] = useReducer(
    addressReducer,
    initialState
  );

  const addressContextActions = {
    setRoad: (road) => {
      dispatch({
        type: typesActions.ADD_ROAD,
        payload: road,
      });
    },
    setNumber: (number) => {
      dispatch({
        type: typesActions.ADD_NUMBER,
        payload: number,
      });
    },
    setDistrict: (district) => {
      dispatch({
        type: typesActions.ADD_DISTRICT,
        payload: district,
      });
    },
    setCity: (city) => {
      dispatch({
        type: typesActions.ADD_CITY,
        payload: city,
      });
    },
    setZipCode: (zipCode) => {
      dispatch({
        type: typesActions.ADD_ZIPCODE,
        payload: zipCode,
      });
    },
    setComplement: (complement) => {
      dispatch({
        type: typesActions.ADD_COMPLEMENT,
        payload: complement,
      });
    },
    setCoordinate: (coordinate) => {
      dispatch({
        type: typesActions.ADD_COORDINATE,
        payload: coordinate,
      });
    },
  };

  return (
    <AddressContext.Provider
      value={{
        addressContextState,
        addressContextActions,
      }}
    >
      {children}
    </AddressContext.Provider>
  );
};

export const useAddressContext = () => useContext(AddressContext);
