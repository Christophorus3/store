import React, {Component} from 'react';
import styled from "styled-components";
import { ProductConsumer } from "../context";
import { StyledButton} from "./Button";
import { Link } from "react-router-dom";

class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
      {(value) => {
        const {id, img, title, price} = value.modalProduct
        if (value.modalOpen) {
          return (
          <ModalContainer>
            <div className="container">
              <div className="row">
                <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5">
                  <h5>Item added to cart</h5>
                  <img src={img} className="img-fluid" alt="Product" />
                  <h5>{title}</h5>
                  <h5 className="text-muted">$ {price}</h5>
                  <Link to="/">
                    <StyledButton onClick={value.closeModal}>
                      Continue Shopping
                    </StyledButton>
                  </Link>
                  <StyledButton cart>
                    go to cart
                  </StyledButton>
                  </div>
              </div>
            </div>
          </ModalContainer>)
        }
      }}
      </ProductConsumer>
    );
  }
}

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  
  #modal {
    background: var(--mainWhite);
  }
`;

export default Modal;