const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  // eslint-disable-next-line max-len
  "sk_test_51Jf21dFTHpjxfhtfzBXo1Skq5fgXYjlTbX7HEhlb4Ir2ZuNzA69P9Y2moMTZuQU0RRQdyTtUXyG8Br5B9noQnjEc00VLQShlvD"
);

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (req, res) => res.status(200).send("Hello world"));

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;
  console.log("Payment request received", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  res.status(201).json({ clientSecret: paymentIntent });
});

exports.api = functions.https.onRequest(app);
// http://localhost:5001/clone-3842b/us-central1/api
