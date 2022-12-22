import connectMongo from "../../../Utils/ConnectDB"
import UserModel from "../../../Backend/Modals/UserModel"
import jwt from 'jsonwebtoken'

/**
 * @param {import('next').NextApiRequest} req 
 * @param {import('next').NextApiResponse} res 
 */

export default async function addText(req, res) {
    const {method} = req
    await connectMongo()
    console.log("Connected to Database")
    const {email,password}= req.body

      switch(method){
        case 'GET':
          try{
            const users = await UserModel.find()
            res.status(200).json({success: true, data: users })
          }
          catch(err){
            console.log(err)
          }
          break
          case 'POST':
            try{
                let user = await UserModel.find({email,password})
                let userdata =  await UserModel.find({email})
                if(user.length>0){
                    const token = jwt.sign({"userID":user[0]._id},'ravi')
                    res.status(201).json({success: true, tokens:token , userdata})
                }
        }
            catch(err){
              console.log(err)
            }
            break
            default:
          res.status(400).json({ success: false })
          break
      }
}
