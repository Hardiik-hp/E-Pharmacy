const mongoose = require("mongoose");

//schema

let SubcategorySchema = new mongoose.Schema({
    subcategoryName: {
        type: String
    },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "category"
    },
    isActive: {
        type: Boolean
    }
})

//model

let SubcategoryModel = mongoose.model("subcategory", SubcategorySchema)
module.exports = SubcategoryModel