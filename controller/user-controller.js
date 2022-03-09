const UserModel = require("../model/user-model")


//add
module.exports.addUser = function(req,res){
    let firstName = req.body.firstName
    let email = req.body.email
    let password = req.body.password
    let role = req.body.role

    let user = new UserModel({
        firstName : firstName,
        email : email,
        password : password,
        role : role 
    })

    user.save(function(err,data){
        if(err){
            res.json({msg:"Something Wrong",data:err,status:-1})//-1 {382 484}
        }else{
            res.json({msg:"Signup Done",data:data,status:200})//http status caode
        }
    })
}
//list

module.exports.getAllUsers = function(req,res){

    UserModel.find().populate("role").exec(function(err,data){
        if(err){
            res.json({msg:"Something Wrong",data:err,status:-1})//-1 {382 484}
        }else{
            res.json({msg:"user ret.....",data:data,status:200})//http status caode
        }
    })
}

//delete

module.exports.deleteUser = function(req,res){
    //params userid 
    let userId = req.params.userId //postman -> userid 

    UserModel.deleteOne({_id:userId},function (err, data) {
        if (err) {
            res.json({ msg: "Something Wrong", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "user removed...", data: data, status: 200 })//http status code 
        }
    })
}

//update

module.exports.updateUser  = function(req,res){
    let paramuserId = req.body.userId 
    let paramemail = req.body.email 
    let parampassword = req.body.password 

    UserModel.updateOne({_id:paramuserId},{email:paramemail,password:parampassword},function(err,data){
        if (err) {
            res.json({ msg: "Something Wrong", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "user modified...", data: data, status: 200 })//http status code 
        }
    })

}

//login