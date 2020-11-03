class Shipping extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lineone: '',
      linetwo: '',
      city: '',
      state: '',
      zipcode: ''
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
    this.props.shippingSubmit(this.state);
    this.props.startPayment();

  }

  render() {
    return (
      <div className='shipping'>
      <h2 className='shippingTitle'>Please Enter Your Preferred Shipping Address</h2>

      <input
      className='addressline1'
      placeholder='Address Line 1'
      name='lineone'
      value={this.state.lineone}
      onChange={this.handleInput}
      ></input>

      <br />
      <br />

      <input
      className='addressline2'
      placeholder='Address Line 2'
      name='linetwo'
      value={this.state.linetwo}
      onChange={this.handleInput}
      ></input>

      <br />
      <br />

      <input
      className='city'
      placeholder='City'
      name='city'
      value={this.state.city}
      onChange={this.handleInput}
      ></input>

      <br />
      <br />

      <input
      className='state'
      placeholder='State'
      name='state'
      value={this.state.state}
      onChange={this.handleInput}
      ></input>

      <br />
      <br />

      <input
      className='zipcode'
      placeholder='Zipcode'
      name='zipcode'
      value={this.state.zipcode}
      onChange={this.handleInput}
      ></input>

      <br />
      <br />

      <button onClick={this.handleSubmit} className='continuePayment'>Continue To Payment Method</button>
    </div>
    )
  }
}

export default Shipping;