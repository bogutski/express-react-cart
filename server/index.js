"use strict";
import express from 'express';

let app = express();

app.use('/', (req, res) => {
  res.json(
    [{
      id: 1,
      username: '123'
    }, {
      id: 2,
      username: "sample2"
    }]
  );
});

app.listen(5000, () => {
  console.log('Example app listening on port 5000');
});