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
      productDetail: {},
      cart: [],
      modalOpen: false,
      modalProduct: detailProduct, // srsly? - hmm, maybe thats okay...
      cartSubTotal: 0, //srsly too?? - that can easily be simplified.
      cartTax: 0,
      cartTotal: 0
    };
  };

  componentDidMount() {
    this.setProducts();
  };

  setProducts = () => {
    //deep copy the products array:
    let products = [];
    storeProducts.forEach(item => {
      const singleItem = {...item};
      products = [...products, singleItem];
    });
    this.setState({products})

  };

  getItem = (id) => {
    const product = this.state.products.find(item => item.id === id);
    return product;
  };

  handleDetail = (id) => {
    const product = this.getItem(id);
    this.setState({
      productDetail: product
    })
  };

  addToCart = (id) => {
    //????
    let products = [...this.state.products];
    const index = products.indexOf(this.getItem(id));
    const product = products[index];
    product.inCart = true;
    product.count = 1;
    product.total = product.price;
    this.setState({
      //products,
      cart: [...this.state.cart, product]
    });
  };

  openModal = (id) => {
    const product = this.getItem(id);
    this.setState({
      modalOpen: true,
      modalProduct: product
    })
  };

  closeModal = () => {
    this.setState({
      modalOpen: false
    })
  };

  increment = (id) => {
    console.log("increment method here.")
  };

  decrement = (id) => {
    console.log("decrement")
  };

  removeItem = (id) => {
    console.log("remove item.")
  };

  clearCart = (id) => {
    console.log("cart cleared")
  };

  render() {
    return (
      <ProductContext.Provider value={{
        ...this.state,
        handleDetail: this.handleDetail,
        addToCart: this.addToCart,
        openModal: this.openModal,
        closeModal: this.closeModal,
        increment: this.increment,
        decrement: this.decrement,
        removeItem: this.removeItem,
        clearCart: this.clearCart
      }}>
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};