const stockInfo = require('./stockChart/stockInfo');
const quotes = require('./stockChart/quotes');

module.exports = app => {
  app.use('/api/stocks', stockInfo);
  app.use('/api/quotes', quotes);
}