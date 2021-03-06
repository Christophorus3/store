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
    }, () => this.calculateTotals());
  };

  removeFromCart = (id) => {
    //find item in cart with id and remove it from aray.
    console.log("remove item.")
    let cart = this.state.cart;
    let item = cart.find(item => item.id === id);
    item.total = 0;
    item.inCart = false;
    console.log(cart);
    cart = cart.filter(item => item.id !== id);
    console.log(cart);
    this.setState({
      cart
    }, () => this.calculateTotals());
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
    let cart = this.state.cart;
    let selectedProduct = this.getItem(id);
    selectedProduct.count += 1;
    this.setState({
      cart
    }, () => this.calculateTotals());
  };

  decrement = (id) => {
    let cart = this.state.cart;
    let selectedProduct = this.getItem(id);
    if (selectedProduct.count > 1) {
      selectedProduct.count -= 1;
    }
    this.setState({
      cart
    }, () => this.calculateTotals());
  };

  clearCart = (id) => {
    // this whole cart thing is flawed!
    this.setState({
      cart: []
    }, () => {
      //hack!! :D
      this.setProducts();
    })
  };

  calculateTotals = () => {
    let subtotal = 0;
    this.state.cart.map(item => (subtotal += item.total * item.count));
    const tempTax = subtotal * 0.2;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subtotal + tax;
    this.setState({
      cartSubTotal: subtotal,
      cartTax: tax,
      cartTotal: total
    })
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
        removeFromCart: this.removeFromCart,
        clearCart: this.clearCart
      }}>
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};