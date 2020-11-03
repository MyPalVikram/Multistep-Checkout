const Checkout = (props) => (
  <div className='checkout'>
    <button onClick={props.startCheckout} className='checkoutButton'>Begin Checkout</button>
  </div>
)

export default Checkout;