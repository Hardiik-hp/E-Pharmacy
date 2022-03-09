const mongoose = require("mongoose")

const PharmacistSchema = new mongoose.Schema({
    pharmacistName: {
        type: String
    },
    stkAddress: {
        type: String
    },
    state: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "states"
    },
    city: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "cities"
    },
    /*patient: {
        types: mongoose.Schema.Types.ObjectId,
        ref: "roles"
    },*/
    pincode: {
        types: Number
    },
    feedbackEmail: {
        types: String
    },
    customerSupport: {
        types: String
    },
    contactNum: {
        types: Number
    },
    role: {
        types: mongoose.Schema.Types.ObjectId,
        ref: "roles"
    }
})

const PharmacistModel = mongoose.model("pharmacist",PharmacistSchema)

module.exports = PharmacistModel