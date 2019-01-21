import React, {Component, Fragment} from 'react';
import Product from "./Product";
import Title from "./Title";

class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: []
    }
  }

  render() {
    return (
      <Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="our" title="products"/>
            <div className="row">

            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default ProductList;