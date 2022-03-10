const mongoose = require("mongoose")

//schema
let PaymentSchema = new mongoose.Schema({
    paymentDate: {
        type: Date,
        required: true
    }
})

//model

let PaymentModel = mongoose.model("payment", PaymentSchema)

module.exports = PaymentModel