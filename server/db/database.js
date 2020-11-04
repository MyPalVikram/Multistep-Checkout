const mongoose = require('mongoose');
const connectionString = 'mongodb://localhost:27017/checkoutDB';

mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Mongoose is connected');
});

const checkoutSchema = new mongoose.Schema ({
  user: {
    fullname: String,
    email: String,
    password: String
  },
  address: {
    lineone: String,
    linetwo: String,
    city: String,
    state: String,
    zipcode: String
  },
  payment: {
    creditcard: String,
    expiration: String,
    cvv: String,
    billingzip: String
  }
});

const Checkout = mongoose.model('Checkout', checkoutSchema);

module.exports = Checkout;

