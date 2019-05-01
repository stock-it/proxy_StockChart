const Router = require('express-promise-router');
const { stockChart } = require('../baseURLs');
const redis = require('../../redis');

const router = new Router();

router.get('/:stockId/:label', (req, res) => {
  const { stockId, label } = req.params;
  const key = `StockQuotes-${stockId}${label}`
  redis.get(key, async (err, response) => {
    if (err || !response) {
      const { data } = await stockChart.get(`/api/quotes/${stockId}/${label}`);
      redis.set(key, JSON.stringify(data));
      res.send(data);
    } else {
      res.send(JSON.parse(response))
    }
  });
});

module.exports = router;