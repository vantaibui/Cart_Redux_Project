import React, { Component } from "react";
import {
  MSS_DELETE_PRODUCT_IN_CART_SUCCESS,
  MSS_UPDATE_CART_SUCCESS,
} from "../redux/types/Message";

export default class CartItem extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     quantity: 1,
  //   };
  // }
  showSubTotal = (price, quantity) => {
    return price * quantity;
  };
  onDeleteProduct = (id) => {
    this.props.onDeleteProduct(id);
    this.props.onChangeMessage(MSS_DELETE_PRODUCT_IN_CART_SUCCESS);
  };
  onUpdateQuantity = (product, quantity) => {
    if (quantity > 0) {
      // this.setState({
      //   quantity: quantity,
      // });
      this.props.onUpdateProductInCart(product, quantity);
      this.props.onChangeMessage(MSS_UPDATE_CART_SUCCESS);
    }
  };
  render() {
    let { item, index } = this.props;
    // let { quantity } = this.state;
    let { quantity } = item;
    return (
      <tr>
        <th scope="row">
          <img
            src={item.product.image}
            alt="1"
            className="img-fluid z-depth-0"
          />
        </th>
        <td>
          <h5>
            <strong>{item.product.name}</strong>
          </h5>
        </td>
        <td>{item.product.price}$</td>
        <td className="center-on-small-only">
          <span className="qty">{quantity} </span>
          <div className="btn-group radio-group" data-toggle="buttons">
            <label
              className="btn btn-sm btn-primary
                              btn-rounded waves-effect waves-light"
              onClick={() => {
                this.onUpdateQuantity(item.product, item.quantity - 1);
              }}
            >
              <a>—</a>
            </label>
            <label
              className="btn btn-sm btn-primary
                              btn-rounded waves-effect waves-light"
              onClick={() => {
                this.onUpdateQuantity(item.product, item.quantity + 1);
              }}
            >
              <a>+</a>
            </label>
          </div>
        </td>
        <td>{this.showSubTotal(item.product.price, item.quantity)}$</td>
        <td>
          <button
            type="button"
            className="btn btn-sm btn-primary waves-effect waves-light"
            data-toggle="tooltip"
            data-placement="top"
            data-original-title="Remove item"
            onClick={() => {
              this.onDeleteProduct(item.product.id);
            }}
          >
            X
          </button>
        </td>
      </tr>
    );
  }
}
