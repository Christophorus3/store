import React from 'react';

function EmptyCart(props) {
  return (
    <div className="contaoner mt-5">
      <div className="row">
        <div className="col-10 mx-auto text-center text-title">
          your cart is currently empty.
        </div>
      </div>
    </div>
  );
}

export default EmptyCart;