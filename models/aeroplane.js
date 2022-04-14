const mongoose = require("mongoose")
const aeroplaneSchema = mongoose.Schema({
name: String,
type: String,
noofpassengers: Number
})
module.exports = mongoose.model("Aeroplane",aeroplaneSchema)