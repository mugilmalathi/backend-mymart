const mongoose = require("mongoose");

const mobileSchema = new mongoose.Schema({
    id:{type: Number, required:true},
    title:{type: String, required:true},
    image:{type: String, required:true},
    price:{type: Number, required:true},
    description:{type: String, required:true},
    qty:{type: Number},
    cart:{type: String}
},{
    versionKey: false,
    timestamps: true,
})

module.exports = mongoose.model("mobile", mobileSchema);