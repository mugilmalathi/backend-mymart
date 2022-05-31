const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
    id:{type: Number},
    firstname:{type: String, required: true},
    lastname:{type: String, required: true},
    email:{type: String, required: true},
    mobile:{type: Number, required:true},
    password:{type: String, required: true}
},{
    versionKey: false,
    timestamps: true,
})

module.exports = mongoose.model("users", usersSchema);