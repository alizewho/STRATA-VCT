require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
console.log(`port : ${process.env.PORT}`);
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});