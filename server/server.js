const express = require('express');
const path = require('path');
const app = express();
const database = require('./db/database.js');
const checkoutController = require('./controller/checkoutController.js');

const publicDirectory = path.join(__dirname, '../public');
app.use(express.json());
app.use(express.static(publicDirectory));

app.post('/checkout', checkoutController.post);


app.listen(3000);