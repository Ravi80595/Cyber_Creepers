import {jwt} from 'jsonwebtoken'
import mongoose from "mongoose"
import UserModel from "../Modals/UserModel"


const UserAuthhenticate=(req,res,next)=>{
    const {authorization} = req.headers
    if(!authorization){
       return res.status(401).json({error:"you must be logged in"})
    }
    const token = authorization.replace("Bearer ","")
    jwt.verify(token,'ravi',(err,payload)=>{
        if(err){
         return   res.status(401).json({error:"you must be logged in"})
        }

        const {_id} = payload
        UserModel.findById(_id).then(userdata=>{
            req.user = userdata
            next()
        })
        
        
    })
}

export default UserAuthhenticate