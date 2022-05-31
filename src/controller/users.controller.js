const express = require("express");
const router = express.Router();
const Users = require("../model/users.model");

router.post("/users", async(req, res)=>{

    try{
        const users = await Users.create(req.body);
        if(!users){
            console.log("User already Exist..!")
        }else{
            return res.status(201).send(users);
        }
    }catch(err){
        return res.status(500).send(err);
    }
})

router.get("/users", async(req, res)=>{

    try{
        const users = await Users.find().lean().exec();
        return res.status(201).send(users);
    }catch(err){
        return res.status(500).send(err);
    }
})

module.exports = router;