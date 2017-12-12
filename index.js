const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config/config');
require('./db')();

const authRoutes = require('./routes/auth');

const app = express();

app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(bodyParser.json());

app.use('/api', authRoutes);

app.use('/', (req, res, next) => {
  res.json(res.data);
  next();
});

app.use('/', (err, req, res, next) => {
  res.json(err);
  next();
});

app.listen(config.general.port, () => {
  console.log(config.general.port);
});
