const mongoose = require("mongoose");

const grocerySchema = new mongoose.Schema({
    id:{type: Number, require:true},
    title:{type: String, require:true},
    image:{type: String, require:true},
    price:{type: Number, require:true},
    description:{type: String, require:true},
    qty:{type: Number}
},{
    versionKey: false,
    timestamps: true,
})

module.exports = mongoose.model("grocery", grocerySchema);