const mongoose = require("mongoose");

//schema

let PharmacistproductSchema = new mongoose.Schema({
    quentity: {
        type: Number
    },
    price: {
        type: Number
    },
    medicineId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "medicine"
    }
})

//model

let pharmacistProductModel = mongoose.model("pharmacistproduct", PharmacistproductSchema)
module.exports = pharmacistProductModel