const pharmacistProductModel = require("../model/pharmacist_product-model");

//add
module.exports.addpharmacistProducts = function(req,res){
    //db insert

    let medicineId = req.body.medicineId
    //let stkAddress = req.body.stkAddress
    let quentity = req.body.quentity
    let price = req.body.price

    let pharmacistProduct = new pharmacistProductModel({
        medicineId: medicineId,
        //stkAddress: stkAddress,
        quentity: quentity,
        price: price
    })


    pharmacistProduct.save(function (err,success){
        if (err) {
            //console.log(err)
            res.json({msg:"Something Wrong",data:err,status:-1, data: req.body})//-1 {382 484}
        }else{
            res.json({msg:"Pharmacist Product Added",status:200, data: success})//http status caode
        }
    })

}

//List
module.exports.getAllpharmacistProducts = function(req,res){
    //rest
    pharmacistProductModel.find().populate("medicineId")/*.populate("stkAddress")*/.exec(function (err, data) {
        if(err){
                res.json({msg:"Something Wrong",data:err,status:-1, data: err})//-1 {382 484}
            }else{
                res.json({msg:"Pharmacist Product List",status:200, data: data})//http status caode
            }
    })
}

//Delete
module.exports.deletepharmacistProduct = function (req, res) {
    let pharmacistProductId = req.params.pharmacistProductId

    pharmacistProductModel.deleteOne({ "_id": pharmacistProductId }, function (err, data) {
        if (err) {
            res.json({ msg: "Something Wrong!!!", status: -1, data: err })
        } else {
            res.json({ msg: "Pharmacist Product Removed...", status: 200, data: data })
        }
    })

}
//Update
module.exports.updatepharmacistProduct = function(req,res){

    let pharmacistProductId = req.body.pharmacistProductId
    let quentity =req.body.quentity
    let price = req.body.price

    pharmacistProductModel.updateOne({_id: pharmacistProductId},{quentity: quentity, price: price}, function (err,data){
        if(err){
            res.json({msg: "Soomething Wrong",status:-1, data:err})
        }else{
            res.json({msg: "Pharmacist Product Updated",status:200, data:data})
        }
    })
}