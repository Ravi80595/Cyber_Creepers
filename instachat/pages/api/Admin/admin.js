import connectMongo from "../../../Utils/ConnectDB"
import AdminModel from "../../../Backend/Modals/AdminModals"
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
    const {email,password,firstname,lastname,avtar}= req.body
      console.log(req.body)
      switch(method){
        case 'GET':
          try{
            const admins = await UserModel.find()
            res.status(200).json({success: true, data: admins })
          }
          catch(err){
            console.log(err)
          }
          break
          case 'POST':
            try{
                let existingUser = await AdminModel.findOne({email})
            if(existingUser){
                res.status(404).send({"msg":"Admin already exists Please Login"})
            }else{
              const admin = new AdminModel({email,password,firstname,lastname})
              await admin.save()
              res.status(201).json({success: true, data: admin})
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
