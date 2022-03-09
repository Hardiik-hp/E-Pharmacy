const PharmacistModel = require('../model/pharmacist-model');

//add
module.exports.addPharmacist = function (req, res) {
    
    let pharmacistName = req.body.pharmacistName;//name
    let address = req.body.address
    let state = state
    let city = city
    let patient = patient
    let pincode = req.body.pincode
    let feedbackEmail = req.body.feedbackEmail
    let customerSupport = req.body.customerSupport
    let contectNum = req.body.contectNum
    let role = role 

    let pharmacist = new PharmacistModel({
        pharmacistName: pharmacistName,//name
        address: address,
        state: state,
        city: city,
        patient:patient,
        pincode: pincode,
        feedbackEmail: feedbackEmail,
        customerSupport: customerSupport,
        contectNum: contectNum,
        role: role
    })

    pharmacist.save(function (err, data) {
        if (err) {
            res.json({ msg: "Something Wrong", data: err, status: -1 })
        }
        else {
            res.json({ msg: " Pharmacist Added ", data: data, status: 200 })
        }
    })

}

//list
module.exports.getAllPharmacist = function (req, res) {
    PharmacistModel.find().populate("patient").populate("state").populate("city").exec(function (err, data) {
        if (err) {
            res.json({ msg: "Something Wrong", data: err, status: -1 })
        }
        else {
            res.json({ msg: "Pharmacist List... ", data: data, status: 200 })
        }
    })
}

//delete
module.exports.deletePharmacist = function (req, res) {
    let pharmacistId = req.params.pharmacistId;

    PharmacistModel.deleteOne({ "_id": pharmacistId }, function (err, data) {
        if (err) {
            res.json({ msg: "Something Wrong", data: err, status: -1 })
        }
        else {
            res.json({ msg: "Pharmacist delete", data: data, status: 200 })
        }
    })

}

//update
module.exports.updatePharmacist = function (req, res) {
    let pharmacistId = req.body.pharmacistId
    let pharmacistName = req.body.pharmacistName;//name
    let address = req.body.address;
    let state = req.body.state;
    let city = req.body.city;
    //let patient = req.body.patient;
    let pincode = req.body.pincode
    let feedbackEmail = req.body.feedbackEmail
    let contectNum = req.body.contectNum  
    let role = req.body.role;
                                //name

    PharmacistModel.updateOne({ _id: pharmacistId }, { pharmacistName: pharmacistName, address: address, state: state, city: city, /*patient: patient,*/ pincode: pincode, feedbackEmail: feedbackEmail, contectNum: contectNum, role: role  }, function (err, data) {
        if (err) {
            res.json({ msg: "Something Wrong", data: err, status: -1 })
        }
        else {
            res.json({ msg: "Pharmacist Update ", data: data, status: 200 })
        }
    })
}