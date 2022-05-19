const express = require("express");
const router = express.Router();
const Fashion = require("../model/fashion.model");

router.post("/fashion", async(req, res)=>{

    try{
        const fashion = await Fashion.create(req.body);
        return res.status(201).send(fashion);
    }catch(err){
        return res.status(500).send(err);
    }
})

router.get("/fashion", async(req, res)=>{

    try{
        const fashion = await Fashion.find().lean().exec();
        return res.status(201).send(fashion);
    }catch(err){
        return res.status(500).send(err);
    }
})

router.get("/fashion/:id", async (req, res)=>{
    
    try{
        // const id = mongoose.Schema.Types.ObjectId;
        const fashion = await Fashion
        .find(req.params.id)
        .lean()
        .exec();
        return res.status(201).send(fashion)
    }catch(err){
        return res.status(500).send({message: err.message})
    }
})

router.patch("/fashion/:id", async (req, res)=>{
    
    try{
        const fashion = await Fashion.findByIdAndUpdate(
            req.params.id,
            req.body,{
               new:true
            });
        return res.send(fashion)
    }catch(err){
        return res.status(500).send({message: err.message})
    }
})

router.delete("/fashion/:id", async (req, res)=>{
    
    try{
        const fashion = await Fashion.findByIdAndDelete(
            req.params.id
            );
        return res.send(fashion)
    }catch(err){
        return res.status(500).send({message: err.message})
    }
})

module.exports = router;