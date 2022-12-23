import connectMongo from "../../../Utils/ConnectDB"
import AdminModel from "../../../Backend/Modals/AdminModals"
import UserModel from "../../../Backend/Modals/UserModel"

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
            const admins = await AdminModel.find({})
            res.status(200).json({success: true, data: admins })
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
