const mongoose = require("mongoose");

//schema

let CategorySchema = new mongoose.Schema({
    categoryName: {
        type: String
    },
    isActive: {
        type: Boolean
    }
})

//model

let CategoryModel = mongoose.model("category", CategorySchema)
module.exports = CategoryModel