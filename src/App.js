import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductsContainers from "./redux/containers/ProductsContainers";
import CartContainer from "./redux/containers/CartContainer";
import MessageContainer from "./redux/containers/MessageContainer";

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <main id="mainContainer">
          <div className="container">
            {/* <Products /> */}

            <ProductsContainers />

            {/* <Message /> */}

            <MessageContainer />

            {/* <CartList /> */}

            <CartContainer />
          </div>
        </main>

        <Footer />
      </div>
    );
  }
}
