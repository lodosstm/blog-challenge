const Promise = require('bluebird');
const redis = require('redis-node');
const config = require('../config/config');
const { path } = require('ramda');

const redisPort = path(['redis', 'port'], config);
const redisHost = path(['redis', 'host'], config);

const redisClient = Promise.promisifyAll(redis.createClient(redisPort, redisHost));

redisClient.on('error', (err) => {
  console.log(err);
});

module.exports = redisClient;
