const express = require('express'); //pacote
const routes = require('./routes'); // arquivo
const cors = require('cors'); 

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(3333); 