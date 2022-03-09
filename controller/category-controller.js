const CategoryModel = require("../model/category-model");

//add
module.exports.addCategories = function(req,res){
    //db insert

    console.log(req.body.categoryName);

    let category = new CategoryModel({
        categoryName: req.body.categoryName

    })

    category.save(function (err,success){
        if (err) {
            //console.log(err)
            res.json({msg:"Something Wrong",data:err,status:-1, data: req.body})//-1 {382 484}
        }else{
            res.json({msg:"Category Added",status:200, data: success})//http status caode
        }
    })

}

//List
module.exports.getAllCategories = function(req,res){
    //rest
    CategoryModel.find(function (err,Categories){
        if(err){
                res.json({msg:"Something Wrong",data:err,status:-1, data: err})//-1 {382 484}
            }else{
                res.json({msg:"Categories",status:200, data: Categories})//http status caode
            }
    })
}

//Delete
module.exports.deleteCategory = function (req, res) {
    let categoryId = req.params.categoryId

    CategoryModel.deleteOne({ "_id": categoryId }, function (err, data) {
        if (err) {
            res.json({ msg: "Something Wrong!!!", status: -1, data: err })
        } else {
            res.json({ msg: "Category Removed...", status: 200, data: data })
        }
    })

}
//Update
module.exports.updateCategory = function(req,res){

    let categoryId = req.body.categoryId
    let categoryName =req.body.categoryName

    CategoryModel.updateOne({_id: categoryId},{categoryName : categoryName}, function (err,data){
        if(err){
            res.json({msg: "Soomething Wrong",status:-1, data:err})
        }else{
            res.json({msg: "Category Updated",status:200, data:data})
        }
    })
}