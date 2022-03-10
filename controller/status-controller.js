//const { status } = require("express/lib/response");
const StatusModel = require("../model/status-model")

//add
module.exports.addStatus = function (req, res) {
    console.log(req.body.status);

    let status = new StatusModel({
        status: req.body.status
    })
    status.save(function (err, success) {
        if (err) {
            res.json({ msg: "Something went wrong!!!", status: -1, data: req.body })
        }
        else {
            res.json({ msg: "Status added", status: 200, data: success })

        }
    })
}

//List
module.exports.getAllStatuses = function (req, res) {
    StatusModel.find(function (err, Statuses) {
        if (err) {
            res.json({ msg: "Something went wrong!!!", status: -1, data: err })
        } else {
            res.json({ msg: "Statuses...", status: 200, data: Statuses })
        }
    })
}

//Delete
module.exports.deleteStatus = function (req, res) {
    let statusId = req.params.statusId

    StatusModel.deleteOne({ "_id": statusId }, function (err, data) {
        if (err) {
            res.json({ msg: "Something Wrong", status: -1, data: err })
        } else {
            res.json({ msg: "Status Delete...", status: 200, data: data })
        }
    })
}

//Update
module.exports.updateStatus = function (req, res) {

    let statusId = req.body.statusId
    let status = req.body.status

    StatusModel.updateOne({ _id: statusId }, { status: status }, function (err, data) {
        if (err) {
            res.json({ msg: "Something went wrong!!!", status: -1, data: err })
        } else {
            res.json({ msg: "Status Update...", status: 200, data: data })
        }
    })
}