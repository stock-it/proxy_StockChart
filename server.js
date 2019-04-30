require('newrelic');
const express = require('express');
const path = require('path');
const mountRoutes = require('./routes');

const app = express();
const port = process.env.PORT || 3000;
mountRoutes(app);

app.use('/stocks/:stockId', express.static(path.join(__dirname, 'public')));
// app.use('/stocks/:ticker', express.static(path.join(__dirname, 'public')));

// app.use('/api/ratings/:ticker', (req, res) => {
//   ratings.get(`/api/ratings/${req.params.ticker}`)
//     .then(response => res.send(response.data))
//     .catch(err => res.send(err));
// })

// app.use('/api/history/:ticker', (req, res) => {
//   ratings.get(`/api/history/${req.params.ticker}`)
//     .then(response => res.send(response.data))
//     .catch(err => res.send(err));
// })



// app.use('/api/accounts/:account_number', (req, res) => {
//   stockChart.get(`/api/accounts/${req.params.account_number}`)
//     .then(response => res.send(response.data))
//     .catch(err => res.send(err));
// })

// app.use('/api/quotes/:symbol', (req, res) => {
//   Tags.get(`/api/quotes/${req.params.symbol}`)
//     .then(response => res.send(response.data))
//     .catch(err => res.send(err));
// })

// app.use('/stocks/tags/:tag', (req, res) => {
//   Tags.get(`/stocks/tags/${req.params.tag}`)
//     .then(response => res.send(response.data))
//     .catch(err => res.send(err));
// })
// app.use('/api/:stockId', (req, res) => {
//   axios4000.get(`/api/${req.params.stockId}`)
//     .then(response => res.send(response.data))
//     .catch(err => res.send(err));
// })

app.listen(port, () => {
  console.log(`proxy server running at: http://localhost:${port}`);
});
