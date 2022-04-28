const mongoose = require("mongoose")
const aeroplaneSchema = mongoose.Schema({
name: String,
type: String,
noofpassengers: {
    type: Number,
    min: 3,
    max: 98,
require:true  }
})
module.exports = mongoose.model("Aeroplane",aeroplaneSchema)