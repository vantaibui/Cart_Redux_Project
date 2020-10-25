import React, { Component } from "react";

export default class CartResult extends Component {
  showTotalAmount = (cart) => {
    let total = 0;
    if (cart.length > 0) {
      for (const index in cart) {
        total += cart[index].product.price * cart[index].quantity;
      }
    }
    return total;
  };
  render() {
    let { cart } = this.props;
    return (
      <tr>
        <td colSpan={3} />
        <td>
          <h4>
            <strong>Tổng Tiền</strong>
          </h4>
        </td>
        <td>
          <h4>
            <strong>{this.showTotalAmount(cart)}$</strong>
          </h4>
        </td>
        <td colSpan={3}>
          <button
            type="button"
            className="btn btn-primary waves-effect waves-light"
          >
            Complete purchase
            <i className="fa fa-angle-right right" />
          </button>
        </td>
      </tr>
    );
  }
}
