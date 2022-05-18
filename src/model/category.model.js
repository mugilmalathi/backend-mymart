const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    id:{type: Number},
    image:{type: String, require: true},
    title:{type: String, require: true}
},{
    versionKey: false,
    timestamps: true,
})

module.exports = mongoose.model("category", categorySchema);