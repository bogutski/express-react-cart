"use strict";
import express from 'express';

//using let
let app = express();

app.use('/user', (req, res) => {
  res.json([{
    id: 1,
    username: "samsepi0l"
  }, {
    id: 2,
    username: "D0loresH4ze"
  }]);
});

app.listen(5000, () => {
  console.log('Example app listening on port 5000!');
});