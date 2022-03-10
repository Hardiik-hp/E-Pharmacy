const mongoose = require("mongoose")

//schema
let StatusSchema = new mongoose.Schema({
    status: {
        type: String,
        required: true
    }
})

//model

let StatusModel = mongoose.model("status", StatusSchema)

module.exports = StatusModel