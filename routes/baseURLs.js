const axios = require('axios');

const { stockChartHOST, ratingsHOST, tagsHOST } = process.env;

const ratings = axios.create({
  baseURL: ratingsHOST || 'http://localhost:3001',
});

const stockChart = axios.create({
  baseURL: stockChartHOST || 'http://localhost:4000',
});

const Tags = axios.create({
  baseURL: tagsHOST || 'http://localhost:3003',
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