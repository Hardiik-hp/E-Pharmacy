const patientAddressModel = require('../model/patient_address-model');

//add
module.exports.addpatientAddress = function (req, res) {
    
    let patient = req.body.patient;//name
    let address = req.body.address
    let state = req.body.state
    let city = req.body.city
    let pincode = req.body.pincode

    let patientAddress = new patientAddressModel({
        patient: patient,//name 
        address: address,
        state: state,
        city: city,
        pincode: pincode
    })

    patientAddress.save(function (err, data) {
        if (err) {
            res.json({ msg: "Something Wrong", data: err, status: -1 })
        }
        else {
            res.json({ msg: " Patient Address Save ", data: data, status: 200 })
        }
    })

}

//list
module.exports.getAllpatientAddress = function (req, res) {
    patientAddressModel.find().populate("patient").populate("state").populate("city").exec(function (err, data) {
        if (err) {
            res.json({ msg: "Something Wrong", data: err, status: -1 })
        }
        else {
            res.json({ msg: "Address ret... ", data: data, status: 200 })
        }
    })
}

//delete
module.exports.deletepatientAddress = function (req, res) {
    let patientAddressId = req.params.patientAddressId;

    patientAddressModel.deleteOne({ "_id": patientAddressId }, function (err, data) {
        if (err) {
            res.json({ msg: "Something Wrong", data: err, status: -1 })
        }
        else {
            res.json({ msg: "Address delete", data: data, status: 200 })
        }
    })

}

//update
module.exports.updatepatientAddress = function (req, res) {
    let patientAddressId = req.body.patientAddressId
    let patient = req.body.patient;//name
    let address = req.body.address;
    let state = req.body.state
    let city = req.body.city
    let pincode = req.body.pincode                              //name

    patientAddressModel.updateOne({ _id: patientAddressId }, { patient: patient, address: address, state: state, city: city, pincode: pincode }, function (err, data) {
        if (err) {
            res.json({ msg: "Something Wrong", data: err, status: -1 })
        }
        else {
            res.json({ msg: "Address Update ", data: data, status: 200 })
        }
    })
}