const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
    id:{type: Number},
    firstname:{type: String, require: true},
    lastname:{type: String, require: true},
    email:{type: String, require: true},
    mobile:{type: Number},
    password:{type: String, require: true}
},{
    versionKey: false,
    timestamps: true,
})

module.exports = mongoose.model("users", usersSchema);