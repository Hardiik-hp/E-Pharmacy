const mongoose = require("mongoose");

//schema

let SubcategorySchema = new mongoose.Schema({
    subcategoryName: {
        type: String
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "categories"
    },
    isActive: {
        type: Boolean
    }
})

//model

let SubcategoryModel = mongoose.model("subcategory", SubcategorySchema)
module.exports = SubcategoryModel