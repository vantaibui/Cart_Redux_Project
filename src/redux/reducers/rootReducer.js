import Cart from "./Cart";
import Message from "./Message";
import Product from "./Product";

const { combineReducers } = require("redux");

const rootReducer = combineReducers({
  Product: Product,
  Cart: Cart,
  Message: Message,
});

export default rootReducer;
