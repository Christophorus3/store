import React, {Component} from 'react';
//import update from 'immutability-helper';

import {storeProducts, detailProduct} from "./data";

const ProductContext = React.createContext();
//Provider

//Consumer

class ProductProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      productDetail: detailProduct
    }
  };

  componentDidMount() {
    this.setProducts();
  };

  setProducts() {
    //deep copy the products array:
    let products = [];
    storeProducts.forEach(item => {
      const singleItem = {...item};
      products = [...products, singleItem];
    });
    this.setState({products})

  }

  handleDetail() {
    console.log("Hello from detail");
  };

  addToCart() {
    console.log("add to cart")
  };

  render() {
    return (
      <ProductContext.Provider value={{
        ...this.state,
        handleDetail: this.handleDetail,
        addToCart: this.addToCart
      }}>
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};