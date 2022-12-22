import connectMongo from "../../../Utils/ConnectDB"
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
                let existingUser = await UserModel.findOne({email})
            if(existingUser){
                res.status(404).send({"msg":"Admin already exists Please Login"})
            }else{
              const admin = await UserModel.create(req.body)
              res.status(201).json({success: true, data:"User created"})
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
