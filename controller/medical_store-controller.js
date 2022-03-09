const MedicalStoreModel = require("../model/medical_store-model")
//const 

//add
module.exports.addmedicalStore = function(req,res){

    let storeName = req.body.storeName
    let storeAddress = req.body.storeAddress

    let medicalStore = new MedicalStoreModel({
        storeName: storeName,
        storeAddress: storeAddress
    }) 

    medicalStore.save(function(err,data){
        if(err){
            res.json({msg:"Something Wrong", data: err, status: -1})
        }else{
            res.json({msg:"Mwdical Store  Added",data: data, status: 200})
        }
    })
}

//list
module.exports.getAllmedicalStore = function(req,res){
    MedicalStoreModel.find().populate("state").exec(function (err, data) {
        if (err) {
            res.json({ msg: "Something Wrong", data: err, status: -1 })
        }
        else {
            res.json({ msg: "Medical Store... ", data: data, status: 200 })
        }
    })
}

//delete
module.exports.deleteMedicalStore = function (req,res){
    let medicalStoreId = req.params.medicalStoreId

    MedicalStoreModel.deleteOne({"_id": medicalStoreId}, function (err,success){
        if (err) {
            res.json({ msg: "Something Wrong!!!", status: -1, data: err })
        } else {
            res.json({ msg: "Medical Store Removed...", status: 200, data: success })
        } 
    })
}

//update
module.exports.updateMedicalStore = function (req, res) {

    let medicalStoreId = req.body.medicalStoreId
    let storeName = req.body.storeName
    let storeAddress = req.body.storeAddress


    MedicalStoreModel.updateOne({ _id: medicalStoreId }, { storeName: storeName, storeAddress: storeAddress }, function (err, data) {
        if (err) {
            res.json({ msg: "Something Wrong!!!", status: -1, data: err })
        } else {
            res.json({ msg: "Medical Store Update...", status: 200, data: data })
        }
    })

}