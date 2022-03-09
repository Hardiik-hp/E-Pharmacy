//const { json } = require("express/lib/response")
const RoleModel = require("../model/role-model")

//Add
module.exports.addRoles = function (req,res) {
    //database insert role
    //console.log(req.body.roleName);

    let role = new RoleModel({
        roleName: req.body.roleName
    })

    role.save(function(err,success){
        if (err){
            console.log(err);
            //send mail to developer(err);
            res.json({msg:"somethong wrong",status:-1,data:req.body})
            
        }else{
            res.json({msg:"role added",status:200,data:success})
        }
    })
}

//List
module.exports.getAllRoles = function(req,res){
    //role -> db --> select * from roles 
    //model 
    //REST 
    RoleModel.find(function(err,success){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"roles...",status:200,data:success})

        }
    })
}

//Delete 
module.exports.deleteRoles = function(req,res){
    let roleId = req.params.roleId
    //delete from role where roleId = 1 
    RoleModel.deleteOne({"_id":roleId},function(err,success){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"removed...",status:200,data:success})
        }
    })
}
//roleName 


//Update
module.exports.updateRoles = function(req,res){

    //update role set roleName = admin where roleId = 12121 
    let roleId = req.body.roleId 
    let roleName = req.body.roleName 

    RoleModel.updateOne({_id: roleId}, {roleName: roleName},function(err, data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"updated...",status:200,data:data})
        }
    })

}