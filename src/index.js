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

app.use("/", groceryController);
app.use("/", usersController);
app.use("/", categoryController);
app.use("/", mobileController);
app.use("/", addressController);
app.use("/", fashionController);
app.use("/", electronicController);

app.listen(PORT, async()=>{

    try{
        await connect();
        console.log("DB is Connected..!")
    }catch(err){
        console.log("Err", err)
    }
})

//https://boiling-brushlands-36073.herokuapp.com/grocery

