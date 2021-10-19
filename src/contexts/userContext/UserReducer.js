import * as typesActions from "./types";

export const inititalState = {
  id: "",
  name: "",
  username: "",
  type: "",
  avatar:
    "https://cdn.pixabay.com/photo/2016/03/31/19/57/avatar-1295404_960_720.png",
};

export const userReducer = (state, action) => {
  switch (action.type) {
    case typesActions.ADD_ID:
      return {
        ...state,
        id: action.payload,
      };
    case typesActions.ADD_NAME:
      return {
        ...state,
        name: action.payload,
      };
    case typesActions.ADD_USERNAME:
      return {
        ...state,
        username: action.payload,
      };
    case typesActions.ADD_TYPE:
      return {
        ...state,
        type: action.payload,
      };
    case typesActions.ADD_AVATAR:
      return {
        ...state,
        types: action.payload,
      };
    case typesActions.RESET:
      return { ...inititalState };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
