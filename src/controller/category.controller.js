const express = require("express");
const router = express.Router();
const Category = require("../model/category.model");

router.post("/category", async(req, res)=>{

    try{
        const category = await Category.create(req.body);
        return res.status(201).send(category);
    }catch(err){
        return res.status(500).send(err);
    }
})

router.get("/category", async(req, res)=>{

    try{
        const category = await Category.find().lean().exec();
        return res.status(201).send(category);
    }catch(err){
        return res.status(500).send(err);
    }
})

router.get("/category/:id", async (req, res)=>{
    
    try{
        const category = await Category
        .find(req.params.id)
        .lean()
        .exec();
        return res.status(201).send(category)
    }catch(err){
        return res.status(500).send({message: err.message})
    }
})

router.patch("/category/:id", async (req, res)=>{
    
    try{
        const category = await Category.findByIdAndUpdate(
            req.params.id,
            req.body,{
               new:true
            });
        return res.send(category)
    }catch(err){
        return res.status(500).send({message: err.message})
    }
})

router.delete("/category/:id", async (req, res)=>{
    
    try{
        const category = await Category.findByIdAndDelete(
            req.params.id
            );
        return res.send(category)
    }catch(err){
        return res.status(500).send({message: err.message})
    }
})

module.exports = router;