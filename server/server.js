const express = require('express');
const path = require('path');
const app = express();
const checkoutModel = require('./db/database.js');

const publicDirectory = path.join(__dirname, '../public');

app.use(express.static(publicDirectory));


app.listen(3000);