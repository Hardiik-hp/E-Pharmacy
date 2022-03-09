const mongoose = require("mongoose")

const MedicineSchema = new mongoose.Schema({
    medicineName: {
        type: String
    },
    basePrice: {
        type: String
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "categories"
    },
    subcategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "subcategories"
    },
    brand: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "brands"
    }
})

const MedicineModel = mongoose.model("medicine",MedicineSchema)

module.exports = MedicineModel