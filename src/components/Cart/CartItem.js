import React from 'react';

function CartItem(props) {
  let { item, context } = props;
  return (
      <div className="row my-5 text-capitalize text-center">
        <div className="col-10 mx-auto col-lg-2">
          <img className="img-fluid"
               src={item.img}
               alt="product"
               style={{width: '5rem', height: '5rem'}}/>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <span className="d-lg-none">product:</span> {item.title}
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <span className="d-lg-none">price:</span> {item.price}
        </div>
        <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
          <div className="d-flex justify-content-center">
            <div>
              <span className="btn btn-black mx-1"
                    onClick={() => {context.decrement(item.id)}}
              >
                -
              </span>
              <span className="btn btn-black mx-1">{item.count}</span>
              <span className="btn btn-black mx-1"
                    onClick={() => {context.increment(item.id)}}
              >
                +
              </span>
            </div>
          </div>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <div className="cart-icon" onClick={() => context.removeItem(item.id)}>
            <i className="fas fa-trash" />
          </div>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <strong>item total: $ {item.price * item.count}</strong>
        </div>
      </div>
  );
}

export default CartItem;