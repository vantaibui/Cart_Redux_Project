import {
  ADD_TO_CART,
  DELETE_PRODUCT_IN_CART,
  UPDATE_PRODUCT_IN_CART,
} from "../types/ActionType";

let data = JSON.parse(localStorage.getItem("cart"));
// let initialState = [
// {
//   product: {
//     id: 2,
//     name: "IPhone 12 Mini",
//     image: "https://cdn.tgdd.vn/Files/2020/10/13/1298564/r2_1280x720.jpg",
//     description: "Apple",
//     price: 1000,
//     inventory: 10,
//     rating: 3,
//   },
//   quantity: 8,
// },
// {
//   product: {
//     id: 3,
//     name: "IPhone 12",
//     image:
//       "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-12-mini-blue-select-2020_2.png",
//     description: "Apple",
//     price: 1000,
//     inventory: 10,
//     rating: 2,
//   },
//   quantity: 3,
// },
// ];

let initialState = data ? data : [];

let findProductInCart = (cart, product) => {
  let result = -1;
  if (cart.length > 0) {
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].product.id === product.id) {
        result = i;
        break;
      }
    }
  }
  return result;
};

let findProduct = (id, list) => {
  let result = -1;
  for (let i in list) {
    if (list[i].product.id === id) {
      result = i;
    }
  }
  return result;
};

const Cart = (state = initialState, action) => {
  let index = -1;
  switch (action.type) {
    case ADD_TO_CART: {
      console.log(action);
      index = findProductInCart(state, action.product);
      if (index !== -1) {
        state[index].quantity += action.quantity;
      } else {
        state.push({
          product: action.product,
          quantity: action.quantity,
        });
      }
      localStorage.setItem("cart", JSON.stringify(state));
      return [...state];
    }
    case DELETE_PRODUCT_IN_CART: {
      index = findProduct(action.idProduct, state);
      if (index !== -1) {
        state.splice(index, 1);
      }
      localStorage.setItem("cart", JSON.stringify(state));
      return [...state];
    }
    case UPDATE_PRODUCT_IN_CART: {
      index = findProductInCart(state, action.product);
      if (index !== -1) {
        state[index].quantity = action.quantity;
      }
      localStorage.setItem("cart", JSON.stringify(state));
      return [...state];
    }
    default:
      return [...state];
  }
};

export default Cart;
