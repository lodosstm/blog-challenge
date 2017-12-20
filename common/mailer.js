const nodemailer = require('nodemailer');
const config = require('../config/config');
const { path } = require('ramda');

const mailerService = path(['mailer', 'service'], config);
const mailerName = path(['mailer', 'user'], config);
const mailerPass = path(['mailer', 'pass'], config);

module.exports = nodemailer.createTransport({
  service: mailerService,
  auth: {
    user: mailerName,
    pass: mailerPass,
  },
});
