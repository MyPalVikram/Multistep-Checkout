import Header from './Header.js';
import Checkout from './Checkout.js';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <Checkout />
      </div>
    )
  }
}

export default App;