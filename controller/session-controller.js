const { response } = require("express")
const fs = require("fs")

function login(req,res) {
    let loginHtml = fs.readFileSync("./views/login.html")
    res.write(loginHtml)
    res.end()
}

function signup(req,res) {
    let signupHtml = fs.readFileSync("./views/signup.html")
    res.write(signupHtml)
    res.end()
}

function saveuser(req,res){

    console.log(req.body)

    res.json({
        mgs:"done...",
        status:200,
        data:req.body

    })
}

module.exports.login = login
module.exports.signup = signup
module.exports.saveuser = saveuser

