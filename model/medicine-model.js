const mongoose = require("mongoose")

const MedicineSchema = new mongoose.Schema({
    medicineName: {
        type: String
    },
    basePrice: {
        type: Number
    },
    content: {
        type: String
    },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "category"
    },
    subcategoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "subcategory"
    },
    brandId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "brand"
    }
})

const MedicineModel = mongoose.model("medicine",MedicineSchema)

module.exports = MedicineModel