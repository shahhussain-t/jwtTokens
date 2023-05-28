const jwt=require("jsonwebtoken")
const { verfiy } = require("../controller/userController")


const secretKey="sheraz"



const jwtAuthorzation={

    sign(payload){

        const token=jwt.sign(payload,secretKey)
        return token
    }
,
    verfiy(payload){

        const token=jwt.verify(payload,secretKey)
        return token
    }


}



module.exports=jwtAuthorzation