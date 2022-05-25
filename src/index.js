const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

require("dotenv").config();

const connect = require("./config/db");

const PORT = process.env.PORT;

const groceryController = require("./controller/grocery.controller");
const usersController = require("./controller/users.controller");
const categoryController = require("./controller/category.controller");
const mobileController = require("./controller/mobile.controller");
const addressController = require("./controller/address.controller");
const fashionController = require("./controller/fashion.controller");
const electronicController = require("./controller/electronics.controller");
// const paymentController = require("./controller/payment.controller");

app.use("/", groceryController);
app.use("/", usersController);
app.use("/", categoryController);
app.use("/", mobileController);
app.use("/", addressController);
app.use("/", fashionController);
app.use("/", electronicController);
// app.use("/", paymentController);


const {v4:uuidv4} = require("uuid");
const stripe = require("stripe")("sk_test_51L3F1zSAb8TFHtBOPYPCTXRmzGNffA54GKdoVfV9dlrlDzJZ4HDGytCxwufrQ2JhZUQNyHwB4MUg7siUliI4lwx300XCNpMV7M")

app.post("/payment", async(req, res)=>{
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

app.get("/payment", (req, res)=>{
    res.send("It is working..!")
})

app.listen(PORT, async()=>{

    try{
        await connect();
        console.log("DB is Connected..!")
    }catch(err){
        console.log("Err", err)
    }
})

//https://boiling-brushlands-36073.herokuapp.com/grocery

