const express=require('express')
const router=express.Router()

const {createUser,login,verfiy}=require("../controller/userController")





router.post("/createUser",createUser)
router.post("/login",login)
router.post("/verfiy",verfiy)

module.exports=router