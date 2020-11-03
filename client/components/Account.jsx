class Account extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fullname: '',
      email: '',
      password: ''
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
    this.props.accountSubmit(this.state);
    this.props.startShipping();
  }

  render() {
    return (
      <div className='accountCreation'>
        <h2 className ='createAccountTitle'>Create An Account To Checkout</h2>

          <input
          className='fullName'
          placeholder='Full Name'
          name='fullname'
          value={this.state.fullname}
          onChange={this.handleInput}
          ></input>

          <br />
          <br />

          <input
          className='email'
          placeholder='Email Address'
          name='email'
          value={this.state.email}
          onChange={this.handleInput}
          ></input>

          <br />
          <br />

          <input
          className='password'
          placeholder='Create Password'
          name='password'
          value={this.state.password}
          onChange={this.handleInput}
          ></input>

          <br />
          <br />

          <button
          onClick={this.handleSubmit}
          className='continueShipping'>Continue To Shipping Information</button>

      </div>
    )
  }
}

export default Account;