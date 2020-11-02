const express = require('express');
const path = require('path');
const app = express();

const PORT = 3000;

const publicDirectory = path.join(__dirname, '../public');

app.use(express.static(publicDirectory));

app.listen(PORT);