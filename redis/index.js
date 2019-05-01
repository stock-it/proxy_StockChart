const redis = require('redis');
const getSeconds = require('./helpers');

const port = process.env.REDISPORT || 6379;
const host = process.env.REDISHOST || '127.0.0.1';
const password = process.env.REDISPW || null;
// can set optional port/host as an argument to client
const client = redis.createClient(port, host, {
  password,
  socket_keepalive: true
});

client.on('connect', () => {
  console.log(`Redis connected on port ${port}`)
});

client.on('error', err => {
  console.error(`Redis Error: ${err}`)
});

module.exports = {
  set: (key, value) => {
    // expires each cache item daily to account for new "daily stocks";
    const seconds = getSeconds();
    return client.setex(key, seconds, value);
  },
  get: (key, cb) => {
    return client.get(key, (err, result) => {
      if (err) {
        cb(err);
      } else {
        cb(null, result);
      }
    });
  }
}