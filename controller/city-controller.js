const CityModel = require("../model/city-model")
const StateModel = require("../model/state-model")

//add
module.exports.addCity = function(req,res){

    let cityName = req.body.cityName
    let state = req.body.state

    let city = new CityModel({
        cityName: cityName,
        state: state
    })
    city.save(function (err,data){
        if (err) {
            res.json({msg:"Something Wrong", data: err, status:-1})
        }else {
            res.json({msg: "City Added",data:data, status:200})
        }
    })
}

//List
module.exports.getAllCities = function(req,res){

    CityModel.find().populate("state").exec(function (err, data){
        if (err) {
            res.json({msg:"Something Wrong", data: err, status:-1})
        }else {
            res.json({msg: "Cities...",data:data, status:200})
        }
    })
}

//Delete
module.exports.deleteCity = function(req,res){
    let cityId = req.params.cityId
    
    CityModel.deleteOne({"_id": cityId}, function(err,data){
        if (err) {
            res.json({msg:"Something Wrong", data: err, status:-1})
        }else {
            res.json({msg: "City Removed",data:data, status:200})
        }
    })
}

//Update
module.exports.updateCity = function (req, res) {

    let cityId = req.body.cityId
    let cityName = req.body.cityName

    CityModel.updateOne({ _id: cityId }, { cityName: cityName }, function (err, data) {
        if (err) {
            res.json({ msg: "Something Wrong!!!", status: -1, data: err })
        } else {
            res.json({ msg: "City Update", data: data, status: 200 })
        }
    })

}
