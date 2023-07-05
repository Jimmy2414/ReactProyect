import { GET_ELECTRO } from "./types";
const initialState = {
  electrodomesticos: [],
  televisores: [],
  informatica: [],
};

export const reducerroot = (state = initialState, action) => {
  switch (action.type) {
    case GET_ELECTRO:
      return { ...state, electrodomesticos: action.payload };

    default:
      return state;
  }
};
