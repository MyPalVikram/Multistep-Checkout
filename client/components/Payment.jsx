class Payment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      creditcard: '',
      expiration: '',
      cvv: '',
      billingzip: ''
    }

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(event) {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.paymentSubmit(this.state);
    this.props.startConfirm();
  }

  render() {
    return (
      <div className='payment'>
      <h2 className='paymentTitle'>Please Enter Your Payment Information</h2>

      <input
      className='creditCard'
      placeholder='Credit Card Number'
      name='creditcard'
      value={this.state.creditcard}
      onChange={this.handleInput}
      ></input>

      <br />
      <br />

      <input
      className='expiration'
      placeholder='Expiration (e.g 10/22)'
      name='expiration'
      value={this.state.expiration}
      onChange={this.handleInput}
      ></input>

      <br />
      <br />

      <input
      className='CVV'
      placeholder='CVV'
      name='cvv'
      value={this.state.cvv}
      onChange={this.handleInput}
      ></input>

      <br />
      <br />

      <input
      className='billingzip'
      placeholder='Billing Zipcode'
      name='billingzip'
      value={this.state.billingzip}
      onChange={this.handleInput}
      ></input>

      <br />
      <br />

      <button onClick={this.handleSubmit} className='submitPayment'>Confirm Order</button>
      <br />
      <h5  className='warning'>Once "Confirm Order" Has Been Clicked Payment Will Be Processed</h5>
    </div>
    )
  }
}

export default Payment;