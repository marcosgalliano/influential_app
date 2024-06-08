import {
  GET_ALL_PRODUCTS,
  GET_ALL_CLIENTS,
  GET_ALL_REMISIONS,
  GET_ALL_USERS,
} from "./actionTypes";

const initialState = {
  inventario: [],
  clients: [],
  remisions: [],
  users: [],
};

const rootReducer = (state = initialState, action) => {};

export default rootReducer;
