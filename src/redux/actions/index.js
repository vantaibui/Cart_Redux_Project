// import * as type from "../types/ActionType";
import {
  ADD_TO_CART,
  CHANGE_MESSAGE,
  DELETE_PRODUCT_IN_CART,
  UPDATE_PRODUCT_IN_CART,
} from "../types/ActionType";
export const addToCart = (product, quantity) => {
  return {
    type: ADD_TO_CART,
    product: product,
    quantity: quantity,
  };
};

export const changeMessage = (message) => {
  return {
    type: CHANGE_MESSAGE,
    message: message,
  };
};

export const deleteProduct = (idProduct) => {
  return {
    type: DELETE_PRODUCT_IN_CART,
    idProduct: idProduct,
  };
};

export const updateProductInCart = (product, quantity) => {
  return {
    type: UPDATE_PRODUCT_IN_CART,
    product: product,
    quantity: quantity,
  };
};
