const mongoose = require("mongoose")

const MedicalStoreSchema = new mongoose.Schema({
    storeName: {
        type: String
    },
    storeAddress: {
        type: String
    },
    stkid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "stkid"
    }
})

const MedicalStoreModel = mongoose.model("medicalStore",MedicalStoreSchema)

module.exports = MedicalStoreModel