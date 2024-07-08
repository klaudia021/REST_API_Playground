const express = require('express');
const bodyParser = require('body-parser');
const PORT = 8008;

const app = express();

const menuRoutes = require('./routes/menuRoutes');

app.use(bodyParser.json());

app.use('/', menuRoutes);

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));