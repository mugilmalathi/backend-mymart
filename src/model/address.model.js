const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
    id:{type: Number},
    doorno:{type: Number, required: true},
    area:{type: String, required: true},
    address:{type: String, required: true},
    city:{type: String, required: true},
    state:{type: String, required: true},
    pincode:{type: Number, required: true}
},{
    versionKey: false,
    timestamps: true,
})

module.exports = mongoose.model("address", addressSchema);