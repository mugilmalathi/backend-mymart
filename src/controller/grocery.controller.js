const express = require("express");
const router = express.Router();
const Grocery = require("../model/grocery.model");

router.post("/grocery", async(req, res)=>{

    try{
        const grocery = await Grocery.create(req.body);
        return res.status(201).send(grocery);
    }catch(err){
        return res.status(500).send(err);
    }
})

router.get("/grocery", async(req, res)=>{

    try{
        const page = req.query.page || 1;
        const size = req.query.size || 4;
        const grocery = await Grocery
        .find()
        .skip((page-1)*size)
        .next((page+1)*size)
        .limit(size)
        .lean()
        .exec();
        return res.status(201).send(grocery);
    }catch(err){
        return res.status(500).send(err);
    }
})

router.get("/grocery/:id", async (req, res)=>{
    
    try{
        // const id = mongoose.Schema.Types.ObjectId;
        const grocery = await Grocery
        .find(req.params.id)
        .lean()
        .exec();
        return res.status(201).send(grocery)
    }catch(err){
        return res.status(500).send({message: err.message})
    }
})

router.patch("/grocery/:id", async (req, res)=>{
    
    try{
        const grocery = await Grocery.findByIdAndUpdate(
            req.params.id,
            req.body,{
               new:true
            });
        return res.send(grocery)
    }catch(err){
        return res.status(500).send({message: err.message})
    }
})

router.delete("/grocery/:id", async (req, res)=>{
    
    try{
        const grocery = await Grocery.findByIdAndDelete(
            req.params.id
            );
        return res.send(grocery)
    }catch(err){
        return res.status(500).send({message: err.message})
    }
})

module.exports = router;