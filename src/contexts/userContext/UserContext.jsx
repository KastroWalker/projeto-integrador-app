import { createContext, useContext, useReducer } from "react";
import { userReducer, inititalState } from "./UserReducer";
import * as typesActions from "./types";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [userContextState, dispatch] = useReducer(userReducer, inititalState);

  const userContextActions = {
    setId: (id) => {
      dispatch({ type: typesActions.ADD_ID, payload: id });
    },
    setName: (name) => {
      dispatch({ type: typesActions.ADD_NAME, payload: name });
    },
    setUsername: (username) => {
      dispatch({ type: typesActions.ADD_USERNAME, payload: username });
    },
    setType: (type) => {
      dispatch({ type: typesActions.ADD_TYPE, payload: type });
    },
    setAvatar: (avatar) => {
      dispatch({ type: typesActions.ADD_AVATAR, payload: avatar });
    },
    reset: () => {
      dispatch({ type: typesActions.RESET });
    },
  };

  return (
    <UserContext.Provider value={{ userContextState, userContextActions }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
