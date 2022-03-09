const BrandModel = require("../model/brand-model")

//Add
module.exports.addBrand = function (req,res) {
    //database insert brand
    console.log(req.body.brandName);

    let brand = new BrandModel({
        brandName:req.body.brandName
    })

    brand.save(function(err,success){
        if (err){
            console.log(err);
            //send mail to developer(err);
            res.json({msg:"somethong wrong",status:-1,data:req.body})
            
        }else{
            res.json({msg:"brand added",status:200,data:success})
        }
    })
}

//List
module.exports.getAllBrands = function(req,res){
    //brand -> db --> select * from brands 
    //model 
    //REST 
    BrandModel.find(function(err,brands){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"Brands...",status:200,data:brands})

        }
    })
}
//Delete 
module.exports.deleteBrand = function(req,res){
    let brandId = req.params.brandId
    //delete from brand where brandId = 1 
    BrandModel.deleteOne({"_id":brandId},function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"removed...",status:200,data:data})
        }
    })
}
//brandName 


//Update
module.exports.updateBrand = function(req,res){

    //update brand set brandName = admin where brandId = 12121 
    let brandId = req.body.brandId 
    let brandName = req.body.brandName 

    BrandModel.updateOne({_id: brandId},{brandName : brandName},function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"updated...",status:200,data:data})
        }
    })

}