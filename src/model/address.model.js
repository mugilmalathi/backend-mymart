const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
    id:{type: Number},
    doorno:{type: Number, require: true},
    area:{type: String, require: true},
    address:{type: String, require: true},
    city:{type: String, require: true},
    state:{type: String, require: true},
    pincode:{type: Number, require: true}
},{
    versionKey: false,
    timestamps: true,
})

module.exports = mongoose.model("address", addressSchema);