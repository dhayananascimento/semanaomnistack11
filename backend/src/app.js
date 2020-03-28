const express = require('express'); //pacote
const routes = require('./routes'); // arquivo
const cors = require('cors'); 

const {errors} = require('celebrate');

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);
app.use(errors());

module.exports = app;