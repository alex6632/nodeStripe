let express = require('express');
let router = express.Router();
const keySecret = process.env.STRIPE_SECRET_KEY || "sk_test_gwrn2dfry4hHknzcYbXCs3Kx";
const stripe = require("stripe")(keySecret);

router.post('/charge', (req, res) => {
  let amount = 500;

  stripe.customers.create({
    email: req.body.stripeEmail,
    source: req.body.stripeToken
  }).then(customer =>
      stripe.charges.create({
        amount,
        description: "Sample Charge",
        currency: "eur",
        customer: customer.id
      })
  ).then(charge =>
    res.render("charge")
  );
});

module.exports = router;