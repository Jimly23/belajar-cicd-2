const express = require('express');
const app = express();
const port = 3002;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/home', (req, res) => {
  res.send('Hello Home!');
});

app.get('/admin', (req, res) => {
  res.send('Hello Admin!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});