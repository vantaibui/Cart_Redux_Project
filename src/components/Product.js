import React, { Component } from "react";
import { MSS_ADD_TO_CART_SUCCESS } from "../redux/types/Message";

export default class Product extends Component {
  renderRating = (rating) => {
    let result = [];
    if (rating > 0) {
      for (let i = 1; i <= rating; i++) {
        result.push(<i key={i} className="fa fa-star" />);
      }
      for (let j = 1; j <= 5 - rating; j++) {
        result.push(<i key={j + 0.5} className="fa fa-star-o" />);
      }
    }
    return result;
  };
  onAddToCart = (product) => {
    this.props.onAddToCart(product);
    this.props.onChangeMessage(MSS_ADD_TO_CART_SUCCESS);
  };
  render() {
    let { product } = this.props;
    return (
      <div className="col-lg-4 col-md-6 mb-r">
        <div className="card text-center card-cascade narrower">
          <div className="view overlay hm-white-slight z-depth-1">
            <img
              src={product.image}
              className="img-fluid"
              alt="1"
              style={{ width: "325px", height: "325px" }}
            />
            <a>
              <div className="mask waves-light waves-effect waves-light" />
            </a>
          </div>
          <div className="card-body">
            <h4 className="card-title">
              <strong>
                <a>{product.name}</a>
              </strong>
            </h4>
            <ul className="rating">
              <li>{this.renderRating(product.rating)}</li>
            </ul>
            <p className="card-text">
              Sản phẩm do {product.description} sản xuất
            </p>
            <div className="card-footer">
              <span className="left">{product.price}$</span>
              <span className="right">
                <a
                  className="btn-floating blue-gradient"
                  data-toggle="tooltip"
                  data-placement="top"
                  data-original-title="Add to Cart"
                  onClick={() => {
                    this.onAddToCart(product);
                  }}
                >
                  <i className="fa fa-shopping-cart" />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
