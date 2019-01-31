import React, {Component} from 'react';
import PaypalExpressButton from 'react-paypal-express-checkout';

class PayPalButton extends Component {

  onSuccess = (payment) => {
    console.log("PayPal payment succeeded!", payment);
    this.props.clearCart();
    this.props.history.push('/');
  };

  onCancel = (data) => {
    console.log("PayPal payment was canceled!", data);
  };

  onError = (error) => {
    console.log("PayPal Error!", error);
  };

  render() {
    let env = "sandbox";
    let currency = "EUR";

    const client = {
      sandbox: process.env.REACT_APP_APP_ID,
      production: ""
    };

    return (
      <PaypalExpressButton
        env={env}
        client={client}
        currency={currency}
        total={this.props.total}
        onError={this.onError}
        onSuccess={this.onSuccess}
        onCancel={this.onCancel}
      />
    );
  }
}

export default PayPalButton;