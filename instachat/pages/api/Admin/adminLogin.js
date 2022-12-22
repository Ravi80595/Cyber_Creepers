import connectMongo from "../../../Utils/ConnectDB"
import AdminModel from "../../../Backend/Modals/AdminModals"
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
            const admins = await AdminModel.find()
            res.status(200).json({success: true, data: admins })
          }
          catch(err){
            console.log(err)
          }
          break
          case 'POST':
            try{
                let admin = await AdminModel.find({email,password})
                if(admin.length>0){
                    const token = jwt.sign({"adminID":admin[0]._id},'ravi')
                    res.status(201).json({success: true, data: admin, tokens:token})
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
