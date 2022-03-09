const mongoose = require("mongoose")


//schema

const RoleSchema = new mongoose.Schema({
    roleName:{
        type:String
    }
})

//model

const RoleModel = mongoose.model("role",RoleSchema)

module.exports = RoleModel