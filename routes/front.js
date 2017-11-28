const express = require('express');
const router = express.Router();
const keyPublishable = process.env.STRIPE_PUBLISH_KEY || "pk_test_YWR4lvgKIKUlFKiHoG8LP9Nw";

router.get('/', (req, res) => {
  res.render('index', {keyPublishable});
});

router.get('/basket', (req, res) => {
  res.render('basket');
});

module.exports = router;