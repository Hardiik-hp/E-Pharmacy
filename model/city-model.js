const mongoose = require("mongoose")

//schema
let CitySchema = new mongoose.Schema({
    cityName: {
        type: String,
        required: true
    },
    state: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "states"
    }
})

//model

let CityModel = mongoose.model("city", CitySchema)

module.exports = CityModel