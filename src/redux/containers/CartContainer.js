import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Cart from "../../components/Cart";
import { MSS_CART_EMPTY } from "../types/Message";
import CartItem from "../../components/CartItem";
import CartResult from "../../components/CartResult";
import { changeMessage, deleteProduct, updateProductInCart } from "../actions";

class CartContainer extends Component {
  showCartItem = (cart) => {
    let result = (
      <tr>
        <td>{MSS_CART_EMPTY}</td>
      </tr>
    );
    if (cart.length > 0) {
      result = cart.map((item, index) => {
        return (
          <CartItem
            key={index}
            item={item}
            index={index}
            onDeleteProduct={this.props.onDeleteProduct}
            onChangeMessage={this.props.onChangeMessage}
            onUpdateProductInCart={this.props.onUpdateProductInCart}
          />
        );
      });
    }
    return result;
  };
  showTotalAmount = (cart) => {
    let result;
    if (cart.length > 0) {
      result = <CartResult cart={cart} />;
    }
    return result;
  };
  render() {
    let { cart } = this.props;
    return (
      <Cart>
        {this.showCartItem(cart)}
        {this.showTotalAmount(cart)}
      </Cart>
    );
  }
}

CartContainer.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        inventory: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
      }).isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
  onChangeMessage: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    cart: state.Cart,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onDeleteProduct: (id) => {
      dispatch(deleteProduct(id));
    },
    onChangeMessage: (message) => {
      dispatch(changeMessage(message));
    },
    onUpdateProductInCart: (product, quantity) => {
      dispatch(updateProductInCart(product, quantity));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
