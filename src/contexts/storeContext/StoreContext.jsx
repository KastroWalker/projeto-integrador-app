import { createContext, useContext, useReducer } from "react";
import { initialState, storeReducer } from "./StoreReducer";
import * as typesActions from "./types";

export const StoreContext = createContext();

export const StoreContextProvider = ({ children }) => {
  const [storeContextState, dispatch] = useReducer(storeReducer, initialState);

  const storeContextActions = {
    setName: (name) => {
      dispatch({ type: typesActions.ADD_NAME, payload: name });
    },
    setDescription: (description) => {
      dispatch({ type: typesActions.ADD_DESCRIPTION, payload: description });
    },
    setOpenedAt: (openedAt) => {
      dispatch({ type: typesActions.ADD_OPENEDAT, payload: openedAt });
    },
    setClosedAt: (closedAt) => {
      dispatch({ type: typesActions.ADD_CLOSEDAT, payload: closedAt });
    },
  };

  return (
    <StoreContext.Provider
      value={{
        storeContextState,
        storeContextActions,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStoreContext = () => useContext(StoreContext);
