const express = require("express");
const router = express.Router();
const Address = require("../model/address.model");

router.post("/address", async(req, res)=>{

    try{
        const address = await Address.create(req.body);
        return res.status(201).send(address);
    }catch(err){
        return res.status(500).send(err);
    }
})

router.get("/address", async(req, res)=>{

    try{
        const address = await Address.find().lean().exec();
        return res.status(201).send(address);
    }catch(err){
        return res.status(500).send(err);
    }
})

router.get("/address/:id", async (req, res)=>{
    
    try{
        const address = await Address
        .find(req.params.id)
        .lean()
        .exec();
        return res.status(201).send(address)
    }catch(err){
        return res.status(500).send({message: err.message})
    }
})

router.patch("/address/:id", async (req, res)=>{
    
    try{
        const address = await Address.findByIdAndUpdate(
            req.params.id,
            req.body,{
               new:true
            });
        return res.send(address)
    }catch(err){
        return res.status(500).send({message: err.message})
    }
})

router.delete("/address/:id", async (req, res)=>{
    
    try{
        const address = await Address.findByIdAndDelete(
            req.params.id
            );
        return res.send(address)
    }catch(err){
        return res.status(500).send({message: err.message})
    }
})

module.exports = router;