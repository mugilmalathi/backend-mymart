const express = require("express");
const router = express.Router();
const Mobile = require("../model/mobile.model");

router.post("/mobile", async(req, res)=>{

    try{
        const mobile = await Mobile.create(req.body);
        return res.status(201).send(mobile);
    }catch(err){
        return res.status(500).send(err);
    }
})

router.get("/mobile", async(req, res)=>{

    try{
        const mobile = await Mobile.find().lean().exec();
        return res.status(201).send(mobile);
    }catch(err){
        return res.status(500).send(err);
    }
})

router.get("/mobile/:_id", async (req, res)=>{
    
    try{
        // const id = mongoose.Schema.Types.ObjectId;
        const mobile = await Mobile
        .find(req.params.id)
        .lean()
        .exec();
        return res.status(201).send(mobile)
    }catch(err){
        return res.status(500).send({message: err.message})
    }
})

router.patch("/mobile/:_id", async (req, res)=>{
    
    try{
        const mobile = await Mobile.findByIdAndUpdate(
            req.params.id,
            req.body,{
               new:true
            });
        return res.send(mobile)
    }catch(err){
        return res.status(500).send({message: err.message})
    }
})

router.delete("/mobile/:_id", async (req, res)=>{
    
    try{
        const mobile = await Mobile.findByIdAndDelete(
            req.params.id
            );
        return res.send(mobile)
    }catch(err){
        return res.status(500).send({message: err.message})
    }
})

module.exports = router;