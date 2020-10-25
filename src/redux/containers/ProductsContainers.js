import React, { Component } from "react";
import { connect } from "react-redux";
import Product from "../../components/Product";
import Products from "../../components/Products";
import PropTypes from "prop-types";
import { addToCart, changeMessage } from "../actions";

class ProductsContainer extends Component {
  renderProduct = (products) => {
    let result;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return (
          <Product
            key={index}
            product={product}
            onAddToCart={this.props.onAddToCart}
            onChangeMessage={this.props.onChangeMessage}
          />
        );
      });
    }
    return result;
  };
  render() {
    let { products } = this.props;
    return <Products>{this.renderProduct(products)}</Products>;
  }
}

ProductsContainer.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      inventory: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ).isRequired,
  onChangeMessage: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    products: state.Product,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddToCart: (product) => {
      dispatch(addToCart(product, 1));
    },
    onChangeMessage: (message) => {
      dispatch(changeMessage(message));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
