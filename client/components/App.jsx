import Header from './Header.js';
import Checkout from './Checkout.js';
import Account from './Account.js';
import Shipping from './Shipping.js';
import Payment from './Payment.js';
import Confirmation from './Confirmation.js';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.userData = [];

    this.state = {
      checkout: false,
      shipping: false,
      payment: false,
      confirm: false
    }

    this.startCheckout = this.startCheckout.bind(this);
    this.startShipping = this.startShipping.bind(this);
    this.startPayment = this.startPayment.bind(this);
    this.startConfirm = this.startConfirm.bind(this);
    this.accountSubmit = this.accountSubmit.bind(this);
    this.shippingSubmit = this.shippingSubmit.bind(this);
    this.paymentSubmit = this.paymentSubmit.bind(this);

  }

  startCheckout() {
    this.setState({
      checkout: !this.state.checkout
    })
  }

  startShipping() {
    this.setState({
      shipping: !this.state.shipping
    })
  }

  startPayment() {
    this.setState({
      payment: !this.state.payment
    })
  }

  startConfirm() {
    this.setState({
      confirm: !this.state.confirm
    })
  }

  accountSubmit(userObj) {
    this.userData.push({ user: userObj })
  }

  shippingSubmit(addressObj) {
    this.userData.push({ address: addressObj })
  }

  paymentSubmit(paymentObj) {
    this.userData.push({ payment: paymentObj })
  }

  render() {
    let startedCheckout = this.state.checkout;
    let startedShipping = this.state.shipping;
    let startedPayment = this.state.payment;
    let startedConfirm = this.state.confirm;

    return (
      <div>
        <Header />
        { !startedCheckout ? <Checkout startCheckout={this.startCheckout} /> : null }

        { startedCheckout && !startedShipping ? <Account startShipping={this.startShipping} accountSubmit={this.accountSubmit} /> : null }

        { startedShipping && !startedPayment ? <Shipping startPayment={this.startPayment} shippingSubmit={this.shippingSubmit} /> : null }

        { startedPayment && !startedConfirm ? <Payment startConfirm={this.startConfirm} paymentSubmit={this.paymentSubmit} /> : null }

        { startedConfirm ? <Confirmation /> : null}
      </div>
    )
  }
}

export default App;