const express = require('express');
const path = require('path');
const parser = require('body-parser');
const cors = require("cors");
const { getInfo } = require('../db/index.js');

const app = express();

app.use(cors());
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,'../client/dist')));

app.get('/api/restaurant', (req, res) => {
  getInfo(req.query.id, (err, data) => {
    if (err) { console.error(err); } else {
      res.status(200).send(data);
    }
  });
});

module.exports = app;
