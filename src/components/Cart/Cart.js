import React, {Component} from 'react';
import Title from "../Title";
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import { ProductConsumer } from "../../context";
import CartList from "./CartList";


class Cart extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          { context => {
            const { cart } = context;
            if (cart.length > 0) {
              return (
                <div>
                  <Title name="your" title="cart"/>
                  <CartColumns/>
                  <CartList cart={cart} context={context}/>
                </div>
              )
            } else {
              return (
                <EmptyCart />
              )
            }
          }}
        </ProductConsumer>
      </section>
    );
  }
}

export default Cart;