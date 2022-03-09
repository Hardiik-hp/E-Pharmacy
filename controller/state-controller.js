const StateModel = require("../model/state-model")

//add
module.exports.addState = function (req, res) {
    console.log(req.body.stateName);

    let state = new StateModel({
        stateName: req.body.stateName
    })
    state.save(function (err, success) {
        if (err) {
            res.json({ msg: "Something went wrong!!!", status: -1, data: req.body })
        }
        else {
            res.json({ msg: "State added", status: 200, data: success })

        }
    })
}

//List
module.exports.getAllStates = function (req, res) {
    StateModel.find(function (err, States) {
        if (err) {
            res.json({ msg: "Something went wrong!!!", status: -1, data: err })
        } else {
            res.json({ msg: "States...", status: 200, data: States })
        }
    })
}

//Delete
module.exports.deleteState = function (req, res) {
    let stateId = req.params.stateId

    StateModel.deleteOne({ "_id": stateId }, function (err, data) {
        if (err) {
            res.json({ msg: "Something Wrong", status: -1, data: err })
        } else {
            res.json({ msg: "State Delete...", status: 200, data: data })
        }
    })
}

//Update
module.exports.updateState = function (req, res) {

    let stateId = req.body.stateId
    let stateName = req.body.stateName

    StateModel.updateOne({ _id: stateId }, { stateName: stateName }, function (err, data) {
        if (err) {
            res.json({ msg: "Something went wrong!!!", status: -1, data: err })
        } else {
            res.json({ msg: "State Update...", status: 200, data: data })
        }
    })
}