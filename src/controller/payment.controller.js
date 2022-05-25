const express = require("express");
const router = express.Router();

router.post("/payment", async(req, res)=>{
    console.log(req.body);
    res.send("Working properly..!")
})