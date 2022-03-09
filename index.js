const express = require("express")
const mongoose = require("mongoose")


const sessionController = require("./controller/session-controller")
const roleController = require("./controller/role-controller")
const userController = require("./controller/user-controller")
const categoryController = require("./controller/category-controller")
const subcategoryController = require("./controller/subcategory-controller")
const patient_addressController = require("./controller/patient_address-controller")
const medical_storeController = require("./controller/medical_store-controller")
const stateController = require("./controller/state-controller")
const cityController = require("./controller/city-controller")
const brandController = require("./controller/brand-controller")
//const pharmacistController = require("./controller/pharmacist-controller")
const medicineController = require("./controller/medicine-controller")


const app = express()
const port = 3000; //Port
//middle ware
app.use(express.json())
app.use(express.urlencoded({extended:true}))


//database
mongoose.connect('mongodb://localhost:27017/epharma',function(err){
    if(err){
        console.log("db connection fail.....");
        console.log(err);
    }else{
        console.log("db Connected.....");
    }
})


//urls

app.get("/",function(req,res){

    res.write("Welcome...")
    res.end()
})

app.get("/login",sessionController.login)
app.get("/signup",sessionController.signup)
app.post("/saveuser",sessionController.saveuser)

//role
app.post("/roles",roleController.addRoles)
app.get("/roles",roleController.getAllRoles)
app.delete("/roles/:roleId",roleController.deleteRoles)
app.put("roles",roleController.updateRoles)

//user
app.post("/users",userController.addUser)
app.get("/users",userController.getAllUsers)
app.delete("/users/:userId",userController.deleteUser)
app.put("/users",userController.updateUser)
//app.post("/login",userController.login)

//Category
app.post("/categories",categoryController.addCategories)
app.get("/categories",categoryController.getAllCategories)
app.delete("/categories/:categoryId",categoryController.deleteCategory)
app.put("/categories",categoryController.updateCategory)

//Subcategory
app.post("/subcategories",subcategoryController.addSubcategory)
app.get("/subcategories",subcategoryController.getAllSubcategories)
app.delete("/subcategories/:subcategoryId",subcategoryController.deleteSubcategory)
app.put("/subcategories",subcategoryController.updateSubcategory)

//patient_address
app.post("/patientaddress",patient_addressController.addpatientAddress)
app.get("/patientaddress",patient_addressController.getAllpatientAddress)
app.delete("/patientaddress/:patientaddressId",patient_addressController.deletepatientAddress)
app.put("/patientaddress",patient_addressController.updatepatientAddress)

//medical_store
app.post("/medicalstores",medical_storeController.addmedicalStore)
app.get("/medicalstores",medical_storeController.getAllmedicalStore)
app.delete("/medicalstores/:medicalstoreId",medical_storeController.deleteMedicalStore)
app.put("/medicalstores",medical_storeController.updateMedicalStore)

//State
app.post("/states",stateController.addState)
app.get("/states",stateController.getAllStates)
app.delete("/states/:stateId",stateController.deleteState)
app.put("/states",stateController.updateState)

//City
app.post("/cities",cityController.addCity)
app.get("/cities",cityController.getAllCities)
app.delete("/cities/:cityId",cityController.deleteCity)
app.put("/cities",cityController.updateCity)

//Brand
app.post("/brands",brandController.addBrand)
app.get("/brands",brandController.getAllBrands)
app.delete("/brands/:brandId",brandController.deleteBrand)
app.put("/brands",brandController.updateBrand)

//Pharmacist
/*app.post("/pharmacists",pharmacistController.addPharmacist)
app.get("/pharmacists",pharmacistController.getAllPharmacist)
app.delete("/pharmacists/:pharmacistId",pharmacistController.deletePharmacist)
app.put("/pharmacists",pharmacistController.updatePharmacist)*/

//Medicine
app.post("/medicines",medicineController.addMedicines)
app.get("/medicines",medicineController.getAllMedicines)
app.delete("/medicines/:medicineId",medicineController.deleteMedicines)
app.put("/medicines",medicineController.updateMedicines)

//Server
app.listen(port, () => {
    console.log(`server started in http://localhost:${port}`);
})

/*app.listen(3000,function(){
    console.log("Server started on 3000")

})*/