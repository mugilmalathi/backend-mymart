const mongoose = require("mongoose");

const grocerySchema = new mongoose.Schema({
    id:{type: Number},
    title:{type: String},
    image:{type: String},
    price:{type: Number},
    description:{type: String},
    qty:{type: Number}
},{
    versionKey: false,
    timestamps: true,
})

module.exports = mongoose.model("grocery", grocerySchema);