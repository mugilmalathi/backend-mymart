const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    id:{type: Number},
    image:{type: String, required: true},
    title:{type: String, required: true}
},{
    versionKey: false,
    timestamps: true,
})

module.exports = mongoose.model("category", categorySchema);