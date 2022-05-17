const express = require("express");
const router = express.Router();
const Grocery = require("../model/grocery.model");

router.post("/grocery", async(req, res)=>{

    const grocery = await Grocery.create(req.body);
    return res.status(201).send(grocery);
})

router.get("/grocery", async(req, res)=>{

    const grocery = await Grocery.find().lean().exec();
    return res.status(201).send(grocery);
})

module.exports = router;