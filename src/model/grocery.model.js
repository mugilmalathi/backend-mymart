const mongoose = require("mongoose");

const grocerySchema = new mongoose.Schema({
    id:{type: Number},
    title:{type: String},
    image:{type: String},
    price:{type: Number}
},{
    versionkey: false,
    timestamps: true
})

module.exports = mongoose.model("grocery", grocerySchema);