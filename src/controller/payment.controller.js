const express = require("express");
const router = express.Router();
const {v4:uuidv4} = require("uuid");
const stripe = require("stripe")("sk_test_51L3F1zSAb8TFHtBOPYPCTXRmzGNffA54GKdoVfV9dlrlDzJZ4HDGytCxwufrQ2JhZUQNyHwB4MUg7siUliI4lwx300XCNpMV7M")

router.post("/payment", async(req, res)=>{
    const {product, token} = req.body;
    const transactionKey = uuidv4();
    return stripe.customers.create({
        email: token.email,
        source: token.id
    }).then((customer)=>{
        stripe.charges.create({
            amount:product.price,
            currency: "inr",
            customer: customer.id,
            receipt_email: token.email,
            description: product.name
        }).then((res)=>{
            res.json(res)
        }).catch((err)=>{
            console.log(err);
            
        })
    })
})


module.exports = router;