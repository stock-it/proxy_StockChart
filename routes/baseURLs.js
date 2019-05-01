const axios = require('axios');

const ratings = axios.create({
  baseURL: 'http://localhost:3001',
});

const stockChart = axios.create({
  baseURL: 'http://localhost:4000',
});

const Tags = axios.create({
  baseURL: 'http://localhost:3003',
});

const axios4000 = axios.create({
  baseURL: 'http://localhost:4001',
});

module.exports = {
  ratings,
  stockChart,
  Tags,
  axios4000
}