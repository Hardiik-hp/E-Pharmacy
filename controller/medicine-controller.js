const MedicineModel = require("../model/medicine-model");

//add
module.exports.addMedicines = function(req,res){
    //db insert

    let medicineName = req.body.medicineName

    let medicine = new MedicineModel({
        medicineName: medicineName
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
    MedicineModel.find(function (err,Medicine){
        if(err){
                res.json({msg:"Something Wrong",data:err,status:-1, data: err})//-1 {382 484}
            }else{
                res.json({msg:"Medicine List",status:200, data: Medicine})//http status caode
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

    MedicineModel.updateOne({_id: medicineId},{medicineName : medicineName}, function (err,data){
        if(err){
            res.json({msg: "Soomething Wrong",status:-1, data:err})
        }else{
            res.json({msg: "Medicine Updated",status:200, data:data})
        }
    })
}