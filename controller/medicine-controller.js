const MedicineModel = require("../model/medicine-model");

//add
module.exports.addMedicines = function(req,res){
    //db insert

    let medicineName = req.body.medicineName
    let categoryId = req.body.categoryId
    let subcategoryId = req.body.subcategoryId
    let brandId = req.body.brandId
    let basePrice = req.body.basePrice
    let content = req.body.content

    let medicine = new MedicineModel({
        medicineName: medicineName,
        categoryId: categoryId,
        subcategoryId: subcategoryId,
        brandId: brandId,
        basePrice: basePrice,
        content: content
    })


    medicine.save(function (err,success){
        if (err) {
            //console.log(err)
            res.json({msg:"Something Wrong",data:err,status:-1, data: req.body})//-1 {382 484}
        }else{
            res.json({msg:"Medicine Added",status:200, data: success})//http status caode
        }
    })

}

//List
module.exports.getAllMedicines = function(req,res){
    //rest
    MedicineModel.find().populate("categoryId").populate("subcategoryId").populate("brandId").exec(function (err, data) {
        if(err){
                res.json({msg:"Something Wrong",data:err,status:-1, data: err})//-1 {382 484}
            }else{
                res.json({msg:"Medicine List",status:200, data: data})//http status caode
            }
    })
}

//Delete
module.exports.deleteMedicines = function (req, res) {
    let medicineId = req.params.medicineId

    MedicineModel.deleteOne({ "_id": medicineId }, function (err, data) {
        if (err) {
            res.json({ msg: "Something Wrong!!!", status: -1, data: err })
        } else {
            res.json({ msg: "Medicine Removed...", status: 200, data: data })
        }
    })

}
//Update
module.exports.updateMedicines = function(req,res){

    let medicineId = req.body.medicineId
    let medicineName =req.body.medicineName
    let basePrice = req.body.basePrice
    let content = req.body.content

    MedicineModel.updateOne({_id: medicineId},{medicineName : medicineName, basePrice: basePrice, content: content}, function (err,data){
        if(err){
            res.json({msg: "Soomething Wrong",status:-1, data:err})
        }else{
            res.json({msg: "Medicine Updated",status:200, data:data})
        }
    })
}