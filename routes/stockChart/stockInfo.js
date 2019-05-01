const Router = require('express-promise-router');
const redis = require('../../redis');
const { stockChart } = require('../baseURLs');

const router = new Router();

router.get('/:stockId', async (req, res) => {
  const { stockId } = req.params;
  const key = `StockInfo-${stockId}`
  redis.get(key, async (err, response) => {
    if (err || !response) {
      const { data } = await stockChart.get(`/api/stocks/${stockId}`);
      redis.set(key, JSON.stringify(data));
      res.send(data);
    } else {
      res.send(JSON.parse(response))
    }
  });
});

module.exports = router;
