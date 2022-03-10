const mongoose = require("mongoose")


const PatientAddressSchema = new mongoose.Schema({

    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "patient"
    },
    address: {
        type: String,
    },
    state: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "state"
    },
    city: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "city"
    },
    pincode: {
        type: String,
    },
    isActive: {
        type: Boolean
    }

})

const PatientAddressModel = mongoose.model("PatientAddress", PatientAddressSchema);

module.exports = PatientAddressModel