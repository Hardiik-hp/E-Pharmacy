const SubcategoryModel = require("../model/subcategory-model")
const CategoryModel = require("../model/category-model")

//add
module.exports.addSubcategory = function (req, res) {

    let subcategoryName = req.body.subcategoryName
    let category = req.body.category

    let subcategory = new SubcategoryModel({
        subcategoryName: subcategoryName,
        category: category
    })
    subcategory.save(function (err, data) {
        if (err) {
            res.json({ msg: "Something Wrong!!!", data: err, status: -1 })
        } else {
            res.json({ msg: "Subcategory Added", data: data, status: 200 })
        }
    })
}

//list
module.exports.getAllSubcategories = function (req, res) {
    SubcategoryModel.find().populate("category").exec(function (err, data) {
        if (err) {
            res.json({ msg: "Something Wrong!!!", data: err, status: -1 })
        } else {
            res.json({ msg: "Subcategories ...", data: data, status: 200 })
        }
    })
}

//delete
module.exports.deleteSubcategory = function (req, res) {
    //params Subcategoryid 
    let subcategoryId = req.params.subcategoryId //postman -> userid 

    SubcategoryModel.deleteOne({ "_id": subcategoryId }, function (err, data) {
        if (err) {
            res.json({ msg: "Something Wrong", status: -1, data: err})//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "user removed...", status: 200, data: data})//http status code 
        }
    })
}

//Update
module.exports.updateSubcategory = function (req, res) {

    let subcategoryId = req.body.subcategoryId
    let subcategoryName = req.body.subcategoryName


    SubcategoryModel.updateOne({ _id: subcategoryId }, { subcategoryName: subcategoryName }, function (err, data) {
        if (err) {
            res.json({ msg: "Something Wrong!!!", status: -1, data: err })
        } else {
            res.json({ msg: "updated...", status: 200, data: data })
        }
    })
}