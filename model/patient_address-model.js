const mongoose = require("mongoose")


const PatientAddressSchema = new mongoose.Schema({

    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "patients"
    },
    address: {
        type: String,
    },
    state: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "states"
    },
    city: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "cities"
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