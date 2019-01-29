import React from 'react';
import CartItem from "./CartItem";

function CartList(props) {
  const { cart, context } = props;

  return (
    <div className="container-fluid">
      {
        cart.map(item => {
          return <CartItem key={item.id} item={item} context={context}/>
        })
      }
    </div>
  );
}

export default CartList;