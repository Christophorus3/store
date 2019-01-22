import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {ProductConsumer} from "../context";
import {StyledButton} from "../components/Button"

class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const {id, company, img, info, price, title, inCart} = value.productDetail;
          return (
            <div className="container py-5">
              {/* title */}
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                  <h1>{title}</h1>
                </div>
              </div>
              {/* end title */}
              {/* product info */}
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <img src={img} className="img-fluid" alt="Product"/>
                </div>
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <h2>model: {title}</h2>
                  <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                    made by: {company}
                  </h4>
                  <h4 className="text-blue">price: ${price}</h4>
                  <p className="text-capitalize font-weight-bold mt-3 mb-0">
                    Product Information:
                  </p>
                  <p className="text-muted lead">
                    {info}
                  </p>
                  <div>
                    <Link to="/">
                      <StyledButton>Back to Products</StyledButton>
                    </Link>
                    <StyledButton
                      cart
                      disabled={inCart}
                      onClick={() => {
                        value.addToCart(id)
                      }}
                    >
                      {inCart ?
                        ("is in cart") :
                        (<i className="fas fa-cart-plus"></i>)
                      }
                    </StyledButton>
                  </div>
                </div>
              </div>
            </div>
          )
        }}
      </ProductConsumer>
    );
  }
}

export default Details;