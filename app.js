'use strict';

const express = require('express')
const app = express();

const port = 4000;
const host = '0.0.0.0';

app.get('/', (req, res) => {
  res.send('This is Hello world');
})

app.listen(port, host);
console.log(`Running on http://${host}:${port}`);
