const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();

const PORT = 3000;

const publicDirectory = path.join(__dirname, '../public');
app.use(express.static(publicDirectory));

mongoose.connect('mongodb://localhost:27017', { useNewUrlParser: true} );

app.listen(PORT);