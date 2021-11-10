import * as typesActions from "./types";

export const initialState = {
  name: "",
  description: "",
  openedAt: "",
  closedAt: "",
};

export const storeReducer = (state, action) => {
  switch (action.type) {
    case typesActions.ADD_NAME:
      return {
        ...state,
        name: action.payload,
      };
    case typesActions.ADD_DESCRIPTION:
      return {
        ...state,
        description: action.payload,
      };
    case typesActions.ADD_OPENEDAT:
      return {
        ...state,
        openedAt: action.payload,
      };
    case typesActions.ADD_CLOSEDAT:
      return {
        ...state,
        closedAt: action.payload,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
