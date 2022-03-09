const mongoose = require("mongoose")

//schema
let CitySchema = new mongoose.Schema({
    cityName: {
        type: String,
        required: true
    },
    stateId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "state"
    }
})

//model

let CityModel = mongoose.model("city", CitySchema)

module.exports = CityModel