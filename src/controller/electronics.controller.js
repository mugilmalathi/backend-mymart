const express = require("express");
const router = express.Router();
const Electronic = require("../model/electronics.model");

router.post("/electronic", async(req, res)=>{

    try{
        const electronic = await Electronic.create(req.body);
        return res.status(201).send(electronic);
    }catch(err){
        return res.status(500).send(err);
    }
})

router.get("/electronic", async(req, res)=>{

    try{
        const electronic = await Electronic.find().lean().exec();
        return res.status(201).send(electronic);
    }catch(err){
        return res.status(500).send(err);
    }
})

router.get("/electronic/:id", async (req, res)=>{
    
    try{
        // const id = mongoose.Schema.Types.ObjectId;
        const electronic = await Electronic
        .find(req.params.id)
        .lean()
        .exec();
        return res.status(201).send(electronic)
    }catch(err){
        return res.status(500).send({message: err.message})
    }
})

router.patch("/electronic/:id", async (req, res)=>{
    
    try{
        const electronic = await Electronic.findByIdAndUpdate(
            req.params.id,
            req.body,{
               new:true
            });
        return res.send(electronic)
    }catch(err){
        return res.status(500).send({message: err.message})
    }
})

router.delete("/electronic/:id", async (req, res)=>{
    
    try{
        const electronic = await Electronic.findByIdAndDelete(
            req.params.id
            );
        return res.send(electronic)
    }catch(err){
        return res.status(500).send({message: err.message})
    }
})

module.exports = router;