import connectMongo from "../../Utils/ConnectDB"
import  AdminModel  from "../../Backend/Modals/AdminModals"

/**
 * @param {import('next').NextApiRequest} req 
 * @param {import('next').NextApiResponse} res 
*/

export default async function addText(req, res) {
  const {method} = req.body
  await connectMongo()
  console.log("Connected to Database")

  switch(method){
    case 'GET':
      try{
        const admins = await AdminModel.find({})
        res.status(200).json({success: true, data: users })
      }
      catch(err){
        console.log(err)
      }
      break
      case 'POST':
        try{
          const admin = await AdminModel.create(req.body)
          res.status(201).json({success: true, data: user})
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


